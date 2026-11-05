import { getAllArticles } from './getAllArticles'
import { groupArticlesByCategory } from './groupArticlesByCategory'

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
    ...groupArticlesByCategory(getAllArticles()).flatMap((group) => [
      `## ${group.category.label}`,
      '',
      ...group.articles.map(
        (article) =>
          `- [${article.title}](${siteUrl}/articles/${article.slug}) — ${article.description} (${article.date}, ${article.readingMinutes} min)`,
      ),
      '',
    ]),
    '',
  ].join('\n')
