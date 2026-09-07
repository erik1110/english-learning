// Flat SVG illustrations for the Asian grocery aisle and the household area.
// 64×64 viewBox, same convention as the other art sets.
const L = {
  glass: '#4a5464', label: '#e8e2d0', sauce: '#5a3a26', red: '#c2543f',
  steel: '#c3ccd9', dark: '#8d97a8', pipe: '#7f8a9c', handle: '#3d4557',
  cream: '#f2eeda', green: '#4f9a52', wood: '#c08b52'
}

// A generic bottle: body colour + cap + label panel.
const bottle = (body, cap, labelText) => (
  <>
    <rect x="26" y="6" width="12" height="7" rx="2" fill={cap} />
    <path d="M27 13h10l6 8v30c0 4-3 7-7 7H28c-4 0-7-3-7-7V21z" fill={body} />
    <rect x="23" y="28" width="18" height="16" rx="2" fill={L.label} />
    {labelText}
  </>
)

export const LIFE = {
  /* ---------- Asian supermarket ---------- */
  soysauce: bottle('#3d2a1e', '#c2543f', <path d="M27 34h10M27 39h7" stroke="#8d7f66" strokeWidth="2" strokeLinecap="round" />),
  oystersauce: bottle('#5a3a1e', '#e0a95f', <path d="M32 31a5 5 0 0 0 0 10 6 6 0 0 1 0-10z" fill="#8d7f66" />),
  fishsauce: bottle('#8a5a22', '#e8e2d0', <path d="M25 36c4-4 9-4 13 0-4 4-9 4-13 0z" fill="#8d7f66" />),
  sesameoil: bottle('#c9922f', '#3d4557', <path d="M28 33c3-2 6-2 8 0M27 39h10" stroke="#a58348" strokeWidth="2" strokeLinecap="round" />),
  ricevinegar: bottle('#e3d9b8', '#57a45e', <path d="M27 34h10M29 39h6" stroke="#9aa06f" strokeWidth="2" strokeLinecap="round" />),
  doubanjiang: (
    <>
      <rect x="14" y="18" width="36" height="8" rx="3" fill={L.red} />
      <path d="M17 26h30v24c0 4-3 6-7 6H24c-4 0-7-2-7-6z" fill="#8f3626" />
      <rect x="21" y="32" width="22" height="16" rx="2" fill={L.label} />
      <circle cx="32" cy="40" r="5" fill={L.red} />
    </>
  ),
  gochujang: (
    <>
      <rect x="14" y="16" width="36" height="9" rx="4" fill="#e0a95f" />
      <path d="M17 25h30v25c0 4-3 6-7 6H24c-4 0-7-2-7-6z" fill="#c2352c" />
      <rect x="21" y="31" width="22" height="15" rx="2" fill={L.label} />
      <path d="M26 38h12M26 42h8" stroke="#c2352c" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  misopaste: (
    <>
      <path d="M14 22h36v26c0 5-4 8-9 8H23c-5 0-9-3-9-8z" fill="#d8b672" />
      <rect x="12" y="16" width="40" height="8" rx="3" fill="#a8742f" />
      <rect x="20" y="30" width="24" height="16" rx="2" fill={L.label} />
      <path d="M26 36c3-3 7-3 10 0-3 3-7 3-10 0z" fill="#c19349" />
    </>
  ),
  ricebag: (
    <>
      <path d="M16 18h32c2 0 3 1 3 3v29c0 4-3 6-7 6H20c-4 0-7-2-7-6V21c0-2 1-3 3-3z" fill="#e8dfc4" />
      <path d="M16 18c4-4 8-6 16-6s12 2 16 6z" fill="#d5c9a4" />
      <rect x="20" y="30" width="24" height="16" rx="2" fill="#f6f2e4" />
      <ellipse cx="28" cy="38" rx="3" ry="1.8" transform="rotate(-25 28 38)" fill="#cbbf99" />
      <ellipse cx="36" cy="38" rx="3" ry="1.8" transform="rotate(25 36 38)" fill="#cbbf99" />
    </>
  ),
  ricenoodles: (
    <>
      <path d="M10 26h44v6H10zM10 36h44v6H10z" fill="#f0e9d4" />
      <path d="M10 26h44v6H10z" fill="#f6f2e4" />
      <path d="M18 26v16M28 26v16M38 26v16M46 26v16" stroke="#ddd3b6" strokeWidth="1.8" />
      <path d="M8 22c8-4 16-4 24 0 8 4 16 4 24 0v4c-8 4-16 4-24 0-8-4-16-4-24 0z" fill="#e8dfc4" />
    </>
  ),
  glassnoodles: (
    <>
      <path d="M14 20c6 10 6 24 0 34M22 18c6 12 6 26 0 36M32 16c6 12 6 28 0 38M42 18c6 12 6 26 0 36M50 20c6 10 6 24 0 34" stroke="#dfe7f2" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
      <rect x="8" y="30" width="48" height="8" rx="3" fill="#c2543f" opacity="0.75" />
    </>
  ),
  udon: (
    <>
      <path d="M8 34h48c0 12-10 20-24 20S8 46 8 34z" fill="#e8e2d0" />
      <ellipse cx="32" cy="34" rx="24" ry="6" fill="#f2eeda" />
      <path d="M16 30c6-8 12-12 16-12M24 30c4-9 8-14 12-16M34 31c4-8 8-12 12-13" stroke="#f6f2e4" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M16 30c6-8 12-12 16-12M24 30c4-9 8-14 12-16" stroke="#ded6bd" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </>
  ),
  shiitake: (
    <>
      <path d="M26 34h12v14c0 4-2 6-6 6s-6-2-6-6z" fill="#e0d3b4" />
      <path d="M32 10c13 0 21 9 21 18 0 6-5 9-21 9s-21-3-21-9c0-9 8-18 21-18z" fill="#7a4f2c" />
      <path d="M20 26c4 2 8-2 6-6M40 22c-3 3-1 8 4 8M30 20c3 2 3 6 0 8" stroke="#e8dcc0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  woodear: (
    <>
      <path d="M14 30c0-10 9-16 18-14 10 2 16 10 14 19-2 8-10 12-18 10-8-2-14-8-14-15z" fill="#3d2a24" />
      <path d="M22 28c6-4 12-2 16 4-5 6-12 7-18 3" fill="#5a4038" />
      <path d="M18 38c5 3 11 3 16 0" stroke="#6b4d42" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  nori: (
    <>
      <rect x="12" y="10" width="40" height="44" rx="3" fill="#1f3a2e" />
      <rect x="16" y="14" width="32" height="36" rx="2" fill="#2c5140" />
      <path d="M20 20h24M20 28h24M20 36h20M20 44h24" stroke="#3d6b54" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  springrollwrapper: (
    <>
      <circle cx="32" cy="32" r="22" fill="#f2eeda" opacity="0.9" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#ded6bd" strokeWidth="1.6" />
      <path d="M18 22c8 6 18 8 28 6M14 34c10 6 24 6 34 0M20 44c8 3 16 3 24 0" stroke="#e2dac3" strokeWidth="2" fill="none" />
    </>
  ),
  tofu: (
    <>
      <path d="M10 24l22-10 22 10-22 10z" fill="#f6f2e4" />
      <path d="M10 24v18l22 10V34z" fill="#e8e2d0" />
      <path d="M54 24v18L32 52V34z" fill="#ddd6bd" />
      <path d="M20 29l22-10" stroke="#e8e2d0" strokeWidth="1.6" />
    </>
  ),
  beansprouts: (
    <>
      <path d="M12 46c8-10 18-16 30-18M18 50c6-12 16-20 28-22M26 52c4-12 12-20 22-24" stroke="#f2eeda" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="44" cy="27" rx="5" ry="3.5" transform="rotate(-30 44 27)" fill="#c9d98d" />
      <ellipse cx="47" cy="30" rx="5" ry="3.5" transform="rotate(-30 47 30)" fill="#a9c973" />
      <ellipse cx="49" cy="35" rx="5" ry="3.5" transform="rotate(-20 49 35)" fill="#c9d98d" />
    </>
  ),
  daikon: (
    <>
      <path d="M28 12c-2-4-2-7 0-9 2 3 2 6 0 9zM36 14c2-5 5-7 8-7-1 4-4 7-8 8z" fill={L.green} />
      <path d="M32 16c8 0 13 4 13 9L37 54c-1 4-4 6-6 6s-5-2-6-6l-8-29c0-5 6-9 15-9z" fill="#f6f2e4" />
      <path d="M24 24h16M26 34h12M28 43h8" stroke="#ded6bd" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  lotusroot: (
    <>
      <circle cx="32" cy="32" r="22" fill="#f0e8d0" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#ded0ac" strokeWidth="2" />
      <circle cx="32" cy="19" r="4.5" fill="#c9bd9a" /><circle cx="43" cy="26" r="4.5" fill="#c9bd9a" />
      <circle cx="43" cy="39" r="4.5" fill="#c9bd9a" /><circle cx="32" cy="46" r="4.5" fill="#c9bd9a" />
      <circle cx="21" cy="39" r="4.5" fill="#c9bd9a" /><circle cx="21" cy="26" r="4.5" fill="#c9bd9a" />
      <circle cx="32" cy="32" r="5" fill="#c9bd9a" />
    </>
  ),
  taro: (
    <>
      <path d="M32 16c11 0 18 9 18 20s-8 18-18 18-18-7-18-18 7-20 18-20z" fill="#8f7a6b" />
      <path d="M18 28h28M17 36h30M19 44h26" stroke="#6b5749" strokeWidth="2" />
      <path d="M32 16c-2-5-1-9 2-11 2 4 2 8-2 11z" fill={L.green} />
      <path d="M22 24c4-3 8-4 12-3" stroke="#a89283" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  bambooshoot: (
    <>
      <path d="M32 6c10 8 16 22 16 34 0 10-7 16-16 16s-16-6-16-16c0-12 6-26 16-34z" fill="#e8dfc4" />
      <path d="M32 6c-6 8-10 20-10 32 0 8 4 14 10 16z" fill="#d5c9a4" />
      <path d="M22 26c6 3 14 3 20 0M19 38c8 4 18 4 26 0" stroke="#c2b28a" strokeWidth="2" fill="none" />
      <path d="M32 8v46" stroke="#c9bd9a" strokeWidth="1.5" />
    </>
  ),
  lemongrass: (
    <>
      <path d="M20 56V26c0-4 2-6 5-6s5 2 5 6v30zM34 56V24c0-4 2-6 5-6s5 2 5 6v32z" fill="#d5dcb4" />
      <path d="M25 20c-2-8 0-14 2-16 3 5 3 12 1 16zM39 18c2-8 5-13 8-14-1 6-4 12-8 14z" fill="#8fb35e" />
      <path d="M20 34h10M34 32h10" stroke="#b8c493" strokeWidth="1.8" />
    </>
  ),
  dumpling: (
    <>
      <path d="M10 40c0-12 10-20 22-20s22 8 22 20c0 4-2 6-6 6H16c-4 0-6-2-6-6z" fill="#f2eeda" />
      <path d="M14 24c4 4 4 10 0 14M22 20c4 5 4 12 0 18M32 18c4 6 4 14 0 20M42 20c-4 5-4 12 0 18M50 24c-4 4-4 10 0 14" stroke="#ded6bd" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M8 46h48v4c0 3-2 4-5 4H13c-3 0-5-1-5-4z" fill="#ded6bd" />
    </>
  ),
  centuryegg: (
    <>
      <path d="M32 8c10 0 17 12 17 24 0 13-7 22-17 22s-17-9-17-22c0-12 7-24 17-24z" fill="#3d4a3f" />
      <path d="M32 18c6 0 10 8 10 16s-4 14-10 14-10-6-10-14 4-16 10-16z" fill="#5a6b4f" />
      <ellipse cx="32" cy="34" rx="6" ry="8" fill="#7a6b3a" />
      <path d="M24 22c3 4 3 9 0 13" stroke="#6b7a5c" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  fishball: (
    <>
      <circle cx="22" cy="38" r="12" fill="#f2eeda" />
      <circle cx="42" cy="32" r="11" fill="#e8e2d0" />
      <circle cx="34" cy="50" r="9" fill="#f2eeda" />
      <path d="M16 34c2-3 5-4 8-4M37 28c2-2 5-3 7-2" stroke="#f9f6ec" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M14 14l36 8" stroke="#c3ccd9" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  /* ---------- Household ---------- */
  drain: (
    <>
      <path d="M8 16h48v10H8z" fill={L.steel} />
      <path d="M22 26h20v22c0 4-3 6-7 6h-6c-4 0-7-2-7-6z" fill={L.pipe} />
      <path d="M22 40h20" stroke="#5f6b7f" strokeWidth="2" />
      <circle cx="32" cy="46" r="6" fill="#4a3a2c" />
      <circle cx="27" cy="43" r="3" fill="#5a4838" /><circle cx="36" cy="48" r="3.5" fill="#5a4838" />
      <path d="M14 8c2 4 2 6 0 8M32 6c2 5 2 7 0 10M50 8c2 4 2 6 0 8" stroke="#7fd0ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  plughole: (
    <>
      <circle cx="32" cy="32" r="24" fill={L.steel} />
      <circle cx="32" cy="32" r="16" fill="#7f8a9c" />
      <circle cx="32" cy="32" r="5" fill={L.handle} />
      <path d="M32 16v8M32 40v8M16 32h8M40 32h8M21 21l6 6M43 43l-6-6M43 21l-6 6M21 43l6-6" stroke={L.handle} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  ubend: (
    <>
      <path d="M18 8v22a14 14 0 0 0 28 0V8" stroke={L.pipe} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M18 8v22a14 14 0 0 0 28 0V8" stroke="#9aa4b5" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="12" y="26" width="12" height="6" rx="2" fill={L.steel} />
      <rect x="40" y="26" width="12" height="6" rx="2" fill={L.steel} />
      <path d="M24 40c8 4 12 4 18 0" stroke="#5f6b7f" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  ),
  plunger: (
    <>
      <path d="M18 34h28c0 10-6 18-14 18s-14-8-14-18z" fill={L.red} />
      <ellipse cx="32" cy="34" rx="14" ry="4" fill="#a8432f" />
      <rect x="28" y="4" width="8" height="32" rx="4" fill={L.wood} />
      <rect x="28" y="4" width="8" height="6" rx="3" fill="#a5763f" />
    </>
  ),
  tap: (
    <>
      <path d="M14 46h20V30c0-8 6-14 14-14h6v8h-6c-4 0-6 3-6 6v16H14z" fill={L.steel} />
      <rect x="10" y="44" width="28" height="6" rx="3" fill={L.dark} />
      <rect x="44" y="8" width="12" height="6" rx="3" fill={L.dark} />
      <path d="M24 52c2 3 2 5 0 6" stroke="#7fd0ff" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  ),
  mould: (
    <>
      <rect x="8" y="8" width="48" height="48" rx="4" fill="#e8e6df" />
      <path d="M8 8h20c-2 10-8 16-20 18z" fill="#4a4a44" opacity="0.55" />
      <circle cx="16" cy="20" r="6" fill="#3d3d38" opacity="0.7" />
      <circle cx="26" cy="14" r="4.5" fill="#3d3d38" opacity="0.6" />
      <circle cx="12" cy="32" r="4" fill="#3d3d38" opacity="0.5" />
      <circle cx="24" cy="26" r="3" fill="#3d3d38" opacity="0.45" />
      <path d="M8 8h48v48" fill="none" stroke="#cfcdc4" strokeWidth="2" />
    </>
  ),
  bin: (
    <>
      <path d="M14 20h36l-3 32c0 3-2 4-5 4H22c-3 0-5-1-5-4z" fill="#5f6b7f" />
      <rect x="10" y="14" width="44" height="7" rx="3" fill={L.dark} />
      <rect x="26" y="8" width="12" height="6" rx="2" fill={L.dark} />
      <path d="M25 28v20M32 28v20M39 28v20" stroke="#4a5464" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  sponge: (
    <>
      <path d="M8 24h48v20c0 4-3 6-7 6H15c-4 0-7-2-7-6z" fill="#e8c447" />
      <path d="M8 18h48v8H8z" fill="#57a45e" />
      <circle cx="18" cy="34" r="2.4" fill="#c9a832" /><circle cx="30" cy="38" r="2.4" fill="#c9a832" />
      <circle cx="42" cy="33" r="2.4" fill="#c9a832" /><circle cx="50" cy="41" r="2" fill="#c9a832" />
      <circle cx="24" cy="44" r="2" fill="#c9a832" />
    </>
  ),
  router: (
    <>
      <path d="M8 38h48v12c0 3-2 5-5 5H13c-3 0-5-2-5-5z" fill={L.handle} />
      <circle cx="18" cy="44" r="2.6" fill="#6ce0a0" /><circle cx="27" cy="44" r="2.6" fill="#6ce0a0" />
      <circle cx="36" cy="44" r="2.6" fill="#ffce4a" />
      <path d="M18 36V22M46 36V22" stroke={L.dark} strokeWidth="4" strokeLinecap="round" />
      <path d="M28 20c4-6 10-6 14 0M24 14c7-9 16-9 23 0" stroke="#6c8cff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
    </>
  ),
  fusebox: (
    <>
      <rect x="8" y="12" width="48" height="40" rx="4" fill="#e2e7ef" />
      <rect x="8" y="12" width="48" height="9" rx="4" fill={L.dark} />
      <rect x="14" y="26" width="8" height="18" rx="2" fill="#9aa4b5" />
      <rect x="28" y="26" width="8" height="18" rx="2" fill="#9aa4b5" />
      <rect x="42" y="26" width="8" height="18" rx="2" fill="#9aa4b5" />
      <rect x="15" y="28" width="6" height="6" rx="1.5" fill="#6ce0a0" />
      <rect x="29" y="36" width="6" height="6" rx="1.5" fill="#ff6b81" />
      <rect x="43" y="28" width="6" height="6" rx="1.5" fill="#6ce0a0" />
    </>
  ),
  socket: (
    <>
      <rect x="10" y="12" width="44" height="40" rx="6" fill="#f0f2f6" />
      <rect x="26" y="20" width="12" height="5" rx="2" fill={L.handle} />
      <rect x="19" y="31" width="6" height="10" rx="2" fill={L.handle} />
      <rect x="39" y="31" width="6" height="10" rx="2" fill={L.handle} />
      <rect x="46" y="18" width="5" height="9" rx="2" fill={L.red} />
    </>
  ),
  radiator: (
    <>
      <rect x="10" y="16" width="44" height="32" rx="4" fill={L.steel} />
      <path d="M18 18v28M26 18v28M34 18v28M42 18v28" stroke="#9aa4b5" strokeWidth="4" />
      <rect x="8" y="14" width="48" height="5" rx="2" fill={L.dark} />
      <rect x="8" y="45" width="48" height="5" rx="2" fill={L.dark} />
      <circle cx="53" cy="24" r="3.5" fill="#e0a95f" />
    </>
  ),
  boiler: (
    <>
      <rect x="12" y="8" width="40" height="44" rx="4" fill="#f0f2f6" />
      <rect x="18" y="16" width="28" height="12" rx="2" fill={L.handle} />
      <path d="M23 22h18" stroke="#6ce0a0" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="38" r="4" fill="#9aa4b5" /><circle cx="36" cy="38" r="4" fill="#9aa4b5" />
      <path d="M18 52v6M46 52v6" stroke={L.pipe} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  thermostat: (
    <>
      <circle cx="32" cy="32" r="24" fill="#f0f2f6" />
      <circle cx="32" cy="32" r="17" fill={L.handle} />
      <path d="M26 30h12M27 37h10" stroke="#ffce4a" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 8v5M52 32h-5M32 56v-5M12 32h5" stroke="#9aa4b5" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  hoover: (
    <>
      <path d="M10 34h30v12c0 4-3 6-7 6H17c-4 0-7-2-7-6z" fill={L.red} />
      <circle cx="18" cy="46" r="6" fill={L.handle} /><circle cx="34" cy="46" r="6" fill={L.handle} />
      <path d="M38 36c8-2 12-8 12-16" stroke={L.dark} strokeWidth="5" fill="none" strokeLinecap="round" />
      <rect x="45" y="12" width="10" height="10" rx="3" fill={L.dark} />
      <circle cx="24" cy="38" r="4" fill="#e8e2d0" />
    </>
  ),
  mop: (
    <>
      <rect x="28" y="4" width="8" height="34" rx="4" fill={L.pipe} />
      <path d="M18 36h28l-2 6H20z" fill={L.dark} />
      <path d="M20 42c0 8 2 14 4 16M27 42c0 9 1 15 2 17M37 42c0 9-1 15-2 17M44 42c0 8-2 14-4 16" stroke="#e8e2d0" strokeWidth="4" fill="none" strokeLinecap="round" />
    </>
  )
}
