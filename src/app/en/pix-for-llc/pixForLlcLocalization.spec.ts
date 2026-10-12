import type { Metadata } from 'next'
import * as React from 'react'
import { beforeAll, expect, it } from 'vitest'
import sitemap from '../../sitemap'
import { englishPixParaLlc } from '../../../content/topics/englishPixParaLlc'
import { pixParaLlc } from '../../../content/topics/pixParaLlc'
import { getMarkdownDocument } from '../../../utils/getMarkdownDocument'
import { isKnownSitePath } from '../../../utils/isKnownSitePath'

let portugueseMetadata: Metadata
let englishMetadata: Metadata

const translations = {
  'pt-BR': '/pix-para-llc',
  en: '/en/pix-for-llc',
}

const absoluteLanguages = {
  'pt-BR': 'https://hodle.com.br/pix-para-llc',
  en: 'https://hodle.com.br/en/pix-for-llc',
}

beforeAll(async () => {
  const testGlobal = globalThis as typeof globalThis & { React: typeof React }

  testGlobal.React = React
  englishMetadata = (await import('./page')).metadata
  portugueseMetadata = await (await import('../../(pt)/[slug]/page')).generateMetadata({
    params: Promise.resolve({ slug: 'pix-para-llc' }),
  })
})

it('publishes reciprocal language alternates for both Pix for LLC pages', () => {
  expect(pixParaLlc.translations).toEqual(translations)
  expect(englishPixParaLlc.translations).toEqual(translations)
  expect(portugueseMetadata.alternates?.languages).toEqual(translations)
  expect(englishMetadata.alternates?.languages).toEqual(translations)
  expect(englishMetadata.alternates?.canonical).toBe(absoluteLanguages.en)
})

it('lists both locales in the sitemap with reciprocal alternates', () => {
  for (const url of Object.values(absoluteLanguages)) {
    const entries = sitemap().filter((item): boolean => item.url === url)

    expect(entries).toHaveLength(1)
    expect(entries[0]?.alternates?.languages).toEqual(absoluteLanguages)
  }
})

it('serves the English page as a known path with a complete Markdown document', () => {
  const document: string | undefined = getMarkdownDocument({ pathname: '/en/pix-for-llc' })

  expect(isKnownSitePath('/en/pix-for-llc')).toBe(true)
  expect(document).toContain(`# ${englishPixParaLlc.h1}`)
  expect(document).toContain('Canonical source: https://hodle.com.br/en/pix-for-llc')

  for (const item of englishPixParaLlc.faq) {
    expect(document).toContain(item.question)
    expect(document).toContain(item.answer)
  }
})

it('mirrors the Portuguese page structure without adding sections or answers', () => {
  expect(englishPixParaLlc.language).toBe('en')
  expect(englishPixParaLlc.sections.map((section) => section.kind)).toEqual(
    pixParaLlc.sections.map((section) => section.kind),
  )
  expect(englishPixParaLlc.sections.map((section) => section.bullets.length)).toEqual(
    pixParaLlc.sections.map((section) => section.bullets.length),
  )
  expect(englishPixParaLlc.faq).toHaveLength(pixParaLlc.faq.length)
  expect(englishPixParaLlc.related.map((link) => link.href)).toContain('/pix-para-llc')
  expect(pixParaLlc.related.map((link) => link.href)).toContain('/en/pix-for-llc')
})

it('keeps search snippets within length limits and lets the template add the brand', () => {
  expect(englishPixParaLlc.title.length).toBeLessThanOrEqual(60)
  expect(englishPixParaLlc.description.length).toBeGreaterThanOrEqual(120)
  expect(englishPixParaLlc.description.length).toBeLessThanOrEqual(160)
  expect(englishMetadata.title).not.toMatch(/Hodle/i)
  expect(englishPixParaLlc.h1.toLowerCase()).toContain(englishPixParaLlc.primaryKeyword)
})
