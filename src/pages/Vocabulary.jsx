import { useMemo, useState } from 'react'
import { VOCAB, LEVELS } from '../data/vocabulary'
import WordCard from '../components/WordCard'

// Browse the vocabulary library by level, with search and a "starred only" filter.
export default function Vocabulary({ stars, initialLevel }) {
  const [level, setLevel] = useState(initialLevel || 'B2')
  const [query, setQuery] = useState('')
  const [starredOnly, setStarredOnly] = useState(false)

  const words = useMemo(() => {
    const q = query.trim().toLowerCase()
    return VOCAB[level].filter((w) => {
      if (starredOnly && !stars.isStarred(w.id)) return false
      if (!q) return true
      return (
        w.word.toLowerCase().includes(q) ||
        w.definition.toLowerCase().includes(q) ||
        w.zh.includes(q)
      )
    })
  }, [level, query, starredOnly, stars])

  return (
    <div>
      <div className="page-head">
        <h2>單字庫 · Vocabulary</h2>
        <p>單字以男聲發音，例句以女聲、放慢語速朗讀。點 ☆ 可收藏到 localStorage。</p>
      </div>

      <div className="toolbar">
        <div className="seg">
          {LEVELS.map((lv) => (
            <button key={lv.id} className={level === lv.id ? 'active' : ''} onClick={() => setLevel(lv.id)}>
              {lv.id}
            </button>
          ))}
        </div>
        <input
          className="search"
          placeholder="搜尋單字、英文釋義或中文…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={`btn ${starredOnly ? 'primary' : ''}`} onClick={() => setStarredOnly((v) => !v)}>
          {starredOnly ? '★ 只看收藏' : '☆ 只看收藏'}
        </button>
      </div>

      <div className="pill-counter" style={{ marginBottom: 14 }}>
        {LEVELS.find((l) => l.id === level)?.name} · 共 {words.length} 字
      </div>

      {words.length === 0 ? (
        <div className="empty">沒有符合的單字。試試清除搜尋或關閉「只看收藏」。</div>
      ) : (
        <div className="grid cols-2">
          {words.map((w) => (
            <WordCard key={w.id} word={w} starred={stars.isStarred(w.id)} onToggleStar={stars.toggle} />
          ))}
        </div>
      )}
    </div>
  )
}
