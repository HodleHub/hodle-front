import { expect, it } from 'vitest'
import { notFoundMarkdown } from './notFoundMarkdown'

it('opens with a markdown heading', () => {
  expect(notFoundMarkdown.startsWith('# 404')).toBe(true)
})

it('points at the files an agent recovers from', () => {
  expect(notFoundMarkdown).toContain('https://hodle.com.br/llms.txt')
  expect(notFoundMarkdown).toContain('https://hodle.com.br/sitemap.xml')
  expect(notFoundMarkdown).toContain('https://hodle.com.br/openapi.json')
  expect(notFoundMarkdown).toContain('https://docs.hodle.com.br')
})

it('stays short enough to be cheap for an agent to read', () => {
  expect(notFoundMarkdown.length).toBeLessThan(1600)
})
