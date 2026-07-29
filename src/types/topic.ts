export type TopicIcon = { src: string; label: string }

export type TopicFaq = { question: string; answer: string }

export type TopicCta = { label: string; href: string }

export type TopicSectionKind = 'PROSE' | 'STEPS' | 'ASSETS' | 'COMPARISON' | 'CODE'

export type TopicComparison = { headers: string[]; rows: string[][] }

export type TopicCode = { label: string; language: string; snippet: string }

export type TopicSection = {
  id: string
  kind: TopicSectionKind
  heading: string
  body: string
  bullets: string[]
  icons: TopicIcon[]
  comparison: TopicComparison | null
  code: TopicCode | null
}

export type TopicPage = {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  primaryKeyword: string
  updatedAt: string
  changeFrequency: 'weekly' | 'monthly'
  priority: number
  kicker: string
  subhead: string
  heroIcons: TopicIcon[]
  ctaSubhead: string
  ctaPrimary: TopicCta
  ctaSecondary: TopicCta
  sections: TopicSection[]
  faqSubhead: string
  faq: TopicFaq[]
  related: TopicCta[]
  ogImage: string
}
