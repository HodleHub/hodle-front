import { expect, it } from 'vitest'
import { sobre } from './sobre'
import { contato } from './contato'
import { desenvolvedores } from './desenvolvedores'
import { infoPageToMarkdown } from '../../utils/infoPageToMarkdown'
import { InfoPage } from '../../types/infoPage'

const pages: InfoPage[] = [sobre, contato, desenvolvedores]

const MINIMUM_TRUST_PAGE_CHARS = 500

const textOf = (page: InfoPage): string =>
  [
    page.h1,
    page.description,
    ...page.intro,
    ...page.sections.flatMap((section) => [
      section.heading,
      ...section.body,
      ...section.bullets,
      ...section.rows.flatMap((row) => [row.label, row.value]),
      ...section.links.flatMap((link) => [link.label, link.description]),
    ]),
    page.cta.heading,
    page.cta.body,
  ].join(' ')

it('carries the 500+ characters a trust anchor page needs', () => {
  for (const page of pages) {
    expect(textOf(page).length).toBeGreaterThan(MINIMUM_TRUST_PAGE_CHARS)
  }
})

it('matches its route slug', () => {
  expect(sobre.slug).toBe('sobre')
  expect(contato.slug).toBe('contato')
  expect(desenvolvedores.slug).toBe('desenvolvedores')
})

it('gives every section a unique id and a heading', () => {
  for (const page of pages) {
    const ids = page.sections.map((section) => section.id)

    expect(new Set(ids).size).toBe(ids.length)
    expect(page.sections.every((section) => section.heading.length > 0)).toBe(
      true,
    )
  }
})

it('only fills the payload its kind renders', () => {
  for (const page of pages) {
    for (const section of page.sections) {
      if (section.kind === 'ROWS') {
        expect(section.rows.length).toBeGreaterThan(0)
      }

      if (section.kind === 'BULLETS') {
        expect(section.bullets.length).toBeGreaterThan(0)
      }

      if (section.kind === 'LINKS') {
        expect(section.links.length).toBeGreaterThan(0)
      }

      if (section.kind === 'PROSE') {
        expect(section.body.length).toBeGreaterThan(0)
      }
    }
  }
})

it('renders markdown that keeps every heading and row', () => {
  for (const page of pages) {
    const markdown = infoPageToMarkdown({ page })

    expect(markdown.startsWith(`# ${page.h1}`)).toBe(true)

    for (const section of page.sections) {
      expect(markdown).toContain(`## ${section.heading}`)

      for (const row of section.rows) {
        expect(markdown).toContain(row.label)
      }
    }
  }
})

it('publishes the contact channels an agent verifies a business with', () => {
  const markdown = infoPageToMarkdown({ page: contato })

  expect(markdown).toContain('contato@hodle.com.br')
  expect(markdown).toContain('+55 11 96000-0445')
  expect(markdown).toContain('30 N Gould St, Ste R, Sheridan, WY 82801')
})

it('publishes the API discovery entry points for developers', () => {
  const markdown = infoPageToMarkdown({ page: desenvolvedores })

  expect(markdown).toContain('https://hodle.com.br/openapi.json')
  expect(markdown).toContain('https://hodle.com.br/.well-known/api-catalog')
  expect(markdown).toContain('https://docs.hodle.com.br')
  expect(markdown).toContain('walletPayout')
  expect(markdown).toContain('createLightningInvoice')
})
