import Image from 'next/image'
import { ArticleCover } from '../../types/article'

/**
 * 16:10 thumbnail for list rows. Mirrors the cover fallback: no asset means a
 * plain near-black slab instead of a broken image.
 */
export default function ArticleRowThumb({
  cover,
}: {
  cover: ArticleCover | null
}) {
  if (!cover) {
    return (
      <div className="relative h-10 w-16 overflow-hidden rounded-md bg-[#0a0a0a]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px)',
            backgroundSize: '6px 6px',
          }}
        />
      </div>
    )
  }

  return (
    <div className="relative h-10 w-16 overflow-hidden rounded-md bg-[#0a0a0a]">
      <Image
        src={cover.src}
        alt=""
        fill
        sizes="64px"
        aria-hidden="true"
        className="object-cover"
      />
    </div>
  )
}
