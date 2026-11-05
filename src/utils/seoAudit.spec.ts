import fs from 'fs'
import * as React from 'react'
import { expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import ArticleJsonLd from '../components/article/articleJsonLd'
import { getAllArticles } from './getAllArticles'
import { groupArticlesByCategory } from './groupArticlesByCategory'
import { articlesIndexToMarkdown } from './articlesIndexToMarkdown'

vi.stubGlobal('React', React)

const read = (file: string): string => fs.readFileSync(file, 'utf8')

it('keeps all short discovery content in the extended document within the crawl budget', () => {
  const short = read('public/llms.txt')
  const full = read('public/llms-full.txt')

  expect(full.startsWith(short.trimEnd())).toBe(true)
  expect(full.startsWith('# Hodle\n')).toBe(true)
  expect(Buffer.byteLength(full)).toBeLessThan(1_500_000)

  for (const section of short.match(/^## .+$/gm) ?? []) {
    expect(full).toContain(section)
  }
})

it('publishes the confirmed LinkedIn profile and preserves the Brazilian entity identifier', () => {
  const source = read('src/app/siteDocument.tsx')

  expect(source).toContain("'https://www.linkedin.com/company/hodle-app'")
  expect(source).toContain("value: '63.673.264/0001-26'")
})

it('keeps the revised snippets between 140 and 155 characters', () => {
  const files = [
    'src/app/(pt)/neobank/page.tsx',
    'src/app/(pt)/crypto-as-a-service/page.tsx',
    'src/app/(pt)/legal/page.tsx',
    'src/app/(pt)/faq/page.tsx',
    'src/app/(pt)/articles/layout.tsx',
    'src/content/articles/comparar-api-pix-baas.mdx',
    'src/content/articles/auto-custodia-nao-e-detalhe-de-implementacao.mdx',
  ]

  for (const file of files) {
    const description = read(file).match(/(?:description:\s*|const description =\s*)'([^']+)'/)?.[1]

    expect(description, file).toBeDefined()
    expect(description?.length, file).toBeGreaterThanOrEqual(140)
    expect(description?.length, file).toBeLessThanOrEqual(155)
  }
})

it('groups every existing article once and exposes the same headings in Markdown', () => {
  const articles = getAllArticles()
  const groups = groupArticlesByCategory(articles)

  expect(groups.flatMap((group) => group.articles).map((article) => article.slug).sort())
    .toEqual(articles.map((article) => article.slug).sort())

  for (const group of groups) {
    expect(articlesIndexToMarkdown()).toContain(`## ${group.category.label}`)
  }
})

it('uses each generated article image in BlogPosting without inventing a person', () => {
  for (const article of getAllArticles()) {
    const markup = renderToStaticMarkup(ArticleJsonLd({ article }))
    const schema = JSON.parse(markup.replace(/^<script[^>]*>|<\/script>$/g, ''))

    expect(schema.image).toBe(article.cover
      ? `https://hodle.com.br${article.cover.src}`
      : `https://hodle.com.br/articles/${article.slug}/opengraph-image`)
    expect(schema.author['@type']).toBe('Organization')
  }
})

it('keeps article titles within the audit range with the brand template', () => {
  expect(read('src/app/(pt)/articles/layout.tsx')).toContain("template: '%s | Hodle'")

  for (const article of getAllArticles()) {
    const title = `${article.title} | Hodle`

    expect(title.length, article.slug).toBeGreaterThanOrEqual(30)
    expect(title.length, article.slug).toBeLessThanOrEqual(60)
    expect(article.description.length, article.slug).toBeLessThanOrEqual(160)
  }
})
