// Butcher's charts. Each animal is a simple side-on silhouette whose torso is
// tiled with named regions, so a cut on a card can light up where it comes from.
// `regions` are plain rects clipped to the torso shape; extras (head, legs,
// tail) are drawn separately because they sit outside that clip.

const ANIMALS = {
  pig: {
    label: 'Pig · 豬',
    torso: { x: 46, y: 24, w: 112, h: 56, r: 26 },
    names: {
      shoulder: ['Shoulder', '肩胛（梅花／胛心）'],
      loin: ['Loin', '背脊（大里肌）'],
      tenderloin: ['Tenderloin', '腰內肉（小里肌）'],
      belly: ['Belly', '腹部（五花）'],
      ribs: ['Ribs', '肋排'],
      leg: ['Leg / Ham', '後腿（含醃腿）'],
      head: ['Head', '頭部'],
      cheek: ['Cheek', '頰肉'],
      hock: ['Hock / Shank', '蹄膀與豬腱'],
      trotter: ['Trotter', '豬蹄'],
      offal: ['Offal', '內臟']
    },
    regions: {
      shoulder: { x: 46, y: 24, w: 32, h: 56 },
      loin: { x: 78, y: 24, w: 56, h: 22 },
      ribs: { x: 78, y: 46, w: 22, h: 34 },
      tenderloin: { x: 100, y: 46, w: 34, h: 8 },
      belly: { x: 100, y: 54, w: 34, h: 26 },
      leg: { x: 134, y: 24, w: 24, h: 56 }
    },
    blobs: { offal: { cx: 114, cy: 66, rx: 9, ry: 7 } },
    parts: {
      head: 'M18 58c-6 0-8-4-6-8 2-3 6-4 10-4 1-9 9-16 20-16 12 0 20 8 20 18s-8 18-20 18c-11 0-19-4-24-8z',
      cheek: 'M22 56c0-6 6-10 14-10s14 4 14 10-6 10-14 10-14-4-14-10z',
      hock: 'M64 80h14v16H64zM132 80h14v16h-14z',
      trotter: 'M63 96h16v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3zM131 96h16v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z'
    },
    extras: (
      <>
        <path d="M40 26c-4-6-3-11 1-13 4 3 5 8 3 13z" fill="#c9a89a" />
        <circle cx="26" cy="46" r="2" fill="#6b5348" />
        <path d="M14 52c3-1 5 0 6 2" stroke="#6b5348" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M158 34c8-2 12 2 11 7-1 4-6 5-8 2" stroke="#c9a89a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </>
    )
  },
  cow: {
    label: 'Beef · 牛',
    torso: { x: 42, y: 22, w: 118, h: 58, r: 14 },
    names: {
      chuck: ['Chuck', '肩胛（含板腱）'],
      rib: ['Rib', '肋部（肋眼・牛小排）'],
      brisket: ['Brisket', '胸腹（牛腩）'],
      sirloin: ['Sirloin', '腰脊（沙朗）'],
      flank: ['Flank', '腹脅'],
      rump: ['Rump', '臀肉'],
      round: ['Round', '後腿（topside・silverside）'],
      fillet: ['Fillet', '腰內肉（菲力）'],
      shin: ['Shin', '小腿（牛腱・骨髓）'],
      oxtail: ['Oxtail', '牛尾'],
      cheek: ['Cheek', '頰肉']
    },
    regions: {
      chuck: { x: 42, y: 22, w: 28, h: 58 },
      rib: { x: 70, y: 22, w: 26, h: 30 },
      brisket: { x: 70, y: 52, w: 26, h: 28 },
      sirloin: { x: 96, y: 22, w: 24, h: 30 },
      flank: { x: 96, y: 52, w: 32, h: 28 },
      rump: { x: 120, y: 22, w: 22, h: 30 },
      round: { x: 142, y: 22, w: 18, h: 58 }
    },
    blobs: { fillet: { cx: 118, cy: 48, rx: 17, ry: 5 } },
    parts: {
      cheek: 'M12 52c0-7 6-12 14-12s14 5 14 12-6 12-14 12-14-5-14-12z',
      shin: 'M58 80h13v18H58zM130 80h13v18h-13z',
      oxtail: 'M160 30c9-3 15 3 14 11-1 7-7 11-12 8'
    },
    extras: (
      <>
        <path d="M40 30c-10-2-18 4-20 14-2 9 4 16 14 16 8 0 14-5 15-13z" fill="#b99a86" />
        <path d="M20 30c-5-6-4-11 0-12 3 4 4 8 2 12zM40 26c4-6 9-8 12-6-2 5-6 8-10 9z" fill="#8f7462" />
        <circle cx="30" cy="40" r="2.2" fill="#5a4436" />
        <path d="M58 98h14v6H58zM130 98h14v6h-14z" fill="#5a4436" />
      </>
    )
  },
  lamb: {
    label: 'Lamb · 羊',
    torso: { x: 50, y: 26, w: 102, h: 50, r: 22 },
    names: {
      neck: ['Neck', '頸部'],
      shoulder: ['Shoulder', '肩部'],
      rack: ['Rack', '肋排'],
      loin: ['Loin', '腰脊（羊排）'],
      breast: ['Breast', '腹肉'],
      leg: ['Leg', '腿部'],
      shank: ['Shank', '小腿（羊腱）']
    },
    regions: {
      neck: { x: 50, y: 26, w: 18, h: 50 },
      shoulder: { x: 68, y: 26, w: 24, h: 50 },
      rack: { x: 92, y: 26, w: 22, h: 24 },
      breast: { x: 92, y: 50, w: 42, h: 26 },
      loin: { x: 114, y: 26, w: 20, h: 24 },
      leg: { x: 134, y: 26, w: 18, h: 50 }
    },
    parts: {
      shank: 'M66 76h12v18H66zM130 76h12v18h-12z'
    },
    extras: (
      <>
        <path d="M48 40c-8-4-16 0-18 8-2 9 4 15 13 15 7 0 12-4 13-11z" fill="#d8cfc2" />
        <circle cx="38" cy="46" r="2" fill="#5a4436" />
        <path d="M30 40c-4-4-3-9 1-10 2 4 2 7-1 10z" fill="#a89a89" />
        <path d="M66 94h12v6H66zM130 94h12v6h-12z" fill="#5a4436" />
        <circle cx="70" cy="34" r="7" fill="#f0ece2" opacity="0.5" />
        <circle cx="110" cy="32" r="8" fill="#f0ece2" opacity="0.5" />
      </>
    )
  },
  chicken: {
    label: 'Chicken · 雞',
    torso: { x: 54, y: 22, w: 92, h: 60, r: 30 },
    names: {
      'c-breast': ['Breast', '雞胸（含鴨胸・火雞胸）'],
      'c-wing': ['Wing', '雞翅'],
      'c-thigh': ['Thigh', '大腿'],
      'c-drum': ['Drumstick', '棒棒腿'],
      'c-whole': ['Whole bird', '全雞（骨架・內臟）']
    },
    aliases: { 'c-whole': ['c-breast', 'c-wing', 'c-thigh', 'c-drum'] },
    regions: {
      'c-breast': { x: 54, y: 22, w: 42, h: 60 },
      'c-wing': { x: 96, y: 22, w: 50, h: 26 },
      'c-thigh': { x: 96, y: 48, w: 50, h: 34 }
    },
    parts: {
      'c-drum': 'M116 78h18v22a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6z'
    },
    extras: (
      <>
        <path d="M62 40c-10-2-18-6-20-14-2-7 3-12 10-12s12 5 13 12z" fill="#f0e2cf" />
        <path d="M50 16c-2-5 0-8 3-8 2 3 2 6 0 8zM56 14c-1-5 1-8 4-7 1 3 0 6-2 7z" fill="#d8544f" />
        <path d="M40 22l-8 3 8 3z" fill="#e0a95f" />
        <circle cx="47" cy="22" r="1.8" fill="#5a4436" />
        <path d="M146 40c10-8 18-10 22-6-4 4-6 9-6 14-6 0-12-3-16-8z" fill="#f0e2cf" />
      </>
    )
  }
}

