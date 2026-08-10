import Image from 'next/image'
import { ArticleCover as Cover } from '../../types/article'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type ArticleCoverProps = {
  cover: Cover | null
  kicker: string
  priority?: boolean
}

/**
 * Cover slab above the headline. Without a `coverImage` in frontmatter it falls
 * back to a near-black panel carrying the article kicker, so a new article never
 * needs an asset to look finished.
 */
export default function ArticleCover({
  cover,
  kicker,
  priority = false,
}: ArticleCoverProps) {
  if (!cover) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
        <div className="dark-grid absolute inset-0" />
        <div className="relative flex h-full items-center justify-center px-10">
          <span
            className={`${heading} text-center text-[clamp(1.5rem,3.4vw,2.6rem)] font-light leading-[1.1] tracking-[-0.035em] text-white text-balance`}
          >
            {kicker}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0a0a0a]">
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover"
      />
    </div>
  )
}
