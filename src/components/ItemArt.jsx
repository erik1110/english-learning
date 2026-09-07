import { VEG } from './art/veg'
import { KIT } from './art/kit'
import { HOME } from './art/home'

const ICONS = { ...VEG, ...KIT, ...HOME }

// Renders the little picture on a themed vocabulary card. `art` is either an
// icon key from one of the SVG sets, or an emoji character used as-is.
export default function ItemArt({ art, size = 64 }) {
  const icon = ICONS[art]
  if (!icon) {
    return (
      <div className="item-art" style={{ width: size, height: size, fontSize: size * 0.52 }}>
        <span>{art || '📦'}</span>
      </div>
    )
  }
  return (
    <div className="item-art" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" width={size - 10} height={size - 10} aria-hidden="true">{icon}</svg>
    </div>
  )
}
