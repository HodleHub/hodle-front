import Image from 'next/image'
import { ArticleCover as Cover } from '../../types/article'
import { getOgKickerFontSize } from '../../utils/getOgKickerFontSize'

type ArticleCoverProps = {
  cover: Cover | null
  kicker: string
  priority?: boolean
}

const OG_CANVAS_WIDTH = 1200
const OG_KICKER_MAX_WIDTH = 940
const OG_KICKER_PADDING = 80
const DEFAULT_KICKER = 'Hodle'
const PERCENT = 100

const toCqw = ({ px }: { px: number }): string =>
  `${(px / OG_CANVAS_WIDTH) * PERCENT}cqw`

/**
 * Cover slab above the headline. An article with a `coverImage` renders it
 * through the Next image optimizer. Without one, the cover is an HTML/CSS
 * panel that mirrors the generated Open Graph share card (near-black panel,
 * fading grid, Space Grotesk Light kicker) so the first paint carries the
 * largest element and no image has to load. The panel and the card share the
 * kicker text and `getOgKickerFontSize`; sizes scale with the panel width via
 * container query units. The panel is `aria-hidden` because the kicker is a
 * decorative tagline and the page headline already names the article.
 */
export default function ArticleCover({
  cover,
  kicker,
  priority = false,
}: ArticleCoverProps) {
  if (cover) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority={priority}
          fetchPriority={priority ? 'high' : undefined}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
      </div>
    )
  }

  const text = kicker || DEFAULT_KICKER

  return (
    <div
      aria-hidden="true"
      className="cover-panel relative flex aspect-[40/21] w-full items-center justify-center overflow-hidden rounded-xl bg-[#0a0a0a]"
    >
      <div className="dark-grid absolute inset-0" />

      <p
        className="relative text-center font-[family-name:var(--font-space-grotesk)] font-light text-white"
        style={{
          maxWidth: toCqw({ px: OG_KICKER_MAX_WIDTH }),
          padding: `0 ${toCqw({ px: OG_KICKER_PADDING })}`,
          fontSize: toCqw({ px: getOgKickerFontSize({ kicker: text }) }),
          lineHeight: 1.1,
          letterSpacing: '-0.035em',
        }}
      >
        {text}
      </p>
    </div>
  )
}
