#!/usr/bin/env node
// Fetches an English transcript for a YouTube video and turns it into a
// sentence-by-sentence dictation exercise (src/data/dictation/<id>.json).
//
// Why yt-dlp?  YouTube has locked down its unauthenticated `timedtext` endpoint
// (it now needs a proof-of-origin token), so fetching captions directly from
// Node returns empty bodies. `yt-dlp` handles the current YouTube client
// handshake for us and reliably downloads both manual and auto-generated
// subtitles with timestamps.
//
// Requirements:  yt-dlp on PATH  (brew install yt-dlp)
//
// Usage:
//   node scripts/fetch-dictation.mjs <youtube-url-or-id> [--title "..."] [--zh "中文標題"]
//
// The page (src/pages/Dictation.jsx) auto-discovers every JSON in
// src/data/dictation/ via import.meta.glob, so there is no index to maintain.

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '..', 'src', 'data', 'dictation')

// ---------- args ----------
const args = process.argv.slice(2)
if (!args.length || args[0].startsWith('-')) {
  console.error('Usage: node scripts/fetch-dictation.mjs <youtube-url-or-id> [--title "..."] [--zh "..."]')
  process.exit(1)
}
const input = args[0]
const flag = (name) => {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : undefined
}
const titleOverride = flag('--title')
const zhTitle = flag('--zh') || ''

// Accept a bare id, a watch URL, a youtu.be link, etc.
function extractId(s) {
  const m = s.match(/(?:v=|\/shorts\/|youtu\.be\/|\/embed\/)([\w-]{11})/)
  if (m) return m[1]
  if (/^[\w-]{11}$/.test(s)) return s
  return null
}
const videoId = extractId(input)
if (!videoId) {
  console.error(`Could not parse a YouTube video id from: ${input}`)
  process.exit(1)
}
const url = `https://www.youtube.com/watch?v=${videoId}`

// ---------- helpers ----------
function run(cmd, cmdArgs, opts = {}) {
  return execFileSync(cmd, cmdArgs, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts })
}

function hasYtDlp() {
  try { run('yt-dlp', ['--version']); return true } catch { return false }
}

// "HH:MM:SS.mmm" | "MM:SS.mmm" -> seconds
function tsToSeconds(ts) {
  const parts = ts.trim().split(':').map(Number)
  let s = 0
  for (const p of parts) s = s * 60 + p
  return s
}

// ---------- VTT parsing ----------
// Returns [{ start, end, text }] of raw cues (tags stripped, non-speech dropped).
function parseVtt(vtt) {
  const cues = []
  const blocks = vtt.replace(/\r/g, '').split('\n\n')
  const timing = /(\d{1,2}:\d{2}:\d{2}[.,]\d{3}|\d{1,2}:\d{2}[.,]\d{3})\s*-->\s*(\d{1,2}:\d{2}:\d{2}[.,]\d{3}|\d{1,2}:\d{2}[.,]\d{3})/
  for (const block of blocks) {
    const lines = block.split('\n')
    const timed = lines.find((l) => timing.test(l))
    if (!timed) continue
    const m = timed.match(timing)
    const start = tsToSeconds(m[1].replace(',', '.'))
    const end = tsToSeconds(m[2].replace(',', '.'))
    let text = lines
      .slice(lines.indexOf(timed) + 1)
      .join(' ')
      .replace(/<[^>]+>/g, '')          // inline <c>/<00:00:..> tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/\s+/g, ' ')
      .trim()
    if (!text) continue
    // Drop non-speech cues that are entirely a bracketed sound/label.
    if (/^[\[(♪>][^A-Za-z]*[\])♪]?$/.test(text)) continue
    if (/^(\[[^\]]*\]|\([^)]*\)|♪[^♪]*♪|>>?)$/.test(text)) continue
    cues.push({ start, end, text })
  }
  return cues
}

// Auto-captions repeat rolling text across cues; drop cues whose text is a
// duplicate (or a prefix) of the previous cue's text.
function dedupeRolling(cues) {
  const out = []
  for (const c of cues) {
    const prev = out[out.length - 1]
    if (prev && (prev.text === c.text || c.text.startsWith(prev.text) || prev.text.endsWith(c.text))) {
      // extend previous cue's end time instead of adding a duplicate
      prev.end = Math.max(prev.end, c.end)
      if (c.text.length > prev.text.length) prev.text = c.text
      continue
    }
    out.push({ ...c })
  }
  return out
}

