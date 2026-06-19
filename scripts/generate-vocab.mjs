#!/usr/bin/env node
// Generates src/data/b2.json, c1.json, c2.json — up to 1000 words per CEFR level.
//
// Data sources (all public, no API key):
//  - CEFR word lists: openlanguageprofiles/olp-en-cefrj (B2 + Octanove C1/C2)
//  - Phonetics / definitions / examples: Free Dictionary API (dictionaryapi.dev)
//  - Chinese (zh-TW) translation: Google gtx endpoint, MyMemory fallback
//
// Results are cached in scripts/.vocab-cache.json, so the script is fully
// resumable — re-run it if it gets rate-limited and it will reuse everything it
// already fetched. Transient errors (429 / timeouts) are NOT cached, so they are
// retried on the next run; only genuine "no definition" misses are remembered.
//
// Usage:  node scripts/generate-vocab.mjs
//         TARGET=1000 CONCURRENCY=2 node scripts/generate-vocab.mjs

import https from 'node:https'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, '..', 'src', 'data')
const CACHE_FILE = path.join(__dirname, '.vocab-cache.json')

const TARGET = parseInt(process.env.TARGET || '1000', 10)
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '2', 10)

const SOURCES = {
  B2: { url: 'https://raw.githubusercontent.com/openlanguageprofiles/olp-en-cefrj/master/cefrj-vocabulary-profile-1.5.csv', level: 'B2' },
  C1: { url: 'https://raw.githubusercontent.com/openlanguageprofiles/olp-en-cefrj/master/octanove-vocabulary-profile-c1c2-1.0.csv', level: 'C1' },
  C2: { url: 'https://raw.githubusercontent.com/openlanguageprofiles/olp-en-cefrj/master/octanove-vocabulary-profile-c1c2-1.0.csv', level: 'C2' }
}

// Slurs / offensive terms that must never appear in a learning app, even if they
// show up in the frequency backfill or word lists.
const BLOCKLIST = new Set([
  'gook', 'cripple', 'gypsy', 'chink', 'spic', 'wop', 'kike', 'nigger', 'nigga',
  'negro', 'retard', 'retarded', 'faggot', 'fag', 'dyke', 'tranny', 'slut',
  'whore', 'bitch', 'bastard', 'cunt', 'twat', 'wank', 'wanker', 'raghead',
  'gimp', 'queer', 'jap', 'paki', 'gyp', 'redskin', 'spaz', 'spastic', 'midget',
  'coolie', 'mongol', 'raunchy'
])
const allowed = (w) => !BLOCKLIST.has(w.toLowerCase())

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const backoff = (attempt) => sleep(600 * 2 ** attempt + Math.random() * 400)

// ---------- HTTPS GET → { status, body } (Node 16 has no global fetch) ----------
function get(url, { headers = {}, timeout = 12000 } = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', ...headers } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume()
        return resolve(get(res.headers.location, { headers, timeout }))
      }
      let data = ''
      res.on('data', (c) => (data += c))
      res.on('end', () => resolve({ status: res.statusCode, body: data }))
    })
    req.on('error', reject)
    req.setTimeout(timeout, () => req.destroy(new Error('timeout')))
  })
}

// ---------- cache ----------
let cache = {}
if (fs.existsSync(CACHE_FILE)) {
  try { cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) } catch { cache = {} }
}
let dirty = 0
function saveCache(force) {
  if (force || ++dirty % 25 === 0) fs.writeFileSync(CACHE_FILE, JSON.stringify(cache))
}

// ---------- translation (with retry; never poisons on failure) ----------
async function translateOnce(text) {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(text)}`
    const { status, body } = await get(url)
    if (status === 200) {
      const data = JSON.parse(body)
      const zh = (data[0] || []).map((seg) => seg[0]).join('')
      if (zh) return zh.trim()
    }
  } catch { /* try fallback */ }
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-TW`
    const { status, body } = await get(url)
    if (status === 200) return (JSON.parse(body).responseData?.translatedText || '').trim()
  } catch { /* give up */ }
  return null
}

async function translate(text) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const zh = await translateOnce(text)
    if (zh) return zh
    await backoff(attempt)
  }
  return '' // non-fatal: keep the entry with an empty translation
}

// ---------- dictionary lookup → { data } | { miss } | { transient } ----------
async function dictLookup(word) {
  for (let attempt = 0; attempt < 4; attempt++) {
    let res
    try {
      res = await get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
    } catch {
      await backoff(attempt)
      continue
    }
    if (res.status === 200) {
      try {
        const arr = JSON.parse(res.body)
        return Array.isArray(arr) ? { data: arr } : { miss: true }
      } catch {
        return { miss: true }
      }
    }
    if (res.status === 404) return { miss: true } // genuine "no definition"
    if (res.status === 429 || res.status >= 500) { await backoff(attempt); continue }
    return { miss: true }
  }
  return { transient: true } // rate-limited / unreachable — retry on next run
}

