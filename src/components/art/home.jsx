// Flat SVG illustrations for the IKEA area (furniture, textiles, flat-pack hardware).
// 64×64 viewBox, same convention as the other art sets.
const H = { wood: '#c79a63', woodDark: '#a5763f', fabric: '#7d92c4', fabric2: '#5d72a4', steel: '#b9c2d0', dark: '#3d4557', cream: '#f0ead9', accent: '#e0a95f' }

export const HOME = {
  sofa: (
    <>
      <path d="M8 30h48v14c0 3-2 5-5 5H13c-3 0-5-2-5-5z" fill={H.fabric2} />
      <path d="M10 18h44c3 0 5 2 5 6v10H5V24c0-4 2-6 5-6z" fill={H.fabric} />
      <rect x="12" y="30" width="18" height="8" rx="3" fill="#93a7d4" />
      <rect x="34" y="30" width="18" height="8" rx="3" fill="#93a7d4" />
      <path d="M12 49v6M52 49v6" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  sofabed: (
    <>
      <path d="M6 32h34v12c0 3-2 5-5 5H11c-3 0-5-2-5-5z" fill={H.fabric2} />
      <path d="M8 20h30c3 0 5 2 5 6v8H4v-8c0-4 2-6 4-6z" fill={H.fabric} />
      <path d="M40 36h20v8c0 3-2 5-5 5H43c-2 0-3-1-3-3z" fill="#93a7d4" />
      <path d="M42 30h16v6H42z" fill={H.cream} />
      <path d="M10 49v6M56 49v6" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  armchair: (
    <>
      <path d="M16 30h32v14c0 3-2 5-5 5H21c-3 0-5-2-5-5z" fill={H.fabric2} />
      <path d="M20 14h24c3 0 5 2 5 6v12H15V20c0-4 2-6 5-6z" fill={H.fabric} />
      <path d="M10 26h6c2 0 3 1 3 4v12h-9c-2 0-3-1-3-4V30c0-3 1-4 3-4zM54 26h-6c-2 0-3 1-3 4v12h9c2 0 3-1 3-4V30c0-3-1-4-3-4z" fill="#6b80b4" />
      <path d="M18 49v6M46 49v6" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  footstool: (
    <>
      <path d="M12 26h40c3 0 4 2 4 5v10c0 3-1 5-4 5H12c-3 0-4-2-4-5V31c0-3 1-5 4-5z" fill="#c9895f" />
      <path d="M8 34h48" stroke="#a86f48" strokeWidth="2" />
      <path d="M14 46v8M50 46v8" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
      <path d="M20 30c4-2 8-2 12 0" stroke="#dda57c" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  coffeetable: (
    <>
      <rect x="6" y="20" width="52" height="7" rx="3" fill={H.wood} />
      <rect x="10" y="38" width="44" height="5" rx="2" fill={H.woodDark} />
      <path d="M13 27v26M51 27v26" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  tvunit: (
    <>
      <rect x="6" y="34" width="52" height="18" rx="3" fill={H.wood} />
      <rect x="10" y="38" width="20" height="10" rx="2" fill="#e0c9a6" />
      <rect x="34" y="38" width="20" height="10" rx="2" fill="#e0c9a6" />
      <rect x="18" y="12" width="28" height="18" rx="2" fill={H.dark} />
      <rect x="21" y="15" width="22" height="12" rx="1" fill="#4f5b71" />
      <path d="M30 30h4v4h-4z" fill={H.dark} />
    </>
  ),
  bookcase: (
    <>
      <rect x="12" y="8" width="40" height="48" rx="3" fill={H.wood} />
      <rect x="16" y="12" width="32" height="12" fill="#e6d2b4" />
      <rect x="16" y="28" width="32" height="12" fill="#e6d2b4" />
      <rect x="16" y="44" width="32" height="10" fill="#e6d2b4" />
      <rect x="18" y="14" width="4" height="10" fill="#c2543f" /><rect x="24" y="14" width="3" height="10" fill="#5d72a4" /><rect x="29" y="15" width="4" height="9" fill="#57a45e" />
      <rect x="19" y="30" width="3" height="10" fill="#5d72a4" /><rect x="24" y="31" width="4" height="9" fill="#e0a95f" />
    </>
  ),
  shelving: (
    <>
      <rect x="8" y="10" width="48" height="44" rx="3" fill={H.wood} />
      <path d="M32 12v40M10 32h44" stroke="#a5763f" strokeWidth="3" />
      <rect x="13" y="15" width="15" height="14" fill="#e6d2b4" /><rect x="36" y="15" width="15" height="14" fill="#e6d2b4" />
      <rect x="13" y="35" width="15" height="15" fill="#e6d2b4" /><rect x="36" y="35" width="15" height="15" fill="#e6d2b4" />
      <rect x="38" y="37" width="11" height="11" rx="2" fill="#7d92c4" />
    </>
  ),
  sideboard: (
    <>
      <rect x="6" y="20" width="52" height="26" rx="3" fill={H.wood} />
      <rect x="10" y="24" width="20" height="18" rx="2" fill="#e6d2b4" />
      <rect x="34" y="24" width="20" height="18" rx="2" fill="#e6d2b4" />
      <circle cx="27" cy="33" r="1.8" fill={H.dark} /><circle cx="37" cy="33" r="1.8" fill={H.dark} />
      <path d="M12 46v8M52 46v8" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  rug: (
    <>
      <path d="M6 22h52l-4 24H10z" fill="#cf9d7e" />
      <path d="M10 27h44l-1 6H11z" fill={H.cream} />
      <path d="M12 37h40l-1 5H13z" fill={H.cream} />
      <path d="M6 22h52M10 46h44" stroke="#a87a5c" strokeWidth="2" />
    </>
  ),
  bed: (
    <>
      <path d="M8 30h48v12c0 3-2 4-4 4H12c-2 0-4-1-4-4z" fill="#e6ecf4" />
      <path d="M8 26h48v6H8z" fill={H.fabric} />
      <rect x="14" y="18" width="16" height="9" rx="3" fill={H.cream} />
      <rect x="34" y="18" width="16" height="9" rx="3" fill={H.cream} />
      <path d="M4 22v30M60 30v22" stroke={H.woodDark} strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  bedframe: (
    <>
      <rect x="6" y="30" width="52" height="8" rx="2" fill={H.wood} />
      <path d="M6 14h6v28H6zM52 24h6v18h-6z" fill={H.woodDark} />
      <path d="M12 38h40" stroke="#8a6136" strokeWidth="2" />
      <path d="M12 42v10M52 42v10" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  mattress: (
    <>
      <rect x="6" y="22" width="52" height="22" rx="6" fill="#f0f2f6" />
      <path d="M6 32h52" stroke="#d5dae4" strokeWidth="2" />
      <circle cx="18" cy="27" r="1.6" fill="#c9d0dc" /><circle cx="32" cy="27" r="1.6" fill="#c9d0dc" /><circle cx="46" cy="27" r="1.6" fill="#c9d0dc" />
      <circle cx="18" cy="39" r="1.6" fill="#c9d0dc" /><circle cx="32" cy="39" r="1.6" fill="#c9d0dc" /><circle cx="46" cy="39" r="1.6" fill="#c9d0dc" />
    </>
  ),
  slats: (
    <>
      <rect x="8" y="18" width="48" height="5" rx="2" fill={H.wood} />
      <rect x="8" y="27" width="48" height="5" rx="2" fill={H.wood} />
      <rect x="8" y="36" width="48" height="5" rx="2" fill={H.wood} />
      <rect x="8" y="45" width="48" height="5" rx="2" fill={H.wood} />
      <rect x="14" y="14" width="4" height="40" rx="2" fill={H.woodDark} />
      <rect x="46" y="14" width="4" height="40" rx="2" fill={H.woodDark} />
    </>
  ),
  duvet: (
    <>
      <path d="M8 22h48c2 0 3 1 3 4v18c0 3-1 4-3 4H8c-2 0-3-1-3-4V26c0-3 1-4 3-4z" fill="#f2f4f8" />
      <path d="M20 22v26M36 22v26M50 22v26" stroke="#dfe4ec" strokeWidth="2.5" />
      <path d="M5 34h54" stroke="#dfe4ec" strokeWidth="2.5" />
      <path d="M8 22c4 3 8 3 12 0" stroke="#cfd6e2" strokeWidth="2" fill="none" />
    </>
  ),
  duvetcover: (
    <>
      <path d="M10 18h44v30c0 4-3 6-7 6H17c-4 0-7-2-7-6z" fill="#7d92c4" />
      <path d="M10 26h44M10 36h44M10 46h44" stroke="#a4b5db" strokeWidth="2.5" />
      <path d="M22 18v36M38 18v36" stroke="#a4b5db" strokeWidth="2.5" />
      <path d="M10 18c5 3 10 3 15 0" stroke="#5d72a4" strokeWidth="2" fill="none" />
    </>
  ),
  pillow: (
    <>
      <path d="M10 20c14-4 30-4 44 0 3 1 4 3 4 6v12c0 3-1 5-4 6-14 4-30 4-44 0-3-1-4-3-4-6V26c0-3 1-5 4-6z" fill={H.cream} />
      <path d="M14 26c12-2 24-2 36 0" stroke="#ddd4bc" strokeWidth="2" fill="none" />
      <path d="M14 40c12 2 24 2 36 0" stroke="#ddd4bc" strokeWidth="2" fill="none" />
    </>
  ),
  wardrobe: (
    <>
      <rect x="12" y="6" width="40" height="50" rx="3" fill={H.wood} />
      <path d="M32 8v46" stroke="#8a6136" strokeWidth="2.5" />
      <rect x="15" y="10" width="15" height="42" fill="#e0c9a6" />
      <rect x="34" y="10" width="15" height="42" fill="#e0c9a6" />
      <path d="M29 28v8M35 28v8" stroke={H.dark} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  drawers: (
    <>
      <rect x="10" y="10" width="44" height="44" rx="3" fill={H.wood} />
      <rect x="14" y="14" width="36" height="10" rx="2" fill="#e0c9a6" />
      <rect x="14" y="27" width="36" height="10" rx="2" fill="#e0c9a6" />
      <rect x="14" y="40" width="36" height="10" rx="2" fill="#e0c9a6" />
      <path d="M27 19h10M27 32h10M27 45h10" stroke={H.dark} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  bedside: (
    <>
      <rect x="14" y="20" width="36" height="30" rx="3" fill={H.wood} />
      <rect x="18" y="24" width="28" height="10" rx="2" fill="#e0c9a6" />
      <rect x="18" y="37" width="28" height="9" rx="2" fill="#e0c9a6" />
      <path d="M28 29h8M28 41h8" stroke={H.dark} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 50v6M46 50v6" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  blind: (
    <>
      <rect x="10" y="8" width="44" height="6" rx="2" fill={H.steel} />
      <path d="M12 14h40v24H12z" fill="#4c5670" />
      <path d="M12 38h40v4H12z" fill={H.dark} />
      <path d="M32 42v6" stroke={H.dark} strokeWidth="2" />
      <circle cx="32" cy="50" r="2.5" fill={H.dark} />
      <path d="M14 44h36v10H14z" fill="#f3d99a" opacity="0.5" />
    </>
  ),
  mirror: (
    <>
      <rect x="18" y="6" width="28" height="50" rx="12" fill={H.woodDark} />
      <rect x="22" y="10" width="20" height="42" rx="9" fill="#d4e3f0" />
      <path d="M26 18l12 16M26 30l10 12" stroke="#eef5fb" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  diningtable: (
    <>
      <rect x="4" y="22" width="56" height="7" rx="3" fill={H.wood} />
      <path d="M12 29v24M52 29v24" stroke={H.woodDark} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M12 40h40" stroke={H.woodDark} strokeWidth="3" />
    </>
  ),
  chair: (
    <>
      <path d="M18 8h28c3 0 4 2 4 5v18c0 3-1 5-4 5H18c-3 0-4-2-4-5V13c0-3 1-5 4-5z" fill={H.wood} />
      <rect x="12" y="34" width="40" height="6" rx="3" fill={H.woodDark} />
      <path d="M16 40v16M48 40v16" stroke={H.woodDark} strokeWidth="4" strokeLinecap="round" />
      <path d="M20 16h24M20 24h24" stroke="#e0c9a6" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  island: (
    <>
      <rect x="6" y="22" width="52" height="8" rx="3" fill="#8d97a8" />
      <rect x="10" y="30" width="44" height="22" rx="2" fill={H.wood} />
      <rect x="14" y="34" width="17" height="14" rx="2" fill="#e0c9a6" />
      <rect x="33" y="34" width="17" height="14" rx="2" fill="#e0c9a6" />
      <path d="M28 41h-8M42 41h-8" stroke={H.dark} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  worktop: (
    <>
      <rect x="4" y="24" width="56" height="9" rx="3" fill="#5a6273" />
      <rect x="8" y="33" width="48" height="20" rx="2" fill={H.wood} />
      <path d="M32 33v20" stroke="#8a6136" strokeWidth="2.5" />
      <path d="M6 28h52" stroke="#79839a" strokeWidth="2" />
      <path d="M27 42h-6M43 42h-6" stroke={H.dark} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  wallcabinet: (
    <>
      <rect x="8" y="10" width="48" height="28" rx="3" fill={H.wood} />
      <path d="M32 12v24" stroke="#8a6136" strokeWidth="2.5" />
      <rect x="11" y="13" width="19" height="22" fill="#e0c9a6" />
      <rect x="34" y="13" width="19" height="22" fill="#e0c9a6" />
      <path d="M28 24v-6M36 24v-6" stroke={H.dark} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 44h52" stroke="#5a6273" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  cabinetdoor: (
    <>
      <rect x="16" y="8" width="32" height="48" rx="3" fill={H.wood} />
      <rect x="20" y="12" width="24" height="40" rx="2" fill="#e0c9a6" />
      <circle cx="42" cy="32" r="2.5" fill={H.dark} />
      <path d="M24 20h16M24 44h16" stroke="#c9ab84" strokeWidth="2" />
    </>
  ),
  runner: (
    <>
      <rect x="8" y="18" width="48" height="6" rx="3" fill={H.steel} />
      <rect x="10" y="30" width="44" height="18" rx="3" fill={H.wood} />
      <path d="M8 24v10M56 24v10" stroke="#8d97a8" strokeWidth="3" />
      <circle cx="18" cy="21" r="2.2" fill="#8d97a8" /><circle cx="32" cy="21" r="2.2" fill="#8d97a8" /><circle cx="46" cy="21" r="2.2" fill="#8d97a8" />
      <path d="M27 39h10" stroke={H.dark} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  splashback: (
    <>
      <rect x="8" y="10" width="48" height="28" rx="2" fill="#9fc7d9" opacity="0.8" />
      <path d="M8 20h48M8 30h48" stroke="#c3dce8" strokeWidth="2" />
      <path d="M24 10v28M40 10v28" stroke="#c3dce8" strokeWidth="2" />
      <rect x="4" y="40" width="56" height="8" rx="3" fill="#5a6273" />
    </>
  ),
  crockery: (
    <>
      <ellipse cx="24" cy="34" rx="18" ry="6" fill="#eef1f6" />
      <path d="M6 34c0 5 8 9 18 9s18-4 18-9" fill="#dfe4ec" />
      <ellipse cx="24" cy="30" rx="11" ry="4" fill="#c9d3e2" />
      <path d="M40 20h14v10c0 4-3 7-7 7s-7-3-7-7z" fill="#eef1f6" />
      <path d="M54 22c4 0 5 3 5 5s-1 5-5 5" stroke="#c9d3e2" strokeWidth="2.5" fill="none" />
    </>
  ),
  cutlery: (
    <>
      <path d="M14 8v18c0 3 2 5 4 5v25M14 8v10M18 8v10M22 8v18c0 3-2 5-4 5" stroke={H.steel} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <ellipse cx="34" cy="18" rx="6" ry="9" fill={H.steel} />
      <path d="M34 27v29" stroke={H.steel} strokeWidth="3" strokeLinecap="round" />
      <path d="M48 10c4 4 5 10 3 16l-3 30" stroke={H.steel} strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  ),
  storagebox: (
    <>
      <path d="M10 24h44v24c0 4-3 6-7 6H17c-4 0-7-2-7-6z" fill="#c9c2b4" />
      <path d="M6 16h52v10H6z" fill="#dcd6c8" />
      <rect x="26" y="10" width="12" height="6" rx="3" fill="#a8a294" />
      <path d="M18 34h10v8H18z" fill="#b3ac9e" />
    </>
  ),
  divider: (
    <>
      <rect x="6" y="18" width="52" height="30" rx="3" fill={H.wood} />
      <path d="M24 20v26M42 20v26M8 34h48" stroke="#e0c9a6" strokeWidth="3" />
      <rect x="10" y="22" width="11" height="9" rx="1.5" fill="#e6d2b4" />
      <rect x="45" y="36" width="10" height="9" rx="1.5" fill="#e6d2b4" />
    </>
  ),
  coatrack: (
    <>
      <rect x="8" y="16" width="48" height="8" rx="3" fill={H.wood} />
      <path d="M16 24v8c0 3 3 4 5 2M32 24v8c0 3 3 4 5 2M48 24v8c0 3 3 4 5 2" stroke={H.dark} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M20 34c6 0 8 4 8 10s-3 8-8 8-8-3-8-8 2-10 8-10z" fill="#c2543f" opacity="0.85" />
    </>
  ),
  shoecabinet: (
    <>
      <rect x="10" y="14" width="44" height="40" rx="3" fill={H.wood} />
      <path d="M14 18h36l-2 10H16z" fill="#e0c9a6" />
      <path d="M14 30h36l-2 10H16z" fill="#e0c9a6" />
      <path d="M14 42h36l-2 9H16z" fill="#e0c9a6" />
      <path d="M28 23h8M28 35h8M28 46h8" stroke={H.dark} strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  pendant: (
    <>
      <path d="M32 6v14" stroke={H.dark} strokeWidth="2.5" />
      <path d="M32 20c9 0 16 8 16 14H16c0-6 7-14 16-14z" fill={H.dark} />
      <ellipse cx="32" cy="34" rx="16" ry="3" fill="#5a6273" />
      <path d="M22 38c4 8 16 8 20 0z" fill="#ffd98a" opacity="0.55" />
      <circle cx="32" cy="37" r="3" fill="#ffe6a8" />
    </>
  ),
  floorlamp: (
    <>
      <path d="M22 12h20l4 14H18z" fill="#e5d6b8" />
      <path d="M32 26v26" stroke={H.dark} strokeWidth="3" />
      <path d="M22 54h20c2 0 3 1 3 2s-1 2-3 2H22c-2 0-3-1-3-2s1-2 3-2z" fill={H.dark} />
      <path d="M24 28c4 8 12 8 16 0z" fill="#ffd98a" opacity="0.5" />
    </>
  ),
  lampshade: (
    <>
      <path d="M20 16h24l7 24H13z" fill="#dcd0ae" />
      <ellipse cx="32" cy="16" rx="12" ry="3.5" fill="#c9bd9a" />
      <ellipse cx="32" cy="40" rx="19" ry="4" fill="#e8dfc4" />
      <path d="M32 44v10" stroke={H.dark} strokeWidth="2.5" />
    </>
  ),
  bulb: (
    <>
      <path d="M32 8c9 0 15 7 15 14 0 6-4 9-6 13H23c-2-4-6-7-6-13 0-7 6-14 15-14z" fill="#ffe08a" />
      <path d="M25 22c0-5 3-8 7-9" stroke="#fff3c4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="23" y="36" width="18" height="5" rx="2" fill={H.steel} />
      <rect x="24" y="42" width="16" height="4" rx="2" fill="#9aa4b5" />
      <rect x="26" y="47" width="12" height="5" rx="2.5" fill="#8d97a8" />
    </>
  ),
  cushion: (
    <>
      <path d="M14 14h36c3 0 4 2 4 5v26c0 3-1 5-4 5H14c-3 0-4-2-4-5V19c0-3 1-5 4-5z" fill="#c2543f" />
      <path d="M10 14c4 4 4 8 0 12M54 14c-4 4-4 8 0 12M10 50c4-4 4-8 0-12M54 50c-4-4-4-8 0-12" stroke="#a8432f" strokeWidth="2.5" fill="none" />
      <path d="M22 24l20 16M42 24L22 40" stroke="#dd7a63" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  throw: (
    <>
      <path d="M8 18c14-4 34-4 48 0v10c-14 4-34 4-48 0z" fill="#8fa8c9" />
      <path d="M8 28c14 4 34 4 48 0v10c-14 4-34 4-48 0z" fill="#7d92c4" />
      <path d="M8 38c14 4 34 4 48 0v8c-14 4-34 4-48 0z" fill="#6b80b4" />
      <path d="M12 48v6M22 49v6M42 49v6M52 48v6" stroke="#6b80b4" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  curtainpole: (
    <>
      <rect x="6" y="12" width="52" height="5" rx="2.5" fill={H.woodDark} />
      <circle cx="6" cy="14.5" r="4" fill={H.wood} /><circle cx="58" cy="14.5" r="4" fill={H.wood} />
      <path d="M14 17c-2 14-2 26 0 38 4-2 6-6 6-14s-2-18-6-24z" fill="#c9b48f" />
      <path d="M22 17c-1 14-1 26 1 38 4-2 6-6 6-14s-3-18-7-24z" fill="#dbc7a4" />
      <path d="M40 17c1 14 1 26-1 38 4-2 8-6 8-14s-3-18-7-24z" fill="#c9b48f" />
    </>
  ),
  tealight: (
    <>
      <path d="M32 8c4 5 6 9 6 12 0 4-3 6-6 6s-6-2-6-6c0-3 2-7 6-12z" fill="#ffbe5c" />
      <path d="M32 14c2 3 3 5 3 7s-1 3-3 3-3-1-3-3 1-4 3-7z" fill="#fff0b8" />
      <path d="M18 32h28v12c0 4-3 6-8 6H26c-5 0-8-2-8-6z" fill="#cfd8e4" opacity="0.8" />
      <ellipse cx="32" cy="32" rx="14" ry="4" fill="#e6edf6" opacity="0.9" />
    </>
  ),
  flatpack: (
    <>
      <path d="M8 20h48v26c0 4-3 6-7 6H15c-4 0-7-2-7-6z" fill="#c9a276" />
      <path d="M8 20h48v8H8z" fill="#b08a5f" />
      <path d="M32 28v24" stroke="#a5763f" strokeWidth="2" />
      <path d="M14 34h12M38 34h12M14 42h12M38 42h12" stroke="#b08a5f" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  allenkey: (
    <>
      <path d="M14 14h10v30c0 3-2 5-5 5s-5-2-5-5z" fill={H.steel} />
      <path d="M19 49h28c3 0 5 2 5 5s-2 5-5 5H19z" fill="#9aa4b5" />
      <path d="M14 14h10v6H14z" fill="#8d97a8" />
    </>
  ),
  camlock: (
    <>
      <circle cx="26" cy="32" r="15" fill={H.steel} />
      <circle cx="26" cy="32" r="9" fill="#9aa4b5" />
      <path d="M22 28h8v8h-8z" fill={H.dark} />
      <path d="M41 28h18v8H41z" fill="#9aa4b5" />
      <circle cx="57" cy="32" r="4" fill={H.steel} />
    </>
  ),
  dowel: (
    <>
      <rect x="8" y="22" width="48" height="12" rx="6" fill={H.wood} />
      <path d="M14 22v12M22 22v12M30 22v12M38 22v12M46 22v12" stroke="#a5763f" strokeWidth="1.6" />
      <ellipse cx="56" cy="28" rx="3" ry="6" fill="#b08a5f" />
      <path d="M12 40h40" stroke="#a5763f" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    </>
  ),
  screw: (
    <>
      <path d="M24 8h16v10H24z" fill={H.steel} />
      <path d="M27 12h10" stroke={H.dark} strokeWidth="2.5" />
      <path d="M28 18h8l-2 30c0 2-1 3-2 3s-2-1-2-3z" fill="#9aa4b5" />
      <path d="M27 24h10M27 30h9M28 36h7M29 42h5" stroke={H.steel} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  bracket: (
    <>
      <path d="M12 10h10v34h30v10H12z" fill={H.steel} />
      <circle cx="17" cy="18" r="2.4" fill={H.dark} /><circle cx="17" cy="30" r="2.4" fill={H.dark} />
      <circle cx="32" cy="49" r="2.4" fill={H.dark} /><circle cx="44" cy="49" r="2.4" fill={H.dark} />
      <path d="M22 44l30 10" stroke="#9aa4b5" strokeWidth="2" />
    </>
  ),
  wallplug: (
    <>
      <path d="M26 10h12l-2 40c0 3-2 4-4 4s-4-1-4-4z" fill="#e08b3a" />
      <path d="M26 18h12M26 26h12M27 34h10M28 42h8" stroke="#b86e26" strokeWidth="2" />
      <path d="M32 10v44" stroke="#c47c30" strokeWidth="2" />
    </>
  ),
  level: (
    <>
      <rect x="4" y="24" width="56" height="16" rx="4" fill="#e0a95f" />
      <rect x="22" y="28" width="20" height="9" rx="3" fill="#dff3e2" />
      <circle cx="32" cy="32.5" r="3.5" fill="#57a45e" />
      <path d="M27 28v9M37 28v9" stroke="#3d7f45" strokeWidth="1.6" />
      <rect x="8" y="29" width="8" height="6" rx="2" fill="#c98f45" />
      <rect x="48" y="29" width="8" height="6" rx="2" fill="#c98f45" />
    </>
  ),
  drill: (
    <>
      <path d="M10 18h26c4 0 6 3 6 7v8c0 4-2 7-6 7H10z" fill="#e0a95f" />
      <path d="M42 24h8v10h-8z" fill={H.steel} />
      <path d="M50 27h12v4H50z" fill="#9aa4b5" />
      <path d="M14 40h14l-3 14c0 2-2 3-4 3h-6c-2 0-3-1-3-3z" fill={H.dark} />
      <rect x="12" y="52" width="18" height="6" rx="2" fill="#5a6273" />
    </>
  ),
  screwdriver: (
    <>
      <path d="M34 22h20c4 0 6 3 6 8s-2 8-6 8H34z" fill="#c2543f" />
      <path d="M40 22v16M48 22v16" stroke="#a8432f" strokeWidth="2" />
      <rect x="14" y="27" width="22" height="6" rx="2" fill={H.steel} />
      <path d="M6 27h9v6H6z" fill="#9aa4b5" />
    </>
  ),
  instructions: (
    <>
      <rect x="12" y="8" width="40" height="48" rx="3" fill="#f4f1e6" />
      <circle cx="26" cy="20" r="4" fill={H.dark} />
      <path d="M26 25v10M21 29h10M22 43l4-8M30 43l-4-8" stroke={H.dark} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M38 18h10M38 26h10M38 34h8" stroke="#c9c2b0" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 44h10" stroke="#c9c2b0" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  missingpart: (
    <>
      <path d="M10 22h44v24c0 4-3 6-7 6H17c-4 0-7-2-7-6z" fill="#c9a276" />
      <path d="M10 22h44v7H10z" fill="#b08a5f" />
      <circle cx="44" cy="42" r="12" fill="#d8544f" />
      <path d="M44 35v9" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="49" r="2" fill="#fff" />
    </>
  )
}
