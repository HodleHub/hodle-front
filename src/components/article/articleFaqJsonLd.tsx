import { ArticleFaqItem } from '../../types/article'

type ArticleFaqJsonLdProps = {
  items: ArticleFaqItem[]
}

/**
 * FAQPage structured data for the questions an article answers. Emitted only
 * when the article declares a `faq` block, so pages without one stay clean.
 */
export default function ArticleFaqJsonLd({ items }: ArticleFaqJsonLdProps) {
  if (items.length === 0) {
    return null
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'pt-BR',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
