import { brsCopy, type BrsCopy } from '../../components/brs/brsCopy'

type BrsLanguage = 'pt' | 'en'

const languages: BrsLanguage[] = ['pt', 'en']
const siteUrl: string = 'https://hodle.com.br'

/** Localized Markdown generated from the same BRS content as the visible pages. */
export const brsMarkdown: Record<BrsLanguage, string> = languages.reduce((documents: Record<BrsLanguage, string>, language: BrsLanguage): Record<BrsLanguage, string> => {
  const copy: BrsCopy = brsCopy[language]
  const pathname: string = language === 'pt' ? '/brs' : '/en/brs'
  const facts: string = copy.valueProps.items.map((item: BrsCopy['valueProps']['items'][number]): string => `- **${item.title}**: ${item.desc}`).join('\n')
  const steps: string = copy.howItWorks.steps.map((step: BrsCopy['howItWorks']['steps'][number], index: number): string => `${index + 1}. ${step.title}: ${step.desc}`).join('\n')
  const uses: string = copy.useCases.items.map((item: BrsCopy['useCases']['items'][number]): string => `- **${item.title}**: ${item.desc}`).join('\n')
  const faq: string = copy.faq.items.map((item: BrsCopy['faq']['items'][number]): string => `### ${item.question}\n\n${item.answer}`).join('\n\n')
  const links: string = copy.resources.links.map((link: BrsCopy['resources']['links'][number]): string => `- [${link.label}](${link.href.startsWith('/') ? `${siteUrl}${link.href}` : link.href})`).join('\n')
  const markdown: string = `# ${copy.hero.title}

> ${copy.hero.description}

${siteUrl}${pathname}
${copy.resources.reviewed}

${copy.hero.availability}

## ${copy.valueProps.title}

${facts}

## ${copy.howItWorks.title}

${steps}

## ${copy.useCases.title}

${uses}

## ${copy.developer.title}

${copy.developer.description}

## ${copy.faq.title}

${faq}

## ${copy.resources.title}

${links}
`

  return { ...documents, [language]: markdown }
}, { pt: '', en: '' })
