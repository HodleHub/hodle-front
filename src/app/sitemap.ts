import { MetadataRoute } from 'next'
import { getAllArticles } from '../utils/getAllArticles'
import { getAllTopics } from '../utils/getAllTopics'
import { pageUpdatedAt } from '../content/pageUpdatedAt'

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
      lastModified: new Date(pageUpdatedAt.home),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(pageUpdatedAt.faq),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/legal`,
      lastModified: new Date(pageUpdatedAt.legal),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacidade`,
      lastModified: new Date(pageUpdatedAt.privacidade),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/termos`,
      lastModified: new Date(pageUpdatedAt.termos),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified: new Date(pageUpdatedAt.cookies),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/ai`,
      lastModified: new Date(pageUpdatedAt.ai),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/glossario`,
      lastModified: new Date(pageUpdatedAt.glossario),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/precos`,
      lastModified: new Date(pageUpdatedAt.precos),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: new Date(pageUpdatedAt.sobre),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contato`,
      lastModified: new Date(pageUpdatedAt.contato),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/desenvolvedores`,
      lastModified: new Date(pageUpdatedAt.desenvolvedores),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/brs`,
      lastModified: new Date('2026-08-03'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/en/brs`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...articleEntries,
    ...topicEntries,
  ]
}