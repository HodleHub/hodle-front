import { TopicPage } from '../../types/topic'

export const comprarUsdtComPix: TopicPage = {
  slug: 'comprar-usdt-com-pix',
  primaryKeyword: 'comprar usdt com pix por api',
  title: 'Comprar USDT com Pix por API',
  h1: 'Reais entram por Pix, sai dólar digital',
  description:
    'Converta reais em USDT, USDC ou USDCE por API e entregue na rede que escolher, no endereço do seu usuário. Disponível 24 horas por dia, todos os dias.',
  keywords: [
    'comprar usdt com pix por api',
    'comprar usdt com pix',
    'on-ramp usdt api',
    'dólar digital por api',
    'converter reais em usdt',
    'api para comprar stablecoin',
  ],
  updatedAt: '2026-07-30T21:04:55-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'ON-RAMP',
  subhead:
    'Uma chamada recebe reais por Pix e entrega dólar digital no endereço que você indicar. A rede é parâmetro da operação, então o mesmo código atende Polygon, Base ou Tron.',
  faqSubhead:
    'Tire suas dúvidas sobre comprar USDT com Pix por API.',
  ctaSubhead:
    'Comece pela documentação ou fale com o time da Hodle.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/tron.svg', label: 'Tron' },
    { src: '/base.png', label: 'Base' },
  ],
  ctaPrimary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br/docs/deposit-asset',
  },
  ctaSecondary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é comprar USDT com Pix por API',
      body: 'É converter reais em dólar digital numa chamada e entregar o ativo direto num endereço. O Pix entra, a conversão acontece, e a stablecoin sai na rede que você escolheu para o destino que você indicou.\n\nA diferença em relação a comprar numa exchange é o destino. Não existe saldo interno intermediário esperando saque: a entrega é o passo final da própria operação.',
      bullets: [
        'Entrada em reais por Pix, disponível 24 horas por dia.',
        'Saída em USDT, USDC ou USDCE.',
        'Destino é um endereço que você indica, não um saldo interno.',
        'A rede é parâmetro da operação, não integração separada.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Do Pix ao dólar digital entregue',
      body: 'Três etapas, e as decisões suas são o ativo e a rede.',
      bullets: [
        'Escolher ativo e rede. USDT em Polygon ou Tron, USDC em Base, e as duas também em Arbitrum e Spark.',
        'Disparar a operação. O deposit-asset recebe o valor em reais e o endereço de destino.',
        'Entrega e confirmação. A stablecoin chega no endereço indicado, e o webhook assinado com HMAC avisa a mudança de estado.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'para-que-serve',
      kind: 'PROSE',
      heading: 'Por que uma empresa faz isso por API',
      body: 'O caso mais comum é dar ao usuário final exposição a dólar sem que a sua plataforma precise operar uma tesouraria em moeda estrangeira. O usuário deposita em reais, o saldo dele fica em dólar digital, e o seu produto só orquestra a chamada.\n\nO segundo caso é operacional: pagar fornecedor ou colaborador que prefere receber em stablecoin. A entrada continua em reais, e a saída já sai no ativo e na rede que o destinatário usa.',
      bullets: [
        'Dar exposição a dólar ao usuário final, sem tesouraria própria.',
        'Pagar quem prefere receber em stablecoin.',
        'Sem depender de horário bancário.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'redes',
      kind: 'ASSETS',
      heading: 'Ativos e redes de entrega',
      body: 'USDT é entregue em Polygon e Tron. USDC em Base. As duas também circulam em Arbitrum e Spark. USDCE é a versão ponte da USDC em determinadas redes e também está disponível como destino.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/tron.svg', label: 'Tron' },
        { src: '/base.png', label: 'Base' },
        { src: '/arbitrum.svg', label: 'Arbitrum' },
        { src: '/spark.svg', label: 'Spark' },
        { src: '/pix.svg', label: 'Pix' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'pela-api',
      kind: 'CODE',
      heading: 'A chamada de entrada',
      body: 'O mesmo endpoint que converte reais em USDT converte em USDC, USDCE e Lightning. Trocar o ativo de destino é trocar um parâmetro, não refazer a integração.',
      bullets: [
        'deposit-asset — converte reais e entrega no endereço indicado.',
        'Ativos de destino: USDT, USDC, USDCE e Lightning.',
        'Webhook assinado com HMAC em cada mudança de estado.',
        'KYC do usuário final pela mesma API, exigido para entrada e saída.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faq: [
    {
      question: 'Como comprar USDT com Pix por API?',
      answer:
        'Você dispara a operação de deposit-asset informando o valor em reais, o ativo de destino e o endereço que vai receber. A stablecoin chega nesse endereço e o webhook assinado avisa a conclusão.',
    },
    {
      question: 'Em qual rede o USDT é entregue?',
      answer:
        'Na que você escolher. USDT é entregue em Polygon e Tron, USDC em Base, e as duas também circulam em Arbitrum e Spark. A rede é parâmetro da operação.',
    },
    {
      question: 'Dá para entregar no endereço do meu usuário final?',
      answer:
        'Sim, e é o desenho pretendido. A entrega é num endereço que você indica, sem saldo interno intermediário esperando saque. As chaves do endereço de destino não ficam com a Hodle.',
    },
    {
      question: 'Qual a taxa?',
      answer:
        'A taxa de serviço está publicada na página de preços, que é a única fonte oficial. Qualquer valor citado fora dela deve ser conferido antes de ser considerado válido.',
    },
    {
      question: 'Precisa de KYC?',
      answer:
        'Sim. A verificação de identidade do usuário final é exigida para operações de entrada e saída, e é feita pela própria API, com submissão e consulta de estado documentadas.',
    },
  ],
  related: [
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'Comprar Bitcoin com Pix', href: '/comprar-bitcoin-com-pix' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Glossário', href: '/glossario' },
  ],
}