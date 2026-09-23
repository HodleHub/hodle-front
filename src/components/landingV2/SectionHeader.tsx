import type { ReactNode } from 'react'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type SectionHeaderProps = {
  id: string
  eyebrow: ReactNode
  title: ReactNode
  aside: ReactNode
}

/**
 * Two-cell section header: eyebrow + title on the left, supporting copy on the right.
 */
export const SectionHeader = ({ id, eyebrow, title, aside }: SectionHeaderProps) => (
  <div className="lv2-cells grid-cols-1 md:grid-cols-2 border-b border-[#E5E5E5]">
    <div className="px-6 lg:px-11 pt-14 lg:pt-16 pb-6 md:pb-12">
      <div className="font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.14em] text-[#A16207] flex items-center gap-2">
        {eyebrow}
      </div>
      <h2 id={id} className={`${heading} mt-3.5 text-4xl lg:text-5xl font-medium tracking-[-0.04em] leading-[1.08] text-balance`}>
        {title}
      </h2>
    </div>
    <div className="px-6 lg:px-11 pt-2 md:pt-16 pb-12 flex flex-col justify-end gap-5">{aside}</div>
  </div>
)
