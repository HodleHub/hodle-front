import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { InfoPage, InfoPageSection } from '../types/infoPage'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const formatUpdatedAt = (updatedAt: string): string =>
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(updatedAt))

const isExternal = (href: string): boolean => href.startsWith('http')

const SectionLinks = ({ section }: { section: InfoPageSection }) => (
  <ul className="not-prose space-y-3">
    {section.links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          target={isExternal(link.href) ? '_blank' : undefined}
          rel={isExternal(link.href) ? 'noreferrer' : undefined}
          className="group block rounded-xl border border-gray-200 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50/60"
        >
          <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            {link.label}
            <ArrowUpRight className="h-3.5 w-3.5 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span className="mt-1 block text-[13px] leading-relaxed text-gray-500">
            {link.description}
          </span>
        </Link>
      </li>
    ))}
  </ul>
)

const SectionRows = ({ section }: { section: InfoPageSection }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <tbody>
        {section.rows.map((row) => (
          <tr key={row.label} className="border-b border-gray-200">
            <th
              scope="row"
              className="w-[42%] py-3 pr-4 text-left align-top font-medium text-foreground"
            >
              {row.label}
            </th>
            <td className="py-3 align-top text-gray-600">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const SectionBullets = ({ section }: { section: InfoPageSection }) => (
  <ul className="list-disc space-y-1 pl-6">
    {section.bullets.map((bullet) => (
      <li key={bullet}>{bullet}</li>
    ))}
  </ul>
)

const SectionExtra = ({ section }: { section: InfoPageSection }) => {
  if (section.kind === 'LINKS') {
    return <SectionLinks section={section} />
  }

  if (section.kind === 'ROWS') {
    return <SectionRows section={section} />
  }

  if (section.kind === 'BULLETS') {
    return <SectionBullets section={section} />
  }

  return null
}

/**
 * Renders an `InfoPage` document. The same document feeds the markdown
 * representation served under `Accept: text/markdown`, so the page and the
 * markdown never drift.
 */
export const InfoPageView = ({ page }: { page: InfoPage }) => (
  <div className="min-h-screen bg-white">
    <article className="mx-auto max-w-[720px] px-6 py-20 lg:py-24">
      <div className="mb-12">
        <span className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
          <span className="h-1 w-1 rounded-full bg-foreground" />
          {page.kicker}
        </span>
        <h1
          className={`${heading} mb-4 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15] text-foreground`}
        >
          {page.h1}
        </h1>
        <p className="text-sm text-gray-400">
          Atualizado em {formatUpdatedAt(page.updatedAt)}.
        </p>
      </div>

      <div className="space-y-6 text-[15px] leading-relaxed text-gray-600">
        {page.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {page.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-6">
            <h2
              className={`${heading} pt-4 text-xl font-medium text-foreground`}
            >
              {section.heading}
            </h2>

            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <SectionExtra section={section} />
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-gray-200 pt-10">
        <h2 className={`${heading} mb-3 text-lg font-medium text-foreground`}>
          {page.cta.heading}
        </h2>
        <p className="mb-6 text-sm text-gray-500">{page.cta.body}</p>
        <ul className="space-y-3">
          {page.cta.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={isExternal(link.href) ? '_blank' : undefined}
                rel={isExternal(link.href) ? 'noreferrer' : undefined}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline underline-offset-4 hover:text-gray-600"
              >
                {link.label}
              </Link>
              <span className="ml-2 text-[13px] text-gray-500">
                {link.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  </div>
)
