import Image from 'next/image'
import { formatArticleDate } from '../../utils/formatArticleDate'
import { ArticleAuthor } from '../../types/article'

type ArticleBylineProps = {
  author: ArticleAuthor
  date: string
  readingMinutes: number
}

export default function ArticleByline({
  author,
  date,
  readingMinutes,
}: ArticleBylineProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-gray-400">
      <span className="flex items-center gap-2 text-foreground">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white">
          <Image
            src="/h-logo.svg"
            alt=""
            width={12}
            height={12}
            aria-hidden="true"
          />
        </span>
        {author.name}
      </span>

      <time dateTime={date}>{formatArticleDate({ date })}</time>

      <span>{readingMinutes} min de leitura</span>
    </div>
  )
}
