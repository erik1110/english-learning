import Speak from './Speak'
import { useSettings } from '../context/Settings'

// Displays a vocabulary entry: word (male voice) + example (female voice),
// with a star toggle stored in localStorage.
export default function WordCard({ word, starred, onToggleStar }) {
  const { showZh } = useSettings()
  return (
    <div className="card word-card">
      <div className="word-head">
        <div>
          <span className="word">{word.word}</span>{' '}
          <span className="phon">{word.phonetic}</span>
        </div>
        <button
          className={`star-btn ${starred ? 'on' : ''}`}
          onClick={() => onToggleStar(word.id)}
          title={starred ? '取消收藏' : '收藏單字'}
          aria-label="toggle star"
        >
          {starred ? '★' : '☆'}
        </button>
      </div>

      <div className="btn-row">
        <span className="tag pos">{word.pos}</span>
        <span className="tag level">{word.level}</span>
        <Speak text={word.word} kind="word" label="單字（男聲）" />
      </div>

      <div className="word-def">{word.definition}</div>
      {showZh && <div className="word-zh">{word.zh}</div>}

      <div className="word-ex">
        <div className="row-between">
          <span style={{ flex: 1 }}>{word.example}</span>
          <Speak text={word.example} kind="sentence" label="例句（女聲）" />
        </div>
        {showZh && <div className="ex-zh">{word.exampleZh}</div>}
      </div>
    </div>
  )
}
