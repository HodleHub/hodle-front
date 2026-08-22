import { glossaryTerms } from '../content/glossary/glossaryTerms'

const siteUrl = 'https://hodle.com.br'

/**
 * Renders the glossary as markdown from the same term list the page renders.
 */
export const glossaryToMarkdown = (): string =>
  [
    '# Glossário de pagamentos cripto',
    '',
    '> Definições dos termos usados na plataforma e na API da Hodle: Pix, stablecoin, on-ramp, off-ramp, auto-custódia, Lightning, KYC e afins.',
    '',
    `Fonte canônica: ${siteUrl}/glossario`,
    '',
    ...glossaryTerms.flatMap((entry) => [
      `## ${entry.term}`,
      '',
      entry.definition,
      '',
    ]),
  ].join('\n')
