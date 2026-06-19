#!/usr/bin/env node
// Applies hand-authored example sentences to vocabulary entries that still use
// the generic fallback template, translating each example to zh-TW.
//
// Input: /tmp/examples.json  →  { "<word>": "<English example sentence>", ... }
// Patches src/data/{b2,c1,c2}.json (only entries whose example is the template)
// and updates scripts/.vocab-cache.json so future regens keep the good example.
//
// Usage: node scripts/patch-examples.mjs [path-to-examples.json]

import https from 'node:https'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, '..', 'src', 'data')
const CACHE_FILE = path.join(__dirname, '.vocab-cache.json')
const FALLBACK_RE = /^The word ".*" is commonly used in formal English\.$/

const examplesPath = process.argv[2] || '/tmp/examples.json'
const examples = JSON.parse(fs.readFileSync(examplesPath, 'utf8'))

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let d = ''
      res.on('data', (c) => (d += c))
      res.on('end', () => resolve({ status: res.statusCode, body: d }))
    })
    req.on('error', reject)
    req.setTimeout(12000, () => req.destroy(new Error('timeout')))
  })
}

async function translate(text) {
  for (let i = 0; i < 3; i++) {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(text)}`
      const { status, body } = await get(url)
      if (status === 200) {
        const zh = (JSON.parse(body)[0] || []).map((s) => s[0]).join('').trim()
        if (zh) return zh
      }
    } catch { /* retry */ }
    await new Promise((r) => setTimeout(r, 500 * (i + 1)))
  }
  return ''
}

const cache = fs.existsSync(CACHE_FILE) ? JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')) : {}

;(async () => {
  // Translate each authored example once.
  const zhMap = {}
  const words = Object.keys(examples)
  for (let i = 0; i < words.length; i++) {
    const w = words[i]
    zhMap[w] = await translate(examples[w])
    process.stdout.write(`\rtranslating ${i + 1}/${words.length}   `)
  }
  process.stdout.write('\n')

  let patched = 0
  for (const lvl of ['b2', 'c1', 'c2']) {
    const file = path.join(DATA_DIR, `${lvl}.json`)
    const arr = JSON.parse(fs.readFileSync(file, 'utf8'))
    for (const e of arr) {
      if (examples[e.word] && FALLBACK_RE.test(e.example)) {
        e.example = examples[e.word]
        e.exampleZh = zhMap[e.word] || e.exampleZh
        if (cache[e.word]) { cache[e.word].example = e.example; cache[e.word].exampleZh = e.exampleZh }
        patched++
      }
    }
    fs.writeFileSync(file, JSON.stringify(arr, null, 2))
  }
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache))
  console.log(`patched ${patched} entries with authored examples`)
})()
