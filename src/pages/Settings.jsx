import { useSettings } from '../context/Settings'
import { speak, cancelSpeech } from '../lib/speech'

// Lets the user pick which system voice to use for the male (word) and female
// (example/dialogue) speakers, and tune the example reading speed.
export default function Settings() {
  const { voices, maleVoice, femaleVoice, sentenceRate, wordRate, showZh, update } = useSettings()
  const enVoices = voices.filter((v) => (v.lang || '').toLowerCase().startsWith('en'))

  const preview = (gender, voiceName) => {
    cancelSpeech()
    const text = gender === 'male' ? 'This is the male voice for words.' : 'This is the female voice, reading an example sentence slowly.'
    speak(text, { gender, voiceName, rate: gender === 'male' ? wordRate : sentenceRate })
  }

  return (
    <div>
      <div className="page-head">
        <h2>發音設定 · Voice Settings</h2>
        <p>單字用男聲、例句與對話用女聲。語音由瀏覽器內建的 Web Speech 提供，可挑選與調速。</p>
      </div>

      {enVoices.length === 0 && (
        <div className="notice" style={{ marginBottom: 18 }}>
          目前偵測不到英語語音。請確認瀏覽器（建議 Chrome / Edge / Safari）已安裝英語語音，重新整理後再試。
        </div>
      )}

      <div className="grid cols-2">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>👨 男聲（單字）</h3>
          <select
            className="voice-select"
            style={{ maxWidth: '100%', width: '100%' }}
            value={maleVoice}
            onChange={(e) => update({ maleVoice: e.target.value })}
          >
            <option value="">自動挑選（偏好英式 en-GB）</option>
            {enVoices.map((v) => <option key={v.name} value={v.name}>{v.name} — {v.lang}</option>)}
          </select>
          <div className="btn-row mt">
            <button className="btn" onClick={() => preview('male', maleVoice)}>🔈 試聽男聲</button>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>👩 女聲（例句／對話）</h3>
          <select
            className="voice-select"
            style={{ maxWidth: '100%', width: '100%' }}
            value={femaleVoice}
            onChange={(e) => update({ femaleVoice: e.target.value })}
          >
            <option value="">自動挑選（偏好英式 en-GB）</option>
            {enVoices.map((v) => <option key={v.name} value={v.name}>{v.name} — {v.lang}</option>)}
          </select>
          <div className="btn-row mt">
            <button className="btn" onClick={() => preview('female', femaleVoice)}>🔈 試聽女聲</button>
          </div>
        </div>
      </div>

      <div className="card mt-lg">
        <h3 style={{ marginTop: 0 }}>🐢 例句語速：{sentenceRate.toFixed(2)}x</h3>
        <input type="range" min="0.5" max="1.1" step="0.05" value={sentenceRate} style={{ width: '100%' }}
          onChange={(e) => update({ sentenceRate: parseFloat(e.target.value) })} />
        <div className="muted" style={{ fontSize: 12 }}>建議 0.75–0.85，讓例句不要念太快。</div>

        <h3>單字語速：{wordRate.toFixed(2)}x</h3>
        <input type="range" min="0.6" max="1.1" step="0.05" value={wordRate} style={{ width: '100%' }}
          onChange={(e) => update({ wordRate: parseFloat(e.target.value) })} />
      </div>

      <div className="card mt-lg">
        <label className="btn-row" style={{ cursor: 'pointer' }}>
          <input type="checkbox" checked={showZh} onChange={(e) => update({ showZh: e.target.checked })} />
          顯示中文翻譯（單字、例句、對話）
        </label>
      </div>
    </div>
  )
}
