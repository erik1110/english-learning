import { useEffect, useMemo, useState } from 'react'
import { VOCAB, ALL_WORDS } from '../data/vocabulary'
import Speak from '../components/Speak'
import { useSettings } from '../context/Settings'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 牛刀小試: randomly drawn quiz over a chosen pool of words.
// Two modes: flashcard (flip) and multiple-choice.
export default function Flashcard({ stars, lockToStarred = false }) {
  const { showZh } = useSettings()
  const [source, setSource] = useState(lockToStarred ? 'starred' : 'B2')
  const [mode, setMode] = useState('flash') // 'flash' | 'mc'
  const [deck, setDeck] = useState([])
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const [picked, setPicked] = useState(null)

  const pool = useMemo(() => {
    if (source === 'starred') return ALL_WORDS.filter((w) => stars.isStarred(w.id))
    if (source === 'all') return ALL_WORDS
    return VOCAB[source] || []
  }, [source, stars])

  function start() {
    setDeck(shuffle(pool).slice(0, Math.min(20, pool.length)))
    setIdx(0)
    setFlipped(false)
    setKnown(0)
    setPicked(null)
  }

  // Build a deck whenever the pool/mode changes.
  useEffect(() => {
    start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, mode])

  const current = deck[idx]
  const finished = deck.length > 0 && idx >= deck.length

  // For MC mode: 3 distractor definitions + the correct one.
  const options = useMemo(() => {
    if (mode !== 'mc' || !current) return []
    const others = shuffle(ALL_WORDS.filter((w) => w.id !== current.id)).slice(0, 3)
    return shuffle([current, ...others])
  }, [mode, current])

  function next(wasKnown) {
    if (wasKnown) setKnown((k) => k + 1)
    setFlipped(false)
    setPicked(null)
    setIdx((i) => i + 1)
  }

  if (pool.length === 0) {
    return (
      <div>
        <Header source={source} setSource={setSource} mode={mode} setMode={setMode} lockToStarred={lockToStarred} />
        <div className="empty">
          {source === 'starred'
            ? '你還沒有收藏任何單字。先到單字庫點 ☆ 收藏吧！'
            : '這個範圍沒有單字。'}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header source={source} setSource={setSource} mode={mode} setMode={setMode} lockToStarred={lockToStarred} />

      {finished ? (
        <div className="flash-wrap center">
          <div className="card">
            <div style={{ fontSize: 44 }}>🎉</div>
            <h3>本回合完成！</h3>
            <p className="muted">這輪 {deck.length} 題，你標記認得 <b style={{ color: 'var(--good)' }}>{known}</b> 個。</p>
            <button className="btn primary" onClick={start}>再來一輪 🔄</button>
          </div>
        </div>
      ) : current ? (
        <div className="flash-wrap">
          <div className="progress-bar"><div style={{ width: `${(idx / deck.length) * 100}%` }} /></div>
          <div className="row-between" style={{ marginBottom: 12 }}>
            <span className="pill-counter">第 {idx + 1} / {deck.length} 題</span>
            <span className="tag level">{current.level}</span>
          </div>

          {mode === 'flash' ? (
            <>
              <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((f) => !f)}>
                <div className="flash-inner">
                  <div className="flash-face">
                    <div className="big-word">{current.word}</div>
                    <div className="phon">{current.phonetic}</div>
                    <Speak text={current.word} kind="word" label="聽發音（男聲）" />
                    <div className="flash-hint">點卡片看釋義與例句</div>
                  </div>
                  <div className="flash-face back">
                    <span className="tag pos">{current.pos}</span>
                    <div style={{ fontSize: 15 }}>{current.definition}</div>
                    {showZh && <div className="word-zh">{current.zh}</div>}
                    <div className="word-ex" style={{ width: '100%' }}>
                      <div className="row-between">
                        <span style={{ flex: 1 }}>{current.example}</span>
                        <Speak text={current.example} kind="sentence" label="例句（女聲）" />
                      </div>
                      {showZh && <div className="ex-zh">{current.exampleZh}</div>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-row" style={{ justifyContent: 'center' }}>
                <button className="btn" onClick={() => next(false)}>還不熟 →</button>
                <button className="btn primary" onClick={() => next(true)}>我認得 ✓</button>
                <button className={`star-btn ${stars.isStarred(current.id) ? 'on' : ''}`} onClick={() => stars.toggle(current.id)}>
                  {stars.isStarred(current.id) ? '★' : '☆'}
                </button>
              </div>
            </>
          ) : (
            <div className="card">
              <div className="row-between" style={{ marginBottom: 6 }}>
                <div className="big-word" style={{ fontSize: 30, fontWeight: 800 }}>{current.word}</div>
                <Speak text={current.word} kind="word" label="男聲" />
              </div>
              <div className="phon" style={{ marginBottom: 14 }}>{current.phonetic}</div>
              <div className="muted" style={{ marginBottom: 10, fontSize: 13 }}>選出正確的英文釋義：</div>
              {options.map((opt) => {
                let cls = 'quiz-option'
                if (picked) {
                  if (opt.id === current.id) cls += ' correct'
                  else if (opt.id === picked) cls += ' wrong'
                }
                return (
                  <button key={opt.id} className={cls} disabled={!!picked} onClick={() => setPicked(opt.id)}>
                    {opt.definition}
                  </button>
                )
              })}
              {picked && (
                <div className="mt">
                  {showZh && <div className="word-zh">{current.zh}</div>}
                  <div className="word-ex mt">
                    <div className="row-between">
                      <span style={{ flex: 1 }}>{current.example}</span>
                      <Speak text={current.example} kind="sentence" label="例句（女聲）" />
                    </div>
                    {showZh && <div className="ex-zh">{current.exampleZh}</div>}
                  </div>
                  <div className="btn-row mt" style={{ justifyContent: 'flex-end' }}>
                    <button className="btn primary" onClick={() => next(picked === current.id)}>下一題 →</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

function Header({ source, setSource, mode, setMode, lockToStarred }) {
  return (
    <>
      <div className="page-head">
        <h2>牛刀小試 · Quick Quiz</h2>
        <p>從單字庫隨機抽 20 題。可切換 Flashcard 翻卡或選擇題模式。</p>
      </div>
      <div className="toolbar">
        {!lockToStarred && (
          <div className="seg">
            {['B2', 'C1', 'C2', 'all', 'starred'].map((s) => (
              <button key={s} className={source === s ? 'active' : ''} onClick={() => setSource(s)}>
                {s === 'all' ? '全部' : s === 'starred' ? '★收藏' : s}
              </button>
            ))}
          </div>
        )}
        <div className="seg">
          <button className={mode === 'flash' ? 'active' : ''} onClick={() => setMode('flash')}>🎴 翻卡</button>
          <button className={mode === 'mc' ? 'active' : ''} onClick={() => setMode('mc')}>📝 選擇題</button>
        </div>
      </div>
    </>
  )
}
