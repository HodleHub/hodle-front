import * as React from 'react'
import { beforeAll, expect, it } from 'vitest'
import { homeMarkdown } from '../content/markdown/homeMarkdown'
import { GET as getMarkdownHome } from './md/[[...slug]]/route'

const expectedHeadline = 'Receba em Pix, guarde em dólar, pague em stablecoin.'
const expectedSummary = 'A infraestrutura que conecta Pix, dólar e stablecoins, via API ou plataforma.'

let pageText = ''

const toText = (html: string): string =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/ ([.,])/g, '$1')
    .trim()

beforeAll(async () => {
  const testGlobal = globalThis as typeof globalThis & { React: typeof React }

  testGlobal.React = React

  const { renderToStaticMarkup } = await import('react-dom/server')
  const HomePage = (await import('./page')).default

  pageText = toText(renderToStaticMarkup(HomePage()))
})

it('renders the landing headline and summary on the home page', () => {
  expect(pageText).toContain(expectedHeadline)
  expect(pageText).toContain(expectedSummary)
})

it('keeps the markdown home headline and summary in sync with the page', () => {
  expect(homeMarkdown).toContain(`# ${expectedHeadline}`)
  expect(homeMarkdown).toContain(`> ${expectedSummary}`)
})

it('serves the home markdown from the markdown route', async () => {
  const response = await getMarkdownHome(new Request('https://hodle.com.br/'), {
    params: Promise.resolve({ slug: [] }),
  })
  const body = await response.text()

  expect(response.status).toBe(200)
  expect(response.headers.get('content-type')).toContain('text/markdown')
  expect(body).toContain(expectedSummary)
})
