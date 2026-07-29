import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ButtonShadow } from '../ui/ButtonShadow'
import { TopicPage } from '../../types/topic'

export default function TopicCta({ topic }: { topic: TopicPage }) {
  return (
    <section className="border-t border-gray-200">
      <div className="max-w-[700px] mx-auto px-6 py-16 lg:py-20 text-center">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground mb-3">
          Pronto para começar?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {topic.ctaSubhead}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
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
      </div>
    </section>
  )
}
