import type { ReactElement } from 'react'
import Link from 'next/link'
import type { BrsCopy } from './brsCopy'

type BrsResourcesProps = { copy: BrsCopy }

/** Links the BRS explanation to current product contracts and related asset pages. */
export const BrsResources = ({ copy }: BrsResourcesProps): ReactElement => (
  <section className="border-t border-gray-200">
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-light mb-4">{copy.resources.title}</h2>
      <p className="text-sm text-gray-500 mb-6">{copy.resources.reviewed}</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-4 text-sm">
        {copy.resources.links.map((link: BrsCopy['resources']['links'][number]): ReactElement => (
          <li key={link.href}><Link href={link.href} className="underline underline-offset-4 text-[#00752c]">{link.label}</Link></li>
        ))}
      </ul>
    </div>
  </section>
)
