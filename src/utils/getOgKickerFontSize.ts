const LONG_KICKER_CHARS = 44
const VERY_LONG_KICKER_CHARS = 66
const SIZE_DEFAULT = 72
const SIZE_LONG = 60
const SIZE_VERY_LONG = 50

/**
 * Type size for the kicker on an OG card, stepped down so a long kicker still
 * fits the 1200x630 panel without wrapping past three lines.
 */
export const getOgKickerFontSize = ({ kicker }: { kicker: string }): number => {
  if (kicker.length > VERY_LONG_KICKER_CHARS) {
    return SIZE_VERY_LONG
  }

  if (kicker.length > LONG_KICKER_CHARS) {
    return SIZE_LONG
  }

  return SIZE_DEFAULT
}
