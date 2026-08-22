import { expect, it } from 'vitest'
import { organizationContactPoints } from './organizationContactPoints'

it('declares the contact types an agent looks for', () => {
  const types = organizationContactPoints.map((point) => point.contactType)

  expect(types).toContain('customer support')
  expect(types).toContain('sales')
  expect(types).toContain('technical support')
})

it('gives every contact point an email and a served area', () => {
  for (const point of organizationContactPoints) {
    expect(point['@type']).toBe('ContactPoint')
    expect(point.email).toMatch(/@hodle\.com\.br$/)
    expect(point.areaServed.length).toBeGreaterThan(0)
    expect(point.availableLanguage.length).toBeGreaterThan(0)
  }
})

it('uses one contact type per entry', () => {
  const types = organizationContactPoints.map((point) => point.contactType)

  expect(new Set(types).size).toBe(types.length)
})
