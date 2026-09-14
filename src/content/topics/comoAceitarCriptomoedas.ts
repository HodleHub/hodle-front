import { TopicPage } from '../../types/topic'

export const comoAceitarCriptomoedas: TopicPage = {
  slug: 'como-aceitar-criptomoedas',
  title: 'Como aceitar criptomoedas no seu negócio',
  h1: 'Como aceitar criptomoedas, na prática',
  description:
    'Entenda como aceitar criptomoedas no seu negócio, conferir carteira e rede e distinguir pagamento em cripto de checkout Pix com recebimento em stablecoin.',
  keywords: [
    'como aceitar criptomoedas',
    'como aceitar pagamento em criptomoedas',
    'aceitar pagamento em cripto',
    'receber pagamento em cripto',
  ],
  primaryKeyword: 'como aceitar criptomoedas',
  updatedAt: '2026-09-14T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'TUTORIAL',
  subhead:
    'Para aceitar criptomoedas, defina o ativo, a rede e a carteira que vai receber, além de como confirmar cada pedido. Se o cliente prefere pagar em reais, existe outro caminho: cobrar por Pix e receber a venda em stablecoin com o checkout da Hodle.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/btc.svg', label: 'Bitcoin' },
  ],
  ctaSubhead:
    'Fale com o time para escolher entre receber vendas via Pix em stablecoin e pagar Pix a partir de saldo em cripto.',
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
      id: 'tres-formas',
      kind: 'PROSE',
      heading: 'Receber cripto diretamente ou usar uma plataforma',
      body: 'No recebimento direto, seu negócio informa a carteira, o ativo e a rede e confere o pagamento contra o pedido. Uma plataforma pode automatizar a cobrança e a conciliação, mas você precisa verificar quais ativos ela aceita, quem controla as chaves e como o dinheiro chega ao destino.\n\nO checkout da Hodle atende a outro ponto de partida: o cliente paga em reais por Pix e o vendedor recebe no ativo habilitado em sua conta. Receber cripto do cliente e converter o saldo para pagar um Pix são operações distintas desse checkout.',
      bullets: [
        'Recebimento direto: seu negócio confere a transferência na rede escolhida.',
        'Plataforma de pagamento: confira ativos, confirmação, custódia e forma de liquidação.',
        'Checkout Hodle: cliente paga Pix em reais; vendedor recebe o ativo configurado.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'passo-a-passo',
      kind: 'STEPS',
      heading: 'O que definir antes de aceitar um pagamento em cripto',
      body: 'Registre as condições de pagamento junto do pedido para conseguir conferir o recebimento.',
      bullets: [
        'Escolha o ativo e a rede que a carteira do negócio aceita e informe ambos ao cliente.',
        'Defina o valor, a validade da cotação e como tratar um pagamento com valor diferente.',
        'Confira o recebimento e as confirmações necessárias na rede ou na plataforma, antes de liberar o pedido.',
        'Registre a operação e concilie o valor recebido com a venda e suas obrigações contábeis.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'comparativo',
      kind: 'COMPARISON',
      heading: 'Pix para cripto e cripto para Pix: qual fluxo usar',
      body: 'A primeira decisão é o que o pagador já tem e o que o destinatário quer receber. Os caminhos abaixo não são intercambiáveis.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Necessidade', 'Origem', 'Destino', 'Caminho'],
        rows: [
          ['Aceitar cripto diretamente', 'Cripto do cliente', 'Carteira do negócio', 'Transferência no ativo e na rede combinados'],
          ['Receber vendas em stablecoin', 'Pix em reais do cliente', 'Ativo configurado pelo vendedor', 'Checkout e link de pagamento da Hodle'],
          ['Pagar uma chave Pix com cripto', 'Saldo em USDT ou USDC', 'Reais para o destinatário', 'Payout, conforme ativos e redes habilitados'],
        ],
      },
      code: null,
      image: null,
    },
    {
      id: 'ativos',
      kind: 'ASSETS',
      heading: 'Ativo e rede precisam coincidir nas duas pontas',
      body: 'USDT, USDC e Bitcoin são ativos diferentes. Mesmo quando duas carteiras exibem USDT, elas podem estar em redes distintas. No checkout da Hodle, o vendedor configura um par de ativo e rede habilitado; o cliente paga Pix, e não envia cripto para o QR Code.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'api',
      kind: 'CODE',
      heading: 'Cada direção tem sua integração',
      body: 'Para vender com Pix e receber stablecoin, consulte a API de checkout. Para converter reais em cripto, use depósito; para enviar reais a partir de saldo em stablecoin, consulte payout. Criar um depósito não cria uma cobrança para o cliente pagar em USDT.',
      bullets: [
        'Checkout: cadastro de produto e link de pagamento Pix.',
        'Depósito: entrada em reais por Pix e entrega de cripto.',
        'Payout: saldo em stablecoin usado para enviar reais por Pix.',
        'Conciliação: acompanhe o status da operação e os eventos documentados.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'imposto-e-compliance',
      kind: 'PROSE',
      heading: 'Nota fiscal e imposto continuam com o seu negócio',
      body: 'Aceitar cripto não muda a obrigação fiscal: a nota é emitida em reais, pelo valor da venda, e a apuração segue as regras da sua atividade. Esta página não substitui orientação contábil. A Hodle é uma empresa de software e API, não um banco nem uma instituição financeira, e não custodia fundos ou ativos de clientes; os fluxos regulados de câmbio e liquidação em real são conduzidos por parceiros licenciados e/ou regulados.',
      bullets: [],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre aceitar pagamento em criptomoedas.',
  faq: [
    {
      question: 'Como aceitar criptomoedas no meu negócio?',
      answer:
        'Defina o ativo, a rede, a carteira de destino e como confirmar o pagamento contra o pedido. Você pode receber diretamente ou contratar uma plataforma compatível. Se quiser que o cliente pague Pix e o negócio receba stablecoin, consulte o checkout da Hodle.',
    },
    {
      question: 'Preciso ter carteira própria para aceitar pagamento em cripto?',
      answer:
        'Para receber diretamente, é necessário um destino compatível com o ativo e a rede. Ao usar uma plataforma, confira quem controla a carteira. No checkout Pix da Hodle, a venda é liquidada no ativo e no destino configurados pelo vendedor.',
    },
    {
      question: 'Aceitar cripto expõe meu negócio à variação de preço?',
      answer:
        'O preço do ativo e sua cotação em reais podem variar. Confira as regras de cotação, validade e liquidação do serviço escolhido. Stablecoins buscam acompanhar uma referência, mas continuam sujeitas a riscos e não garantem o valor em reais.',
    },
    {
      question: 'Quais criptomoedas dá para aceitar?',
      answer:
        'Depende da carteira e da plataforma escolhidas. No checkout da Hodle, o cliente paga Pix; USDT e USDC são opções de recebimento quando habilitadas para o vendedor. Isso não equivale a aceitar um pagamento on-chain do cliente.',
    },
    {
      question: 'Precisa emitir nota fiscal recebendo em cripto?',
      answer:
        'Sim, a nota segue as regras da sua atividade e é emitida em reais pelo valor da venda. Como o enquadramento depende do seu caso, confirme com o seu contador.',
    },
  ],
  related: [
    { label: 'Gateway Pix para USDT', href: '/gateway-de-pagamento-cripto' },
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'Comprar USDT com Pix', href: '/comprar-usdt-com-pix' },
    { label: 'Crypto as a Service', href: '/crypto-as-a-service' },
    { label: 'Receber Pix em stablecoin', href: '/receber-pix-em-stablecoin' },
    { label: 'Perguntas frequentes', href: '/faq' },
  ],
  ogImage: '/og-image-v2.png',
}
