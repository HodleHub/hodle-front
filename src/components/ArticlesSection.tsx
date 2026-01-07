import Link from 'next/link'
import Image from 'next/image'
import { Card } from './ui/Card'
import AnimatedSection from './AnimatedSection'
import { getAllArticles } from '../utils/mdx'

export default async function ArticlesSection() {
  const articles = getAllArticles()

  return (
    <AnimatedSection delay={0.1}>
      <section className="w-full max-w-5xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Últimos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              Artigos
            </span>
          </h2>
          <p className="text-gray-600">
            Fique por dentro do universo Bitcoin e todas as novidades da Hodle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={`/articles/${article.slug}`}>
              <Card className="h-full overflow-hidden border bg-white hover:shadow-xl transition-all duration-300 rounded-2xl">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}









