import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, it } from 'vitest'
import sitemap from '../app/sitemap'
import ArticleJsonLd from '../components/article/articleJsonLd'
import { getAllArticles } from './getAllArticles'
import { getArticleMarkdown } from './getArticleMarkdown'
import type { ArticleMeta } from '../types/article'

it.each([
  { slug: 'comparar-api-pix-baas', publishedAt: '2026-09-22', updatedAt: '2026-09-29' },
  { slug: 'psav-regulacao-banco-central', publishedAt: '2026-09-01', updatedAt: '2026-10-03' },
])('keeps $slug original publication date while advertising its revision to crawlers', ({ slug, publishedAt, updatedAt }): void => {
  Object.assign(globalThis, { React })

  const article: ArticleMeta | undefined = getAllArticles().find((item: ArticleMeta): boolean => item.slug === slug)

  if (!article) throw new Error(`Article missing: ${slug}`)

  const html: string = renderToStaticMarkup(React.createElement(ArticleJsonLd, { article }))
  const url: string = `https://hodle.com.br/articles/${article.slug}`

  expect(getArticleMarkdown({ slug: article.slug })).toContain(`publicado em ${publishedAt}`)
  expect(getArticleMarkdown({ slug: article.slug })).toContain(`Atualizado em ${updatedAt}.`)
  expect(article.date).toBe(publishedAt)
  expect(article.updatedAt).toBe(updatedAt)
  expect(html).toContain(`"datePublished":"${publishedAt}"`)
  expect(html).toContain(`"dateModified":"${updatedAt}"`)
  expect(sitemap().find((entry): boolean => entry.url === url)?.lastModified).toEqual(new Date(updatedAt))
  expect(sitemap().find((entry): boolean => entry.url === 'https://hodle.com.br/articles')?.lastModified).toEqual(new Date('2026-10-03'))
})

it('uses the original date for articles without a revision', (): void => {
  const articles: ArticleMeta[] = getAllArticles().filter((article: ArticleMeta): boolean => !article.updatedAt)
  const entries: ReturnType<typeof sitemap> = sitemap()

  expect(articles.length).toBeGreaterThan(0)

  for (const article of articles) {
    expect(entries.find((entry): boolean => entry.url === `https://hodle.com.br/articles/${article.slug}`)?.lastModified).toEqual(new Date(article.date))
  }
})
