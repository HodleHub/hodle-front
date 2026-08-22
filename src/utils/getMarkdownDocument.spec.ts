import { expect, it } from 'vitest'
import { getMarkdownDocument } from './getMarkdownDocument'
import { markdownPaths } from '../content/markdown/markdownPaths'
import { volumeTiers } from '../content/pricing/pricingTables'
import { faqItems } from '../content/faq/faqItems'
import { glossaryTerms } from '../content/glossary/glossaryTerms'

it('resolves a document for every advertised markdown path', () => {
  const missing = markdownPaths.filter(
    (pathname) => !getMarkdownDocument({ pathname }),
  )

  expect(missing).toEqual([])
})

const countTopLevelHeadings = (document: string): number =>
  document.split('\n').reduce(
    (state, line) => {
      if (line.trimStart().startsWith('```')) {
        return { ...state, inCode: !state.inCode }
      }

      if (state.inCode || !line.startsWith('# ')) {
        return state
      }

      return { ...state, count: state.count + 1 }
    },
    { inCode: false, count: 0 },
  ).count

it('gives every document a single top level heading', () => {
  const malformed = markdownPaths.filter((pathname) => {
    const document = getMarkdownDocument({ pathname }) ?? ''

    return countTopLevelHeadings(document) !== 1 || !document.startsWith('# ')
  })

  expect(malformed).toEqual([])
})

it('gives every document enough body to be useful', () => {
  const thin = markdownPaths.filter(
    (pathname) => (getMarkdownDocument({ pathname }) ?? '').length < 500,
  )

  expect(thin).toEqual([])
})

it('returns undefined for a path with no markdown representation', () => {
  expect(getMarkdownDocument({ pathname: '/termos' })).toBeUndefined()
  expect(
    getMarkdownDocument({ pathname: '/some-path-that-does-not-exist' }),
  ).toBeUndefined()
  expect(getMarkdownDocument({ pathname: '/articles/nope' })).toBeUndefined()
})

it('publishes the same fee table the pricing page renders', () => {
  const document = getMarkdownDocument({ pathname: '/precos' }) ?? ''

  for (const tier of volumeTiers) {
    expect(document).toContain(tier.volume)
    expect(document).toContain(tier.fee)
  }
})

it('publishes every FAQ question', () => {
  const document = getMarkdownDocument({ pathname: '/faq' }) ?? ''

  for (const item of faqItems) {
    expect(document).toContain(item.question)
    expect(document).toContain(item.answer)
  }
})

it('publishes every glossary term', () => {
  const document = getMarkdownDocument({ pathname: '/glossario' }) ?? ''

  for (const entry of glossaryTerms) {
    expect(document).toContain(entry.term)
  }
})

it('points the home document at the discovery files an agent needs', () => {
  const document = getMarkdownDocument({ pathname: '/' }) ?? ''

  expect(document).toContain('https://hodle.com.br/openapi.json')
  expect(document).toContain('https://hodle.com.br/llms.txt')
  expect(document).toContain('https://hodle.com.br/sitemap.xml')
  expect(document).toContain('https://hodle.com.br/desenvolvedores')
})

it('carries the article body, not just its metadata', () => {
  const document =
    getMarkdownDocument({
      pathname: '/articles/pagar-pix-com-saldo-em-stablecoin',
    }) ?? ''

  expect(document.length).toBeGreaterThan(2000)
  expect(document).not.toContain('---\ntitle:')
})
