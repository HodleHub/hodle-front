import Link from 'next/link'
import { TopicPage } from '../../types/topic'

export default function TopicRelated({ related }: { related: TopicPage['related'] }) {
  return (
    <section className="border-t border-gray-200">
      <div className="max-w-[700px] mx-auto px-6 py-16 lg:py-20">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-foreground mb-6">
            Continue explorando
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {related.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
