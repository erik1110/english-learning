// Web Speech API wrapper.
// Words are spoken with a male voice, example sentences with a female voice,
// and sentences are slowed down so learners can follow along.

let cachedVoices = []

// Heuristics for picking British-leaning male / female voices across platforms
// (macOS, Chrome/Edge, etc.). We fall back gracefully when nothing matches.
const FEMALE_HINTS = [
  'female', 'samantha', 'kate', 'serena', 'stephanie', 'fiona', 'moira',
  'tessa', 'karen', 'victoria', 'zira', 'hazel', 'sonia', 'libby', 'aria',
  'jenny', 'google uk english female', 'google us english'
]
const MALE_HINTS = [
  'male', 'daniel', 'oliver', 'arthur', 'george', 'ryan', 'guy', 'david',
  'alex', 'fred', 'rishi', 'google uk english male'
]

export function loadVoices() {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis
    if (!synth) return resolve([])

    const existing = synth.getVoices()
    if (existing && existing.length) {
      cachedVoices = existing
      return resolve(existing)
    }
    // Voices load asynchronously in most browsers.
    const handler = () => {
      cachedVoices = synth.getVoices()
      resolve(cachedVoices)
    }
    synth.onvoiceschanged = handler
    // Safety timeout in case the event never fires.
    setTimeout(() => resolve(synth.getVoices()), 800)
  })
}

function scoreVoice(voice, gender) {
  const name = (voice.name || '').toLowerCase()
  const lang = (voice.lang || '').toLowerCase()
  let score = 0
  if (lang.startsWith('en-gb')) score += 40
  else if (lang.startsWith('en')) score += 20
  const hints = gender === 'male' ? MALE_HINTS : FEMALE_HINTS
  const wrongHints = gender === 'male' ? FEMALE_HINTS : MALE_HINTS
  if (hints.some((h) => name.includes(h))) score += 30
  if (wrongHints.some((h) => name.includes(h))) score -= 25
  if (voice.localService) score += 5
  return score
}

export function pickVoice(gender, preferredName) {
  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis?.getVoices() || []
  if (!voices.length) return null
  if (preferredName) {
    const match = voices.find((v) => v.name === preferredName)
    if (match) return match
  }
  return [...voices].sort((a, b) => scoreVoice(b, gender) - scoreVoice(a, gender))[0]
}

export function listEnglishVoices() {
  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis?.getVoices() || []
  return voices.filter((v) => (v.lang || '').toLowerCase().startsWith('en'))
}

export function cancelSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel()
}

// speak() returns a promise that resolves when the utterance finishes.
// gender: 'male' | 'female'; rate: speaking speed (1 = normal).
export function speak(text, { gender = 'female', rate = 0.85, voiceName, pitch = 1 } = {}) {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis
    if (!synth || !text) return resolve()
    const utter = new SpeechSynthesisUtterance(text)
    const voice = pickVoice(gender, voiceName)
    if (voice) {
      utter.voice = voice
      utter.lang = voice.lang
    } else {
      utter.lang = 'en-GB'
    }
    utter.rate = rate
    utter.pitch = pitch
    utter.onend = () => resolve()
    utter.onerror = () => resolve()
    synth.speak(utter)
  })
}

export function isSpeechSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
