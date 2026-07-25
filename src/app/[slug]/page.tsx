import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllTopics } from '../../utils/getAllTopics'
import { getTopicBySlug } from '../../utils/getTopicBySlug'
import { reservedSlugs } from '../../utils/reservedSlugs'
import TopicHero from '../../components/topic/topicHero'
import TopicSections from '../../components/topic/topicSections'
import TopicFaq from '../../components/topic/topicFaq'
import TopicRelated from '../../components/topic/topicRelated'
import TopicCta from '../../components/topic/topicCta'
import TopicJsonLd from '../../components/topic/topicJsonLd'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  const slugs = getAllTopics().map((topic) => ({ slug: topic.slug }))

  for (const { slug } of slugs) {
    if (reservedSlugs.includes(slug)) {
      throw new Error(
        `Collision: topic slug "${slug}" is reserved by an existing route. ` +
          'Rename the topic slug to avoid overwriting existing pages.',
      )
    }
  }

  return slugs
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopicBySlug({ slug })

  if (!topic) {
    return {}
  }

  const siteUrl = 'https://hodle.com.br'
  const url = `${siteUrl}/${topic.slug}`

  return {
    title: topic.title,
    description: topic.description,
    keywords: topic.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: topic.title,
      description: topic.description,
      url,
      type: 'article',
      locale: 'pt_BR',
      images: [
        {
          url: `${siteUrl}${topic.ogImage}`,
          width: 1200,
          height: 630,
          alt: topic.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: topic.title,
      description: topic.description,
      images: [`${siteUrl}${topic.ogImage}`],
    },
  }
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const topic = getTopicBySlug({ slug })

  if (!topic) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <TopicJsonLd topic={topic} />
      <TopicHero topic={topic} />
      <TopicSections topic={topic} />
      <TopicFaq faq={topic.faq} />
      <TopicRelated related={topic.related} />
      <TopicCta topic={topic} />
    </div>
  )
}
