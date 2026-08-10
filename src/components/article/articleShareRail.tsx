'use client'

import { useEffect, useState } from 'react'
import { Check, Link2 } from 'lucide-react'

const COPIED_RESET_MS = 2000

const pill =
  'inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-[12.5px] text-gray-500 transition-colors hover:border-gray-300 hover:text-foreground'

type ArticleShareRailProps = {
  url: string
  title: string
}

/**
 * Sticky rail beside the body: copy the canonical link, or hand it to X with the
 * headline pre-filled.
 */
export default function ArticleShareRail({
  url,
  title,
}: ArticleShareRailProps) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) {
      return
    }

    const timer = setTimeout(() => setIsCopied(false), COPIED_RESET_MS)

    return () => clearTimeout(timer)
  }, [isCopied])

  const copyLink = async () => {
    await navigator.clipboard.writeText(url)
    setIsCopied(true)
  }

  const shareHref = `https://x.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`

  return (
    <div className="flex flex-wrap items-center gap-2 lg:sticky lg:top-24 lg:flex-col lg:items-start">
      <button type="button" onClick={copyLink} className={pill}>
        {isCopied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Link2 className="h-3.5 w-3.5" />
        )}
        {isCopied ? 'Link copiado' : 'Copiar link'}
      </button>

      <a href={shareHref} target="_blank" rel="noreferrer" className={pill}>
        Compartilhar no X
      </a>
    </div>
  )
}
