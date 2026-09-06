import { expect, it } from 'vitest'
import { topics } from './topics'

it('includes the gateway de pagamento cripto topic', () => {
  const slugs = topics.map((topic) => topic.slug)

  expect(slugs).toContain('gateway-de-pagamento-cripto')
})

it('includes the como aceitar criptomoedas topic', () => {
  const slugs = topics.map((topic) => topic.slug)

  expect(slugs).toContain('como-aceitar-criptomoedas')
})

it('has no duplicate slugs', () => {
  const slugs = topics.map((topic) => topic.slug)

  expect(new Set(slugs).size).toBe(slugs.length)
})

it('never suffixes a topic title with the site name', () => {
  const suffixed = topics.filter((topic) => topic.title.includes('| Hodle'))

  expect(suffixed).toEqual([])
})
