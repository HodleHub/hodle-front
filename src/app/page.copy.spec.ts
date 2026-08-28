import { isValidElement, type ReactNode } from 'react'
import * as React from 'react'
import { beforeAll, expect, it } from 'vitest'
import { homeMarkdown } from '../content/markdown/homeMarkdown'
import { GET as getMarkdownHome } from './md/[[...slug]]/route'

let HomePage: typeof import('./page').default

beforeAll(async () => {
  const testGlobal = globalThis as typeof globalThis & { React: typeof React }

  testGlobal.React = React
  HomePage = (await import('./page')).default
})

const collectText = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(collectText).join(' ')
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return collectText(node.props.children)
  }

  return ''
}

const expectedPurchaseCopy =
  'Compre stablecoins e bitcoin com Pix. Quando quiser, venda e receba em reais na sua conta.'

it('keeps the home page purchase copy concise in HTML and markdown', () => {
  const expectedApiCopy =
    'Integre pagamentos com Pix e stablecoin no seu produto em minutos. REST, SDK e webhooks — pensados para times de produto e agentes de IA.'

  const pageText = collectText(HomePage())

  expect(pageText).toContain(expectedPurchaseCopy)
  expect(pageText).toContain(expectedApiCopy)
  expect(homeMarkdown).toContain(
    `## Compra e venda de ativos digitais\n\n${expectedPurchaseCopy}`,
  )
  expect(homeMarkdown).not.toContain('On-ramp e off-ramp custam a mesma taxa de serviço')
})

it('serves the concise purchase copy from the markdown home route', async () => {
  const response = await getMarkdownHome(new Request('https://hodle.com.br/'), {
    params: Promise.resolve({ slug: [] }),
  })
  const body = await response.text()

  expect(response.status).toBe(200)
  expect(response.headers.get('content-type')).toContain('text/markdown')
  expect(body).toContain(expectedPurchaseCopy)
})

it('does not put the removed API implementation details back in the HTML copy', () => {
  const pageText = collectText(HomePage())

  expect(pageText).not.toContain('/api/wallet/payout')
  expect(pageText).not.toContain('OpenAPI 3.1')
  expect(pageText).not.toContain('Autenticação é por API key no header')
})
