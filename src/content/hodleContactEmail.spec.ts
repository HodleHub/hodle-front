import fs from 'fs'
import path from 'path'
import { expect, it } from 'vitest'
import { HODLE_CONTACT_EMAIL } from './hodleContactEmail'
import { homeMarkdown } from './markdown/homeMarkdown'
import { aiMarkdown } from './markdown/aiMarkdown'
import { getConversionTarget } from '../utils/analytics/getConversionTarget'

const BOUNCING_EMAIL = 'contato@hodle.com.br'

const readPublicFile = ({ name }: { name: string }): string =>
  fs.readFileSync(path.join(process.cwd(), 'public', name), 'utf8')

it('points the public contact address at the mailbox that receives mail', () => {
  expect(HODLE_CONTACT_EMAIL).toBe('contato@inbox.hodle.com.br')
})

it('publishes the receiving mailbox in the markdown variants', () => {
  for (const markdown of [homeMarkdown, aiMarkdown]) {
    expect(markdown).toContain(HODLE_CONTACT_EMAIL)
    expect(markdown).not.toContain(BOUNCING_EMAIL)
  }
})

it('publishes the receiving mailbox in the llms files', () => {
  for (const name of ['llms.txt', 'llms-full.txt', 'llm.txt']) {
    const content = readPublicFile({ name })

    expect(content).toContain(HODLE_CONTACT_EMAIL)
    expect(content).not.toContain(BOUNCING_EMAIL)
  }
})

it('tracks a mailto to the contact address as a sales conversion', () => {
  const result = getConversionTarget({ href: `mailto:${HODLE_CONTACT_EMAIL}`, origin: 'https://hodle.com.br' })

  expect(result).toMatchObject({ success: true, destination: 'sales' })
})
