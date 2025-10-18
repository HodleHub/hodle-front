export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://hodle.com.br',
    name: 'Hodle - Pagamentos com Stablecoins e Bitcoin Lightning',
    description:
      'Envie e receba pagamentos instantâneos com stablecoins USDT ou Bitcoin Lightning. Gere QR Codes e chaves PIX para suas transações, sem limites e com segurança blockchain.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hodle.com.br/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    sameAs: ['https://twitter.com/ThiagoMot_'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
