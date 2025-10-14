import Link from "next/link"
import Image from "next/image"

const articles = [
  {
    id: "seguranca-stablecoins",
    title: "Segurança em Stablecoins: Melhores Práticas",
    description: "Descubra como proteger seus ativos digitais com as melhores práticas de segurança no mercado de stablecoins.",
    image: "/article-1.jpg",
    date: "15 de Março, 2025",
    category: "Segurança"
  },
  {
    id: "introducao-defi",
    title: "Introdução ao DeFi: O Futuro das Finanças",
    description: "Entenda como as finanças descentralizadas estão transformando o mercado financeiro global.",
    image: "/article-2.jpg",
    date: "10 de Março, 2025",
    category: "DeFi"
  },
  {
    id: "regulacao-cripto-brasil",
    title: "Regulação de Criptomoedas no Brasil",
    description: "Análise completa sobre o cenário regulatório de criptomoedas e stablecoins no Brasil.",
    image: "/article-3.jpg",
    date: "5 de Março, 2025",
    category: "Regulação"
  }
]

export default function Articles() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-gray-900">
            Conheça mais sobre a Hodle
          </h2>
          <p className="text-2xl text-gray-600 mb-8">Artigos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article) => (
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
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
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

        <div className="text-center mt-16">
          <Link 
            href="/artigos"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30"
          >
            Ver todos os artigos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
