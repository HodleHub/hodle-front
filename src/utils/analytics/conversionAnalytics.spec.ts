import { expect, it } from 'vitest'
import { getAcquisition } from './getAcquisition'
import { getConversionTarget } from './getConversionTarget'
import { buildAppAttributionUrl } from './buildAppAttributionUrl'

it('preserves an AI acquisition across the app handoff without leaking arbitrary query parameters', () => {
  const acquisition = getAcquisition({ url: 'https://hodle.com.br/api-pix?utm_source=chatgpt.com&email=user@example.com&utm_campaign=user@example.com', referrer: '' })

  expect(acquisition).toEqual({ success: true, source: 'chatgpt', medium: 'referral', campaign: 'none', landing: '/api-pix' })

  if (!acquisition.success) throw new Error(acquisition.error)

  const result = buildAppAttributionUrl({ url: new URL('https://app.hodle.com.br/register?next=/dashboard#start'), ...acquisition })

  expect(result.success).toBe(true)

  if (!result.success) throw new Error(result.error)

  expect(result.href).toContain('utm_source=chatgpt')
  expect(result.href).toContain('hodle_landing=%2Fapi-pix')
  expect(result.href).toContain('next=%2Fdashboard')
  expect(result.href).toContain('#start')
  expect(result.href).not.toContain('example.com')
})

it('does not serialize unknown paths, campaigns or referrer URLs', () => {
  const result = getAcquisition({ url: 'https://hodle.com.br/create/user@example.com?utm_source=user@example.com', referrer: 'https://unknown.example.com/private?token=secret' })

  expect(result).toEqual({ success: true, source: 'other-referral', medium: 'referral', campaign: 'none', landing: 'other' })
})

it('distinguishes paid Google clicks from organic discovery', () => {
  expect(getAcquisition({ url: 'https://hodle.com.br/pix?utm_source=google&utm_medium=cpc&utm_campaign=pix', referrer: '' })).toMatchObject({ source: 'google', medium: 'cpc', campaign: 'pix' })
  expect(getAcquisition({ url: 'https://hodle.com.br/pix', referrer: 'https://www.google.com/search?q=pix' })).toMatchObject({ source: 'google', medium: 'organic' })
})

it('recognizes intended sales/docs/app targets and rejects deceptive hosts or schemes', () => {
  expect(getConversionTarget({ href: 'https://docs.hodle.com.br/docs/checkout', origin: 'https://hodle.com.br' })).toMatchObject({ destination: 'docs' })
  expect(getConversionTarget({ href: 'https://api.whatsapp.com/send?phone=5511960000445', origin: 'https://hodle.com.br' })).toMatchObject({ destination: 'sales' })
  expect(getConversionTarget({ href: 'https://app.hodle.com.br.attacker.com', origin: 'https://hodle.com.br' }).success).toBe(false)
  expect(getConversionTarget({ href: 'javascript:alert(1)', origin: 'https://hodle.com.br' }).success).toBe(false)
  expect(getConversionTarget({ href: '/precos', origin: 'https://hodle.com.br' }).success).toBe(false)
})

it('preserves campaign information already attached to the destination', () => {
  const result = buildAppAttributionUrl({ url: new URL('https://app.hodle.com.br/?utm_source=partner'), source: 'google', medium: 'organic', landing: '/pix', campaign: 'none' })

  expect(result.success && result.href).toContain('utm_source=partner')
})

it('tracks sandbox onboarding and carries its acquisition context', () => {
  expect(getConversionTarget({ href: 'https://app-sandbox.hodle.com.br', origin: 'https://hodle.com.br' })).toMatchObject({ success: true, destination: 'sandbox' })
  expect(buildAppAttributionUrl({ url: new URL('https://app-sandbox.hodle.com.br'), source: 'google', medium: 'organic', campaign: 'none', landing: '/api-pix' })).toMatchObject({ success: true })
})

it('does not accept inherited object keys as campaign sources', () => {
  for (const source of ['__proto__', 'constructor', 'toString']) {
    expect(getAcquisition({ url: `https://hodle.com.br/?utm_source=${source}`, referrer: '' })).toMatchObject({ source: 'direct', medium: 'none' })
  }
})
