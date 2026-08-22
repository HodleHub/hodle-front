import { faqItems } from '../content/faq/faqItems'

const siteUrl = 'https://hodle.com.br'

/**
 * Renders the FAQ as markdown from the same item list `/faq` renders.
 */
export const faqToMarkdown = (): string =>
  [
    '# Perguntas frequentes',
    '',
    '> O que é a Hodle, para quem é, como funcionam a API, as wallets auto-custodiais, a conta PJ, o KYC, as taxas e os prazos de liquidação.',
    '',
    `Fonte canônica: ${siteUrl}/faq`,
    '',
    ...faqItems.flatMap((item) => [
      `## ${item.question}`,
      '',
      item.answer,
      ...(item.link
        ? [
            '',
            `Veja também: ${item.link.href.startsWith('http') ? item.link.href : `${siteUrl}${item.link.href}`}`,
          ]
        : []),
      '',
    ]),
  ].join('\n')
