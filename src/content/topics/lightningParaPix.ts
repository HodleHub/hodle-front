import { TopicPage } from '../../types/topic'

export const lightningParaPix: TopicPage = {
  slug: 'lightning-para-pix',
  primaryKeyword: 'lightning para pix',
  title: 'Lightning para Pix: receber do exterior',
  h1: 'Cobre em Lightning, liquide em Pix',
  description:
    'Emita uma invoice Lightning por API. Quando ela é paga, o valor liquida em Pix em segundos, em reais, na conta de quem recebe no Brasil.',
  keywords: [
    'lightning para pix',
    'receber pagamento em lightning',
    'invoice lightning e sacar em pix',
    'receber do exterior em bitcoin',
    'bolt11 para pix',
    'api lightning pix',
  ],
  updatedAt: '2026-07-29',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'LIGHTNING',
  subhead:
    'Quem paga está em qualquer lugar e usa Lightning. Quem recebe está no Brasil e recebe reais por Pix. A ponte entre os dois é uma chamada de API.',
  faqSubhead:
    'Tire suas dúvidas sobre receber em Lightning e liquidar em Pix.',
  ctaSubhead:
    'Comece pela documentação ou fale com o time da Hodle.',
  heroIcons: [
    { src: '/ln.svg', label: 'Lightning' },
    { src: '/btc.svg', label: 'Bitcoin' },
    { src: '/pix.svg', label: 'Pix' },
    { src: '/spark.svg', label: 'Spark' },
  ],
  ctaPrimary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br/docs/flow-lightning-pix',
  },
  ctaSecondary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é liquidar Lightning em Pix',
      body: 'É receber um pagamento na Lightning Network e entregar o valor em reais, por Pix, para quem recebe no Brasil. A invoice é emitida do seu lado por uma chamada de API. O pagador escaneia ou cola, paga em bitcoin, e o payout Pix é disparado automaticamente quando a invoice é liquidada.\n\nPara quem paga, é um pagamento Lightning comum. Para quem recebe, é um Pix comum em reais. Nenhum dos dois lados precisa lidar com o outro trilho.',
      bullets: [
        'Quem paga usa Lightning, de qualquer lugar.',
        'Quem recebe cai em reais por Pix, no Brasil.',
        'O payout dispara sozinho quando a invoice é paga.',
        'Você não precisa rodar nó Lightning nem manter canal.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Da invoice ao Pix liquidado',
      body: 'Quatro etapas. A primeira é sua; as três seguintes acontecem sozinhas.',
      bullets: [
        'Emitir a invoice. Um POST em /api/lightning/invoice devolve uma BOLT11 com valor e validade.',
        'Entregar ao pagador. Você mostra o QR code ou o texto lnbc... onde faz sentido no seu produto.',
        'Pagamento. O pagador liquida a invoice na Lightning Network, de qualquer lugar.',
        'Liquidação em reais. O payout Pix é disparado automaticamente e liquida em segundos. O webhook assinado avisa cada transição.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'quem-usa',
      kind: 'PROSE',
      heading: 'Quem tem esse problema',
      body: 'O caso mais direto é receber de fora do Brasil sem passar por transferência internacional. Prestador de serviço com cliente no exterior, plataforma que paga colaborador em outro país, e-commerce vendendo para fora — todos precisam que o dinheiro chegue em reais, na conta brasileira, sem depender de horário bancário.\n\nLightning resolve a perna internacional e o Pix resolve a perna local. O que faltava era a costura entre as duas, e é isso que a API entrega.',
      bullets: [
        'Prestador de serviço com cliente fora do Brasil.',
        'Plataforma que recebe de pagador internacional e liquida local.',
        'Operação que não pode esperar horário bancário.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'pela-api',
      kind: 'CODE',
      heading: 'Uma chamada emite, o webhook fecha',
      body: 'O endpoint de invoice é documentado com as telas, as chamadas e os modos de falha. A confirmação chega por webhook assinado com HMAC, não por polling.',
      bullets: [
        'POST /api/lightning/invoice — emite a BOLT11.',
        'Webhook assinado com HMAC em cada mudança de estado.',
        'Extrato com saldo por ativo e operações paginadas.',
        'Guia completo em docs.hodle.com.br/docs/flow-lightning-pix.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'redes',
      kind: 'ASSETS',
      heading: 'Bitcoin, Lightning e o trilho brasileiro',
      body: 'Bitcoin circula on-chain e por Lightning. A Spark também transporta ativos sobre o Bitcoin. A saída em reais é por Pix, 24 horas por dia, todos os dias.',
      bullets: [],
      icons: [
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/spark.svg', label: 'Spark' },
        { src: '/pix.svg', label: 'Pix' },
      ],
      comparison: null,
      code: null,
    },
  ],
  faq: [
    {
      question: 'Como receber um pagamento em Lightning e sacar em Pix?',
      answer:
        'Você emite uma invoice BOLT11 com um POST em /api/lightning/invoice e entrega ao pagador. Quando ele paga, o payout Pix é disparado automaticamente e liquida em reais em segundos, na conta de quem recebe no Brasil.',
    },
    {
      question: 'Quem paga precisa saber de Pix?',
      answer:
        'Não. Do lado de quem paga é um pagamento Lightning comum: escanear ou colar a invoice e pagar em bitcoin. O Pix acontece só na perna brasileira, depois.',
    },
    {
      question: 'Quanto tempo leva?',
      answer:
        'A liquidação em reais acontece em segundos depois que a invoice é paga, e funciona 24 horas por dia, sem depender de horário bancário.',
    },
    {
      question: 'Preciso rodar um nó Lightning?',
      answer:
        'Não. A emissão da invoice e a liquidação são operações da API. Você não mantém nó, não abre canal e não administra liquidez de rede.',
    },
    {
      question: 'O que acontece se a invoice não for paga?',
      answer:
        'A invoice tem prazo de validade e expira sem que nada seja movimentado. Nenhum payout é disparado, e o webhook informa o estado. Você pode emitir outra.',
    },
  ],
  related: [
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Glossário', href: '/glossario' },
    { label: 'Preços e taxas', href: '/precos' },
  ],
}