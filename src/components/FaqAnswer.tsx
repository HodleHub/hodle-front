import type { ReactNode } from 'react'
import { Fragment } from 'react'
import Link from 'next/link'
import type { FaqItem } from '../content/faq/faqItems'

/**
 * Renders a FAQ answer, turning the item's optional anchor phrase into a link.
 * Shared by the `/faq` page and the home page accordion.
 */
export const FaqAnswer = ({ item }: { item: FaqItem }): ReactNode => {
  const { link, answer } = item

  if (!link) {
    return answer
  }

  const parts = answer.split(link.text)

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <Link
          href={link.href}
          className="text-foreground underline underline-offset-2 hover:text-gray-600"
        >
          {link.text}
        </Link>
      )}
    </Fragment>
  ))
}
