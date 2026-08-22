import { expect, it } from 'vitest'
import { hasMarkdownVariant } from './hasMarkdownVariant'

it('accepts the paths that have a markdown representation', () => {
  expect(hasMarkdownVariant('/')).toBe(true)
  expect(hasMarkdownVariant('/faq')).toBe(true)
  expect(hasMarkdownVariant('/precos')).toBe(true)
  expect(hasMarkdownVariant('/sobre')).toBe(true)
  expect(hasMarkdownVariant('/contato')).toBe(true)
  expect(hasMarkdownVariant('/desenvolvedores')).toBe(true)
  expect(hasMarkdownVariant('/pagar-pix-com-usdt')).toBe(true)
  expect(hasMarkdownVariant('/articles/pagar-pix-com-saldo-em-stablecoin')).toBe(
    true,
  )
})

it('ignores a trailing slash', () => {
  expect(hasMarkdownVariant('/faq/')).toBe(true)
  expect(hasMarkdownVariant('/')).toBe(true)
})

it('rejects pages that only exist as HTML', () => {
  expect(hasMarkdownVariant('/termos')).toBe(false)
  expect(hasMarkdownVariant('/privacidade')).toBe(false)
  expect(hasMarkdownVariant('/cookies')).toBe(false)
})

it('rejects paths that do not exist', () => {
  expect(hasMarkdownVariant('/some-path-that-does-not-exist')).toBe(false)
  expect(hasMarkdownVariant('/articles/not-an-article')).toBe(false)
})
