import { ArticleFaqItem } from '../../types/article'

type ArticleFaqProps = {
  items: ArticleFaqItem[]
}

/**
 * Renders the frontmatter FAQ inside the reading column. The markup has to stay
 * visible on the page: Google only honours FAQPage structured data when the
 * same question and answer are readable by the visitor.
 */
export default function ArticleFaq({ items }: ArticleFaqProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="mt-14 border-t border-gray-200 pt-10">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
        Perguntas frequentes
      </h2>

      <dl className="mt-7 space-y-7">
        {items.map((item) => (
          <div key={item.question}>
            <dt className="text-[15px] font-semibold leading-[1.5] text-foreground">
              {item.question}
            </dt>

            <dd className="mt-2 text-[15px] leading-[1.75] text-gray-600">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
