import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ButtonShadow } from '../ui/ButtonShadow'
import TopicIconRow from './topicIconRow'
import TopicPartnerLockup from './topicPartnerLockup'
import { TopicPage } from '../../types/topic'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export default function TopicHero({ topic }: { topic: TopicPage }) {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="hero-spotlight absolute inset-0 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-28 lg:pt-32 lg:pb-36">
        <div className="text-center max-w-[900px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            {topic.kicker}
          </span>

          <h1
            className={`${heading} text-[clamp(2.8rem,7vw,5.6rem)] font-light text-foreground leading-[1.02] mb-7 tracking-[-0.035em] text-balance`}
          >
            {topic.h1}
          </h1>

          <p className="text-lg lg:text-xl text-gray-500 max-w-[660px] mx-auto mb-8 leading-relaxed text-pretty">
            {topic.subhead}
          </p>

          {topic.partner && (
            <div className="mb-8">
              <TopicPartnerLockup partner={topic.partner} />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href={topic.ctaPrimary.href}
              target="_blank"
              rel="noreferrer"
            >
              <ButtonShadow
                faceClassName="border-foreground bg-foreground text-white hover:bg-foreground"
                shadowClassName="bg-gray-300"
              >
                {topic.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonShadow>
            </Link>
            <Link href={topic.ctaSecondary.href} target="_blank">
              <ButtonShadow
                faceClassName="border-gray-300 bg-white text-gray-600 hover:text-foreground"
                shadowClassName="bg-gray-200"
              >
                {topic.ctaSecondary.label}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </ButtonShadow>
            </Link>
          </div>

          <TopicIconRow icons={topic.heroIcons} />
        </div>
      </div>
    </section>
  )
}
