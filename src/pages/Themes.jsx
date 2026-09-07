import { useState } from 'react'
import { THEME_AREAS } from '../data/themes'
import ItemArt from '../components/ItemArt'
import ButcherChart, { chartLabel, regionName } from '../components/ButcherChart'
import Speak from '../components/Speak'
import { useSettings } from '../context/Settings'

// 主題單字: browse vocabulary by real-world place — the supermarket, the
// kitchen, an IKEA trip. Meat sections pair each cut with a butcher's chart.
export default function Themes() {
  const [areaId, setAreaId] = useState(null)

  if (areaId) {
    const area = THEME_AREAS.find((a) => a.id === areaId)
    return <AreaView area={area} onBack={() => setAreaId(null)} />
  }

  return (
    <div>
      <div className="page-head">
        <h2>主題單字 · Vocabulary by Place</h2>
        <p>用「場所」記單字：逛超市、下廚、逛 IKEA，每個字都配圖與例句。</p>
      </div>
      <div className="grid cols-3">
        {THEME_AREAS.map((a) => {
          const count = a.sections.reduce((n, s) => n + s.items.length, 0)
          return (
            <div key={a.id} className="card clickable" onClick={() => setAreaId(a.id)}>
              <div style={{ fontSize: 30 }}>{a.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 17, marginTop: 6 }}>{a.title}</div>
              <div className="word-zh">{a.titleZh}</div>
              <p className="muted" style={{ fontSize: 13.5 }}>{a.blurb}</p>
              <span className="tag">{a.sections.length} 個分類 · {count} 個字</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AreaView({ area, onBack }) {
  const [sectionId, setSectionId] = useState(area.sections[0].id)
  const [query, setQuery] = useState('')
  const [hover, setHover] = useState(null)
  const [picked, setPicked] = useState(null) // a cut clicked on the chart

  const q = query.trim().toLowerCase()
  // Fall back to the first section if the remembered id is no longer present.
  const section = area.sections.find((s) => s.id === sectionId) || area.sections[0]

  // A picked region narrows the grid to that cut; hovering a card wins for the
  // chart highlight so you can still peek at other cuts while one is picked.
  const pickedItems = picked ? section.items.filter((it) => it.cut === picked) : []
  const pickedName = picked && section.chart ? regionName(section.chart, picked) : null
  const shown = pickedItems.length ? pickedItems : section.items

  // Searching looks across the whole area; otherwise show the chosen section.
  const results = q
    ? area.sections.flatMap((s) =>
        s.items
          .filter((it) => `${it.en} ${it.zh} ${it.note}`.toLowerCase().includes(q))
          .map((it) => ({ item: it, section: s }))
      )
    : shown.map((it) => ({ item: it, section }))

  const reset = () => { setHover(null); setPicked(null) }

  return (
    <div>
      <div className="page-head">
        <button className="btn sm ghost" onClick={onBack}>← 所有區域</button>
        <h2 style={{ marginTop: 12 }}>{area.icon} {area.title} · {area.titleZh}</h2>
        <p>{area.blurb}</p>
      </div>

      <div className="toolbar">
        <div className="seg wrap">
          {area.sections.map((s) => (
            <button
              key={s.id}
              className={!q && sectionId === s.id ? 'active' : ''}
              onClick={() => { setQuery(''); setSectionId(s.id); reset() }}
            >
              {s.icon} {s.titleZh}
            </button>
          ))}
        </div>
        <input
          className="search"
          placeholder="搜尋這個區域的單字…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {!q && (
        <div className="notice" style={{ marginBottom: 18 }}>
          <b>{section.title}</b> — {section.blurb}
        </div>
      )}

      {!q && section.chart && (
        <div className="chart-hero">
          <ButcherChart
            animal={section.chart}
            highlight={hover?.cut || picked}
            height={180}
            onPick={(cut) => { setPicked((cur) => (cur === cut ? null : cut)); setHover(null) }}
          />
          <div className="chart-caption">
            <div className="muted" style={{ fontSize: 12.5 }}>{chartLabel(section.chart)}</div>
            {hover ? (
              <>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{hover.en}</div>
                <div className="word-zh">{hover.zh}</div>
              </>
            ) : pickedName ? (
              <>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{pickedName[0]}</div>
                <div className="word-zh">{pickedName[1]}</div>
                {pickedItems.length ? (
                  <div className="cut-list">
                    {pickedItems.map((it) => (
                      <span key={it.en} className="tag">{it.en}｜{it.zh}</span>
                    ))}
                  </div>
                ) : (
                  <div className="muted" style={{ fontSize: 13 }}>這一節沒有收錄這個部位的單字。</div>
                )}
                <button className="btn sm ghost" style={{ marginTop: 10 }} onClick={() => setPicked(null)}>
                  ← 顯示全部部位
                </button>
              </>
            ) : (
              <div className="muted" style={{ fontSize: 13.5 }}>
                直接點部位圖上的任一區塊，旁邊會顯示部位名稱並只列出該部位的單字；把滑鼠移到下面的卡片也會亮出對應位置。
              </div>
            )}
          </div>
        </div>
      )}

      {q && <div className="pill-counter" style={{ display: 'block', marginBottom: 14 }}>找到 {results.length} 個結果</div>}

      <div className="grid cols-2">
        {results.map(({ item, section: sec }) => (
          <ItemCard
            key={`${sec.id}-${item.en}`}
            item={item}
            chart={sec.chart}
            showSection={!!q}
            sectionTitle={sec.titleZh}
            onHover={() => sec.chart && setHover(item)}
            onLeave={() => sec.chart && setHover(null)}
          />
        ))}
      </div>
      {results.length === 0 && <div className="empty">找不到符合的單字，換個關鍵字試試。</div>}
    </div>
  )
}

function ItemCard({ item, chart, showSection, sectionTitle, onHover, onLeave }) {
  const { showZh } = useSettings()

  return (
    <div className="card theme-card" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className="theme-card-head">
        {chart ? (
          <div className="item-art chart-thumb"><ButcherChart animal={chart} highlight={item.cut} height={54} /></div>
        ) : (
          <ItemArt art={item.art} size={64} />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="word" style={{ fontSize: 19 }}>{item.en}</div>
          {showZh && <div className="word-zh">{item.zh}</div>}
          {showSection && <span className="tag" style={{ marginTop: 6 }}>{sectionTitle}</span>}
        </div>
      </div>

      <div className="btn-row">
        <Speak text={item.en} kind="word" label="單字（男聲）" />
        <Speak text={item.example} kind="sentence" label="例句（女聲）" />
      </div>

      <div className="muted" style={{ fontSize: 13 }}>💡 {item.note}</div>

      <div className="word-ex">
        <div>{item.example}</div>
        {showZh && <div className="ex-zh">{item.exampleZh}</div>}
      </div>
    </div>
  )
}
