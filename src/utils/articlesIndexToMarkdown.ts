import { getAllArticles } from './getAllArticles'

const siteUrl = 'https://hodle.com.br'

/**
 * Renders the article index as markdown from the same metadata the page reads.
 */
export const articlesIndexToMarkdown = (): string =>
  [
    '# Artigos',
    '',
    '> Artigos técnicos da Hodle sobre pagamentos com Pix e stablecoin, auto-custódia, Lightning e integração de API.',
    '',
    `Fonte canônica: ${siteUrl}/articles`,
    '',
    ...getAllArticles().map(
      (article) =>
        `- [${article.title}](${siteUrl}/articles/${article.slug}) — ${article.description} (${article.date}, ${article.readingMinutes} min)`,
    ),
    '',
  ].join('\n')
