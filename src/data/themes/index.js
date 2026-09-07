// 主題單字 · Themed vocabulary areas.
// Each area has sections of items; the <Themes> page renders them all from
// this list, so adding a new area is just a new file plus one entry here.
import { SUPERMARKET } from './supermarket'
import { KITCHEN } from './kitchen'
import { IKEA } from './ikea'

export const THEME_AREAS = [SUPERMARKET, KITCHEN, IKEA]

export const THEME_ITEM_COUNT = THEME_AREAS.reduce(
  (total, area) => total + area.sections.reduce((n, s) => n + s.items.length, 0),
  0
)

export function areaById(id) {
  return THEME_AREAS.find((a) => a.id === id) || null
}
