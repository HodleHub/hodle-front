import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ArticleRowThumb from './articleRowThumb'
import { formatArticleDate } from '../../utils/formatArticleDate'
import { ArticleMeta } from '../../types/article'

type ArticleRowProps = {
  article: ArticleMeta
  withThumb?: boolean
}

/**
 * One line of the article index. A row, not a card: title carries the weight and
 * the metadata columns stay quiet until the whole row is hovered.
 */
export default function ArticleRow({
  article,
  withThumb = false,
}: ArticleRowProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex items-center gap-4 border-b border-gray-200 py-5 transition-colors hover:border-gray-300 sm:gap-6"
    >
      {withThumb ? <ArticleRowThumb cover={article.cover} /> : null}

      <span className="min-w-0 flex-1">
        <span className="block text-[15px] leading-snug text-foreground">
          {article.title}
        </span>
        <span className="mt-1 block text-[12.5px] text-gray-400 sm:hidden">
          {article.category.label} · {formatArticleDate({ date: article.date })}
        </span>
      </span>

      <span className="hidden w-[120px] shrink-0 text-[13px] text-gray-400 sm:block">
        {article.category.label}
      </span>

      <span className="hidden w-[100px] shrink-0 text-[13px] text-gray-400 sm:block">
        {formatArticleDate({ date: article.date })}
      </span>

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-white">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
