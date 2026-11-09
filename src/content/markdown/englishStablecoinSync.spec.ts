import { readFileSync } from 'node:fs'
import { expect, it } from 'vitest'
import sitemap from '../../app/sitemap'
import { englishStablecoinTopics } from '../topics/englishStablecoinApi'
import { getMarkdownDocument } from '../../utils/getMarkdownDocument'
import { isKnownSitePath } from '../../utils/isKnownSitePath'
import { markdownPaths } from './markdownPaths'
import { sandboxQuote } from '../sandboxQuote'

it.each(englishStablecoinTopics)('keeps $slug discoverable with a synchronized Markdown mirror', (topic) => {
  const pathname = `/${topic.slug}`

  const document = getMarkdownDocument({ pathname })

  expect(isKnownSitePath(pathname)).toBe(true)
  expect(markdownPaths).toContain(pathname)
  expect(document).toContain(`# ${topic.h1}`)
  expect(document).toContain(`Canonical source: https://hodle.com.br${pathname}`)
  expect(document).toContain(topic.updatedAt)
  expect(document).toContain(sandboxQuote.snippet)

  for (const section of topic.sections) {
    expect(document).toContain(`## ${section.heading}`)
    expect(document).toContain(section.body)
  }

  for (const item of topic.faq) {
    expect(document).toContain(item.question)
    expect(document).toContain(item.answer)
  }

  const entries = sitemap().filter((entry) => entry.url === `https://hodle.com.br${pathname}`)

  expect(entries).toHaveLength(1)
  expect(entries[0].lastModified).toEqual(new Date(topic.updatedAt))
  expect(entries[0].alternates?.languages).toEqual({
    en: `https://hodle.com.br${pathname}`,
    'x-default': `https://hodle.com.br${pathname}`,
  })

  for (const file of ['public/llms.txt', 'public/llms-full.txt']) {
    expect(readFileSync(file, 'utf8')).toContain(`https://hodle.com.br${pathname}`)
  }
})
