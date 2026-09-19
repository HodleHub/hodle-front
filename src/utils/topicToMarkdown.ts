import { TopicPage } from '../types/topic'

import { sectionsToMarkdown } from './sectionsToMarkdown'

const siteUrl = 'https://hodle.com.br'

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
    `${topic.language === 'en' ? 'Canonical source' : 'Fonte canônica'}: ${siteUrl}/${topic.slug} — ${topic.updatedAt}.`,
    '',
    topic.subhead,
    '',
    sectionsToMarkdown({ sections: topic.sections }),
    ...(topic.faq.length > 0
      ? [
          topic.language === 'en'
            ? '## Frequently asked questions'
            : '## Perguntas frequentes',
          '',
        ]
      : []),
    ...topic.faq.flatMap((item) => [`### ${item.question}`, '', item.answer, '']),
    ...(topic.related.length > 0
      ? [topic.language === 'en' ? '## Related resources' : '## Relacionados', '']
      : []),
    ...topic.related.map(
      (link) => `- [${link.label}](${new URL(link.href, siteUrl).href})`,
    ),
    '',
  ].join('\n')
