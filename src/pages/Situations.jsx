import { useRef, useState } from 'react'
import { SITUATIONS } from '../data/situations'
import { speak, cancelSpeech } from '../lib/speech'
import { useSettings } from '../context/Settings'

const AVATAR_COLORS = ['#6c8cff', '#8b6cff', '#3ecf8e', '#ff6b81', '#ffce4a', '#4ac6ff']

// Situational dialogues. Each speaker gets a consistent voice (by gender) and
// avatar colour. Lines can be played one-by-one or all in sequence.
export default function Situations() {
  const [catId, setCatId] = useState(null)
  const [scId, setScId] = useState(null)

  if (catId && scId) {
    const cat = SITUATIONS.find((c) => c.id === catId)
    const sc = cat.scenarios.find((s) => s.id === scId)
    return <ScenarioView cat={cat} scenario={sc} onBack={() => setScId(null)} />
  }

  if (catId) {
    const cat = SITUATIONS.find((c) => c.id === catId)
    return (
      <div>
        <div className="page-head">
          <button className="btn sm ghost" onClick={() => setCatId(null)}>← 所有情境</button>
          <h2 style={{ marginTop: 12 }}>{cat.icon} {cat.title} · {cat.titleZh}</h2>
          <p>{cat.blurb}</p>
        </div>
        <div className="grid cols-2">
          {cat.scenarios.map((s) => (
            <div key={s.id} className="card clickable" onClick={() => setScId(s.id)}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{s.title}</div>
              <div className="word-zh">{s.titleZh}</div>
              <p className="muted" style={{ fontSize: 13.5 }}>{s.description}</p>
              <span className="tag">{s.lines.length} 句對話 →</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-head">
        <h2>英文情境 · Real-life Situations</h2>
        <p>貼近英國人口語的多角色會話。不同角色用不同音色，可一句一句或全部播放。</p>
      </div>
      <div className="grid cols-3">
        {SITUATIONS.map((c) => (
          <div key={c.id} className="card clickable" onClick={() => setCatId(c.id)}>
            <div style={{ fontSize: 30 }}>{c.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 17, marginTop: 6 }}>{c.title}</div>
            <div className="word-zh">{c.titleZh}</div>
            <p className="muted" style={{ fontSize: 13.5 }}>{c.blurb}</p>
            <span className="tag">{c.scenarios.length} 個情境</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScenarioView({ cat, scenario, onBack }) {
  const { showZh, maleVoice, femaleVoice, sentenceRate } = useSettings()
  const [active, setActive] = useState(-1)
  const [playingAll, setPlayingAll] = useState(false)
  const stopRef = useRef(false)

  // Map each unique speaker to a stable avatar colour.
  const speakers = [...new Set(scenario.lines.map((l) => l.speaker))]
  const colorOf = (sp) => AVATAR_COLORS[speakers.indexOf(sp) % AVATAR_COLORS.length]

  async function playLine(line) {
    const voiceName = line.gender === 'male' ? maleVoice : femaleVoice
    await speak(line.text, { gender: line.gender, rate: sentenceRate, voiceName })
  }

  async function playOne(i) {
    cancelSpeech()
    stopRef.current = true // stop any running "play all"
    setPlayingAll(false)
    setActive(i)
    await playLine(scenario.lines[i])
    setActive((cur) => (cur === i ? -1 : cur))
  }

  async function playAll() {
    cancelSpeech()
    stopRef.current = false
    setPlayingAll(true)
    for (let i = 0; i < scenario.lines.length; i++) {
      if (stopRef.current) break
      setActive(i)
      await playLine(scenario.lines[i])
    }
    setActive(-1)
    setPlayingAll(false)
  }

  function stop() {
    stopRef.current = true
    cancelSpeech()
    setPlayingAll(false)
    setActive(-1)
  }

  return (
    <div>
      <div className="page-head">
        <button className="btn sm ghost" onClick={() => { stop(); onBack() }}>← {cat.title}</button>
        <h2 style={{ marginTop: 12 }}>{scenario.title}</h2>
        <div className="word-zh">{scenario.titleZh}</div>
        <p className="muted">{scenario.description}</p>
      </div>

      <div className="toolbar">
        {playingAll ? (
          <button className="btn" onClick={stop}>⏹ 停止</button>
        ) : (
          <button className="btn primary" onClick={playAll}>▶ 全部播放</button>
        )}
        <span className="pill-counter">{speakers.join(' · ')} ｜ 共 {scenario.lines.length} 句</span>
      </div>

      <div>
        {scenario.lines.map((line, i) => (
          <div key={i} className={`dialogue-line ${active === i ? 'active' : ''}`}>
            <div className="avatar" style={{ background: colorOf(line.speaker) }}>
              {line.speaker[0]}
            </div>
            <div className="body">
              <div className="speaker">
                {line.speaker} · {line.gender === 'male' ? '男聲' : '女聲'}
                <button className={`speak ${active === i ? 'speaking' : ''}`} onClick={() => playOne(i)}>
                  {active === i ? '🔊' : '🔈'} 播放
                </button>
              </div>
              <div className="text">{line.text}</div>
              {showZh && <div className="zh">{line.zh}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
