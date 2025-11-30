import Link from 'next/link';

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-white">
      <div className="text-5xl font-bold text-orange-500 mb-4">404</div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Artigo não encontrado</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        O artigo que você está procurando não existe ou foi removido.
      </p>
      <Link 
        href="/articles" 
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Ver todos os artigos
      </Link>
    </div>
  );
} 