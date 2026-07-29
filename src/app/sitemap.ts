import { MetadataRoute } from 'next'
import { getAllArticles } from '../utils/mdx'
import { getAllTopics } from '../utils/getAllTopics'

const siteUrl = 'https://hodle.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  const topics = getAllTopics()

  const articleEntries: MetadataRoute.Sitemap = articles.map(
    (article: { slug: string; date: string }) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }),
  )

  const topicEntries: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: `${siteUrl}/${topic.slug}`,
    lastModified: new Date(topic.updatedAt),
    changeFrequency: topic.changeFrequency,
    priority: topic.priority,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/termos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/ai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/glossario`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/precos`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...articleEntries,
    ...topicEntries,
  ]
}