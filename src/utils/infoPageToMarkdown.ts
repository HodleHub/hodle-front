import { InfoPage, InfoPageSection } from '../types/infoPage'

const siteUrl = 'https://hodle.com.br'

const absolute = (href: string): string =>
  href.startsWith('http') ? href : `${siteUrl}${href}`

const sectionExtra = (section: InfoPageSection): string[] => {
  if (section.kind === 'LINKS') {
    return section.links.map(
      (link) => `- [${link.label}](${absolute(link.href)}) — ${link.description}`,
    )
  }

  if (section.kind === 'ROWS') {
    return [
      '| Campo | Valor |',
      '| --- | --- |',
      ...section.rows.map((row) => `| ${row.label} | ${row.value} |`),
    ]
  }

  if (section.kind === 'BULLETS') {
    return section.bullets.map((bullet) => `- ${bullet}`)
  }

  return []
}

const sectionToMarkdown = (section: InfoPageSection): string[] => [
  `## ${section.heading}`,
  '',
  ...section.body.flatMap((paragraph) => [paragraph, '']),
  ...sectionExtra(section),
  '',
]

/**
 * Renders an `InfoPage` as markdown. Same document as the HTML page, so the
 * two representations cannot disagree.
 */
export const infoPageToMarkdown = ({ page }: { page: InfoPage }): string =>
  [
    `# ${page.h1}`,
    '',
    `> ${page.description}`,
    '',
    `Fonte canônica: ${siteUrl}/${page.slug} — atualizado em ${page.updatedAt}.`,
    '',
    ...page.intro.flatMap((paragraph) => [paragraph, '']),
    ...page.sections.flatMap(sectionToMarkdown),
    `## ${page.cta.heading}`,
    '',
    page.cta.body,
    '',
    ...page.cta.links.map(
      (link) => `- [${link.label}](${absolute(link.href)}) — ${link.description}`,
    ),
    '',
  ].join('\n')
