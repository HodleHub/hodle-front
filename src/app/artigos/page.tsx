import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const allArticles = [
  {
    id: "seguranca-stablecoins",
    title: "Segurança em Stablecoins: Melhores Práticas",
    description: "Descubra como proteger seus ativos digitais com as melhores práticas de segurança no mercado de stablecoins.",
    date: "15 de Março, 2025",
    category: "Segurança",
    readTime: "8 min"
  },
  {
    id: "introducao-defi",
    title: "Introdução ao DeFi: O Futuro das Finanças",
    description: "Entenda como as finanças descentralizadas estão transformando o mercado financeiro global.",
    date: "10 de Março, 2025",
    category: "DeFi",
    readTime: "10 min"
  },
  {
    id: "regulacao-cripto-brasil",
    title: "Regulação de Criptomoedas no Brasil",
    description: "Análise completa sobre o cenário regulatório de criptomoedas e stablecoins no Brasil.",
    date: "5 de Março, 2025",
    category: "Regulação",
    readTime: "12 min"
  }
]

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black mb-6 text-gray-900">
              Artigos sobre Hodle
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nossos artigos sobre stablecoins, DeFi, segurança e regulação no mercado de criptomoedas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allArticles.map((article) => (
              <Link 
                key={article.id} 
                href={`/artigos/${article.id}`}
                className="group"
              >
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-56 bg-gradient-to-br from-orange-100 to-orange-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2 gap-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime} de leitura</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold">
                      Ler mais
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
