import { useState } from 'react'
import { IDIOM_GROUPS } from '../data/idioms'
import Speak from '../components/Speak'
import { useSettings } from '../context/Settings'

// 道地英語用法教學: idioms, phrasal verbs and natural/polite expressions.
export default function Idioms() {
  const { showZh } = useSettings()
  const [groupId, setGroupId] = useState(IDIOM_GROUPS[0].id)
  const group = IDIOM_GROUPS.find((g) => g.id === groupId)

  return (
    <div>
      <div className="page-head">
        <h2>道地英語用法 · Authentic Usage</h2>
        <p>母語者天天在用、課本卻少教的英式慣用語、片語動詞與禮貌說法。</p>
      </div>

      <div className="toolbar">
        <div className="seg">
          {IDIOM_GROUPS.map((g) => (
            <button key={g.id} className={groupId === g.id ? 'active' : ''} onClick={() => setGroupId(g.id)}>
              {g.titleZh}
            </button>
          ))}
        </div>
      </div>

      <div className="notice" style={{ marginBottom: 18 }}>
        <b>{group.title}</b> — {group.blurb}
      </div>

      <div className="grid cols-2">
        {group.items.map((it, i) => (
          <div key={i} className="card word-card">
            <div className="word-head">
              <div className="word" style={{ fontSize: 19 }}>{it.expr}</div>
              <span className="tag">{it.register}</span>
            </div>
            <div className="btn-row">
              <Speak text={it.expr} kind="word" label="用語（男聲）" />
            </div>
            <div className="word-def">{it.meaning}</div>
            {showZh && <div className="word-zh">{it.zh}</div>}
            <div className="word-ex">
              <div className="row-between">
                <span style={{ flex: 1 }}>{it.example}</span>
                <Speak text={it.example} kind="sentence" label="例句（女聲）" />
              </div>
              {showZh && <div className="ex-zh">{it.exampleZh}</div>}
            </div>
            <div className="muted" style={{ fontSize: 12.5 }}>💡 {it.tip}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
