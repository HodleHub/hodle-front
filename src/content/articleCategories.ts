import { ArticleCategory } from '../types/article'

/**
 * Breadcrumb taxonomy for `/articles`. The key is what an `.mdx` file declares in
 * its `category` frontmatter; unknown keys fall back to `hodle`.
 */
export const articleCategories: Record<string, ArticleCategory> = {
  hodle: { slug: 'hodle', label: 'Hodle' },
  produto: { slug: 'produto', label: 'Produto' },
  engenharia: { slug: 'engenharia', label: 'Engenharia' },
  mercado: { slug: 'mercado', label: 'Mercado' },
}

export const defaultArticleCategory: ArticleCategory = articleCategories.hodle
