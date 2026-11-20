import { expect, test } from 'vitest'
import { isStaticFileHref } from './isStaticFileHref'

test('flags static files under public', () => {
  expect(isStaticFileHref('/llms.txt')).toBe(true)
  expect(isStaticFileHref('/openapi.json')).toBe(true)
  expect(isStaticFileHref('/files/a.pdf?x=1')).toBe(true)
})

test('does not flag routes or external links', () => {
  expect(isStaticFileHref('/ai')).toBe(false)
  expect(isStaticFileHref('/articles/json-guide')).toBe(false)
  expect(isStaticFileHref('https://docs.hodle.com.br/a.json')).toBe(false)
})