const FALLBACK_RE = /^The word ".*" is commonly used in formal English\.$/

// Score a candidate example sentence: prefer a natural length, real punctuation.
function exScore(t) {
  const len = t.length
  let s = 0
  if (len >= 25 && len <= 140) s += 10
  if (/[.!?]["']?$/.test(t)) s += 3
  if (/^[A-Z]/.test(t)) s += 2
  s -= Math.abs(65 - len) / 25
  return s
}

// Pull a real example sentence containing the word from the Tatoeba corpus.
async function tatoebaExample(word) {
  try {
    const url = `https://tatoeba.org/en/api_v0/search?from=eng&query=${encodeURIComponent(word)}&sort=relevance&limit=12`
    const { status, body } = await get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (status !== 200) return ''
    const j = JSON.parse(body)
    const texts = (j.results || []).map((r) => r.text).filter(Boolean)
    const esc = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Require the exact headword (whole-word match) so the example genuinely
    // illustrates the word, not just a related form.
    const cands = texts.filter((t) => new RegExp(`\\b${esc}\\b`, 'i').test(t))
    if (!cands.length) return ''
    cands.sort((a, b) => exScore(b) - exScore(a))
    return cands[0]
  } catch {
    return ''
  }
}

function pickFromDict(dict, csvPos) {
  let phonetic = dict.phonetic || ''
  if (!phonetic && Array.isArray(dict.phonetics)) {
    const p = dict.phonetics.find((x) => x.text)
    if (p) phonetic = p.text
  }
  const meanings = dict.meanings || []
  const meaning = meanings.find((m) => m.partOfSpeech === csvPos) || meanings[0]
  if (!meaning) return null
  const def = (meaning.definitions || [])[0]
  if (!def) return null
  // Look for an example in the chosen meaning first, then anywhere in the entry.
  let example = (meaning.definitions.find((d) => d.example) || {}).example || ''
  if (!example) {
    for (const m of meanings) {
      const d = (m.definitions || []).find((x) => x.example)
      if (d) { example = d.example; break }
    }
  }
  return { phonetic, pos: meaning.partOfSpeech || csvPos, definition: def.definition, example }
}

async function enrich(word, csvPos) {
  const cached = cache[word]
  if (cached && !cached.transient) return cached // reuse success or genuine miss

  const look = await dictLookup(word)
  if (look.transient) return { transient: true } // do NOT cache
  if (look.miss) { cache[word] = { miss: true }; saveCache(); return cache[word] }

  const picked = pickFromDict(look.data[0], csvPos)
  if (!picked || !picked.definition) { cache[word] = { miss: true }; saveCache(); return cache[word] }

  // Require a real example that actually contains the headword: dictionary →
  // Tatoeba corpus. If neither has one, reject the word (cache as a miss) so the
  // level fills from a candidate that does — no templates, no mismatched examples.
  const wordRe = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
  let example = picked.example && wordRe.test(picked.example) ? picked.example : ''
  if (!example) example = await tatoebaExample(word)
  if (!example) { cache[word] = { miss: true }; saveCache(); return cache[word] }
  const [zh, exampleZh] = await Promise.all([translate(word), translate(example)])
  cache[word] = { word, phonetic: picked.phonetic || '', pos: picked.pos, definition: picked.definition, zh, example, exampleZh }
  saveCache()
  return cache[word]
}

// ---------- async pool ----------
async function pool(items, n, fn, onTick) {
  let i = 0
  let done = 0
  async function worker() {
    while (i < items.length) {
      const idx = i++
      await fn(items[idx], idx)
      onTick && onTick(++done, items.length)
    }
  }
  await Promise.all(Array.from({ length: n }, worker))
}

function parseCandidates(csv, level) {
  const lines = csv.split(/\r?\n/).slice(1)
  const seen = new Set()
  const out = []
  for (const line of lines) {
    if (!line) continue
    const [headword, pos, cefr] = line.split(',')
    if (cefr !== level) continue
    const w = (headword || '').trim().toLowerCase()
    if (!/^[a-z][a-z'-]*$/.test(w)) continue
    if (!allowed(w)) continue
    if (seen.has(w)) continue
    seen.add(w)
    out.push({ word: w, pos: (pos || '').trim() })
  }
  return out
}

// Words already used by an earlier level, so levels don't share entries.
const used = new Set()

async function buildLevel(key, backfill = []) {
  const { url, level } = SOURCES[key]
  process.stdout.write(`\n[${level}] downloading word list…\n`)
  const { body } = await get(url)
  const cefr = parseCandidates(body, level).filter((c) => !used.has(c.word))
  // The CEFR C1/C2 lists are smaller than 1000, so top up with advanced words
  // from the frequency-based backfill pool (deduped against everything used).
  const have = new Set(cefr.map((c) => c.word))
  const extra = backfill.filter((w) => !used.has(w) && !have.has(w)).map((w) => ({ word: w, pos: '' }))
  // Use the whole candidate pool: words without a real example are rejected, so
  // we keep pulling from the next candidate until TARGET entries are collected.
  const slice = cefr.concat(extra)
  process.stdout.write(`[${level}] ${cefr.length} CEFR + ${extra.length} backfill candidates available (target ${TARGET})…\n`)

  const entries = []
  let transient = 0
  await pool(slice, CONCURRENCY, async (c) => {
    if (entries.length >= TARGET) return
    const data = await enrich(c.word, c.pos)
    if (data && data.transient) transient++
    else if (data && !data.miss) entries.push({ ...data })
  }, (done, total) => {
    if (done % 25 === 0 || done === total) {
      process.stdout.write(`\r[${level}] ${done}/${total} processed · ${entries.length}/${TARGET} collected · ${transient} retryable   `)
    }
  })

  const final = entries.slice(0, TARGET).map((e, i) => ({ id: `${level}-${i + 1}`, level, ...e }))
  final.forEach((e) => used.add(e.word))
  const outFile = path.join(DATA_DIR, `${level.toLowerCase()}.json`)
  fs.writeFileSync(outFile, JSON.stringify(final, null, 2))
  saveCache(true)
  process.stdout.write(`\n[${level}] wrote ${final.length} entries${transient ? ` (${transient} retryable — re-run to fill)` : ''} → ${path.relative(process.cwd(), outFile)}\n`)
}

// Fix entries already in the cache whose example is the fallback template
// (or empty), by fetching a real sentence from Tatoeba and re-translating it.
async function repairExamples() {
  const words = Object.keys(cache).filter((w) => {
    const v = cache[w]
    return v && !v.miss && (!v.example || FALLBACK_RE.test(v.example))
  })
  if (!words.length) return
  process.stdout.write(`\n[repair] ${words.length} fallback examples to fix via Tatoeba…\n`)
  let fixed = 0
  await pool(words, CONCURRENCY, async (w) => {
    const ex = await tatoebaExample(w)
    if (ex) {
      cache[w].example = ex
      cache[w].exampleZh = await translate(ex)
      fixed++
      saveCache()
    }
  }, (done, total) => {
    if (done % 25 === 0 || done === total) process.stdout.write(`\r[repair] ${done}/${total} · fixed ${fixed}   `)
  })
  saveCache(true)
  process.stdout.write(`\n[repair] fixed ${fixed} examples (rest had no Tatoeba match — kept template)\n`)
}

// Frequency-ranked advanced-word pool used to top up C1/C2 to 1000.
const BACKFILL_URL = 'https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/en/en_50k.txt'
// Is `w` an inflected form (plural / past / gerund / superlative) of a base word
// that is also in the list? Used to keep backfill headwords as base lemmas.
function isInflected(w, all) {
  const bases = []
  if (w.endsWith('ies')) bases.push(w.slice(0, -3) + 'y')
  if (w.endsWith('es')) bases.push(w.slice(0, -2))
  if (w.endsWith('s')) bases.push(w.slice(0, -1))
  if (w.endsWith('ied')) bases.push(w.slice(0, -3) + 'y')
  if (w.endsWith('ed')) { bases.push(w.slice(0, -2)); bases.push(w.slice(0, -1)) }
  if (w.endsWith('ing')) { bases.push(w.slice(0, -3)); bases.push(w.slice(0, -3) + 'e') }
  if (w.endsWith('est')) { bases.push(w.slice(0, -3)); bases.push(w.slice(0, -2)) }
  return bases.some((b) => b.length >= 3 && all.has(b))
}

async function loadBackfill() {
  try {
    const { body } = await get(BACKFILL_URL)
    const seen = new Set()
    const words = []
    for (const line of body.split(/\r?\n/)) {
      const w = (line.split(' ')[0] || '').toLowerCase()
      if (!/^[a-z]{5,15}$/.test(w) || seen.has(w) || !allowed(w)) continue
      seen.add(w)
      words.push(w)
    }
    // Drop inflected forms whose base lemma is also present (keeps "happy", not "happiest").
    return words.filter((w) => !isInflected(w, seen))
  } catch {
    return []
  }
}

;(async () => {
  await repairExamples()
  const freq = await loadBackfill()
  // C1 draws moderately advanced words; C2 draws rarer ones (used set prevents overlap).
  const backfill = { B2: [], C1: freq.slice(2500), C2: freq.slice(8000) }
  for (const key of ['B2', 'C1', 'C2']) {
    await buildLevel(key, backfill[key])
    await sleep(500)
  }
  saveCache(true)
  console.log('\n✅ Done. Restart the dev server to load the new vocabulary.')
})().catch((e) => {
  saveCache(true)
  console.error('\n❌ Error:', e.message, '\n(cache saved — re-run to resume)')
  process.exit(1)
})