// Strip inline bracketed sounds like "(Laughter)" that sit inside a cue.
function cleanInline(text) {
  return text
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\((?:laughter|applause|music|cheering|cheers|sighs?)\)/gi, ' ')
    .replace(/♪/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim()
}

const MAX_WORDS = 18 // force a break if a run has no sentence-ending punctuation

// Merge phrase-sized cues into sentence-sized dictation segments.
function toSentences(cues) {
  const out = []
  let buf = null
  const wordCount = (s) => (s.match(/\S+/g) || []).length
  const endsSentence = (s) => /[.!?]["')\]]?$/.test(s.trim())

  for (const c of cues) {
    const text = cleanInline(c.text)
    if (!text) continue
    if (!buf) buf = { start: c.start, end: c.end, text }
    else {
      buf.text = `${buf.text} ${text}`.replace(/\s+/g, ' ').trim()
      buf.end = c.end
    }
    if (endsSentence(buf.text) || wordCount(buf.text) >= MAX_WORDS) {
      out.push(buf)
      buf = null
    }
  }
  if (buf) out.push(buf)

  // Drop fragments too short to be worth dictating (e.g. a stray "Yeah.").
  return out
    .map((s) => ({ start: +s.start.toFixed(2), end: +s.end.toFixed(2), text: s.text }))
    .filter((s) => wordCount(s.text) >= 2)
}

// ---------- main ----------
if (!hasYtDlp()) {
  console.error('yt-dlp is not installed. Install it with:  brew install yt-dlp')
  process.exit(1)
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dictation-'))
try {
  console.log(`→ Fetching metadata for ${videoId} …`)
  const meta = run('yt-dlp', [
    '--skip-download',
    '--no-warnings',
    '--print', '%(title)s\t%(uploader)s\t%(duration)s\t%(playable_in_embed)s',
    url
  ]).trim().split('\t')
  const [title, uploader, duration, embeddable] = meta

  // Videos with embedding disabled can't play in the app's iframe player.
  if (embeddable === 'False') {
    console.warn('⚠️  This video has embedding DISABLED — it will not play in the app. Skipping.')
    process.exit(3)
  }

  console.log('→ Downloading English subtitles …')
  // Manual (en) first, then common variants / original-language auto track.
  run('yt-dlp', [
    '--skip-download',
    '--no-warnings',
    '--write-subs',
    '--write-auto-subs',
    '--sub-langs', 'en,en-US,en-GB,en-orig',
    '--sub-format', 'vtt',
    '-o', path.join(tmp, '%(id)s.%(ext)s'),
    url
  ], { stdio: 'ignore' })

  const files = fs.readdirSync(tmp).filter((f) => f.endsWith('.vtt'))
  if (!files.length) {
    console.error('No English subtitles were available for this video.')
    process.exit(2)
  }
  // Prefer a manual track (shortest name, e.g. ….en.vtt) over a variant.
  const pick = files.sort((a, b) => a.length - b.length)[0]
  const vtt = fs.readFileSync(path.join(tmp, pick), 'utf8')

  const cues = dedupeRolling(parseVtt(vtt))
  const sentences = toSentences(cues)
  if (!sentences.length) {
    console.error('Parsed the subtitles but produced no usable sentences.')
    process.exit(2)
  }

  const data = {
    id: videoId,
    url,
    title: titleOverride || title || videoId,
    titleZh: zhTitle,
    author: uploader || '',
    duration: Number(duration) || sentences[sentences.length - 1].end,
    subtitleFile: pick,
    fetchedAt: new Date().toISOString().slice(0, 10),
    sentences
  }

  fs.mkdirSync(OUT_DIR, { recursive: true })
  const outPath = path.join(OUT_DIR, `${videoId}.json`)
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n')

  const mins = Math.round((data.duration || 0) / 60)
  console.log(`✓ Wrote ${path.relative(process.cwd(), outPath)}`)
  console.log(`  "${data.title}" — ${sentences.length} sentences, ~${mins} min`)
} finally {
  fs.rmSync(tmp, { recursive: true, force: true })
}
