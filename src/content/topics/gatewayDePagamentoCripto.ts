import { TopicPage } from '../../types/topic'

export const gatewayDePagamentoCripto: TopicPage = {
  slug: 'gateway-de-pagamento-cripto',
  title: 'Gateway de pagamento cripto com liquidação em Pix',
  h1: 'Um gateway de pagamento cripto que liquida em Pix',
  description:
    'Aceite cripto e liquide em Pix, não em transferência internacional. Gateway com cobrança em USDT, USDC e Bitcoin, saque em cripto e webhooks assinados.',
  keywords: [
    'gateway de pagamento cripto',
    'gateway pagamento cripto',
    'gateway de pagamento criptomoeda',
    'gateway pix cripto',
    'gateway saque cripto',
    'gateway de pagamento com saque em crypto',
  ],
  primaryKeyword: 'gateway de pagamento cripto',
  updatedAt: '2026-09-05T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'GATEWAY DE PAGAMENTO',
  subhead:
    'A maioria dos gateways de pagamento cripto liquida em transferência internacional ou deixa o valor em cripto. O da Hodle liquida em Pix: quem recebe cai em reais, 24 horas por dia, sem trilho bancário internacional no meio do caminho.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/btc.svg', label: 'Bitcoin' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/base.png', label: 'Base' },
  ],
  ctaSubhead:
    'Fale com o time da Hodle sobre o gateway de pagamento cripto para o seu produto.',
  ctaPrimary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br',
  },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é um gateway de pagamento cripto',
      body: 'Um gateway de pagamento cripto recebe uma cobrança em stablecoin ou Bitcoin no lugar de cartão ou boleto, e entrega o valor a quem vende. A diferença entre gateways está no destino final: alguns só custodiam a cripto recebida, outros liquidam por transferência internacional (SWIFT, ACH) e alguns, como o da Hodle, liquidam direto em Pix. Para um negócio que fatura e paga fornecedor no Brasil, esse último passo é o que decide se o gateway serve para operação do dia a dia ou só para guardar saldo em cripto.',
      bullets: [
        'Cobrança em USDT, USDC ou Bitcoin, com cotação travada por um tempo definido.',
        'Liquidação em Pix, na conta do seu negócio, sem passar por transferência internacional.',
        'Saque também em cripto, quando o destino é uma carteira e não uma conta bancária.',
        'Webhook assinado avisa cada mudança de estado da cobrança.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'gateways-cripto',
      kind: 'COMPARISON',
      heading: 'Gateways cripto e o trilho de liquidação',
      body: 'O mercado de gateway de pagamento cripto é dominado por players estrangeiros, pensados para liquidação internacional ou para manter o saldo em cripto. Nenhum deles nasceu para o Pix.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Gateway', 'Onde nasceu', 'Liquidação padrão'],
        rows: [
          ['CoinGate', 'Europa', 'Cripto ou transferência internacional'],
          ['Cryptomus', 'Europa do Leste', 'Cripto ou transferência internacional'],
          ['NOWPayments', 'Europa do Leste', 'Cripto ou transferência internacional'],
          ['Banxa', 'Austrália', 'Cripto ou transferência internacional'],
          ['Passimpay', 'Europa do Leste', 'Cripto ou transferência internacional'],
          ['Volet', 'Europa do Leste', 'Cripto ou transferência internacional'],
          ['Hodle', 'Brasil', 'Pix, na conta do seu negócio, 24 horas por dia'],
        ],
      },
      code: null,
      image: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Do checkout ao Pix na conta',
      body: 'A cobrança é o mesmo tipo de fluxo de um checkout de cartão, só que o meio de pagamento é a stablecoin ou o Bitcoin do seu cliente.',
      bullets: [
        'Você gera a cobrança pela API ou pelo painel, com o valor em reais e o ativo aceito.',
        'O cliente paga em USDT, USDC ou Bitcoin, na cotação travada da cobrança.',
        'O valor é convertido e liquidado em Pix na conta do seu negócio.',
        'Um webhook assinado com HMAC confirma o pagamento, para você conciliar sem consultar em loop.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'ativos-e-redes',
      kind: 'ASSETS',
      heading: 'Ativos e redes aceitos na cobrança',
      body: 'A cobrança aceita USDT e USDC em mais de uma rede, e Bitcoin on-chain ou por Lightning. O saque, quando o destino é uma carteira, segue a mesma lista de ativos e redes.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
        { src: '/tron.svg', label: 'Tron' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'api',
      kind: 'CODE',
      heading: 'O gateway pela API',
      body: 'A mesma cobrança que aparece no painel existe como chamada. Autenticação por API key com escopo por plataforma, e o mesmo webhook assinado que conciliar exige.',
      bullets: [
        'POST /api/deposit/asset — cria a cobrança e devolve o endereço ou QR code que recebe o pagamento.',
        'POST /api/wallet/payout — dispara um saque em Pix quando o valor precisa virar reais na conta.',
        'GET /api/account/statement — extrato paginado das cobranças e saques, por ativo.',
        'Webhook assinado com HMAC em cada transição de estado da cobrança.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'custodia-e-conformidade',
      kind: 'PROSE',
      heading: 'Quem custodia o quê',
      body: 'A Hodle não custodia o saldo do seu cliente final: a cobrança liquida na sua conta e o que fica retido entre a confirmação do pagamento e a liquidação em Pix é operacional, não um saldo de terceiro guardado pela Hodle. A Hodle é uma empresa de software e API, não um banco nem uma instituição financeira, e não emite moeda eletrônica nem stablecoin. Os fluxos regulados de câmbio e liquidação em real são conduzidos por parceiros licenciados e/ou regulados.',
      bullets: [],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre o gateway de pagamento cripto da Hodle.',
  faq: [
    {
      question: 'O que é um gateway de pagamento cripto?',
      answer:
        'É a peça que recebe uma cobrança em stablecoin ou Bitcoin no lugar de cartão ou boleto, e entrega o valor a quem vende. O que muda de um gateway para outro é o destino final: cripto retida, transferência internacional, ou Pix, como na Hodle.',
    },
    {
      question: 'O gateway da Hodle liquida em Pix ou em cripto?',
      answer:
        'Liquida em Pix, na conta do seu negócio. Você também pode sacar em cripto quando o destino for uma carteira, mas o caminho padrão para quem fatura no Brasil é a conta em reais.',
    },
    {
      question: 'Dá para sacar em cripto além de sacar em Pix?',
      answer:
        'Sim. O saque em cripto é feito para uma carteira que você informa, nas redes suportadas. É uma opção ao lado do saque em Pix, não uma troca.',
    },
    {
      question: 'Quais ativos o gateway aceita na cobrança?',
      answer:
        'USDT e USDC em mais de uma rede, e Bitcoin on-chain ou por Lightning. A cotação de cada cobrança fica travada por um tempo definido.',
    },
    {
      question: 'Como confirmo o pagamento sem ficar consultando a API?',
      answer:
        'Pelo webhook assinado com HMAC. Ele avisa cada transição de estado da cobrança, e é o caminho recomendado para reconciliação em vez de polling.',
    },
  ],
  related: [
    { label: 'Crypto as a Service', href: '/crypto-as-a-service' },
    { label: 'Como aceitar criptomoedas', href: '/como-aceitar-criptomoedas' },
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'Perguntas frequentes', href: '/faq' },
  ],
  ogImage: '/og-image-v2.png',
}
