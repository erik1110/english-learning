import { useState } from 'react'
import { SettingsProvider } from './context/Settings'
import { useStars } from './hooks/useStars'
import { isSpeechSupported } from './lib/speech'

import Home from './pages/Home'
import Vocabulary from './pages/Vocabulary'
import Flashcard from './pages/Flashcard'
import Starred from './pages/Starred'
import Listening from './pages/Listening'
import Speaking from './pages/Speaking'
import Situations from './pages/Situations'
import Idioms from './pages/Idioms'
import Settings from './pages/Settings'

const NAV = [
  { group: '總覽', items: [{ id: 'home', icon: '🗺️', label: '學習地圖' }] },
  {
    group: '詞彙',
    items: [
      { id: 'vocab', icon: '📚', label: '單字庫' },
      { id: 'flashcard', icon: '🎴', label: '牛刀小試' },
      { id: 'starred', icon: '⭐', label: '我的收藏' }
    ]
  },
  {
    group: '雅思模擬',
    items: [
      { id: 'listening', icon: '🎧', label: '雅思聽力' },
      { id: 'speaking', icon: '🗣️', label: '雅思口說' }
    ]
  },
  {
    group: '口語與表達',
    items: [
      { id: 'situations', icon: '💬', label: '英文情境' },
      { id: 'idioms', icon: '🇬🇧', label: '道地英語用法' }
    ]
  },
  { group: '設定', items: [{ id: 'settings', icon: '⚙️', label: '發音設定' }] }
]

export default function App() {
  const [page, setPage] = useState('home')
  const [params, setParams] = useState({})
  const stars = useStars()

  // Navigate; some pages take params (e.g. opening vocab at a given level).
  const go = (id, p = {}) => {
    setParams(p)
    setPage(id)
    window.scrollTo(0, 0)
  }

  const render = () => {
    switch (page) {
      case 'home': return <Home go={go} starCount={stars.count} />
      case 'vocab': return <Vocabulary stars={stars} initialLevel={params.level} />
      case 'flashcard': return <Flashcard stars={stars} />
      case 'starred': return <Starred stars={stars} go={go} />
      case 'quiz-starred': return <Flashcard stars={stars} lockToStarred />
      case 'listening': return <Listening />
      case 'speaking': return <Speaking />
      case 'situations': return <Situations />
      case 'idioms': return <Idioms />
      case 'settings': return <Settings />
      default: return <Home go={go} starCount={stars.count} />
    }
  }

  // Highlight the matching nav item (quiz-starred lives under "starred").
  const activeId = page === 'quiz-starred' ? 'starred' : page

  return (
    <SettingsProvider>
      <div className="app">
        <aside className="sidebar">
          <div className="brand">
            <span className="logo">🎓</span>
            <div>
              <h1>IELTS Pathway</h1>
              <div className="sub">B2 · C1 · C2 英語學習</div>
            </div>
          </div>
          {NAV.map((g) => (
            <div key={g.group}>
              <div className="nav-group-label">{g.group}</div>
              {g.items.map((it) => (
                <div
                  key={it.id}
                  className={`nav-item ${activeId === it.id ? 'active' : ''}`}
                  onClick={() => go(it.id)}
                >
                  <span className="ico">{it.icon}</span>
                  <span>{it.label}</span>
                  {it.id === 'starred' && stars.count > 0 && (
                    <span className="tag" style={{ marginLeft: 'auto' }}>{stars.count}</span>
                  )}
                </div>
              ))}
            </div>
          ))}

          <details className="ext-links">
            <summary>🔗 其他連結</summary>
            <a className="ext-link" href="https://erik1110.com/" target="_blank" rel="noreferrer">
              <span className="ico">🇹🇼</span><span>個人部落格</span>
            </a>
            <a className="ext-link" href="https://erik1110.com/french-learning/" target="_blank" rel="noreferrer">
              <span className="ico">🇫🇷</span><span>法文學習</span>
            </a>
            <a className="ext-link" href="https://erik1110.com/japanese-learning/" target="_blank" rel="noreferrer">
              <span className="ico">🇯🇵</span><span>日文學習</span>
            </a>
          </details>
        </aside>

        <main className="main">
          {!isSpeechSupported() && (
            <div className="notice" style={{ marginBottom: 20, borderColor: 'var(--warn)' }}>
              你的瀏覽器不支援語音合成（Web Speech API），發音功能將無法使用。建議改用 Chrome、Edge 或 Safari。
            </div>
          )}
          {render()}
        </main>
      </div>
    </SettingsProvider>
  )
}
