import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artigos | Hodle - Bitcoin Lightning',
  description:
    'Aprenda sobre Bitcoin, Lightning Network e como aproveitar ao máximo a tecnologia blockchain.',
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen relative text-gray-800 flex flex-col">
      {/* Background with dot grid */}
      <div className="absolute inset-0 bg-dot-grid -z-10"></div>

      {/* Content */}
      <div className="flex-1 relative z-10 bg-white/80">{children}</div>
    </div>
  )
}
