import { expect, it } from 'vitest'
import { negotiateAccept } from './negotiateAccept'

it('falls back to HTML when the client sends no Accept header', () => {
  expect(negotiateAccept(null)).toBe('HTML')
  expect(negotiateAccept('')).toBe('HTML')
  expect(negotiateAccept('   ')).toBe('HTML')
})

it('serves markdown for a plain text/markdown request', () => {
  expect(negotiateAccept('text/markdown')).toBe('MARKDOWN')
  expect(negotiateAccept('TEXT/MARKDOWN')).toBe('MARKDOWN')
  expect(negotiateAccept('text/markdown; charset=utf-8')).toBe('MARKDOWN')
})

it('keeps HTML for browsers and generic crawlers', () => {
  expect(
    negotiateAccept(
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,*/*;q=0.8',
    ),
  ).toBe('HTML')
  expect(negotiateAccept('*/*')).toBe('HTML')
  expect(negotiateAccept('text/*')).toBe('HTML')
})

it('honours q-values in both directions', () => {
  expect(negotiateAccept('text/markdown;q=0.5, text/html;q=1.0')).toBe('HTML')
  expect(negotiateAccept('text/html;q=0.8, text/markdown;q=0.9')).toBe(
    'MARKDOWN',
  )
  expect(negotiateAccept('text/markdown;q=1, text/html;q=1')).toBe('HTML')
  expect(negotiateAccept('text/markdown, */*;q=0.1')).toBe('MARKDOWN')
})

it('treats an explicitly refused type as refused', () => {
  expect(negotiateAccept('text/markdown;q=0, text/html')).toBe('HTML')
  expect(negotiateAccept('text/markdown;q=0, text/html;q=0')).toBe(
    'UNSUPPORTED',
  )
})

it('reports UNSUPPORTED when nothing we serve is acceptable', () => {
  expect(negotiateAccept('application/pdf')).toBe('UNSUPPORTED')
  expect(negotiateAccept('image/png, image/webp')).toBe('UNSUPPORTED')
  expect(negotiateAccept('application/json')).toBe('UNSUPPORTED')
})

it('ignores malformed media ranges instead of throwing', () => {
  expect(negotiateAccept('garbage')).toBe('HTML')
  expect(negotiateAccept('text/markdown;q=abc')).toBe('MARKDOWN')
  expect(negotiateAccept(', ,')).toBe('HTML')
})

it('clamps out-of-range q-values', () => {
  expect(negotiateAccept('text/markdown;q=9, text/html;q=1')).toBe('HTML')
  expect(negotiateAccept('text/markdown;q=1, text/html;q=-3')).toBe('MARKDOWN')
})
