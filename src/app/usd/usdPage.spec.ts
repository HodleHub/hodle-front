import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import type { Metadata } from 'next'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { beforeAll, expect, it } from 'vitest'
import { Faq } from '../../components/landingV2/Faq'
import { USD_AUDIENCES, USD_FAQ_ITEMS } from '../../components/usd/usdData'
import { getMarkdownDocument } from '../../utils/getMarkdownDocument'

const PROVIDER_NAMES: string[] = ['brale', 'avenia', 'mercury', 'woovi', 'nora', 'eulen', 'flashnet', 'sbc']

const USD_COMPONENTS_DIR = join(__dirname, '../../components/usd')

let usdMetadata: Metadata

beforeAll(async () => {
  const testGlobal = globalThis as typeof globalThis & { React: typeof React }

  testGlobal.React = React
  usdMetadata = (await import('./page')).metadata
})

it('publishes /usd as its own canonical page', () => {
  expect(usdMetadata.alternates?.canonical).toBe('https://hodle.com.br/usd')
})

it('serves every USD answer before JavaScript runs and keeps it identical in Markdown', () => {
  const html: string = renderToStaticMarkup(React.createElement(Faq, { items: USD_FAQ_ITEMS }))
  const markdown: string | undefined = getMarkdownDocument({ pathname: '/usd' })

  for (const item of USD_FAQ_ITEMS) {
    expect(html).toContain(item.question)
    expect(html).toContain(item.answer)
    expect(markdown).toContain(item.question)
    expect(markdown).toContain(item.answer)
  }

  expect(html.match(/<details /g)).toHaveLength(USD_FAQ_ITEMS.length)
  expect(html.match(/open=""/g)).toHaveLength(1)
  expect(html.match(/<summary /g)).toHaveLength(USD_FAQ_ITEMS.length)
})

it('keeps bank transfers, wallet purchases and future USD API availability distinct', () => {
  const markdown: string | undefined = getMarkdownDocument({ pathname: '/usd' })

  for (const audience of USD_AUDIENCES) {
    expect(markdown).toContain(audience.description)
  }

  expect(markdown).toContain('Não. Na transferência por ACH ou wire')
  expect(markdown).toContain('Os endpoints de USD estão em preparação.')
  expect(markdown).toContain('https://hodle.com.br/comprar-usdt-com-pix')
})

it('never names a settlement provider in the /usd copy', () => {
  const sources = readdirSync(USD_COMPONENTS_DIR)
    .filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
    .map((file) => readFileSync(join(USD_COMPONENTS_DIR, file), 'utf8').toLowerCase())
    .join('\n')

  const named = PROVIDER_NAMES.filter((name) => new RegExp(`\\b${name}\\b`).test(sources))

  expect(named).toEqual([])
})
