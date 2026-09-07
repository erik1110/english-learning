// Flat SVG illustrations for the supermarket produce aisle.
// Every icon is drawn inside a 64×64 viewBox so <ItemArt> can size them freely.
const G = { dark: '#2f7d4f', mid: '#43a86a', light: '#7cc47f', pale: '#a8d5a2' }
const leaves = (
  <>
    <path d="M32 22c-4-5-9-7-13-7 1 5 5 9 10 10z" fill={G.mid} />
    <path d="M32 22c4-5 9-7 13-7-1 5-5 9-10 10z" fill={G.dark} />
    <path d="M32 22c0-6 2-11 4-14 2 5 2 11 0 15z" fill={G.light} />
  </>
)

export const VEG = {
  carrot: (
    <>
      {leaves}
      <path d="M32 21c5 0 9 2 9 4L34 56c-1 3-3 3-4 0L23 25c0-2 4-4 9-4z" fill="#e08b3a" />
      <path d="M28 30h6M29 38h5M30 45h3" stroke="#c06f26" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  parsnip: (
    <>
      {leaves}
      <path d="M32 21c6 0 10 2 10 4L34 56c-1 3-3 3-4 0L22 25c0-2 4-4 10-4z" fill="#ecdfba" />
      <path d="M27 30h8M29 39h5" stroke="#cdb98a" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  swede: (
    <>
      <path d="M32 12c2 4 2 6 0 8" stroke={G.dark} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M32 18c11 0 18 8 18 17s-8 15-18 15-18-6-18-15 7-17 18-17z" fill="#e6cf7d" />
      <path d="M32 18c11 0 18 8 18 17 0 2 0 3-1 5-11 3-23 3-34 0-1-2-1-3-1-5 0-9 7-17 18-17z" fill="#9d7fbf" />
      <path d="M32 50c1 4 2 6 4 8" stroke="#c9ad63" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  turnip: (
    <>
      <path d="M28 14c2 4 3 5 4 7M36 14c-2 4-3 5-4 7" stroke={G.mid} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M32 20c10 0 17 7 17 15s-7 14-17 14-17-6-17-14 7-15 17-15z" fill="#f4f0e6" />
      <path d="M32 20c10 0 17 7 17 15 0 1 0 2-1 3-10 3-22 3-32 0-1-1-1-2-1-3 0-8 7-15 17-15z" fill="#a98cc9" />
      <path d="M32 49c0 4 1 6 3 8" stroke="#ddd6c5" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  celeriac: (
    <>
      <path d="M26 14l3 8M32 11v11M38 14l-3 8" stroke={G.mid} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 21c11 0 18 7 18 16 0 8-8 14-18 14s-18-6-18-14c0-9 7-16 18-16z" fill="#ddd2b4" />
      <path d="M20 34c4 2 5 5 3 8M44 33c-4 2-5 6-3 9M30 42c3-1 6-1 8 1" stroke="#bcae8c" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  beetroot: (
    <>
      <path d="M24 16c3 3 5 6 6 9M40 15c-3 4-5 7-6 10" stroke={G.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M23 15c-4-4-8-5-11-4 2 4 5 7 9 8zM41 14c4-4 8-6 12-5-2 4-6 8-10 8z" fill="#3d8a52" />
      <path d="M32 22c9 0 15 6 15 13 0 8-7 14-15 19-8-5-15-11-15-19 0-7 6-13 15-13z" fill="#9c2b5e" />
      <path d="M32 54c1 4 2 6 4 8" stroke="#7d2049" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  potato: (
    <>
      <ellipse cx="32" cy="34" rx="21" ry="15" transform="rotate(-12 32 34)" fill="#c79a63" />
      <ellipse cx="24" cy="30" rx="2.4" ry="1.6" fill="#a3763f" />
      <ellipse cx="37" cy="28" rx="2" ry="1.4" fill="#a3763f" />
      <ellipse cx="33" cy="40" rx="2.2" ry="1.5" fill="#a3763f" />
      <ellipse cx="44" cy="36" rx="1.8" ry="1.3" fill="#a3763f" />
    </>
  ),
  newpotato: (
    <>
      <ellipse cx="24" cy="38" rx="12" ry="9" transform="rotate(-14 24 38)" fill="#e0c48c" />
      <ellipse cx="42" cy="28" rx="11" ry="8" transform="rotate(12 42 28)" fill="#d8ba7e" />
      <ellipse cx="21" cy="36" rx="1.6" ry="1.2" fill="#bb9c62" />
      <ellipse cx="44" cy="27" rx="1.5" ry="1.1" fill="#b59a63" />
    </>
  ),
  sweetpotato: (
    <>
      <path d="M12 40c0-8 10-16 22-16s18 5 18 10c0 7-9 12-20 12S12 46 12 40z" fill="#c96a45" />
      <path d="M10 41c-2-1-3-3-2-4 2-1 4 0 5 2zM54 32c2-1 4 0 4 2s-2 3-4 2z" fill="#a95534" />
      <path d="M22 34c6-2 12-2 18 1" stroke="#a95534" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </>
  ),
  radish: (
    <>
      <path d="M26 16c3 3 5 6 5 9M39 15c-3 4-5 7-6 10" stroke={G.dark} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M25 16c-4-4-9-5-12-4 2 5 6 8 10 8zM40 15c4-4 9-6 13-5-2 5-7 8-11 8z" fill="#3d8a52" />
      <path d="M32 23c8 0 13 6 13 12 0 6-6 11-13 11s-13-5-13-11c0-6 5-12 13-12z" fill="#d63f52" />
      <path d="M25 42c4 3 10 3 14 0-2 6-5 10-7 12-2-2-5-6-7-12z" fill="#f4f0e6" />
    </>
  ),
  ginger: (
    <>
      <path d="M16 34c0-7 7-11 14-9 4 1 5 5 10 5 6 0 9 4 8 9-1 6-8 8-14 6-5-2-6-5-11-5-5 0-7-3-7-6z" fill="#d9b47e" />
      <path d="M22 26c-1-4 1-7 4-7 2 3 2 6 0 8zM46 30c3-2 6-1 7 2-2 3-5 3-7 1z" fill="#c69f68" />
      <path d="M28 34c4 1 8 1 12-1" stroke="#b8905a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </>
  ),
  broccoli: (
    <>
      <path d="M26 36h12v14c0 3-2 5-6 5s-6-2-6-5z" fill="#8ab86a" />
      <circle cx="22" cy="28" r="9" fill={G.dark} /><circle cx="42" cy="28" r="9" fill={G.dark} />
      <circle cx="32" cy="22" r="11" fill={G.mid} />
      <circle cx="26" cy="20" r="4" fill={G.light} /><circle cx="38" cy="24" r="4" fill={G.light} />
      <circle cx="32" cy="31" r="4" fill={G.light} /><circle cx="45" cy="31" r="3" fill={G.mid} />
    </>
  ),
  tenderstem: (
    <>
      <path d="M20 56c2-14 4-22 6-30M32 56c0-14 0-24 0-32M44 56c-2-14-4-22-6-30" stroke="#8ab86a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="26" cy="22" r="6" fill={G.dark} /><circle cx="32" cy="20" r="6.5" fill={G.mid} /><circle cx="38" cy="23" r="6" fill={G.dark} />
      <circle cx="24" cy="20" r="2.4" fill={G.light} /><circle cx="34" cy="18" r="2.4" fill={G.light} />
    </>
  ),
  cauliflower: (
    <>
      <path d="M14 30c-2 10 4 18 12 18h12c8 0 14-8 12-18z" fill="#57a45e" />
      <path d="M18 32c-4-6 0-12 5-13 2-5 9-7 13-4 5-3 11 0 12 5 5 2 6 9 2 12z" fill="#f3ecd6" />
      <circle cx="25" cy="26" r="4.5" fill="#fbf7e9" /><circle cx="35" cy="23" r="5" fill="#fbf7e9" /><circle cx="43" cy="28" r="4" fill="#fbf7e9" />
      <circle cx="30" cy="31" r="4" fill="#fbf7e9" />
    </>
  ),
  sprouts: (
    <>
      <circle cx="21" cy="38" r="10" fill={G.mid} /><circle cx="43" cy="38" r="10" fill={G.mid} /><circle cx="32" cy="25" r="11" fill={G.dark} />
      <path d="M21 28v20M14 38h14" stroke="#2a6b42" strokeWidth="1.6" /><path d="M43 28v20M36 38h14" stroke="#2a6b42" strokeWidth="1.6" />
      <path d="M32 14v22M21 25h22" stroke="#215637" strokeWidth="1.6" />
    </>
  ),
  savoy: (
    <>
      <circle cx="32" cy="34" r="21" fill={G.mid} />
      <path d="M32 13c-6 6-9 14-9 21s3 14 9 20" stroke={G.dark} strokeWidth="2" fill="none" />
      <path d="M32 13c6 6 9 14 9 21s-3 14-9 20" stroke={G.dark} strokeWidth="2" fill="none" />
      <path d="M11 34c6-4 14-6 21-6s15 2 21 6" stroke={G.light} strokeWidth="2" fill="none" />
      <path d="M14 24c6 3 12 4 18 4s12-1 18-4" stroke={G.light} strokeWidth="1.8" fill="none" />
    </>
  ),
  redcabbage: (
    <>
      <circle cx="32" cy="34" r="21" fill="#8b4a92" />
      <path d="M32 13c-7 7-10 14-10 21s3 14 10 20M32 13c7 7 10 14 10 21s-3 14-10 20" stroke="#f0dcf2" strokeWidth="1.8" fill="none" />
      <path d="M11 34c6-4 14-6 21-6s15 2 21 6" stroke="#f0dcf2" strokeWidth="1.8" fill="none" />
      <path d="M32 13v42" stroke="#e6cbe9" strokeWidth="1.6" />
    </>
  ),
  springgreens: (
    <>
      <path d="M32 56V32" stroke="#8ab86a" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 34c-9 2-16-2-19-9 8-4 16-2 19 5zM32 34c9 2 16-2 19-9-8-4-16-2-19 5z" fill={G.mid} />
      <path d="M32 30c-7-2-11-8-11-15 7 1 11 7 11 13zM32 30c7-2 11-8 11-15-7 1-11 7-11 13z" fill={G.dark} />
    </>
  ),
  kale: (
    <>
      <path d="M32 56V26" stroke="#7aa85e" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 30c-6 0-10-2-13-5 2-2 2-5 0-7 4 0 7 1 9 3 2-3 3-6 4-9z" fill="#2c6b45" />
      <path d="M32 30c6 0 10-2 13-5-2-2-2-5 0-7-4 0-7 1-9 3-2-3-3-6-4-9z" fill="#388554" />
      <path d="M32 42c-5 0-9-2-12-5 4-1 8-1 12 1zM32 42c5 0 9-2 12-5-4-1-8-1-12 1z" fill="#2c6b45" />
    </>
  ),
  pakchoi: (
    <>
      <path d="M26 56c-3-8-3-16 0-24h12c3 8 3 16 0 24z" fill="#f2eddc" />
      <path d="M32 34c-8-2-13-9-13-18 8 1 13 8 13 15zM32 34c8-2 13-9 13-18-8 1-13 8-13 15z" fill={G.dark} />
      <path d="M32 32c-4-3-6-8-5-13 4 3 6 8 5 13z" fill={G.mid} />
      <path d="M29 40h6M29 47h6" stroke="#ddd6c0" strokeWidth="1.6" />
    </>
  ),
  spinach: (
    <>
      <path d="M30 50C14 46 8 34 12 20c16 0 26 10 26 24 0 3-1 5-2 6z" fill={G.dark} />
      <path d="M14 22c8 6 15 15 18 26" stroke="#8fd39a" strokeWidth="1.8" fill="none" />
      <path d="M40 48c10-4 14-12 12-22-10 1-16 8-16 16 0 2 1 4 2 5z" fill={G.mid} />
    </>
  ),
  rocket: (
    <>
      <path d="M32 56c0-16 0-26 0-34" stroke="#7aa85e" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 24c-4-2-6-6-6-10-3 1-5 0-6-2 4-2 8-2 11 0 1-3 1-6 1-8 2 4 3 8 3 12 3-2 6-3 9-3-1 3-3 5-6 6-1 3-3 5-6 5z" fill={G.dark} />
      <path d="M32 38c-5-1-8-4-10-8 5 0 9 2 11 5zM32 40c5-1 8-4 10-8-5 0-9 2-11 5z" fill={G.mid} />
    </>
  ),
  watercress: (
    <>
      <path d="M18 56c6-10 10-18 12-28M46 56c-6-10-10-18-12-24" stroke="#7aa85e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="24" r="6" fill={G.dark} /><circle cx="34" cy="17" r="6.5" fill={G.mid} /><circle cx="43" cy="26" r="6" fill={G.dark} />
      <circle cx="29" cy="32" r="5" fill={G.mid} /><circle cx="39" cy="35" r="4.5" fill={G.dark} />
    </>
  ),
  lettuce: (
    <>
      <path d="M32 56c-8 0-13-6-13-16 0-14 6-26 13-32 7 6 13 18 13 32 0 10-5 16-13 16z" fill={G.mid} />
      <path d="M32 8c-5 8-8 20-8 32 0 8 3 14 8 16z" fill={G.dark} />
      <path d="M32 12v42" stroke="#d8ecc6" strokeWidth="1.6" />
      <path d="M25 26c4 2 10 2 14 0M24 38c5 2 11 2 16 0" stroke="#d8ecc6" strokeWidth="1.4" fill="none" />
    </>
  ),
  courgette: (
    <>
      <path d="M18 12c3-1 5 1 6 4l1 4" stroke={G.dark} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M24 22c0-3 3-5 8-5s8 2 8 5l3 24c0 6-5 10-11 10s-11-4-11-10z" fill="#2f6b3c" />
      <path d="M28 20l2 36M35 20l2 36" stroke="#5d9c5a" strokeWidth="1.8" />
      <path d="M40 24l2 22" stroke="#5d9c5a" strokeWidth="1.5" />
    </>
  ),
  aubergine: (
    <>
      <path d="M32 20c-11 0-18 8-18 18 0 10 8 18 18 18s18-8 18-18c0-10-7-18-18-18z" fill="#5f3080" />
      <path d="M24 30c2-4 5-6 9-7" stroke="#a37cc0" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M24 20c-4-3-5-6-4-8 4 0 7 2 8 5 2-3 5-5 9-5-1 4-4 7-8 8z" fill="#3d8a52" />
      <path d="M32 20v-8" stroke="#3d8a52" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  squash: (
    <>
      <path d="M30 10c4 0 6 2 6 6v10c8 2 13 10 13 19 0 8-6 13-13 13s-13-5-13-13c0-7 3-13 8-17V16c0-4 2-6 6-6z" fill="#e0a95f" />
      <path d="M30 8c2-2 5-2 6 0-1 2-4 3-6 0z" fill={G.dark} />
      <path d="M27 30c-2 6-2 12 0 18M37 30c2 6 2 12 0 18" stroke="#c58e45" strokeWidth="1.6" fill="none" />
    </>
  ),
  pepper: (
    <>
      <path d="M20 30c0-6 5-10 12-10s12 4 12 10l2 12c0 8-6 14-14 14s-14-6-14-14z" fill="#d1483f" />
      <path d="M26 32c-1 8-1 14 1 20M38 32c1 8 1 14-1 20" stroke="#a83228" strokeWidth="1.8" fill="none" />
      <path d="M32 20v-6" stroke={G.dark} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M26 18c4-2 8-2 12 0-2 3-10 3-12 0z" fill={G.dark} />
    </>
  ),
  chilli: (
    <>
      <path d="M22 16c2 6 6 9 11 10 9 2 15 9 15 18 0 7-4 12-9 12-4 0-6-3-6-7 0-8-5-14-13-16-7-2-11-8-11-15 4 0 9-1 13-2z" fill="#cf3a33" />
      <path d="M22 16c-3-3-7-4-10-3 1 4 4 7 8 8z" fill={G.dark} />
      <path d="M24 22c5 4 10 7 14 12" stroke="#e8756c" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </>
  ),
  cucumber: (
    <>
      <path d="M23 10c-4 0-7 4-7 9v27c0 8 6 14 16 14s16-6 16-14V19c0-5-3-9-7-9z" fill="#3d7f42" />
      <path d="M22 20v28M31 18v32M40 20v28" stroke="#69ab5f" strokeWidth="1.8" />
      <circle cx="26" cy="30" r="1.4" fill="#8bc47c" /><circle cx="36" cy="38" r="1.4" fill="#8bc47c" /><circle cx="44" cy="26" r="1.4" fill="#8bc47c" />
    </>
  ),
  tomato: (
    <>
      <circle cx="32" cy="36" r="19" fill="#d63f2e" />
      <path d="M20 28c3-4 6-6 10-7" stroke="#ec7e6c" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M32 18l-8-6 6 5-9-1 9 4-6 3zM32 18l8-6-6 5 9-1-9 4 6 3z" fill={G.dark} />
      <path d="M32 18v-6" stroke={G.dark} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  cherrytomato: (
    <>
      <path d="M14 14c8 2 16 4 24 3" stroke="#5d8a3f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="30" r="10" fill="#d63f2e" /><circle cx="40" cy="26" r="9" fill="#c8382a" /><circle cx="32" cy="44" r="10" fill="#e04c38" />
      <path d="M20 20v-4M40 17v-3M32 34v-4" stroke={G.dark} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 27c2-3 4-4 6-4" stroke="#f08c7c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </>
  ),
  sweetcorn: (
    <>
      <path d="M32 8c7 0 12 7 12 18v18c0 8-5 12-12 12s-12-4-12-12V26C20 15 25 8 32 8z" fill="#eac44e" />
      <path d="M26 14v38M32 10v44M38 14v38" stroke="#cfa22f" strokeWidth="1.5" />
      <path d="M20 24h24M20 34h24M20 44h24" stroke="#cfa22f" strokeWidth="1.5" />
      <path d="M20 26c-6-2-10-8-10-16 6 2 10 8 10 16zM44 26c6-2 10-8 10-16-6 2-10 8-10 16z" fill={G.mid} />
    </>
  ),
  greenbeans: (
    <>
      <path d="M16 52c0-18 3-30 8-40M32 54c0-20 0-32 0-42M48 52c0-18-3-30-8-40" stroke="#4a9950" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M17 46c0-14 2-24 6-32M33 48V16M47 46c0-14-2-24-6-32" stroke="#79c274" strokeWidth="1.6" fill="none" />
    </>
  ),
  runnerbeans: (
    <>
      <path d="M18 8c6 8 8 26 4 46-6-2-9-6-9-16 0-14 1-24 5-30z" fill="#3f8c47" />
      <path d="M38 10c7 8 9 26 5 44-6-1-9-6-9-16 0-13 0-22 4-28z" fill="#4d9e52" />
      <path d="M18 14c3 10 4 24 2 36M39 16c3 10 4 22 2 34" stroke="#7cc47f" strokeWidth="1.6" fill="none" />
    </>
  ),
  mangetout: (
    <>
      <path d="M12 24c10-6 24-6 38 2 2 1 2 4 0 5-14 8-28 8-38 2-2-1-2-8 0-9z" fill="#6db35f" />
      <path d="M12 28c12 4 26 4 38 0" stroke="#a5d69a" strokeWidth="1.8" fill="none" />
      <circle cx="22" cy="28" r="2.4" fill="#8ec97f" /><circle cx="31" cy="29" r="2.4" fill="#8ec97f" /><circle cx="40" cy="29" r="2.4" fill="#8ec97f" />
      <path d="M50 26c3-2 6-2 8 0-2 3-5 3-8 1z" fill={G.dark} />
    </>
  ),
  sugarsnap: (
    <>
      <path d="M11 28c10-9 26-9 40 0 3 2 3 6 0 8-14 9-30 9-40 0-3-2-3-6 0-8z" fill="#57a84f" />
      <circle cx="21" cy="32" r="4.5" fill="#8ac97b" /><circle cx="31" cy="33" r="4.5" fill="#8ac97b" /><circle cx="41" cy="32" r="4.5" fill="#8ac97b" />
      <path d="M51 27c3-2 6-2 8 1-2 2-5 2-8 0z" fill={G.dark} />
    </>
  ),
  broadbeans: (
    <>
      <path d="M14 18c2-3 6-3 8 0 6 12 14 22 24 30 3 2 2 7-2 7-14-2-26-14-30-30-1-3-1-6 0-7z" fill="#77b45e" />
      <circle cx="22" cy="26" r="4.5" fill="#c9e3a8" /><circle cx="29" cy="35" r="4.5" fill="#c9e3a8" />
      <circle cx="36" cy="42" r="4.5" fill="#c9e3a8" /><circle cx="43" cy="48" r="4.5" fill="#c9e3a8" />
    </>
  ),
  asparagus: (
    <>
      <path d="M18 56V26M32 58V20M46 56V26" stroke="#5da35a" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <path d="M18 26c-3-4-3-8 0-12 3 4 3 8 0 12zM32 20c-3-5-3-9 0-13 3 4 3 8 0 13zM46 26c-3-4-3-8 0-12 3 4 3 8 0 12z" fill="#3d7f45" />
      <path d="M15 32c3-2 5-2 7 0M29 28c3-2 5-2 7 0M43 32c3-2 5-2 7 0" stroke="#3d7f45" strokeWidth="1.6" fill="none" />
    </>
  ),
  celery: (
    <>
      <path d="M32 56c-4 0-6-2-6-6V22h12v28c0 4-2 6-6 6z" fill="#c3d98d" />
      <path d="M22 52c-3-2-4-4-3-8l5-22 10 3-8 25c-1 2-2 2-4 2zM42 52c3-2 4-4 3-8l-5-22-10 3 8 25c1 2 2 2 4 2z" fill="#a9c973" />
      <path d="M26 20c-2-6 0-10 4-12 1 5 1 9-1 12zM38 20c2-6 0-10-4-12-1 5-1 9 1 12z" fill={G.dark} />
      <path d="M32 26v26" stroke="#8fb35e" strokeWidth="1.5" />
    </>
  ),
  fennel: (
    <>
      <path d="M24 20c-4-6-6-12-5-16 5 3 8 9 9 15zM40 20c4-6 6-12 5-16-5 3-8 9-9 15zM32 18c0-7 1-12 3-16 2 5 2 11 0 16z" fill="#5da35a" />
      <path d="M24 22h16l4 6" stroke="#a9c973" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M32 24c10 0 16 6 16 16 0 9-7 15-16 15s-16-6-16-15c0-10 6-16 16-16z" fill="#eef2dc" />
      <path d="M32 24v31M22 30c-2 8-2 16 0 22M42 30c2 8 2 16 0 22" stroke="#cfd9ae" strokeWidth="1.8" fill="none" />
    </>
  ),
  chicory: (
    <>
      <path d="M32 56c-7 0-11-4-11-12 0-16 5-32 11-38 6 6 11 22 11 38 0 8-4 12-11 12z" fill="#f2eeda" />
      <path d="M32 6c-4 8-7 22-7 36 0 8 3 12 7 14z" fill="#e6e0c2" />
      <path d="M25 18c3 2 11 2 14 0M23 32c5 2 13 2 18 0" stroke="#d5cda2" strokeWidth="1.6" fill="none" />
      <path d="M32 6c3 3 5 7 6 11-4 2-8 2-12 0 1-4 3-8 6-11z" fill="#d5e07a" />
    </>
  ),
  mushroom: (
    <>
      <path d="M26 36h12v14c0 4-2 6-6 6s-6-2-6-6z" fill="#f0e6cf" />
      <path d="M32 12c12 0 20 8 20 17 0 5-4 8-20 8s-20-3-20-8c0-9 8-17 20-17z" fill="#a06c40" />
      <path d="M18 26c4-6 9-9 14-9" stroke="#c08b58" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M26 38c4 2 8 2 12 0" stroke="#d9cdb0" strokeWidth="1.6" fill="none" />
    </>
  ),
  onion: (
    <>
      <path d="M32 16c-2-4-2-7 0-10 2 3 2 6 0 10z" fill={G.dark} />
      <path d="M32 16c11 0 19 9 19 20 0 11-8 19-19 19s-19-8-19-19c0-11 8-20 19-20z" fill="#d7a55e" />
      <path d="M32 16c-6 6-9 14-9 20 0 8 3 15 9 19M32 16c6 6 9 14 9 20 0 8-3 15-9 19" stroke="#b9843f" strokeWidth="1.8" fill="none" />
      <path d="M32 16v39" stroke="#a97432" strokeWidth="1.5" />
    </>
  ),
  shallot: (
    <>
      <path d="M23 20c7 0 12 7 12 16s-5 15-12 15-12-6-12-15 5-16 12-16z" fill="#c58f6e" />
      <path d="M44 26c6 0 10 6 10 13s-4 13-10 13-10-6-10-13 4-13 10-13z" fill="#b47f60" />
      <path d="M23 20c-2-4-2-7 0-10 2 3 2 6 0 10zM44 26c-2-4-2-6 0-9 2 3 2 6 0 9z" fill="#8a6a4a" />
      <path d="M23 22c-4 6-6 12-6 16M44 28c-3 5-5 9-5 12" stroke="#a8785a" strokeWidth="1.6" fill="none" />
    </>
  ),
  springonion: (
    <>
      <path d="M22 8c2 10 2 22 0 30M32 6c2 12 2 24 0 32M42 8c-2 10-2 22 0 30" stroke={G.dark} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M22 38c0-2 2-3 10-3s10 1 10 3l-2 14c0 3-3 5-8 5s-8-2-8-5z" fill="#f2eeda" />
      <path d="M28 40v16M36 40v16" stroke="#ddd7bd" strokeWidth="1.6" />
    </>
  ),
  leek: (
    <>
      <path d="M24 30c-4-10-6-18-4-24 6 4 9 12 10 20zM40 30c4-10 6-18 4-24-6 4-9 12-10 20z" fill="#3d7f45" />
      <path d="M32 26c-3-9-3-16-1-22 3 5 4 13 3 22z" fill="#4f9a52" />
      <path d="M23 30h18l1 20c0 4-4 6-10 6s-10-2-10-6z" fill="#f2eeda" />
      <path d="M28 32v22M36 32v22" stroke="#ded8bd" strokeWidth="1.6" />
    </>
  ),
  garlic: (
    <>
      <path d="M32 14c1-4 3-6 5-7-1 4-2 6-3 8z" fill="#a9c973" />
      <path d="M32 16c11 0 18 10 18 21 0 10-8 17-18 17s-18-7-18-17c0-11 7-21 18-21z" fill="#f4f0e2" />
      <path d="M32 16c-6 7-9 15-9 22 0 8 3 14 9 16M32 16c6 7 9 15 9 22 0 8-3 14-9 16" stroke="#ddd6bd" strokeWidth="1.8" fill="none" />
      <path d="M18 32c4-2 8-2 11 0M46 32c-4-2-8-2-11 0" stroke="#e6dfc8" strokeWidth="1.6" fill="none" />
    </>
  )
}
