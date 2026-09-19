import type { TopicSection } from '../types/topic'

const siteUrl = 'https://hodle.com.br'

const comparisonRows = (section: TopicSection): string[] => {
  if (!section.comparison) {
    return []
  }

  const { headers, rows } = section.comparison

  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.join(' | ')} |`),
  ]
}

const codeBlock = (section: TopicSection): string[] => {
  if (!section.code) {
    return []
  }

  return [
    `${section.code.label}:`,
    '',
    '```' + section.code.language,
    section.code.snippet,
    '```',
  ]
}

const sectionToMarkdown = (section: TopicSection): string[] => [
  `## ${section.heading}`,
  '',
  section.body,
  '',
  ...section.bullets.map((bullet) => `- ${bullet}`),
  ...(section.bullets.length > 0 ? [''] : []),
  ...comparisonRows(section),
  ...(section.comparison ? [''] : []),
  ...codeBlock(section),
  ...(section.code ? [''] : []),
  ...(section.links ?? []).map(
    (link) => `- [${link.label}](${new URL(link.href, siteUrl).href})`,
  ),
  ...(section.links?.length ? [''] : []),
]

/** Renders shared sections for the HTML and Markdown representations. */
export const sectionsToMarkdown = ({ sections }: { sections: TopicSection[] }): string =>
  sections.flatMap(sectionToMarkdown).join('\n')
