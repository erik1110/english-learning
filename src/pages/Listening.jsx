import { useRef, useState } from 'react'
import { LISTENING_TESTS } from '../data/ielts'
import { speak, cancelSpeech } from '../lib/speech'
import { useSettings } from '../context/Settings'

export default function Listening() {
  const [testId, setTestId] = useState(null)
  const test = LISTENING_TESTS.find((t) => t.id === testId)

  if (test) return <ListeningTest test={test} onBack={() => setTestId(null)} />

  return (
    <div>
      <div className="page-head">
        <h2>雅思聽力 · Listening</h2>
        <p>仿雅思題型的原創聽力。先聽音檔（可重播），再作答，最後對照逐字稿。</p>
      </div>
      <div className="grid cols-2">
        {LISTENING_TESTS.map((t) => (
          <div key={t.id} className="card clickable" onClick={() => setTestId(t.id)}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{t.title}</div>
            <div className="word-zh">{t.titleZh}</div>
            <p className="muted" style={{ fontSize: 13.5 }}>{t.blurb}</p>
            <span className="tag">{t.questions.length} 題 · {t.transcript.length} 句</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ListeningTest({ test, onBack }) {
  const { maleVoice, femaleVoice, sentenceRate } = useSettings()
  const [playing, setPlaying] = useState(false)
  const [activeLine, setActiveLine] = useState(-1)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showScript, setShowScript] = useState(false)
  const stopRef = useRef(false)

  async function playAudio() {
    cancelSpeech()
    stopRef.current = false
    setPlaying(true)
    for (let i = 0; i < test.transcript.length; i++) {
      if (stopRef.current) break
      setActiveLine(i)
      const line = test.transcript[i]
      const voiceName = line.gender === 'male' ? maleVoice : femaleVoice
      await speak(line.text, { gender: line.gender, rate: sentenceRate, voiceName })
    }
    setActiveLine(-1)
    setPlaying(false)
  }

  function stopAudio() {
    stopRef.current = true
    cancelSpeech()
    setPlaying(false)
    setActiveLine(-1)
  }

  function setAns(i, val) {
    setAnswers((a) => ({ ...a, [i]: val }))
  }

  function isCorrect(q, val) {
    if (q.type === 'mc') return val === q.answer
    if (q.type === 'gap') return (val || '').trim().toLowerCase() === q.answer.toLowerCase()
    return false
  }

  const score = test.questions.reduce((s, q, i) => (isCorrect(q, answers[i]) ? s + 1 : s), 0)

  return (
    <div>
      <div className="page-head">
        <button className="btn sm ghost" onClick={() => { stopAudio(); onBack() }}>← 聽力列表</button>
        <h2 style={{ marginTop: 12 }}>{test.title}</h2>
        <div className="word-zh">{test.titleZh}</div>
      </div>

      <div className="toolbar">
        {playing ? (
          <button className="btn" onClick={stopAudio}>⏹ 停止</button>
        ) : (
          <button className="btn primary" onClick={playAudio}>🎧 播放音檔</button>
        )}
        <span className="pill-counter">語速可在「發音設定」調整（目前 {sentenceRate.toFixed(2)}x）</span>
      </div>

      {playing && activeLine >= 0 && (
        <div className="notice" style={{ marginBottom: 18 }}>
          正在播放第 {activeLine + 1} / {test.transcript.length} 句…（作答時建議先別看逐字稿）
        </div>
      )}

      <div className="card">
        <h3 style={{ marginTop: 0 }}>作答區</h3>
        {test.questions.map((q, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              {i + 1}. {q.q}
              {submitted && (
                <span className={`tag ${isCorrect(q, answers[i]) ? 'good' : ''}`} style={{ marginLeft: 8, color: isCorrect(q, answers[i]) ? 'var(--good)' : 'var(--bad)' }}>
                  {isCorrect(q, answers[i]) ? '✓ 正確' : `✗ 答案：${q.type === 'mc' ? q.options[q.answer] : q.answer}`}
                </span>
              )}
            </div>
            {q.type === 'mc' ? (
              q.options.map((opt, oi) => {
                let cls = 'quiz-option'
                if (submitted) {
                  if (oi === q.answer) cls += ' correct'
                  else if (answers[i] === oi) cls += ' wrong'
                } else if (answers[i] === oi) cls += ' correct'
                return (
                  <button key={oi} className={cls} disabled={submitted} onClick={() => setAns(i, oi)}>
                    {opt}
                  </button>
                )
              })
            ) : (
              <div>
                <input
                  className="search"
                  style={{ maxWidth: 260 }}
                  placeholder="填入答案…"
                  value={answers[i] || ''}
                  disabled={submitted}
                  onChange={(e) => setAns(i, e.target.value)}
                />
                {q.hint && <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>提示：{q.hint}</div>}
              </div>
            )}
          </div>
        ))}

        {!submitted ? (
          <button className="btn primary" onClick={() => setSubmitted(true)}>送出作答</button>
        ) : (
          <div className="btn-row">
            <span className="stat-big" style={{ fontSize: 22 }}>得分 {score} / {test.questions.length}</span>
            <button className="btn" onClick={() => { setSubmitted(false); setAnswers({}) }}>重作</button>
            <button className="btn" onClick={() => setShowScript((s) => !s)}>{showScript ? '隱藏' : '顯示'}逐字稿</button>
          </div>
        )}
      </div>

      {showScript && (
        <div className="card mt-lg">
          <h3 style={{ marginTop: 0 }}>逐字稿 Transcript</h3>
          {test.transcript.map((l, i) => (
            <div key={i} className="dialogue-line">
              <div className="body">
                <div className="speaker">{l.speaker} · {l.gender === 'male' ? '男聲' : '女聲'}</div>
                <div className="text">{l.text}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
