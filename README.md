# 🎓 IELTS Pathway — B2 / C1 / C2 English Learning

A single-page React app for IELTS-focused English study. It runs entirely in the
browser: all content lives in JSON-style data files, all pronunciation is generated
on the fly with the **Web Speech API** (no audio files, no API keys), and your
starred words are saved in **localStorage**.

> UI labels are in Traditional Chinese (the learner's first language); all study
> content is in English with Chinese translations.

## ✨ Features

1. **Learning Map** — a B2 → C1 → C2 pathway with quick links to every unit.
2. **Vocabulary Library** — words grouped by CEFR level, each with IPA phonetics,
   part of speech, an English definition, a **Chinese translation**, and an example
   sentence **with its own Chinese translation**.
   - **Words are spoken with a male voice; example sentences with a female voice.**
   - Example sentences are read at a **slowed-down speed** so they're easy to follow.
3. **Quick Quiz (牛刀小試)** — randomly draws words from any level (or all / starred)
   in two modes: **flashcard flip** and **multiple choice**.
4. **Starred Words (收藏)** — star ☆ any word to save it to `localStorage`, then run
   a quiz on **just your starred words**.
5. **IELTS Mock Tests**
   - **Listening** — original, IELTS-style audio (played via TTS, replayable) with
     multiple-choice and gap-fill questions, scoring, and a revealable transcript.
   - **Speaking** — Part 1 / Part 2 (cue card) / Part 3 prompts. The examiner's
     question is read aloud (female voice), and you can **record your answer with
     the microphone and play it back**.
6. **Real-life Situations (英文情境)** — colloquial, British-leaning multi-role
   dialogues across topics like **stocks, moaning about work, and sport**. Each
   scenario has **15+ lines**, **different voices per speaker**, and can be played
   **line-by-line or all at once**.
7. **Authentic Usage (道地英語用法)** — idioms, phrasal verbs, and natural/polite
   expressions that native (British) speakers actually use, each with meaning,
   Chinese, an example, and a usage tip.
8. **Voice Settings** — choose which system voice to use for the male/female
   speakers, tune the reading speed, and toggle Chinese translations.

## 🚀 Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

> Requires Node 16+. For pronunciation, use a browser with Web Speech support
> (Chrome, Edge, or Safari). Microphone recording in Speaking needs mic permission.

## 🗂️ Project structure

```
src/
├── App.jsx                # app shell + sidebar navigation (lightweight router)
├── main.jsx               # React entry point
├── styles.css             # all styling (dark theme)
├── context/Settings.jsx   # voice choices + speed, persisted to localStorage
├── hooks/useStars.js      # starred-word state backed by localStorage
├── lib/
│   ├── speech.js          # Web Speech API wrapper (voice picking, speak/cancel)
│   └── storage.js         # JSON localStorage helpers
├── components/
│   ├── Speak.jsx          # reusable "play audio" chip (male word / female sentence)
│   └── WordCard.jsx       # vocabulary entry card
├── data/                  # ← all content lives here
│   ├── b2.json            # B2 vocabulary (generated, ~1000 words)
│   ├── c1.json            # C1 vocabulary (generated)
│   ├── c2.json            # C2 vocabulary (generated)
│   ├── vocabulary.js      # loads the JSON above + level metadata
│   ├── situations.js      # situational dialogues
│   ├── idioms.js          # authentic usage / idioms (100+)
│   └── ielts.js           # listening + speaking tests
├── pages/                 # one component per unit
scripts/
└── generate-vocab.mjs     # builds b2/c1/c2.json from public data
```

## 🔊 How the voices work

There are no recorded audio files. Speech is synthesised live via the browser's
`speechSynthesis` API. `src/lib/speech.js` enumerates the system voices and scores
them, preferring **British English (`en-GB`)** and matching the requested gender by
voice-name heuristics. Words default to a male voice at near-normal speed; example
sentences and dialogue default to a female voice at a slower rate. You can override
the exact voice and speed per gender in **發音設定 (Voice Settings)**.

## 📚 Generating the vocabulary

The B2/C1/C2 word lists in `src/data/*.json` are produced by a script from public,
key-free data sources:

```bash
node scripts/generate-vocab.mjs                 # ~1000 words per level
TARGET=1000 CONCURRENCY=2 node scripts/generate-vocab.mjs
```

- **Word lists** come from the open [olp-en-cefrj](https://github.com/openlanguageprofiles/olp-en-cefrj)
  CEFR vocabulary profiles (B2 + Octanove C1/C2).
- **Phonetics, definitions, and example sentences** come from the
  [Free Dictionary API](https://dictionaryapi.dev/).
- **Chinese (zh-TW) translations** are machine-generated (Google `gtx` endpoint,
  with MyMemory as a fallback).

The script caches every result in `scripts/.vocab-cache.json` and is **fully
resumable** — if it gets rate-limited, just run it again and it reuses everything
already fetched. Because translations and a few examples are machine-generated,
they're worth a quick human review. To grow other units (situations, idioms,
tests), edit the corresponding files in `src/data/`.

## 🛠️ Tech

- React 18 + Vite 4
- No backend — static, deployable to any host (the `dist/` folder)
- Browser Web Speech API (TTS) + MediaRecorder (speaking practice)
- localStorage for starred words and settings
