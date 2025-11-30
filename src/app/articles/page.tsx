import { getAllArticles } from '../../utils/mdx';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-orange-500">Artigos</span> Hodle
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Aprenda sobre Bitcoin, Lightning Network e como aproveitar ao máximo a tecnologia blockchain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link 
            key={article.slug}
            href={`/articles/${article.slug}`}
            target="_blank"
            className="block group"
          >
            <div className="h-full flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-100 group-hover:border-orange-300 group-hover:ring-2 group-hover:ring-orange-200 transform group-hover:-translate-y-1 duration-200">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1 mb-4">
                  {article.description}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  {new Date(article.date).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="text-orange-500 font-medium flex items-center">
                  Ler artigo
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 