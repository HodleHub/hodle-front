import { expect, it } from 'vitest'
import { faqItems } from './faqItems'

it('keeps every question unique', () => {
  const questions = faqItems.map((item) => item.question)

  expect(new Set(questions).size).toBe(questions.length)
})

it('answers each question with a real paragraph', () => {
  for (const item of faqItems) {
    expect(item.question.length).toBeGreaterThan(10)
    expect(item.answer.length).toBeGreaterThan(120)
  }
})

it('only links through an anchor phrase that exists in the answer', () => {
  for (const item of faqItems) {
    if (!item.link) {
      continue
    }

    expect(item.answer).toContain(item.link.text)
    expect(item.link.href.startsWith('/') || item.link.href.startsWith('http')).toBe(
      true,
    )
  }
})
