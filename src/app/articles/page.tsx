import { notFound } from 'next/navigation'
import { getAllArticles } from '../../utils/getAllArticles'
import ArticleRow from '../../components/article/articleRow'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function ArticlesPage() {
  const articles = getAllArticles()

  // Rendering the shell with zero rows answers 200 with no content, which
  // Search Console files as a soft 404. Answering 404 is the honest status; the
  // page comes back on its own the day an article is added.
  if (articles.length === 0) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-[1160px] px-6 pb-24 pt-14 lg:pt-20">
      <header className="lg:grid lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-14">
        <span className="mb-7 block text-[13px] leading-none tracking-[-0.01em] text-foreground lg:mb-0 lg:pt-3">
          artigos
        </span>

        <div className="max-w-[720px]">
          <h1
            className={`${heading} text-[clamp(2.4rem,5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.035em] text-foreground`}
          >
            <span
              className="italic"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Artigos
            </span>{' '}
            Hodle
          </h1>

          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-gray-500">
            Notas de produto, engenharia e mercado sobre os trilhos que a Hodle
            opera: Pix, stablecoins, Lightning e as APIs que ligam os três.
          </p>
        </div>
      </header>

      <div className="mt-14 border-t border-gray-200">
        {articles.map((article) => (
          <ArticleRow key={article.slug} article={article} withThumb />
        ))}
      </div>
    </div>
  )
}
