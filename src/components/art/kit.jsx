// Flat SVG illustrations for the kitchen area (cookware, tools, appliances).
// 64×64 viewBox, same convention as the produce set.
const S = { steel: '#c3ccd9', dark: '#8d97a8', edge: '#e6ecf4', handle: '#3d4557', wood: '#c08b52', warm: '#e0a95f' }

export const KIT = {
  fryingpan: (
    <>
      <path d="M6 30h34c2 0 3 2 3 5 0 8-6 14-14 14H17c-8 0-11-6-11-14 0-3 1-5 0-5z" fill={S.dark} />
      <ellipse cx="24" cy="30" rx="18" ry="5" fill={S.steel} />
      <path d="M42 31h14c2 0 3 1 3 3s-1 3-3 3H42z" fill={S.handle} />
    </>
  ),
  saucepan: (
    <>
      <path d="M12 26h28v20c0 4-3 6-8 6H20c-5 0-8-2-8-6z" fill={S.steel} />
      <rect x="10" y="22" width="32" height="5" rx="2.5" fill={S.dark} />
      <path d="M42 24h14c2 0 3 1 3 3s-1 3-3 3H42z" fill={S.handle} />
      <path d="M18 32v14" stroke={S.edge} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  stockpot: (
    <>
      <path d="M12 24h40v24c0 4-3 6-8 6H20c-5 0-8-2-8-6z" fill={S.steel} />
      <rect x="10" y="20" width="44" height="5" rx="2.5" fill={S.dark} />
      <rect x="20" y="12" width="24" height="4" rx="2" fill={S.dark} />
      <rect x="30" y="8" width="4" height="6" rx="2" fill={S.handle} />
      <path d="M6 28h6v8H6zM52 28h6v8h-6z" fill={S.handle} />
    </>
  ),
  casserole: (
    <>
      <path d="M12 30h40v16c0 5-4 8-10 8H22c-6 0-10-3-10-8z" fill="#c2543f" />
      <path d="M8 24h48v6c0 2-1 3-4 3H12c-3 0-4-1-4-3z" fill="#a8432f" />
      <rect x="28" y="16" width="8" height="7" rx="3" fill={S.handle} />
      <path d="M4 34h6v8H4zM54 34h6v8h-6z" fill="#8f3626" />
      <path d="M20 38v10" stroke="#d8735f" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  griddlepan: (
    <>
      <rect x="8" y="26" width="36" height="24" rx="4" fill={S.dark} />
      <rect x="11" y="29" width="30" height="18" rx="2" fill="#5d6677" />
      <path d="M14 32v12M20 32v12M26 32v12M32 32v12M38 32v12" stroke={S.handle} strokeWidth="2.5" />
      <path d="M44 34h14c2 0 3 1 3 3s-1 3-3 3H44z" fill={S.handle} />
    </>
  ),
  wok: (
    <>
      <path d="M6 26h52c0 14-11 24-26 24S6 40 6 26z" fill="#5d5348" />
      <ellipse cx="32" cy="26" rx="26" ry="6" fill="#7b6d5c" />
      <path d="M52 22l9-6c2-1 4 0 4 2" stroke={S.handle} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M6 26c2 8 8 14 16 17" stroke="#8f8271" strokeWidth="2" fill="none" />
    </>
  ),
  roastingtin: (
    <>
      <path d="M8 22h48l-4 26c-1 4-3 6-7 6H19c-4 0-6-2-7-6z" fill={S.steel} />
      <path d="M8 22h48v5H8z" fill={S.dark} />
      <path d="M4 24h6v6H4zM54 24h6v6h-6z" fill={S.handle} />
      <path d="M20 32l2 18M42 32l-2 18" stroke={S.edge} strokeWidth="2" />
    </>
  ),
  bakingtray: (
    <>
      <path d="M6 28h52l-3 16c-1 4-3 6-7 6H16c-4 0-6-2-7-6z" fill={S.dark} />
      <path d="M10 30h44l-2 12H12z" fill={S.steel} />
      <path d="M6 28h52v4H6z" fill="#798496" />
    </>
  ),
  steamer: (
    <>
      <rect x="14" y="34" width="36" height="16" rx="3" fill={S.wood} />
      <rect x="14" y="20" width="36" height="14" rx="3" fill="#d09a61" />
      <path d="M14 26h36M14 40h36" stroke="#a5733f" strokeWidth="2" />
      <path d="M12 16h40l-2 4H14z" fill="#b98449" />
      <path d="M26 12c-2-3 0-5 2-7M36 12c-2-3 0-5 2-7" stroke={S.edge} strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  pressurecooker: (
    <>
      <rect x="12" y="24" width="40" height="28" rx="6" fill={S.steel} />
      <rect x="10" y="18" width="44" height="8" rx="4" fill={S.dark} />
      <circle cx="32" cy="14" r="3.5" fill={S.handle} />
      <rect x="20" y="34" width="24" height="10" rx="3" fill="#5d6677" />
      <circle cx="26" cy="39" r="2" fill="#6ce0a0" />
    </>
  ),
  slowcooker: (
    <>
      <path d="M12 30h40v16c0 4-3 6-7 6H19c-4 0-7-2-7-6z" fill="#5f6b7f" />
      <path d="M8 24h48v6c0 2-1 3-4 3H12c-3 0-4-1-4-3z" fill={S.steel} />
      <rect x="29" y="16" width="6" height="7" rx="3" fill={S.handle} />
      <rect x="18" y="38" width="12" height="6" rx="2" fill="#39404f" />
      <circle cx="42" cy="41" r="3" fill="#ff9a5c" />
    </>
  ),
  colander: (
    <>
      <path d="M8 28h48c0 13-10 22-24 22S8 41 8 28z" fill={S.steel} />
      <ellipse cx="32" cy="28" rx="24" ry="5" fill={S.edge} />
      <circle cx="24" cy="36" r="2" fill="#8d97a8" /><circle cx="32" cy="40" r="2" fill="#8d97a8" />
      <circle cx="40" cy="36" r="2" fill="#8d97a8" /><circle cx="28" cy="44" r="2" fill="#8d97a8" /><circle cx="37" cy="44" r="2" fill="#8d97a8" />
      <path d="M4 26h6v5H4zM54 26h6v5h-6z" fill={S.dark} />
    </>
  ),
  lid: (
    <>
      <path d="M6 42c0-14 11-24 26-24s26 10 26 24z" fill={S.steel} />
      <rect x="4" y="42" width="56" height="5" rx="2.5" fill={S.dark} />
      <rect x="28" y="10" width="8" height="9" rx="4" fill={S.handle} />
      <path d="M18 34c3-6 8-10 14-11" stroke={S.edge} strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  ),
  chefknife: (
    <>
      <path d="M6 34c10-12 22-18 34-18v14c0 2-1 3-3 3z" fill={S.steel} />
      <path d="M6 34c10-12 22-18 34-18l-2 4c-10 1-20 6-28 14z" fill={S.edge} />
      <rect x="40" y="30" width="18" height="7" rx="3" fill={S.handle} />
      <circle cx="46" cy="33.5" r="1.3" fill={S.steel} /><circle cx="52" cy="33.5" r="1.3" fill={S.steel} />
    </>
  ),
  paringknife: (
    <>
      <path d="M14 36c6-8 14-12 20-12v9c0 2-1 3-3 3z" fill={S.steel} />
      <rect x="34" y="32" width="18" height="6" rx="3" fill={S.handle} />
      <path d="M14 36c6-8 14-12 20-12l-1 3c-7 1-13 4-19 9z" fill={S.edge} />
    </>
  ),
  breadknife: (
    <>
      <path d="M6 30h38v7H6z" fill={S.steel} />
      <path d="M6 37l4 3 4-3 4 3 4-3 4 3 4-3 4 3 4-3 4 3 2-3z" fill={S.edge} />
      <rect x="44" y="28" width="16" height="8" rx="3" fill={S.handle} />
    </>
  ),
  carvingknife: (
    <>
      <path d="M4 32c12-6 26-9 38-9v9c0 2-1 3-3 3z" fill={S.steel} />
      <path d="M4 32c12-6 26-9 38-9l-1 3c-11 0-24 3-35 8z" fill={S.edge} />
      <rect x="42" y="28" width="18" height="7" rx="3" fill={S.handle} />
      <path d="M48 44v14M54 44v14M51 44v14" stroke={S.dark} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  cleaver: (
    <>
      <rect x="8" y="18" width="32" height="24" rx="3" fill={S.steel} />
      <path d="M8 42h32v3H8z" fill={S.edge} />
      <circle cx="14" cy="24" r="2.5" fill={S.dark} />
      <rect x="40" y="26" width="18" height="8" rx="3" fill={S.handle} />
    </>
  ),
  board: (
    <>
      <rect x="8" y="14" width="42" height="40" rx="5" fill={S.wood} />
      <path d="M14 20v28M22 20v28M30 20v28M38 20v28M45 20v28" stroke="#a5733f" strokeWidth="1.6" />
      <circle cx="46" cy="20" r="2.5" fill="#8a6136" />
    </>
  ),
  steel: (
    <>
      <rect x="8" y="30" width="38" height="5" rx="2.5" fill={S.dark} />
      <path d="M10 30h34v5H10z" fill={S.steel} />
      <rect x="46" y="26" width="14" height="12" rx="4" fill={S.handle} />
      <circle cx="8" cy="32.5" r="3" fill={S.dark} />
    </>
  ),
  woodenspoon: (
    <>
      <ellipse cx="20" cy="22" rx="11" ry="13" fill={S.wood} />
      <ellipse cx="20" cy="22" rx="7" ry="9" fill="#d5a068" />
      <path d="M27 30l24 22" stroke={S.wood} strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  spatula: (
    <>
      <path d="M12 12c8-4 16-4 22 2 3 3 2 7-1 9l-14 8c-4 2-8 0-9-4l-2-9c-1-3 1-5 4-6z" fill="#e4645c" />
      <path d="M25 32l24 20" stroke={S.handle} strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  fishslice: (
    <>
      <path d="M8 20h26c3 0 5 2 5 5v6c0 3-2 5-5 5H8z" fill={S.steel} />
      <path d="M12 24v14M19 24v14M26 24v14M33 25v12" stroke="#8d97a8" strokeWidth="2.5" />
      <path d="M39 30l18 18" stroke={S.handle} strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  whisk: (
    <>
      <path d="M22 44c-6-10-8-20-4-30M32 46c-2-12-2-22 0-32M42 44c6-10 8-20 4-30" stroke={S.steel} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M27 45c-4-11-5-21-2-31M37 45c4-11 5-21 2-31" stroke={S.dark} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="27" y="44" width="10" height="16" rx="5" fill={S.handle} />
    </>
  ),
  tongs: (
    <>
      <path d="M26 8c-4 12-8 26-14 40 4 4 8 4 12 0 4-14 6-28 6-40z" fill={S.steel} />
      <path d="M38 8c4 12 8 26 14 40-4 4-8 4-12 0-4-14-6-28-6-40z" fill={S.dark} />
      <rect x="26" y="4" width="12" height="6" rx="3" fill={S.handle} />
    </>
  ),
  ladle: (
    <>
      <path d="M18 34c0-8 6-13 13-13s13 5 13 13c0 8-6 14-13 14s-13-6-13-14z" fill={S.steel} />
      <path d="M22 34c0-6 4-9 9-9s9 3 9 9z" fill={S.edge} />
      <path d="M44 28c4-10 6-18 4-24" stroke={S.dark} strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  ),
  peeler: (
    <>
      <path d="M20 12h24c3 0 5 2 5 5s-2 5-5 5H20z" fill={S.handle} />
      <path d="M20 12v10c-8 0-14 8-14 18h8c0-8 3-14 6-14z" fill={S.dark} />
      <rect x="4" y="38" width="14" height="5" rx="2.5" fill={S.steel} />
      <path d="M6 40h10" stroke={S.edge} strokeWidth="2" />
    </>
  ),
  grater: (
    <>
      <path d="M20 12h24l8 40H12z" fill={S.steel} />
      <path d="M22 22l20 1M20 30h24M19 38h26" stroke={S.dark} strokeWidth="2" />
      <circle cx="26" cy="26" r="1.6" fill={S.dark} /><circle cx="36" cy="26" r="1.6" fill={S.dark} />
      <circle cx="24" cy="34" r="1.6" fill={S.dark} /><circle cx="34" cy="34" r="1.6" fill={S.dark} /><circle cx="42" cy="34" r="1.6" fill={S.dark} />
      <rect x="22" y="6" width="20" height="6" rx="3" fill={S.handle} />
    </>
  ),
  sieve: (
    <>
      <path d="M10 26h36c0 12-8 20-18 20s-18-8-18-20z" fill={S.edge} />
      <path d="M14 30h28M12 34h32M16 40h24" stroke={S.dark} strokeWidth="1.6" />
      <path d="M22 28v14M32 28v16M42 28v14" stroke={S.dark} strokeWidth="1.6" />
      <rect x="8" y="22" width="40" height="5" rx="2.5" fill={S.steel} />
      <path d="M48 24h12c2 0 3 1 3 3s-1 3-3 3H48z" fill={S.handle} />
    </>
  ),
  masher: (
    <>
      <path d="M14 40h36v6c0 3-2 5-5 5H19c-3 0-5-2-5-5z" fill={S.steel} />
      <path d="M20 44h24M20 48h24" stroke={S.dark} strokeWidth="2" />
      <circle cx="24" cy="46" r="1.5" fill={S.dark} /><circle cx="32" cy="46" r="1.5" fill={S.dark} /><circle cx="40" cy="46" r="1.5" fill={S.dark} />
      <rect x="28" y="8" width="8" height="34" rx="4" fill={S.handle} />
    </>
  ),
  rollingpin: (
    <>
      <rect x="14" y="26" width="36" height="14" rx="7" fill={S.wood} />
      <rect x="4" y="30" width="12" height="6" rx="3" fill="#a5733f" />
      <rect x="48" y="30" width="12" height="6" rx="3" fill="#a5733f" />
      <path d="M22 30v6M32 30v6M42 30v6" stroke="#a5733f" strokeWidth="1.6" />
    </>
  ),
  jug: (
    <>
      <path d="M16 18h30l-3 32c-1 4-3 6-7 6H26c-4 0-6-2-7-6z" fill="#dfe7f2" opacity="0.9" />
      <path d="M46 24h6c4 0 6 3 6 7s-2 7-6 7h-5" stroke={S.dark} strokeWidth="3" fill="none" />
      <path d="M20 32h20M22 40h16M24 48h12" stroke={S.dark} strokeWidth="1.8" />
      <path d="M18 26h26l-1 6H19z" fill="#a8d5ff" opacity="0.6" />
    </>
  ),
  scales: (
    <>
      <rect x="8" y="26" width="48" height="24" rx="6" fill="#e2e7ef" />
      <rect x="8" y="20" width="48" height="10" rx="5" fill={S.steel} />
      <rect x="18" y="34" width="28" height="12" rx="3" fill="#39404f" />
      <path d="M24 40h16" stroke="#6ce0a0" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  garlicpress: (
    <>
      <path d="M12 46l20-20 6 6-20 20c-2 2-6 2-8 0s-2-4 2-6z" fill={S.dark} />
      <path d="M14 12l22 22-6 6-22-22c-2-2-2-6 0-8s4-2 6 2z" fill={S.steel} />
      <circle cx="42" cy="22" r="9" fill={S.steel} />
      <circle cx="39" cy="20" r="1.6" fill={S.handle} /><circle cx="45" cy="20" r="1.6" fill={S.handle} /><circle cx="42" cy="25" r="1.6" fill={S.handle} />
    </>
  ),
  canopener: (
    <>
      <path d="M10 22l30 8-2 8-30-8z" fill={S.handle} />
      <path d="M12 40l28-8 2 8-28 8z" fill={S.dark} />
      <circle cx="44" cy="30" r="8" fill={S.steel} />
      <circle cx="44" cy="30" r="3" fill={S.handle} />
      <path d="M50 24l8-6" stroke={S.dark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  ovenglove: (
    <>
      <path d="M22 14h20c4 0 6 3 6 7v18c0 4-2 6-6 6H22c-4 0-6-2-6-6V21c0-4 2-7 6-7z" fill="#d8544f" />
      <path d="M16 24h-4c-3 0-5 2-5 5s2 5 5 5h4z" fill="#c04742" />
      <rect x="16" y="42" width="32" height="8" rx="3" fill="#f0efe6" />
      <path d="M22 20h20" stroke="#f0efe6" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  teatowel: (
    <>
      <path d="M16 10h32v40c0 4-3 6-7 6H23c-4 0-7-2-7-6z" fill="#eef1f6" />
      <path d="M16 18h32M16 26h32" stroke="#5b8fd6" strokeWidth="3" />
      <path d="M22 34v18M32 34v22M42 34v18" stroke="#c9d3e2" strokeWidth="2" />
      <path d="M28 6h8v6h-8z" fill="#5b8fd6" />
    </>
  ),
  skewer: (
    <>
      <path d="M10 46L52 14" stroke={S.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M52 14l6-4-3 7z" fill={S.dark} />
      <circle cx="20" cy="40" r="6" fill="#c2543f" /><circle cx="31" cy="32" r="6" fill="#7cc47f" /><circle cx="42" cy="24" r="6" fill="#e0a95f" />
    </>
  ),
  caketin: (
    <>
      <ellipse cx="32" cy="24" rx="24" ry="8" fill={S.steel} />
      <path d="M8 24v16c0 5 11 9 24 9s24-4 24-9V24" fill={S.dark} />
      <ellipse cx="32" cy="24" rx="19" ry="6" fill="#9aa4b5" />
      <path d="M8 32c6 4 15 6 24 6s18-2 24-6" stroke="#798496" strokeWidth="1.8" fill="none" />
    </>
  ),
  loaftin: (
    <>
      <path d="M10 22h44l-4 26c-1 4-3 6-7 6H21c-4 0-6-2-7-6z" fill={S.dark} />
      <path d="M14 26h36l-3 20H17z" fill={S.steel} />
      <path d="M10 22h44v4H10z" fill="#798496" />
    </>
  ),
  muffintray: (
    <>
      <rect x="6" y="18" width="52" height="30" rx="4" fill={S.dark} />
      <circle cx="19" cy="27" r="6" fill={S.steel} /><circle cx="32" cy="27" r="6" fill={S.steel} /><circle cx="45" cy="27" r="6" fill={S.steel} />
      <circle cx="19" cy="39" r="6" fill={S.steel} /><circle cx="32" cy="39" r="6" fill={S.steel} /><circle cx="45" cy="39" r="6" fill={S.steel} />
    </>
  ),
  parchment: (
    <>
      <path d="M12 12h40v34c0 5-4 8-9 8H21c-5 0-9-3-9-8z" fill="#f4efe0" />
      <path d="M12 12c6 3 12 3 18 0 6 3 12 3 18 0" stroke="#ded6bf" strokeWidth="2" fill="none" />
      <path d="M20 26h24M20 34h24M20 42h16" stroke="#e2dac3" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  coolingrack: (
    <>
      <rect x="6" y="22" width="52" height="4" rx="2" fill={S.steel} />
      <rect x="6" y="32" width="52" height="4" rx="2" fill={S.steel} />
      <rect x="6" y="42" width="52" height="4" rx="2" fill={S.steel} />
      <rect x="14" y="18" width="4" height="32" rx="2" fill={S.dark} />
      <rect x="46" y="18" width="4" height="32" rx="2" fill={S.dark} />
    </>
  ),
  pipingbag: (
    <>
      <path d="M18 8h28l-8 34c-1 4-3 6-6 6s-5-2-6-6z" fill="#f0efe6" />
      <path d="M28 48h8l-1 8c0 2-1 3-3 3s-3-1-3-3z" fill={S.dark} />
      <path d="M29 58c-2 3-2 5 0 6M35 58c2 3 2 5 0 6" stroke="#e8a0c0" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M22 16h20" stroke="#dcd8c6" strokeWidth="2.5" />
    </>
  ),
  pastrybrush: (
    <>
      <path d="M18 8h16v18H18z" fill={S.warm} />
      <path d="M18 8h16v6H18z" fill="#c98f45" />
      <path d="M20 26h12v10c0 3-2 5-6 5s-6-2-6-5z" fill={S.dark} />
      <rect x="22" y="36" width="8" height="22" rx="4" fill={S.handle} />
    </>
  ),
  mixingbowl: (
    <>
      <path d="M6 24h52c0 16-11 26-26 26S6 40 6 24z" fill="#e2e7ef" />
      <ellipse cx="32" cy="24" rx="26" ry="6" fill="#f5f8fc" />
      <path d="M14 30c9 4 27 4 36 0" stroke="#c9d3e2" strokeWidth="2" fill="none" />
      <path d="M16 34c2 8 8 12 16 12" stroke="#cdd6e4" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  ),
  hob: (
    <>
      <rect x="6" y="14" width="52" height="38" rx="6" fill="#2c313d" />
      <circle cx="21" cy="26" r="8" fill="#454c5c" /><circle cx="43" cy="26" r="8" fill="#454c5c" />
      <circle cx="21" cy="42" r="7" fill="#454c5c" /><circle cx="43" cy="42" r="7" fill="#454c5c" />
      <circle cx="21" cy="26" r="4" fill="#4a90d9" /><circle cx="43" cy="42" r="3.5" fill="#4a90d9" />
    </>
  ),
  oven: (
    <>
      <rect x="8" y="10" width="48" height="44" rx="5" fill="#8d97a8" />
      <rect x="8" y="10" width="48" height="10" rx="5" fill="#6c7686" />
      <circle cx="16" cy="15" r="2.5" fill="#39404f" /><circle cx="24" cy="15" r="2.5" fill="#39404f" />
      <rect x="13" y="24" width="38" height="26" rx="3" fill="#2c313d" />
      <rect x="17" y="28" width="30" height="18" rx="2" fill="#f0a955" opacity="0.5" />
      <rect x="13" y="22" width="38" height="4" rx="2" fill="#c3ccd9" />
    </>
  ),
  grill: (
    <>
      <rect x="8" y="12" width="48" height="40" rx="5" fill="#2c313d" />
      <rect x="12" y="16" width="40" height="8" rx="3" fill="#ff8a4c" />
      <path d="M14 18h36" stroke="#ffd7a8" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="14" y="34" width="36" height="4" rx="2" fill="#8d97a8" />
      <rect x="14" y="42" width="36" height="4" rx="2" fill="#8d97a8" />
    </>
  ),
  extractor: (
    <>
      <path d="M6 34h52l-6-16c-1-3-3-4-6-4H18c-3 0-5 1-6 4z" fill="#c3ccd9" />
      <rect x="6" y="34" width="52" height="7" rx="3" fill="#8d97a8" />
      <rect x="26" y="6" width="12" height="10" rx="2" fill="#8d97a8" />
      <path d="M20 46c2 4 2 6 0 10M32 46c2 4 2 6 0 10M44 46c2 4 2 6 0 10" stroke="#9fb0c4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  kettle: (
    <>
      <path d="M16 26h32v20c0 5-4 8-10 8H26c-6 0-10-3-10-8z" fill={S.steel} />
      <path d="M16 22h32v6H16z" fill={S.dark} />
      <rect x="28" y="14" width="8" height="8" rx="3" fill={S.handle} />
      <path d="M48 28c6 0 10 4 10 10s-4 10-10 10" stroke={S.handle} strokeWidth="4" fill="none" />
      <rect x="20" y="34" width="6" height="14" rx="3" fill="#7fd0ff" opacity="0.8" />
    </>
  ),
  toaster: (
    <>
      <rect x="8" y="22" width="48" height="28" rx="6" fill="#c3ccd9" />
      <rect x="16" y="18" width="12" height="5" rx="2" fill="#39404f" />
      <rect x="34" y="18" width="12" height="5" rx="2" fill="#39404f" />
      <path d="M18 8h10v12H18zM36 10h10v10H36z" fill={S.warm} />
      <rect x="46" y="30" width="6" height="12" rx="3" fill="#8d97a8" />
    </>
  ),
  microwave: (
    <>
      <rect x="4" y="16" width="56" height="32" rx="5" fill="#8d97a8" />
      <rect x="9" y="21" width="34" height="22" rx="3" fill="#2c313d" />
      <rect x="12" y="24" width="28" height="16" rx="2" fill="#4a5464" />
      <rect x="47" y="22" width="9" height="12" rx="2" fill="#c3ccd9" />
      <circle cx="51.5" cy="41" r="3.5" fill="#c3ccd9" />
    </>
  ),
  blender: (
    <>
      <path d="M20 8h24l-3 30H23z" fill="#dfe7f2" opacity="0.9" />
      <path d="M22 22h20l-1 14H23z" fill="#a8d5ff" opacity="0.7" />
      <rect x="18" y="38" width="28" height="16" rx="4" fill="#39404f" />
      <circle cx="26" cy="46" r="3" fill="#6ce0a0" />
      <rect x="34" y="43" width="10" height="6" rx="3" fill="#5b6474" />
      <path d="M44 12h6c3 0 4 2 4 5s-1 5-4 5h-5" stroke="#c3ccd9" strokeWidth="3" fill="none" />
    </>
  ),
  processor: (
    <>
      <path d="M18 10h28v28H18z" fill="#dfe7f2" opacity="0.9" />
      <rect x="16" y="6" width="32" height="6" rx="3" fill="#c3ccd9" />
      <path d="M32 16v18M22 24h20" stroke="#8d97a8" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 38h36v12c0 3-2 5-5 5H19c-3 0-5-2-5-5z" fill="#39404f" />
      <circle cx="42" cy="45" r="3.5" fill="#6ce0a0" />
    </>
  ),
  airfryer: (
    <>
      <path d="M12 12h40v34c0 5-4 8-9 8H21c-5 0-9-3-9-8z" fill="#39404f" />
      <rect x="16" y="18" width="32" height="12" rx="3" fill="#5b6474" />
      <circle cx="24" cy="24" r="3" fill="#ff9a5c" />
      <rect x="18" y="38" width="28" height="14" rx="3" fill="#2c313d" />
      <rect x="26" y="43" width="12" height="4" rx="2" fill="#8d97a8" />
    </>
  ),
  dishwasher: (
    <>
      <rect x="8" y="8" width="48" height="48" rx="5" fill="#c3ccd9" />
      <rect x="8" y="8" width="48" height="9" rx="4" fill="#8d97a8" />
      <circle cx="46" cy="12.5" r="2.5" fill="#6ce0a0" />
      <rect x="13" y="21" width="38" height="30" rx="3" fill="#e2e7ef" />
      <path d="M20 30c3-4 8-4 11 0M33 38c3-4 8-4 11 0" stroke="#9fb8d4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  washingup: (
    <>
      <path d="M8 30h48v14c0 5-4 8-10 8H18c-6 0-10-3-10-8z" fill="#c3ccd9" />
      <ellipse cx="32" cy="30" rx="24" ry="6" fill="#a8d5ff" />
      <circle cx="22" cy="20" r="5" fill="#dff0ff" /><circle cx="34" cy="14" r="6" fill="#dff0ff" /><circle cx="44" cy="21" r="4" fill="#dff0ff" />
      <path d="M18 34c4 3 8 4 12 4" stroke="#e2e7ef" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  )
}
