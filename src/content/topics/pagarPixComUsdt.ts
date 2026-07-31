import { TopicPage } from '../../types/topic'

export const pagarPixComUsdt: TopicPage = {
  slug: 'pagar-pix-com-usdt',
  title: 'Pagar Pix com USDT: como funciona',
  h1: 'Pague um Pix com saldo em USDT',
  description:
    'Pague qualquer Pix usando saldo em USDT ou USDC, sem converter antes. Veja o passo a passo, as redes aceitas e como fazer isso pela API da Hodle.',
  keywords: [
    'pagar pix com usdt',
    'pagar pix com stablecoin',
    'pagar pix com cripto',
    'pagamento pix com saldo em usdt',
    'converter usdt em pix',
    'pagar pix com dólar digital',
  ],
  primaryKeyword: 'pagar pix com usdt',
  updatedAt: '2026-07-28',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'PAGAMENTOS',
  subhead:
    'A Hodle liquida o Pix a partir do seu saldo em stablecoin. Você mantém dólar digital na carteira, dispara o pagamento e quem recebe cai em reais, como qualquer outro Pix.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/base.png', label: 'Base' },
  ],
  ctaSubhead:
    'Receba em Pix, guarde em dólar, pague em stablecoin.',
  ctaPrimary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br/docs/wallet-payout',
  },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é pagar Pix com USDT',
      body: 'Pagar Pix com USDT é liquidar uma cobrança em reais usando dólar digital como fonte de fundos. Você não precisa vender a stablecoin antes, nem passar o valor por uma conta bancária: o saldo em USDT financia o pagamento e a liquidação em reais acontece no mesmo fluxo. Para quem recebe, nada muda. O Pix entra em reais, com o mesmo comprovante de sempre. A ponte entre a stablecoin e o sistema de pagamentos brasileiro fica do lado da Hodle.',
      bullets: [
        'Você mantém o saldo em dólar digital e paga em reais quando precisa.',
        'Sem etapa manual de venda: a conversão faz parte do pagamento.',
        'Disponível 24/7, sem depender de horário bancário.',
        'Quem recebe não precisa ter carteira nem saber de cripto.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Como funciona, do request à liquidação',
      body: 'São quatro etapas. Na integração por API, as duas do meio são um POST e um GET.',
      bullets: [
        'Saldo na carteira. O usuário tem USDT em Polygon ou Tron, ou USDC em Base, na carteira auto-custodial dele.',
        'Chave do Pix e valor. Você informa o destino e o valor da cobrança em reais.',
        'Disparo do payout. Um POST em /api/wallet/payout debita a stablecoin e inicia a liquidação. O gas da rede é patrocinado pela Hodle.',
        'Confirmação. Um GET no mesmo recurso devolve o estado, e o webhook assinado avisa quando o Pix foi liquidado.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'ativos-e-redes',
      kind: 'ASSETS',
      heading: 'Ativos e redes aceitos no pagamento',
      body: 'O saldo que financia o Pix pode estar em USDT ou USDC, em mais de uma rede. USDT é aceito em Polygon e Tron; USDC em Base. As duas stablecoins também circulam em Arbitrum e Spark dentro da plataforma.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
        { src: '/arbitrum.svg', label: 'Arbitrum' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'pela-api',
      kind: 'CODE',
      heading: 'Pelo painel ou por um POST',
      body: 'No painel, o pagamento é um formulário. Na integração, é uma chamada. O mesmo endpoint que a Hodle usa internamente é o que você consome, autenticado por API key com escopo por plataforma. O gas das redes EVM é patrocinado: você não precisa manter saldo nativo de Polygon ou Base para conseguir pagar.',
      bullets: [
        'POST /api/wallet/payout para disparar o pagamento.',
        'GET no mesmo recurso para acompanhar o estado.',
        'Webhook assinado com HMAC quando o estado muda.',
        'API key com escopo por plataforma, documentada em docs.hodle.com.br.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'quem-recebe',
      kind: 'PROSE',
      heading: 'Quem recebe continua recebendo em reais',
      body: 'A pessoa ou empresa do outro lado recebe um Pix comum, em reais, na conta que ela já usa. Não há carteira para instalar, endereço para copiar nem rede para escolher. É isso que torna o pagamento com stablecoin utilizável para fornecedor, prestador de serviço e cobrança do dia a dia. As chaves privadas da carteira de origem seguem sob controle exclusivo do usuário. A Hodle não custodia os ativos que financiam o pagamento.',
      bullets: [],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre pagar Pix com saldo em stablecoin.',
  faq: [
    {
      question: 'Como pagar um Pix com USDT?',
      answer:
        'Você mantém saldo em USDT na carteira, informa a chave Pix e o valor, e dispara o pagamento pelo painel ou por um POST em /api/wallet/payout. A stablecoin é debitada e o Pix é liquidado em reais para quem recebe.',
    },
    {
      question: 'Dá para pagar Pix com cripto sem converter antes?',
      answer:
        'Sim. Não existe etapa manual de venda: a conversão acontece dentro do próprio fluxo de pagamento. Você sai de um saldo em dólar digital direto para um Pix pago em reais.',
    },
    {
      question: 'Quem recebe sabe que o pagamento veio de cripto?',
      answer:
        'Não. Do lado de quem recebe é um Pix comum, em reais, com o comprovante de sempre. Não é preciso ter carteira nem conhecer stablecoins.',
    },
    {
      question: 'Preciso pagar taxa de rede (gas) para pagar um Pix?',
      answer:
        'Não nas redes EVM. O gas de Polygon e Base é patrocinado pela Hodle, então você não precisa manter saldo em moeda nativa da rede só para conseguir pagar.',
    },
    {
      question: 'Quais stablecoins e redes posso usar como saldo?',
      answer:
        'USDT em Polygon e Tron, e USDC em Base. As duas também circulam em Arbitrum e Spark dentro da plataforma.',
    },
  ],
  related: [
    { label: 'API de Pix com stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Carteiras auto-custodiais', href: '/wallet-auto-custodial' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Perguntas frequentes', href: '/faq' },
  ],
  ogImage: '/og-image-v2.png',
}
