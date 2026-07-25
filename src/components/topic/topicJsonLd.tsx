import { TopicPage } from '../../types/topic'

const siteUrl = 'https://hodle.com.br'

export default function TopicJsonLd({ topic }: { topic: TopicPage }) {
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: topic.h1,
    description: topic.description,
    url: `${siteUrl}/${topic.slug}`,
    inLanguage: 'pt-BR',
    dateModified: topic.updatedAt,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Hodle',
      url: siteUrl,
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topic.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: topic.h1,
        item: `${siteUrl}/${topic.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}
