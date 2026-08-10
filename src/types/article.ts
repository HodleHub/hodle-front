export type ArticleCategory = {
  slug: string
  label: string
}

export type ArticleAuthor = {
  name: string
  role: string
}

export type ArticleCover = {
  src: string
  alt: string
}

export type ArticleMeta = {
  slug: string
  title: string
  description: string
  date: string
  category: ArticleCategory
  author: ArticleAuthor
  cover: ArticleCover | null
  coverKicker: string
  readingMinutes: number
}

export type ArticleContent = React.ComponentType<{
  components?: Record<string, React.ComponentType>
}>

export type Article = ArticleMeta & {
  content: ArticleContent
}
