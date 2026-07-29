import { TopicPage } from '../../types/topic'

export default function TopicFaq({
  faq,
  subhead,
}: {
  faq: TopicPage['faq']
  subhead: TopicPage['faqSubhead']
}) {
  return (
    <section className="border-t border-gray-200">
      <div className="max-w-[700px] mx-auto px-6 py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl lg:text-3xl font-light text-foreground leading-tight mb-3">
            Perguntas frequentes
          </h2>
          <p className="text-sm text-gray-500">
            {subhead}
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((item, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl overflow-hidden bg-white transition-colors hover:border-gray-300 [&[open]]:border-gray-300"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none">
                <span className="text-sm font-medium text-foreground pr-4">
                  {item.question}
                </span>
                <div className="shrink-0 w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center transition-transform duration-200 group-open:rotate-45">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
