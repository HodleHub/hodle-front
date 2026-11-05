import { ArticleCategory, ArticleMeta } from '../types/article'
import { articleCategories } from '../content/articleCategories'

type ArticleGroup = {
  category: ArticleCategory
  articles: ArticleMeta[]
}

export const groupArticlesByCategory = (articles: ArticleMeta[]): ArticleGroup[] =>
  Object.values(articleCategories)
    .map((category) => ({
      category,
      articles: articles.filter((article) => article.category.slug === category.slug),
    }))
    .filter((group) => group.articles.length > 0)
