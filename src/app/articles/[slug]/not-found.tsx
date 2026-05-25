import Link from 'next/link'

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-white">
      <div className="text-6xl font-light text-foreground tracking-tight mb-4">404</div>
      <h1 className="text-2xl md:text-3xl font-light text-foreground tracking-tight mb-4">
        Artigo não encontrado
      </h1>
      <p className="text-gray-500 mb-8 text-center max-w-md leading-relaxed">
        O artigo que você está procurando não existe ou foi removido.
      </p>
      <Link
        href="/articles"
        className="bg-foreground hover:bg-foreground/90 text-white font-medium px-6 py-3 rounded-xl transition-colors"
      >
        Ver todos os artigos
      </Link>
    </div>
  )
}
