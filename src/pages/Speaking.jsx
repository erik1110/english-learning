import { useEffect, useRef, useState } from 'react'
import { SPEAKING_TESTS } from '../data/ielts'
import Speak from '../components/Speak'

export default function Speaking() {
  const [testId, setTestId] = useState(null)
  const test = SPEAKING_TESTS.find((t) => t.id === testId)

  if (test) return <SpeakingTest test={test} onBack={() => setTestId(null)} />

  return (
    <div>
      <div className="page-head">
        <h2>雅思口說 · Speaking</h2>
        <p>Part 1–3 原創題組。聽考官念題（女聲），再用麥克風錄下自己的回答來比對。</p>
      </div>
      <div className="grid cols-3">
        {SPEAKING_TESTS.map((t) => (
          <div key={t.id} className="card clickable" onClick={() => setTestId(t.id)}>
            <span className="tag level">Part {t.part}</span>
            <div style={{ fontWeight: 700, fontSize: 16, marginTop: 8 }}>{t.title}</div>
            <div className="word-zh">{t.titleZh}</div>
            <p className="muted" style={{ fontSize: 13.5 }}>{t.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SpeakingTest({ test, onBack }) {
  const [recording, setRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState(null)
  const [error, setError] = useState('')
  const mediaRef = useRef(null)
  const chunksRef = useRef([])

  // Clean up the recorder + object URL when leaving.
  useEffect(() => () => {
    if (mediaRef.current && mediaRef.current.state !== 'inactive') mediaRef.current.stop()
    if (audioUrl) URL.revokeObjectURL(audioUrl)
  }, [audioUrl])

  async function startRecording() {
    setError('')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream)
      chunksRef.current = []
      mr.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data)
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        if (audioUrl) URL.revokeObjectURL(audioUrl)
        setAudioUrl(URL.createObjectURL(blob))
        stream.getTracks().forEach((t) => t.stop())
      }
      mediaRef.current = mr
      mr.start()
      setRecording(true)
    } catch {
      setError('無法存取麥克風。請在瀏覽器允許麥克風權限後再試。')
    }
  }

  function stopRecording() {
    if (mediaRef.current && mediaRef.current.state !== 'inactive') mediaRef.current.stop()
    setRecording(false)
  }

  return (
    <div>
      <div className="page-head">
        <button className="btn sm ghost" onClick={onBack}>← 口說列表</button>
        <h2 style={{ marginTop: 12 }}>{test.title}</h2>
        <div className="word-zh">{test.titleZh}</div>
        <p className="muted">{test.instructions}</p>
      </div>

      {test.cueCard && (
        <div className="card" style={{ marginBottom: 18, borderColor: 'var(--accent)' }}>
          <div className="tag level" style={{ marginBottom: 10 }}>Cue Card</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{test.cueCard.topic}</div>
          <div className="muted" style={{ marginBottom: 8 }}>You should say:</div>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {test.cueCard.bullets.map((b, i) => <li key={i} style={{ marginBottom: 4 }}>{b}</li>)}
          </ul>
          <div className="btn-row mt">
            <Speak text={`${test.cueCard.topic}. You should say: ${test.cueCard.bullets.join(', ')}`} gender="female" label="念題卡（女聲）" />
          </div>
        </div>
      )}

      <div className="card" style={{ marginBottom: 18 }}>
        <h3 style={{ marginTop: 0 }}>🎙️ 錄下你的回答</h3>
        <div className="btn-row">
          {recording ? (
            <button className="btn" onClick={stopRecording}>⏹ 停止錄音</button>
          ) : (
            <button className="btn primary" onClick={startRecording}>● 開始錄音</button>
          )}
          {recording && <span style={{ color: 'var(--bad)' }}>● 錄音中…</span>}
        </div>
        {error && <div className="notice mt" style={{ borderColor: 'var(--bad)', color: 'var(--bad)' }}>{error}</div>}
        {audioUrl && !recording && (
          <div className="mt">
            <div className="muted" style={{ fontSize: 13, marginBottom: 6 }}>回放你的錄音：</div>
            <audio controls src={audioUrl} style={{ width: '100%' }} />
          </div>
        )}
      </div>

      <div className="grid cols-2">
        {test.prompts.map((p, i) => (
          <div key={i} className="card">
            <div className="row-between">
              <div style={{ fontWeight: 600, flex: 1 }}>{i + 1}. {p.q}</div>
            </div>
            <div className="btn-row mt">
              <Speak text={p.q} gender="female" label="聽考官念題（女聲）" />
            </div>
            <div className="muted mt" style={{ fontSize: 12.5 }}>💡 {p.tip}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
