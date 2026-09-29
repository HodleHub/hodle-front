import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { beforeAll, expect, it } from 'vitest'
import { BrsFaq } from '../../components/brs/BrsFaq'
import { brsCopy, type BrsCopy } from '../../components/brs/brsCopy'
import { brsDepositExample } from '../../components/brs/brsDepositExample'
import { getMarkdownDocument } from '../../utils/getMarkdownDocument'
import { getTopicBySlug } from '../../utils/getTopicBySlug'
import { brla } from './brla'
import sitemap from '../../app/sitemap'
import { pageUpdatedAt } from '../pageUpdatedAt'

beforeAll((): void => {
  Object.assign(globalThis, { React })
})

it.each(['pt', 'en'] as const)('keeps every %s BRS answer in HTML and in the negotiated Markdown document', (language: 'pt' | 'en'): void => {
  const copy: BrsCopy = brsCopy[language]
  const html: string = renderToStaticMarkup(React.createElement(BrsFaq, { copy }))
  const pathname: string = language === 'pt' ? '/brs' : '/en/brs'
  const markdown: string | undefined = getMarkdownDocument({ pathname })

  for (const item of copy.faq.items) {
    expect(html).toContain(item.question)
    expect(html).toContain(item.answer)
    expect(markdown).toContain(item.question)
    expect(markdown).toContain(item.answer)
  }

  expect(html.match(/<details /g)).toHaveLength(copy.faq.items.length)
  expect(html.match(/open=""/g)).toHaveLength(1)
  expect(markdown).toContain(copy.hero.availability)
})

it('makes BRLA discoverable as a unique topic, sitemap URL and complete Markdown page', (): void => {
  const document: string | undefined = getMarkdownDocument({ pathname: '/brla' })

  expect(getTopicBySlug({ slug: 'brla' })).toEqual(brla)
  expect(sitemap().filter((entry): boolean => entry.url === 'https://hodle.com.br/brla')).toHaveLength(1)
  expect(document).toContain('# BRLA: compre com Pix na Hodle')
  expect(document).toContain('https://avenia.io/brla')
  expect(document).toContain('https://hodle.com.br/brs')

  for (const item of brla.faq) {
    expect(document).toContain(item.question)
    expect(document).toContain(item.answer)
  }
})

it('keeps BRS locale discovery reciprocal and dates it from the current content revision', (): void => {
  const languages: Record<string, string> = { 'pt-BR': 'https://hodle.com.br/brs', en: 'https://hodle.com.br/en/brs' }

  for (const url of Object.values(languages)) {
    const entry: ReturnType<typeof sitemap>[number] | undefined = sitemap().find((item): boolean => item.url === url)

    expect(entry?.lastModified).toEqual(new Date(pageUpdatedAt.brs))
    expect(entry?.alternates?.languages).toEqual(languages)
  }
})

it('uses the BRS purchase contract with centavos and no third-party destination', (): void => {
  expect(brsDepositExample.endpoint).toBe('https://api.hodle.com.br/api/deposit/asset')
  expect(brsDepositExample.body.value).toBe(10000)
  expect(brsDepositExample.body.network).toBe('solana')
  expect(brsDepositExample.body).not.toHaveProperty('address')
  expect(brsDepositExample.body).not.toHaveProperty('destination')
})
