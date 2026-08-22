import { TopicPage, TopicSection } from '../types/topic'

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
]

/**
 * Renders a topic landing page as markdown from the same typed document the
 * HTML page renders.
 */
export const topicToMarkdown = ({ topic }: { topic: TopicPage }): string =>
  [
    `# ${topic.h1}`,
    '',
    `> ${topic.description}`,
    '',
    `Fonte canônica: ${siteUrl}/${topic.slug} — atualizado em ${topic.updatedAt}.`,
    '',
    topic.subhead,
    '',
    ...topic.sections.flatMap(sectionToMarkdown),
    ...(topic.faq.length > 0 ? ['## Perguntas frequentes', ''] : []),
    ...topic.faq.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
    ...(topic.related.length > 0 ? ['## Relacionados', ''] : []),
    ...topic.related.map((link) => `- [${link.label}](${siteUrl}${link.href})`),
    '',
  ].join('\n')
