import { ArticleMeta } from '../../types/article'

const siteUrl = 'https://hodle.com.br'

export default function ArticleJsonLd({ article }: { article: ArticleMeta }) {
  const url = `${siteUrl}/articles/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'pt-BR',
    articleSection: article.category.label,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: article.cover ? `${siteUrl}${article.cover.src}` : `${siteUrl}/og-image-v2.png`,
    author: { '@type': 'Organization', name: article.author.name, url: siteUrl },
    publisher: {
      '@type': 'Organization',
      name: 'Hodle',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/new_logo_hodle.png` },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
