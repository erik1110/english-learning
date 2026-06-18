import { ALL_WORDS } from '../data/vocabulary'
import WordCard from '../components/WordCard'

// Shows every starred word (from localStorage) and lets the user quiz on just these.
export default function Starred({ stars, go }) {
  const words = ALL_WORDS.filter((w) => stars.isStarred(w.id))

  return (
    <div>
      <div className="page-head">
        <h2>我的收藏 · Starred Words</h2>
        <p>收藏儲存在瀏覽器 localStorage。你可以只針對這些單字做測驗。</p>
      </div>

      <div className="toolbar">
        <span className="pill-counter">共收藏 {words.length} 個單字</span>
        <button className="btn primary" disabled={words.length === 0} onClick={() => go('quiz-starred')}>
          🎴 考收藏單字
        </button>
        {words.length > 0 && (
          <button className="btn ghost" onClick={() => { if (confirm('確定清空所有收藏？')) stars.clearAll() }}>
            清空收藏
          </button>
        )}
      </div>

      {words.length === 0 ? (
        <div className="empty">
          還沒有收藏任何單字。<br />
          到 <span className="kbd">單字庫</span> 或 <span className="kbd">牛刀小試</span> 點 ☆ 收藏吧！
        </div>
      ) : (
        <div className="grid cols-2">
          {words.map((w) => (
            <WordCard key={w.id} word={w} starred onToggleStar={stars.toggle} />
          ))}
        </div>
      )}
    </div>
  )
}
