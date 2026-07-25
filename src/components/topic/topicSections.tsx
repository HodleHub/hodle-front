import Image from 'next/image'
import AnimatedSection from '../AnimatedSection'
import CodeBlock from '../CodeBlock'
import { TopicPage } from '../../types/topic'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

function SectionProse({ section, topic }: { section: TopicPage['sections'][number]; topic: TopicPage }) {
  return (
    <>
      <h2 className={`${heading} text-2xl lg:text-3xl font-light text-foreground leading-tight mb-4`}>
        {section.heading}
      </h2>
      <p className="text-gray-500 leading-relaxed mb-6">{section.body}</p>
      {section.bullets.length > 0 && (
        <ul className="space-y-2">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

function SectionSteps({ section }: { section: TopicPage['sections'][number] }) {
  return (
    <>
      <h2 className={`${heading} text-2xl lg:text-3xl font-light text-foreground leading-tight mb-4`}>
        {section.heading}
      </h2>
      <p className="text-gray-500 leading-relaxed mb-6">{section.body}</p>
      {section.bullets.length > 0 && (
        <ol className="space-y-4">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-semibold text-white">
                {i + 1}
              </span>
              <span className="text-sm text-gray-500 pt-0.5">{bullet}</span>
            </li>
          ))}
        </ol>
      )}
    </>
  )
}

function SectionAssets({ section }: { section: TopicPage['sections'][number] }) {
  return (
    <>
      <h2 className={`${heading} text-2xl lg:text-3xl font-light text-foreground leading-tight mb-4`}>
        {section.heading}
      </h2>
      <p className="text-gray-500 leading-relaxed mb-6">{section.body}</p>
      {section.bullets.length > 0 && (
        <ul className="space-y-2 mb-6">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {section.icons.map((icon) => (
          <div key={icon.label} className="flex items-center gap-2">
            <Image
              src={icon.src}
              alt={icon.label}
              width={28}
              height={28}
              className="w-7 h-7 rounded-full"
            />
            <span className="text-sm font-medium text-gray-500">{icon.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function SectionComparison({ section }: { section: TopicPage['sections'][number] }) {
  return (
    <>
      <h2 className={`${heading} text-2xl lg:text-3xl font-light text-foreground leading-tight mb-4`}>
        {section.heading}
      </h2>
      <p className="text-gray-500 leading-relaxed mb-6">{section.body}</p>
      {section.comparison && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                {section.comparison.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.comparison.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-500">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

function SectionCode({ section }: { section: TopicPage['sections'][number] }) {
  return (
    <>
      <h2 className={`${heading} text-2xl lg:text-3xl font-light text-foreground leading-tight mb-4`}>
        {section.heading}
      </h2>
      <p className="text-gray-500 leading-relaxed mb-6">{section.body}</p>
      {section.bullets.length > 0 && (
        <ul className="space-y-2 mb-6">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      <CodeBlock />
    </>
  )
}

function renderSection(section: TopicPage['sections'][number], topic: TopicPage) {
  switch (section.kind) {
    case 'PROSE':
      return <SectionProse section={section} topic={topic} />
    case 'STEPS':
      return <SectionSteps section={section} />
    case 'ASSETS':
      return <SectionAssets section={section} />
    case 'COMPARISON':
      return <SectionComparison section={section} />
    case 'CODE':
      return <SectionCode section={section} />
  }
}

export default function TopicSections({ topic }: { topic: TopicPage }) {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-16 lg:py-20">
      <div className="space-y-16">
        {topic.sections.map((section, i) => (
          <AnimatedSection key={section.id} delay={i * 0.05} direction="up">
            <section id={section.id}>
              {renderSection(section, topic)}
            </section>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
