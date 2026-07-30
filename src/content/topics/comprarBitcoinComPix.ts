import { TopicPage } from '../../types/topic'

export const comprarBitcoinComPix: TopicPage = {
  slug: 'comprar-bitcoin-com-pix',
  primaryKeyword: 'comprar bitcoin com pix por api',
  title: 'Comprar Bitcoin com Pix por API',
  h1: 'Reais entram por Pix, sai bitcoin',
  description:
    'Converta reais em bitcoin por API e entregue em Lightning, on-chain ou Liquid, no endereço que você indicar. Disponível 24 horas por dia.',
  keywords: [
    'comprar bitcoin com pix por api',
    'comprar bitcoin com pix',
    'api para comprar bitcoin',
    'comprar bitcoin lightning',
    'comprar bitcoin liquid',
    'bitcoin via pix para empresas',
  ],
  updatedAt: '2026-07-29',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'BITCOIN',
  subhead:
    'Uma chamada converte reais em bitcoin e entrega na rede que você escolher. Lightning para pagamento imediato, on-chain para liquidação, Liquid para transferência de ativo. Sem saldo interno no meio.',
  faqSubhead:
    'Tire suas dúvidas sobre comprar bitcoin com Pix por API.',
  ctaSubhead:
    'Comece pela documentação ou fale com o time da Hodle.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/btc.svg', label: 'Bitcoin' },
    { src: '/ln.svg', label: 'Lightning' },
    { src: '/liquid.svg', label: 'Liquid' },
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
      heading: 'Comprar bitcoin com Pix, por API',
      body: 'É converter reais em bitcoin numa chamada e entregar o ativo direto num endereço. O Pix entra, a conversão acontece, e o bitcoin sai na rede que você escolheu para o destino que você indicou.\n\nA diferença em relação a comprar numa exchange é o destino. Aqui não existe saldo interno intermediário esperando saque: a entrega é o próprio passo final da operação.',
      bullets: [
        'Entrada em reais por Pix, disponível 24 horas por dia.',
        'Entrega em Lightning, on-chain ou Liquid.',
        'Destino é um endereço que você indica, não um saldo interno.',
        'Sem depender de horário bancário.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Do Pix ao bitcoin entregue',
      body: 'Três etapas, e a única decisão sua é a rede de entrega.',
      bullets: [
        'Escolher a rede. Lightning para pagamento imediato, on-chain para liquidação em bloco, Liquid para transferência de ativo.',
        'Disparar a operação. O deposit-asset recebe o valor em reais e o endereço de destino.',
        'Entrega e confirmação. O bitcoin chega no endereço indicado, e o webhook assinado com HMAC avisa a mudança de estado.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'tres-trilhos',
      kind: 'ASSETS',
      heading: 'Três trilhos, uma integração',
      body: 'Cada rede resolve um problema diferente, e a escolha é por operação, não por contrato. Lightning entrega em pagamento instantâneo e de baixo custo. On-chain entrega liquidação na rede base do Bitcoin. Liquid entrega transferência de ativo em sidechain.',
      bullets: [],
      icons: [
        { src: '/btc.svg', label: 'Bitcoin on-chain' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/liquid.svg', label: 'Liquid' },
        { src: '/pix.svg', label: 'Pix' },
      ],
      comparison: null,
      code: null,
    },
    {
      id: 'pela-api',
      kind: 'CODE',
      heading: 'A chamada de entrada',
      body: 'O mesmo endpoint que converte reais em bitcoin converte em USDT, USDC e USDCE. A rede e o ativo de destino são parâmetro, não integração separada.',
      bullets: [
        'deposit-asset — converte reais e entrega no endereço indicado.',
        'Ativos de destino: Lightning, USDT, USDC e USDCE.',
        'Webhook assinado com HMAC em cada mudança de estado.',
        'Guia em docs.hodle.com.br/docs/deposit-asset.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'kyc',
      kind: 'PROSE',
      heading: 'KYC faz parte do trilho',
      body: 'A verificação de identidade do usuário final é uma chamada da própria API, não um processo paralelo. Submeter e consultar o estado do KYC são operações documentadas, e a entrada e saída de valores dependem dele.\n\nIsso é escolha de produto. Um trilho que converte reais em ativo digital carrega obrigação de identificação, e resolver isso dentro da API é mais simples do que costurar um fornecedor separado.',
      bullets: [
        'Submissão e consulta de KYC pela mesma API.',
        'Comprovante de endereço e de capacidade financeira documentados.',
        'Entrada e saída de valores dependem do KYC do usuário.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
  ],
  faq: [
    {
      question: 'Como comprar Bitcoin com Pix por API?',
      answer:
        'Você dispara a operação de deposit-asset informando o valor em reais e o endereço de destino, e escolhe se a entrega é em Lightning, on-chain ou Liquid. O bitcoin chega no endereço indicado e o webhook assinado avisa a conclusão.',
    },
    {
      question: 'Em qual rede o Bitcoin é entregue?',
      answer:
        'Na que você escolher: Lightning, on-chain ou Liquid. A rede é parâmetro da operação, então dá para variar por caso de uso sem mudar a integração.',
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
    { label: 'Lightning para Pix', href: '/lightning-para-pix' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Glossário', href: '/glossario' },
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
  ],
}