import { LEVELS, VOCAB } from '../data/vocabulary'
import { SITUATIONS } from '../data/situations'
import { ALL_IDIOMS } from '../data/idioms'
import { LISTENING_TESTS, SPEAKING_TESTS } from '../data/ielts'

// Learning map: shows the B2 → C1 → C2 pathway and quick links to every unit.
export default function Home({ go, starCount }) {
  const totalWords = VOCAB.B2.length + VOCAB.C1.length + VOCAB.C2.length

  return (
    <div>
      <div className="page-head">
        <h2>學習地圖 · Learning Map</h2>
        <p>從 B2 一路打通到 C2，搭配單字庫、牛刀小試、雅思模擬與情境會話。</p>
      </div>

      <div className="grid cols-3" style={{ marginBottom: 28 }}>
        <div className="card"><div className="muted">收錄單字</div><div className="stat-big">{totalWords}</div><div className="muted">B2 / C1 / C2 三級</div></div>
        <div className="card"><div className="muted">我的收藏</div><div className="stat-big">{starCount}</div><div className="muted">可針對收藏單字考試</div></div>
        <div className="card"><div className="muted">情境與道地用法</div><div className="stat-big">{SITUATIONS.length + 3}</div><div className="muted">英式口語會話與慣用語</div></div>
      </div>

      <h3 style={{ marginBottom: 16 }}>📍 詞彙進階路線</h3>
      <div className="grid cols-3" style={{ marginBottom: 30 }}>
        {LEVELS.map((lv, i) => (
          <div key={lv.id} className="card clickable map-level" onClick={() => go('vocab', { level: lv.id })}>
            <div className="level-bar">
              <div className="num">{i + 1}</div>
              <div>
                <div style={{ fontWeight: 700 }}>{lv.name}</div>
                <span className="tag good">{lv.target}</span>
              </div>
            </div>
            <p className="muted" style={{ margin: 0, fontSize: 14 }}>{lv.blurb}</p>
            <div className="muted mt" style={{ fontSize: 13 }}>{VOCAB[lv.id].length} 個單字 →</div>
          </div>
        ))}
      </div>

      <h3 style={{ marginBottom: 16 }}>🧭 各單元</h3>
      <div className="grid cols-3">
        <UnitCard icon="📚" title="單字庫" desc="發音、例句、中譯，可收藏" onClick={() => go('vocab')} />
        <UnitCard icon="🎴" title="牛刀小試" desc="隨機抽考的單字 Flashcard" onClick={() => go('flashcard')} />
        <UnitCard icon="⭐" title="我的收藏" desc={`${starCount} 個收藏，可專屬考試`} onClick={() => go('starred')} />
        <UnitCard icon="🎧" title="雅思聽力" desc={`${LISTENING_TESTS.length} 套模擬聽力`} onClick={() => go('listening')} />
        <UnitCard icon="🗣️" title="雅思口說" desc={`Part 1–3，共 ${SPEAKING_TESTS.length} 組`} onClick={() => go('speaking')} />
        <UnitCard icon="💬" title="英文情境" desc="股票 / 抱怨 / 運動，多角色對話" onClick={() => go('situations')} />
        <UnitCard icon="🇬🇧" title="道地英語用法" desc={`${ALL_IDIOMS.length} 個英式慣用語與片語`} onClick={() => go('idioms')} />
        <UnitCard icon="⚙️" title="發音設定" desc="挑選男聲／女聲與例句語速" onClick={() => go('settings')} />
      </div>
    </div>
  )
}

function UnitCard({ icon, title, desc, onClick }) {
  return (
    <div className="card clickable" onClick={onClick}>
      <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: 16 }}>{title}</div>
      <div className="muted" style={{ fontSize: 13.5, marginTop: 4 }}>{desc}</div>
    </div>
  )
}
