import Link from 'next/link'
import ArticleRow from './articleRow'
import { ArticleMeta } from '../../types/article'

type ArticleRelatedProps = {
  articles: ArticleMeta[]
}

export default function ArticleRelated({ articles }: ArticleRelatedProps) {
  if (articles.length === 0) {
    return null
  }

  return (
    <section className="mx-auto max-w-[1160px] px-6 pb-24 pt-16">
      <h2 className="border-b border-gray-200 pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
        Mais da Hodle
      </h2>

      <div className="mb-10">
        {articles.map((article) => (
          <ArticleRow key={article.slug} article={article} />
        ))}
      </div>

      <Link
        href="/articles"
        className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-[12.5px] text-gray-500 transition-colors hover:border-gray-300 hover:text-foreground"
      >
        Ver todos os artigos
      </Link>
    </section>
  )
}
