import { useState } from 'react'
import { speak, cancelSpeech } from '../lib/speech'
import { useSettings } from '../context/Settings'

// A small "play audio" chip. gender controls voice; kind controls default rate.
// kind='word' → male by default, normal-ish speed.
// kind='sentence' → female by default, slowed down.
export default function Speak({ text, gender, kind = 'sentence', label }) {
  const settings = useSettings()
  const [speaking, setSpeaking] = useState(false)

  const resolvedGender = gender || (kind === 'word' ? 'male' : 'female')
  const rate = kind === 'word' ? settings.wordRate : settings.sentenceRate
  const voiceName = resolvedGender === 'male' ? settings.maleVoice : settings.femaleVoice

  const onClick = async (e) => {
    e.stopPropagation()
    cancelSpeech()
    setSpeaking(true)
    await speak(text, { gender: resolvedGender, rate, voiceName })
    setSpeaking(false)
  }

  return (
    <button
      className={`speak ${speaking ? 'speaking' : ''}`}
      onClick={onClick}
      title={`${resolvedGender === 'male' ? '男聲' : '女聲'}播放`}
    >
      <span>{speaking ? '🔊' : '🔈'}</span>
      <span>{label || (resolvedGender === 'male' ? '男聲' : '女聲')}</span>
    </button>
  )
}
