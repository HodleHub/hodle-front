import { TopicPage } from '../../types/topic'

export const comoAceitarCriptomoedas: TopicPage = {
  slug: 'como-aceitar-criptomoedas',
  title: 'Como aceitar criptomoedas no seu negócio',
  h1: 'Como aceitar criptomoedas, na prática',
  description:
    'As três formas reais de aceitar criptomoedas no seu negócio, os riscos de cada uma e como receber pagamento em cripto liquidado direto em Pix, sem guardar saldo volátil.',
  keywords: [
    'como aceitar criptomoedas',
    'como aceitar pagamento em criptomoedas',
    'aceitar pagamento em cripto',
    'receber pagamento em cripto',
  ],
  primaryKeyword: 'como aceitar criptomoedas',
  updatedAt: '2026-09-05T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'TUTORIAL',
  subhead:
    'Aceitar criptomoedas não é só divulgar um endereço de carteira. Existem três caminhos reais, com riscos diferentes de custódia, volatilidade e conciliação — este guia explica os três e onde a Hodle entra.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/btc.svg', label: 'Bitcoin' },
  ],
  ctaSubhead:
    'Fale com o time da Hodle para aceitar cripto liquidando em Pix.',
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
      heading: 'As três formas de aceitar criptomoedas',
      body: 'A primeira é divulgar um endereço de carteira próprio e conferir manualmente cada pagamento. Funciona para volume baixo, mas você assume a custódia do ativo, a exposição à variação de preço entre o recebimento e a venda, e a conciliação manual contra pedidos. A segunda é usar uma exchange como intermediária: o cliente paga, você recebe na exchange e vende depois, o que reduz a operação mas não remove a janela de variação de preço nem o tempo de saque até a conta bancária. A terceira é usar uma infraestrutura de pagamento que recebe a cripto e já entrega o valor liquidado em reais, via Pix, sem que o seu negócio guarde saldo em ativo volátil em nenhum momento. É esta última que a Hodle resolve.',
      bullets: [
        'Endereço próprio: você custodia o ativo e assume a variação de preço até vender.',
        'Exchange manual: reduz a custódia, mas ainda expõe à variação de preço e ao tempo de saque.',
        'Infraestrutura com liquidação em Pix: o valor chega em reais, sem passar por saldo em cripto do seu negócio.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'passo-a-passo',
      kind: 'STEPS',
      heading: 'Passo a passo para aceitar cripto liquidando em Pix',
      body: 'É o mesmo tipo de integração de um checkout, trocando o meio de pagamento.',
      bullets: [
        'Gere a cobrança com o valor em reais, pelo painel ou pela API. A cotação em cripto fica travada por um tempo definido.',
        'O cliente paga em USDT, USDC ou Bitcoin, escaneando um QR code ou copiando um endereço.',
        'A cripto recebida é convertida e o valor é liquidado em Pix, na conta do seu negócio.',
        'Um webhook assinado avisa o pagamento, para você liberar o pedido sem consultar o estado em loop.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'comparativo',
      kind: 'COMPARISON',
      heading: 'Endereço próprio, exchange manual ou infraestrutura com Pix',
      body: 'As três formas resolvem "receber cripto". A diferença aparece na custódia, na exposição a preço e no tempo até o dinheiro virar reais na conta.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Forma', 'Custódia do ativo', 'Exposição a preço', 'Chega em reais'],
        rows: [
          ['Endereço próprio', 'Do seu negócio', 'Até você vender', 'Manual, quando você decidir vender'],
          ['Exchange manual', 'Da exchange, até o saque', 'Até você vender na exchange', 'Depois do saque bancário da exchange'],
          ['Infraestrutura com Pix (Hodle)', 'Não fica com o seu negócio', 'Cotação travada na cobrança', 'Direto na liquidação, via Pix'],
        ],
      },
      code: null,
      image: null,
    },
    {
      id: 'ativos',
      kind: 'ASSETS',
      heading: 'Ativos aceitos na cobrança',
      body: 'A cobrança aceita USDT e USDC em mais de uma rede, e Bitcoin on-chain ou por Lightning.',
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
      heading: 'Aceitar cripto pela API',
      body: 'A mesma cobrança do painel existe como chamada, para quem quer o checkout dentro do próprio produto.',
      bullets: [
        'POST /api/deposit/asset — cria a cobrança e devolve o endereço ou QR code que recebe o pagamento.',
        'POST /api/quote — cotação indicativa antes de fechar o valor da cobrança.',
        'GET /api/account/statement — extrato paginado das cobranças recebidas, por ativo.',
        'Webhook assinado com HMAC em cada transição de estado.',
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
        'Você pode divulgar um endereço de carteira e vender manualmente, usar uma exchange como intermediária, ou usar uma infraestrutura de pagamento que já liquida o valor em Pix. As três funcionam; a diferença é quem fica com a custódia e a variação de preço até o dinheiro virar reais.',
    },
    {
      question: 'Preciso ter carteira própria para aceitar pagamento em cripto?',
      answer:
        'Não, se você usar uma infraestrutura de pagamento como a da Hodle: o cliente paga em cripto e o valor chega liquidado em Pix na sua conta, sem que o seu negócio precise guardar ou gerenciar carteira.',
    },
    {
      question: 'Aceitar cripto expõe meu negócio à variação de preço?',
      answer:
        'Só se você guardar o ativo recebido antes de vender. Com a cobrança da Hodle, a cotação fica travada no momento da cobrança e a liquidação chega em reais, então a exposição à variação de preço não fica com o seu negócio.',
    },
    {
      question: 'Quais criptomoedas dá para aceitar?',
      answer:
        'USDT e USDC em mais de uma rede, e Bitcoin on-chain ou por Lightning.',
    },
    {
      question: 'Precisa emitir nota fiscal recebendo em cripto?',
      answer:
        'Sim, a nota segue as regras da sua atividade e é emitida em reais pelo valor da venda. Como o enquadramento depende do seu caso, confirme com o seu contador.',
    },
  ],
  related: [
    { label: 'Gateway de pagamento cripto', href: '/gateway-de-pagamento-cripto' },
    { label: 'Crypto as a Service', href: '/crypto-as-a-service' },
    { label: 'Receber Pix em stablecoin', href: '/receber-pix-em-stablecoin' },
    { label: 'Perguntas frequentes', href: '/faq' },
  ],
  ogImage: '/og-image-v2.png',
}
