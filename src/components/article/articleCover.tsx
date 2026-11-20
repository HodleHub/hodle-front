import Image from 'next/image'
import { ArticleCover as Cover } from '../../types/article'

type ArticleCoverProps = {
  cover: Cover | null
  fallbackSrc: string
  fallbackAlt: string
  priority?: boolean
}

/**
 * Cover slab above the headline. Articles without a `coverImage` reuse their
 * generated Open Graph image so the in-page cover and social preview cannot
 * drift apart. The image goes through the Next image optimizer (WebP, sized
 * to the viewport); social metadata keeps pointing at the raw 1200x630 route.
 */
export default function ArticleCover({
  cover,
  fallbackSrc,
  fallbackAlt,
  priority = false,
}: ArticleCoverProps) {
  const image = cover ?? { src: fallbackSrc, alt: fallbackAlt }
  const aspectRatio = cover ? 'aspect-[16/9]' : 'aspect-[40/21]'

  return (
    <div
      className={`relative ${aspectRatio} w-full overflow-hidden rounded-xl bg-[#0a0a0a]`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        fetchPriority={priority ? 'high' : undefined}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover"
      />
    </div>
  )
}