const BASE = '#c9a89a'
const TILE = 'rgba(255,255,255,0.06)'
const HI = '#6c8cff'

export function chartLabel(animal) {
  return ANIMALS[animal]?.label || ''
}

// Human-readable name for a cut id, e.g. ['Belly', '腹部（五花）'].
export function regionName(animal, id) {
  return ANIMALS[animal]?.names?.[id] || null
}

// `highlight` is a cut id; everything else is drawn in the muted base colour.
// Passing `onPick` turns every region into a clickable hit area.
export default function ButcherChart({ animal, highlight, height = 150, onPick }) {
  const a = ANIMALS[animal]
  if (!a) return null
  const clipId = `torso-${animal}`
  const t = a.torso
  // An alias lights up several regions at once (e.g. a whole chicken).
  const lit = (id) => highlight === id || (a.aliases?.[highlight] || []).includes(id)
  const nameOf = (id) => (a.names?.[id] ? a.names[id].join(' · ') : id)
  const hit = (id) =>
    onPick
      ? {
          className: 'hit',
          role: 'button',
          tabIndex: 0,
          onClick: () => onPick(id),
          onKeyDown: (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onPick(id)
            }
          }
        }
      : {}

  return (
    <svg
      viewBox="0 0 200 120"
      height={height}
      className={`butcher-chart${onPick ? ' interactive' : ''}`}
      aria-label={a.label}
    >
      {a.extras}
      {Object.entries(a.parts || {}).map(([id, d]) => (
        <path key={id} d={d} fill={lit(id) ? HI : BASE} stroke="rgba(0,0,0,0.25)" strokeWidth="1" {...hit(id)}>
          <title>{nameOf(id)}</title>
        </path>
      ))}
      <clipPath id={clipId}>
        <rect x={t.x} y={t.y} width={t.w} height={t.h} rx={t.r} />
      </clipPath>
      <rect x={t.x} y={t.y} width={t.w} height={t.h} rx={t.r} fill={BASE} />
      <g clipPath={`url(#${clipId})`}>
        {Object.entries(a.regions).map(([id, r]) => (
          <rect
            key={id}
            x={r.x} y={r.y} width={r.w} height={r.h}
            fill={lit(id) ? HI : TILE}
            stroke="rgba(0,0,0,0.22)" strokeWidth="1"
            {...hit(id)}
          >
            <title>{nameOf(id)}</title>
          </rect>
        ))}
        {Object.entries(a.blobs || {}).map(([id, b]) => (
          <ellipse
            key={id}
            cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry}
            fill={lit(id) ? HI : TILE}
            stroke="rgba(0,0,0,0.25)" strokeWidth="1"
            {...hit(id)}
          >
            <title>{nameOf(id)}</title>
          </ellipse>
        ))}
      </g>
      <rect
        x={t.x} y={t.y} width={t.w} height={t.h} rx={t.r}
        fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" pointerEvents="none"
      />
    </svg>
  )
}
