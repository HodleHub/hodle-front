import Link from 'next/link'
import { ArticleCategory } from '../../types/article'

export default function ArticleBreadcrumb({
  category,
}: {
  category: ArticleCategory
}) {
  return (
    <nav
      aria-label="Trilha"
      className="text-[13px] tracking-[-0.01em] leading-none"
    >
      <Link
        href="/articles"
        className="text-gray-400 hover:text-foreground transition-colors"
      >
        artigos
      </Link>
      <span className="text-gray-300">/</span>
      <span className="text-foreground">{category.label.toLowerCase()}</span>
    </nav>
  )
}
