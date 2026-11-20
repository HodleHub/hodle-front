import type { CSSProperties } from 'react'

export type CvSizeArgs = {
  mobile: number
  desktop: number
}

export type CvSizeStyle = CSSProperties & Record<'--cv-m' | '--cv-d', string>

/**
 * Intrinsic block sizes (px) for a `cv-section`, measured at 412px and 1350px wide.
 * A close estimate keeps in-page anchors landing on the right section while the
 * sections above them are still skipped.
 */
export const cvSize = ({ mobile, desktop }: CvSizeArgs): CvSizeStyle => ({
  '--cv-m': `${mobile}px`,
  '--cv-d': `${desktop}px`,
})
