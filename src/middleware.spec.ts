import { NextRequest } from 'next/server'
import { expect, it } from 'vitest'
import { middleware } from './middleware'

it('lets the root Markdown rewrite reach its route instead of returning a second-pass 404', () => {
  const request = new NextRequest('https://hodle.com.br/', {
    headers: { Accept: 'text/markdown' },
  })
  const rewritten = middleware(request)
  const destination = rewritten.headers.get('x-middleware-rewrite')

  expect(destination).toBe('https://hodle.com.br/md')

  const internalRequest = new NextRequest(destination ?? '', {
    headers: { Accept: 'text/markdown' },
  })
  const forwarded = middleware(internalRequest)

  expect(forwarded.status).toBe(200)
  expect(forwarded.headers.get('x-middleware-next')).toBe('1')
  expect(forwarded.headers.get('x-middleware-rewrite')).toBeNull()
})

it('still returns a Markdown 404 for an unknown public route', async () => {
  const response = middleware(new NextRequest('https://hodle.com.br/missing-guide', {
    headers: { Accept: 'text/markdown' },
  }))

  expect(response.status).toBe(404)
  expect(response.headers.get('Content-Type')).toContain('text/markdown')
  expect(await response.text()).toContain('404')
})
