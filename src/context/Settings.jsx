import { createContext, useContext, useEffect, useState } from 'react'
import { loadVoices } from '../lib/speech'
import { loadJSON, saveJSON } from '../lib/storage'

const SettingsContext = createContext(null)
const KEY = 'ielts.settings.v1'

export function SettingsProvider({ children }) {
  const [voices, setVoices] = useState([])
  const [settings, setSettings] = useState(() =>
    loadJSON(KEY, { maleVoice: '', femaleVoice: '', sentenceRate: 0.8, wordRate: 0.9, showZh: true })
  )

  useEffect(() => {
    loadVoices().then((vs) => setVoices(vs || []))
  }, [])

  useEffect(() => {
    saveJSON(KEY, settings)
  }, [settings])

  const update = (patch) => setSettings((s) => ({ ...s, ...patch }))

  return (
    <SettingsContext.Provider value={{ ...settings, voices, update }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider')
  return ctx
}
