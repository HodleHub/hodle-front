import { expect, it } from 'vitest'
import nextConfig from '../../next.config'

const redirects = async () => {
  const list = await nextConfig.redirects?.()

  return list ?? []
}

const headers = async () => {
  const list = await nextConfig.headers?.()

  return list ?? []
}

const rewrites = async () => {
  const list = await nextConfig.rewrites?.()

  return Array.isArray(list) ? list : []
}

it('redirects the English trust-anchor slugs an agent tries first', async () => {
  const list = await redirects()
  const pairs = list.map(
    (redirect) => `${redirect.source} -> ${redirect.destination}`,
  )

  expect(pairs).toContain('/about -> /sobre')
  expect(pairs).toContain('/contact -> /contato')
  expect(pairs).toContain('/developers -> /desenvolvedores')
  expect(pairs).toContain('/pricing -> /precos')
})

it('keeps every redirect permanent so the apex URL is the one indexed', async () => {
  const list = await redirects()

  expect(list.every((redirect) => redirect.permanent === true)).toBe(true)
})

it('keeps the legacy legal aliases working', async () => {
  const list = await redirects()
  const sources = list.map((redirect) => redirect.source)

  expect(sources).toContain('/privacy')
  expect(sources).toContain('/terms')
  expect(sources).toContain('/cookie-policy')
})

it('serves the OpenAPI description from the apex domain', async () => {
  const list = await rewrites()
  const openapi = list.find((rewrite) => rewrite.source === '/openapi.json')

  expect(openapi?.destination).toBe('https://docs.hodle.com.br/openapi.json')
})

it('advertises the API catalog and the service description on every page', async () => {
  const list = await headers()
  const pageHeaders = list.find((entry) => entry.source === '/:path*')
  const link = pageHeaders?.headers.find((header) => header.key === 'Link')
  const vary = pageHeaders?.headers.find((header) => header.key === 'Vary')

  expect(link?.value).toContain('rel="api-catalog"')
  expect(link?.value).toContain('rel="service-desc"')
  expect(link?.value).toContain('/openapi.json')
  expect(vary?.value).toContain('Accept')
})
