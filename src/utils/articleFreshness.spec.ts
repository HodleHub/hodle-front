import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, it } from 'vitest'
import sitemap from '../app/sitemap'
import ArticleJsonLd from '../components/article/articleJsonLd'
import { getAllArticles } from './getAllArticles'
import { getArticleMarkdown } from './getArticleMarkdown'
import type { ArticleMeta } from '../types/article'

it('keeps an updated article original publication date while advertising its revision to crawlers', (): void => {
  Object.assign(globalThis, { React })

  const article: ArticleMeta | undefined = getAllArticles().find((item: ArticleMeta): boolean => item.slug === 'comparar-api-pix-baas')

  if (!article) throw new Error('Comparison article missing')

  const html: string = renderToStaticMarkup(React.createElement(ArticleJsonLd, { article }))
  const url: string = `https://hodle.com.br/articles/${article.slug}`

  expect(getArticleMarkdown({ slug: article.slug })).toContain('publicado em 2026-09-22')
  expect(getArticleMarkdown({ slug: article.slug })).toContain('Atualizado em 2026-09-29.')
  expect(article.date).toBe('2026-09-22')
  expect(article.updatedAt).toBe('2026-09-29')
  expect(html).toContain('"datePublished":"2026-09-22"')
  expect(html).toContain('"dateModified":"2026-09-29"')
  expect(sitemap().find((entry): boolean => entry.url === url)?.lastModified).toEqual(new Date('2026-09-29'))
  expect(sitemap().find((entry): boolean => entry.url === 'https://hodle.com.br/articles')?.lastModified).toEqual(new Date('2026-09-29'))
})

it('uses the original date for articles without a revision', (): void => {
  const articles: ArticleMeta[] = getAllArticles().filter((article: ArticleMeta): boolean => !article.updatedAt)
  const entries: ReturnType<typeof sitemap> = sitemap()

  expect(articles.length).toBeGreaterThan(0)

  for (const article of articles) {
    expect(entries.find((entry): boolean => entry.url === `https://hodle.com.br/articles/${article.slug}`)?.lastModified).toEqual(new Date(article.date))
  }
})
