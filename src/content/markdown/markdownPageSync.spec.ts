import fs from 'fs'
import path from 'path'
import { expect, it } from 'vitest'
import { brsMarkdown } from './brsMarkdown'
import { cryptoAsAServiceMarkdown } from './cryptoAsAServiceMarkdown'
import { neobankMarkdown } from './neobankMarkdown'

type MarkdownPage = {
  markdown: string
  pageFile: string
}

const pages: MarkdownPage[] = [
  { markdown: brsMarkdown, pageFile: 'src/app/brs/page.tsx' },
  {
    markdown: cryptoAsAServiceMarkdown,
    pageFile: 'src/app/crypto-as-a-service/page.tsx',
  },
  { markdown: neobankMarkdown, pageFile: 'src/app/neobank/page.tsx' },
]

const readPageSource = ({ pageFile }: { pageFile: string }): string =>
  fs.readFileSync(path.join(process.cwd(), pageFile), 'utf8')

const getSummary = ({ markdown }: { markdown: string }): string => {
  const summary = markdown
    .split('\n')
    .find((line) => line.startsWith('> '))

  return (summary ?? '').slice(2).trim()
}

const getQuestions = ({ markdown }: { markdown: string }): string[] =>
  markdown
    .split('\n')
    .filter((line) => line.startsWith('### '))
    .map((line) => line.slice(4).trim())

it('keeps every markdown summary in sync with its page source', () => {
  const drifted = pages.filter((page) => {
    const summary = getSummary({ markdown: page.markdown })

    return !readPageSource(page).includes(summary)
  })

  expect(drifted.map((page) => page.pageFile)).toEqual([])
})

it('keeps every markdown FAQ question in sync with its page source', () => {
  const drifted = pages.flatMap((page) => {
    const source = readPageSource(page)

    return getQuestions({ markdown: page.markdown })
      .filter((question) => !source.includes(question))
      .map((question) => `${page.pageFile}: ${question}`)
  })

  expect(drifted).toEqual([])
})

it('gives every markdown page a summary to compare', () => {
  const missing = pages
    .filter((page) => getSummary({ markdown: page.markdown }).length === 0)
    .map((page) => page.pageFile)

  expect(missing).toEqual([])
})
