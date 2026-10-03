import { expect, it } from 'vitest'
import robots from './robots'
import { metadata as animationMetadata } from './(pt)/animation/layout'
import { metadata as createMetadata } from './(pt)/create/layout'

it('explicitly allows current search, retrieval and AI crawler tokens', () => {
  const rules = robots().rules
  const ruleList = Array.isArray(rules) ? rules : [rules]
  const explicitRule = ruleList.find((rule) => Array.isArray(rule.userAgent))

  if (!explicitRule || !Array.isArray(explicitRule.userAgent)) {
    throw new Error('Explicit AI crawler rule was not found')
  }

  const userAgents: string[] = explicitRule.userAgent

  expect(userAgents).toEqual(
    expect.arrayContaining([
      'Googlebot',
      'bingbot',
      'OAI-SearchBot',
      'ChatGPT-User',
      'Claude-SearchBot',
      'Claude-User',
      'PerplexityBot',
      'Perplexity-User',
    ]),
  )
  expect(explicitRule.allow).toContain('/')
  expect(explicitRule.disallow).toContain('/api/')
  expect(explicitRule.disallow).toContain('/md/')
})

it('lets crawlers read the noindex policy on public utility pages', () => {
  const rules = robots().rules
  const ruleList = Array.isArray(rules) ? rules : [rules]

  for (const rule of ruleList) {
    expect(rule.disallow).not.toContain('/animation')
    expect(rule.disallow).not.toContain('/create')
    expect(rule.disallow).toEqual(expect.arrayContaining([
      '/api/', '/.well-known/', '/lnurlp/', '/lnurlpay/', '/verify/', '/md/',
    ]))
  }

  for (const metadata of [animationMetadata, createMetadata]) {
    expect(metadata.robots).toMatchObject({
      index: false,
      googleBot: { index: false },
    })
  }
})
