import Image from 'next/image'
import AnimatedSection from '../AnimatedSection'
import TopicCodeBlock from './topicCodeBlock'
import TopicPartnerLockup from './topicPartnerLockup'
import { TopicPage } from '../../types/topic'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

function SectionBody({ body }: { body: string }) {
  const paragraphs = body.split('\n\n')

  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className={`text-gray-500 leading-relaxed ${i < paragraphs.length - 1 ? 'mb-4' : 'mb-6'}`}>
          {p}
        </p>
      ))}
    </>
  )
}

function SectionProse({ section }: { section: TopicPage['sections'][number] }) {
  return (
    <>
      {section.logo && (
        <div className="mb-5">
          <TopicPartnerLockup partner={section.logo} align="left" showKicker={false} size="md" />
        </div>
      )}
      <h2 className={`${heading} text-2xl lg:text-3xl font-light text-foreground leading-tight mb-4`}>
        {section.heading}
      </h2>
      <SectionBody body={section.body} />
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
      <SectionBody body={section.body} />
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
      <SectionBody body={section.body} />
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
      <SectionBody body={section.body} />
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
      <SectionBody body={section.body} />
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
      {section.code && <TopicCodeBlock code={section.code} />}
    </>
  )
}

function SectionScreenshot({ section }: { section: TopicPage['sections'][number] }) {
  return (
    <>
      <h2 className={`${heading} text-2xl lg:text-3xl font-light text-foreground leading-tight mb-4`}>
        {section.heading}
      </h2>
      <SectionBody body={section.body} />
      {section.image && (
        <div>
          <Image
            src={section.image.src}
            alt={section.image.alt}
            width={section.image.width}
            height={section.image.height}
            className="w-full h-auto rounded-2xl border border-gray-200"
            sizes="(max-width: 768px) 100vw, 700px"
          />
          <p className="mt-3 text-xs text-gray-400">{section.image.caption}</p>
        </div>
      )}
    </>
  )
}

function renderSection(section: TopicPage['sections'][number]) {
  switch (section.kind) {
    case 'PROSE':
      return <SectionProse section={section} />
    case 'STEPS':
      return <SectionSteps section={section} />
    case 'ASSETS':
      return <SectionAssets section={section} />
    case 'COMPARISON':
      return <SectionComparison section={section} />
    case 'CODE':
      return <SectionCode section={section} />
    case 'SCREENSHOT':
      return <SectionScreenshot section={section} />
  }
}

export default function TopicSections({ topic }: { topic: TopicPage }) {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-16 lg:py-20">
      <div className="space-y-16">
        {topic.sections.map((section, i) => (
          <AnimatedSection key={section.id} delay={i * 0.05} direction="up">
            <section id={section.id}>
              {renderSection(section)}
            </section>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
