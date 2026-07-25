import { TopicCode } from '../../types/topic'

export default function TopicCodeBlock({ code }: { code: TopicCode }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0b0b0f] overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2.5">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
          {code.label}
        </span>

        <span className="text-[11px] font-mono text-gray-600">{code.language}</span>
      </div>

      <pre className="overflow-x-auto px-4 py-4 text-[12px] leading-relaxed">
        <code className="font-[family-name:var(--font-geist-mono)] text-gray-300">
          {code.snippet}
        </code>
      </pre>
    </div>
  )
}
