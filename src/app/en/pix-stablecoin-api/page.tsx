import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import { englishPixStablecoin as topic } from '../../../content/topics/englishPixStablecoin'
import TopicHero from '../../../components/topic/topicHero'
import TopicSections from '../../../components/topic/topicSections'
import TopicFaq from '../../../components/topic/topicFaq'
import TopicRelated from '../../../components/topic/topicRelated'
import TopicCta from '../../../components/topic/topicCta'
import TopicJsonLd from '../../../components/topic/topicJsonLd'

const url = `https://hodle.com.br/${topic.slug}`

export const metadata: Metadata = {
  title: topic.title,
  description: topic.description,
  alternates: {
    canonical: url,
    languages: topic.translations,
    types: { 'text/markdown': url },
  },
  openGraph: {
    title: topic.title,
    description: topic.description,
    url,
    locale: 'en_US',
    type: 'article',
    images: [topic.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: topic.title,
    description: topic.description,
    images: [topic.ogImage],
  },
}

const EnglishPixStablecoinPage = (): ReactElement => (
  <main lang="en" className="min-h-screen bg-white">
    <TopicJsonLd topic={topic} />
    <TopicHero topic={topic} />
    <TopicSections topic={topic} />
    <TopicFaq faq={topic.faq} subhead={topic.faqSubhead} language="en" />
    <TopicRelated related={topic.related} language="en" />
    <TopicCta topic={topic} />
  </main>
)

export default EnglishPixStablecoinPage
