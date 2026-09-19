import type { ReactElement } from 'react'
import Link from 'next/link'
import { integrationPaths } from '../content/integrationPaths'

/** Links visitors to the integration that matches their product. */
export const IntegrationPaths = (): ReactElement => (
  <section
    aria-labelledby="integration-paths"
    className="border-t border-gray-200 bg-gray-50/50"
  >
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      <h2
        id="integration-paths"
        className="mb-8 font-[family-name:var(--font-space-grotesk)] text-2xl font-light text-foreground"
      >
        O que você quer construir?
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {integrationPaths.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className="rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <h3 className="mb-3 text-base font-medium text-foreground">
              {path.title} <span aria-hidden="true">→</span>
            </h3>
            <p className="text-sm leading-6 text-gray-600">{path.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
)
