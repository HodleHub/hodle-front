import { serialize } from 'next-mdx-remote/serialize'
import * as jsxDevRuntime from 'react/jsx-dev-runtime'
import * as jsxRuntime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'
import { ArticleContent } from '../types/article'

const isProduction = process.env.NODE_ENV === 'production'

/**
 * Compiles MDX to a React component.
 *
 * `next-mdx-remote/rsc`'s own `compileMDX` returns a ready-made element built
 * with `React.createElement`, which React 19 rejects in development ("attempted
 * to render without development properties"). Returning the component instead
 * lets the caller create the element through the app's own JSX transform.
 */
export const compileArticleContent = async ({
  source,
}: {
  source: string
}): Promise<ArticleContent> => {
  const { compiledSource, frontmatter, scope } = await serialize(
    source,
    { mdxOptions: { remarkPlugins: [remarkGfm] } },
    true,
  )

  const runtime = isProduction ? jsxRuntime : jsxDevRuntime

  const fullScope = { opts: runtime, frontmatter, ...scope }
  const keys = Object.keys(fullScope)
  const values = Object.values(fullScope)

  const hydrate = Reflect.construct(Function, keys.concat(compiledSource))

  return hydrate.apply(hydrate, values).default
}
