import { useEffect, useMemo, useRef, useState } from 'react'
import { loadYouTubeApi } from '../lib/youtube'
import { diffWords } from '../lib/diff'

// Auto-discover every dictation JSON dropped in by scripts/fetch-dictation.mjs.
// Force YouTube captions off — a visible caption track would reveal the answer
// during dictation. Called on ready, on every play, and whenever playback starts.
function killCaptions(p) {
  try { p.unloadModule('captions'); p.unloadModule('cc') } catch { /* ignore */ }
}

const modules = import.meta.glob('../data/dictation/*.json', { eager: true })
const VIDEOS = Object.values(modules)
  .map((m) => m.default || m)
  .sort((a, b) => a.title.localeCompare(b.title))

export default function Dictation() {
  const [id, setId] = useState(null)
  const video = VIDEOS.find((v) => v.id === id)

  if (video) return <DictationPlayer key={video.id} video={video} onBack={() => setId(null)} />

  return (
    <div>
      <div className="page-head">
        <h2>英文聽打 · Dictation</h2>
        <p>抓取 YouTube 影片，一句一句聽、一句一句打。每句自動比對，標出對、錯、漏字與多字，並給出正確率。</p>
      </div>

      {VIDEOS.length === 0 ? (
        <div className="empty">
          目前沒有聽打影片。用以下指令抓一支：
          <pre className="kbd" style={{ display: 'block', marginTop: 10, padding: 12, whiteSpace: 'pre-wrap' }}>
            node scripts/fetch-dictation.mjs &lt;youtube-url&gt;
          </pre>
        </div>
      ) : (
        <div className="grid cols-2">
          {VIDEOS.map((v) => (
            <div key={v.id} className="card clickable" onClick={() => setId(v.id)}>
              <img
                src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                alt=""
                style={{ width: '100%', borderRadius: 10, marginBottom: 10, aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <div style={{ fontWeight: 700, fontSize: 15.5, lineHeight: 1.35 }}>{v.title}</div>
              {v.titleZh && <div className="word-zh">{v.titleZh}</div>}
              <span className="tag" style={{ marginTop: 6 }}>
                {v.sentences.length} 句 · ~{Math.round((v.duration || 0) / 60)} 分鐘
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function DictationPlayer({ video, onBack }) {
  const sentences = video.sentences
  const [idx, setIdx] = useState(0)
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [rate, setRate] = useState(1)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [best, setBest] = useState({}) // idx -> best accuracy so far

  const playerRef = useRef(null)
  const pollRef = useRef(null)
  const mountRef = useRef(null)
  const inputRef = useRef(null)
  const current = sentences[idx]

  // ---- YouTube player lifecycle ----
  useEffect(() => {
    let destroyed = false
    loadYouTubeApi().then((YT) => {
      if (destroyed || !mountRef.current) return
      playerRef.current = new YT.Player(mountRef.current, {
        videoId: video.id,
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1, cc_load_policy: 0 },
        events: {
          onReady: (e) => { killCaptions(e.target); setReady(true) },
          onStateChange: (e) => { if (e.data === YT.PlayerState.PLAYING) killCaptions(e.target) },
          // 100/101/150 = embedding disabled by the uploader; 2 = bad video id.
          onError: () => setLoadError(true)
        }
      })
    })
    return () => {
      destroyed = true
      clearInterval(pollRef.current)
      if (playerRef.current && playerRef.current.destroy) playerRef.current.destroy()
    }
  }, [video.id])

  // Play just [start, end) of the given sentence, then pause.
  function playSegment(s) {
    const p = playerRef.current
    if (!p || !ready) return
    clearInterval(pollRef.current)
    killCaptions(p) // keep captions off every time we play (they'd reveal the answer)
    p.seekTo(s.start, true)
    p.setPlaybackRate(rate)
    p.playVideo()
    setPlaying(true)
    pollRef.current = setInterval(() => {
      const t = p.getCurrentTime()
      if (t >= s.end - 0.08) {
        p.pauseVideo()
        clearInterval(pollRef.current)
        setPlaying(false)
      }
    }, 60)
  }

  function stop() {
    clearInterval(pollRef.current)
    if (playerRef.current && playerRef.current.pauseVideo) playerRef.current.pauseVideo()
    setPlaying(false)
  }

  function replay() {
    playSegment(current)
  }

  function check() {
    if (!value.trim()) return
    const r = diffWords(current.text, value)
    setResult(r)
    setBest((b) => ({ ...b, [idx]: Math.max(b[idx] || 0, r.accuracy) }))
  }

  function go(n) {
    if (n < 0 || n >= sentences.length) return
    stop()
    setIdx(n)
    setValue('')
    setResult(null)
    setRevealed(false)
    // Let the new sentence settle in, then auto-play and focus the box.
    setTimeout(() => {
      playSegment(sentences[n])
      inputRef.current && inputRef.current.focus()
    }, 120)
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (!result) check()
      else go(idx + 1)
    }
  }

  function toggleRate() {
    const next = rate === 1 ? 0.75 : 1
    setRate(next)
    if (playerRef.current && playerRef.current.setPlaybackRate) playerRef.current.setPlaybackRate(next)
  }

  const attempted = Object.keys(best).length
  const avg = attempted ? Math.round(Object.values(best).reduce((a, b) => a + b, 0) / attempted) : 0

  return (
    <div>
      <div className="page-head">
        <button className="btn sm ghost" onClick={onBack}>← 聽打列表</button>
        <h2 style={{ marginTop: 12 }}>{video.title}</h2>
        {video.titleZh && <div className="word-zh">{video.titleZh}</div>}
      </div>

      <div className="dictation-video">
        <div ref={mountRef} />
      </div>

      {loadError && (
        <div className="notice" style={{ marginTop: 14, borderColor: 'var(--warn)' }}>
          這支影片無法嵌入播放（發布者關閉了嵌入功能）。請
          <a href={video.url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}> 到 YouTube 觀看</a>
          ，或換一支影片練習。
        </div>
      )}

      <div className="toolbar" style={{ marginTop: 16 }}>
        <button className="btn primary" onClick={replay} disabled={!ready}>
          {playing ? '🔊 播放中…' : '🎧 播放這句'}
        </button>
        <button className="btn" onClick={toggleRate} disabled={!ready}>
          語速 {rate === 1 ? '正常' : '0.75x 慢'}
        </button>
        <span className="pill-counter">第 {idx + 1} / {sentences.length} 句</span>
        {attempted > 0 && <span className="pill-counter">已練 {attempted} 句 · 平均 {avg}%</span>}
      </div>

      <div className="progress-bar" style={{ margin: '14px 0 18px' }}>
        <div style={{ width: `${((idx + 1) / sentences.length) * 100}%` }} />
      </div>

      <div className="card">
        <div className="muted" style={{ fontSize: 13, marginBottom: 8 }}>
          聽音檔後把整句打出來（大小寫、標點不影響評分）。按 <span className="kbd">Enter</span> 檢查，再按一次進入下一句。
        </div>
        <textarea
          ref={inputRef}
          className="dictation-input"
          rows={3}
          placeholder="在這裡輸入你聽到的句子…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
        />

        <div className="btn-row" style={{ marginTop: 12 }}>
          {!result ? (
            <button className="btn primary" onClick={check} disabled={!value.trim()}>✓ 檢查</button>
          ) : (
            <button className="btn primary" onClick={() => go(idx + 1)} disabled={idx + 1 >= sentences.length}>
              下一句 →
            </button>
          )}
          <button className="btn" onClick={() => { setRevealed(true); stop() }}>顯示答案</button>
          <button className="btn ghost" onClick={() => go(idx - 1)} disabled={idx === 0}>← 上一句</button>
          <button className="btn ghost" onClick={() => go(idx + 1)} disabled={idx + 1 >= sentences.length}>跳過 →</button>
        </div>

        {result && (
          <div className="dictation-feedback">
            <div className={`verdict ${result.accuracy === 100 ? 'perfect' : ''}`}>
              {result.accuracy === 100
                ? '🎉 完全正確！'
                : `正確率 ${result.accuracy}%（${result.correct}/${result.total} 個字）`}
            </div>
            <p className="diff-line">
              {result.ops.map((o, i) => <DiffWord key={i} op={o} />)}
            </p>
            {result.accuracy < 100 && (
              <div className="diff-legend muted">
                <span className="dw ok">正確</span>
                <span className="dw sub"><s>打錯</s> 正解</span>
                <span className="dw missing">漏字</span>
                <span className="dw extra"><s>多字</s></span>
              </div>
            )}
          </div>
        )}

        {revealed && (
          <div className="dictation-feedback">
            <div className="muted" style={{ fontSize: 13, marginBottom: 4 }}>答案</div>
            <p className="diff-line answer">{current.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function DiffWord({ op }) {
  if (op.type === 'ok') return <span className="dw ok">{op.ref}</span>
  if (op.type === 'missing') return <span className="dw missing">{op.ref}</span>
  if (op.type === 'extra') return <span className="dw extra"><s>{op.hyp}</s></span>
  // substitution
  return (
    <span className="dw sub">
      <s>{op.hyp}</s> {op.ref}
    </span>
  )
}
