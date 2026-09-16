import type { Metadata } from 'next'
import * as React from 'react'
import { beforeAll, expect, it } from 'vitest'

let brsMetadata: Metadata
let englishBrsMetadata: Metadata

const languages = {
  'pt-BR': 'https://hodle.com.br/brs',
  en: 'https://hodle.com.br/en/brs',
}

beforeAll(async () => {
  const testGlobal = globalThis as typeof globalThis & { React: typeof React }

  testGlobal.React = React
  brsMetadata = (await import('./page')).metadata
  englishBrsMetadata = (await import('../en/brs/page')).metadata
})

it('publishes reciprocal language alternates for both BRS pages', () => {
  expect(brsMetadata.alternates?.languages).toEqual(languages)
  expect(englishBrsMetadata.alternates?.languages).toEqual(languages)
})
