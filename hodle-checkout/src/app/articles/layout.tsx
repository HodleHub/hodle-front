import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { Footer } from '../../components/ui/Footer'

export const metadata: Metadata = {
  title: 'Artigos | Hodle - Bitcoin Lightning',
  description: 'Aprenda sobre Bitcoin, Lightning Network e como aproveitar ao máximo a tecnologia blockchain.',
}

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative text-gray-800 flex flex-col">
      {/* Background with dot grid */}
      <div className="absolute inset-0 bg-dot-grid -z-10"></div>
      
      {/* Header */}
      <header className="p-4 border-b border-gray-100 sticky top-0 bg-white z-10 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/hodlelogo.png" alt="Hodle Logo" width={156} height={156} className="mr-2" />
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              href="/articles/precos" 
              target="_blank" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              preços
            </Link>
            <Link 
              href="/articles" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 relative z-10 bg-white/80">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 