import * as React from 'react'
import { beforeAll, expect, it } from 'vitest'
import { GET, generateStaticParams } from './route'

beforeAll(() => {
  const testGlobal = globalThis as typeof globalThis & { React: typeof React }
  testGlobal.React = React
})

it('renders a real PNG at the stable article share image endpoint', async () => {
  const slug = 'comparar-api-pix-baas'
  expect(generateStaticParams()).toContainEqual({ slug })

  const response = await GET(
    new Request(`https://hodle.com.br/articles/${slug}/opengraph-image`),
    { params: Promise.resolve({ slug }) },
  )
  const image = Buffer.from(await response.arrayBuffer())

  expect(response.status).toBe(200)
  expect(response.headers.get('content-type')).toBe('image/png')
  expect(image.subarray(0, 8)).toEqual(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  expect(image.readUInt32BE(16)).toBe(1200)
  expect(image.readUInt32BE(20)).toBe(630)
}, 15000)

it('returns 404 instead of a generic share image for an unknown article', async () => {
  const response = await GET(
    new Request('https://hodle.com.br/articles/missing-article/opengraph-image'),
    { params: Promise.resolve({ slug: 'missing-article' }) },
  )

  expect(response.status).toBe(404)
  expect(response.headers.get('content-type')).not.toBe('image/png')
})
