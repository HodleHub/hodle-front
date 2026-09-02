export type OgGridLine = {
  key: string
  left: number
  top: number
  width: number
  height: number
  opacity: number
}

const CELL = 120
const LINE = 1
const BASE_OPACITY = 0.06
const CENTER_X_RATIO = 0.5
const CENTER_Y_RATIO = 0.3
const RADIUS_X_RATIO = 0.6
const RADIUS_Y_RATIO = 0.7
const FADE_START = 0.3
const FADE_END = 0.8

/**
 * How visible a grid line is at `distance`, expressed in mask radii. Mirrors the
 * `radial-gradient` mask `.dark-grid` uses on the page: solid to 30% of the
 * radius, then a linear fade out to 80%.
 */
const fadeAt = (distance: number): number => {
  if (distance <= FADE_START) {
    return BASE_OPACITY
  }

  if (distance >= FADE_END) {
    return 0
  }

  const remaining = (FADE_END - distance) / (FADE_END - FADE_START)

  return Number((BASE_OPACITY * remaining).toFixed(4))
}

const range = (limit: number): number[] =>
  Array.from({ length: Math.ceil(limit / CELL) + 1 }, (_, index) => index * CELL)

/**
 * The grid behind an OG card, as absolutely positioned lines. Satori has no
 * `mask-image`, so the radial fade of `.dark-grid` is baked into a per-line
 * opacity instead of applied to the layer as a whole.
 */
export const buildOgGridLines = ({
  width,
  height,
}: {
  width: number
  height: number
}): OgGridLine[] => {
  const centerX = width * CENTER_X_RATIO
  const centerY = height * CENTER_Y_RATIO
  const radiusX = width * RADIUS_X_RATIO
  const radiusY = height * RADIUS_Y_RATIO

  const vertical = range(width).map((x) => ({
    key: `v-${x}`,
    left: x,
    top: 0,
    width: LINE,
    height,
    opacity: fadeAt(Math.abs(x - centerX) / radiusX),
  }))

  const horizontal = range(height).map((y) => ({
    key: `h-${y}`,
    left: 0,
    top: y,
    width,
    height: LINE,
    opacity: fadeAt(Math.abs(y - centerY) / radiusY),
  }))

  return [...vertical, ...horizontal].filter((line) => line.opacity > 0)
}
