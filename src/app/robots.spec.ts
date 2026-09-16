import { expect, it } from 'vitest'
import robots from './robots'

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
