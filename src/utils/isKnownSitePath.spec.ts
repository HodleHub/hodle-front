import { expect, it } from 'vitest'
import { isKnownSitePath } from './isKnownSitePath'

it('knows the static pages', () => {
  expect(isKnownSitePath('/')).toBe(true)
  expect(isKnownSitePath('/faq')).toBe(true)
  expect(isKnownSitePath('/termos')).toBe(true)
  expect(isKnownSitePath('/en/brs')).toBe(true)
  expect(isKnownSitePath('/sobre')).toBe(true)
})

it('knows the content-driven pages', () => {
  expect(isKnownSitePath('/wallet-auto-custodial')).toBe(true)
  expect(
    isKnownSitePath('/articles/auto-custodia-nao-e-detalhe-de-implementacao'),
  ).toBe(true)
})

it('knows the dynamic app surfaces by prefix', () => {
  expect(isKnownSitePath('/create/lightning/abc123')).toBe(true)
})

it('ignores a trailing slash', () => {
  expect(isKnownSitePath('/faq/')).toBe(true)
})

it('rejects dead paths', () => {
  expect(isKnownSitePath('/some-path-that-does-not-exist')).toBe(false)
  expect(isKnownSitePath('/wp-admin')).toBe(false)
  expect(isKnownSitePath('/articles/nope')).toBe(false)
})
