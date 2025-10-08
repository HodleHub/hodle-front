import { getArticleBySlug, getAllArticles } from '@/utils/mdx';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const articles = getAllArticles();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    };
  }
  
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.imageUrl }],
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white">
      <div className="pb-16 pt-8">
        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link 
            href="/articles" 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Artigos
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {article.title}
          </h1>
          
          <div className="text-gray-600 mb-6">
            {new Date(article.date).toLocaleDateString('pt-BR', {
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })}
          </div>
          
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-10">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>
        
        {/* Content */}
        <article className="prose prose-orange lg:prose-lg max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.content}
        </article>
      </div>
    </div>
  );
} 