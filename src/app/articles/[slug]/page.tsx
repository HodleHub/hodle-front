import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllArticles } from '../../../utils/getAllArticles'
import { getArticleBySlug } from '../../../utils/getArticleBySlug'
import ArticleBreadcrumb from '../../../components/article/articleBreadcrumb'
import ArticleCover from '../../../components/article/articleCover'
import ArticleByline from '../../../components/article/articleByline'
import ArticleShareRail from '../../../components/article/articleShareRail'
import ArticleBody from '../../../components/article/articleBody'
import ArticleRelated from '../../../components/article/articleRelated'
import ArticleJsonLd from '../../../components/article/articleJsonLd'

const siteUrl = 'https://hodle.com.br'
const heading = 'font-[family-name:var(--font-space-grotesk)]'
const RELATED_COUNT = 3

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug({ slug })

  if (!article) {
    return {}
  }

  const url = `${siteUrl}/articles/${slug}`
  const image = article.cover ? article.cover.src : '/og-image-v2.png'

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author.name, url: siteUrl }],
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: 'Hodle',
      type: 'article',
      locale: 'pt_BR',
      publishedTime: article.date,
      section: article.category.label,
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [image],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug({ slug })

  if (!article) {
    notFound()
  }

  const related = getAllArticles()
    .filter((item) => item.slug !== slug)
    .slice(0, RELATED_COUNT)

  const ArticleContent = article.content

  return (
    <>
      <ArticleJsonLd article={article} />

      <article className="mx-auto max-w-[1160px] px-6 pt-10 lg:pt-14">
        <div className="lg:grid lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-14">
          <div className="mb-7 lg:mb-0 lg:pt-1">
            <ArticleBreadcrumb category={article.category} />
          </div>

          <header className="max-w-[720px]">
            <ArticleCover
              cover={article.cover}
              kicker={article.coverKicker}
              priority
            />

            <h1
              className={`${heading} mt-8 text-[clamp(1.85rem,3.6vw,2.6rem)] font-light leading-[1.1] tracking-[-0.035em] text-foreground text-balance`}
            >
              {article.title}
            </h1>

            <div className="mt-6">
              <ArticleByline
                author={article.author}
                date={article.date}
                readingMinutes={article.readingMinutes}
              />
            </div>
          </header>
        </div>

        <hr className="mt-10 border-gray-200" />

        <div className="pt-9 lg:grid lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-14">
          <div className="mb-8 lg:mb-0">
            <ArticleShareRail
              url={`${siteUrl}/articles/${slug}`}
              title={article.title}
            />
          </div>

          <div className="max-w-[620px] pb-4">
            <ArticleBody>
              <ArticleContent />
            </ArticleBody>
          </div>
        </div>
      </article>

      <ArticleRelated articles={related} />
    </>
  )
}
