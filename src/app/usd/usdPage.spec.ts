import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import type { Metadata } from 'next'
import * as React from 'react'
import { beforeAll, expect, it } from 'vitest'

const PROVIDER_NAMES: string[] = ['brale', 'avenia', 'mercury', 'woovi', 'nora', 'eulen', 'flashnet', 'sbc']

const USD_COMPONENTS_DIR = join(__dirname, '../../components/usd')

let usdMetadata: Metadata

beforeAll(async () => {
  const testGlobal = globalThis as typeof globalThis & { React: typeof React }

  testGlobal.React = React
  usdMetadata = (await import('./page')).metadata
})

it('publishes /usd as its own canonical page', () => {
  expect(usdMetadata.alternates?.canonical).toBe('https://hodle.com.br/usd')
})

it('never names a settlement provider in the /usd copy', () => {
  const sources = readdirSync(USD_COMPONENTS_DIR)
    .filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
    .map((file) => readFileSync(join(USD_COMPONENTS_DIR, file), 'utf8').toLowerCase())
    .join('\n')

  const named = PROVIDER_NAMES.filter((name) => new RegExp(`\\b${name}\\b`).test(sources))

  expect(named).toEqual([])
})
