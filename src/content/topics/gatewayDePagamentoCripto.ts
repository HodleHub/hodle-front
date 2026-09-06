import { TopicPage } from '../../types/topic'

export const gatewayDePagamentoCripto: TopicPage = {
  slug: 'gateway-de-pagamento-cripto',
  title: 'Gateway de pagamento cripto com checkout e link de pagamento',
  h1: 'Cobre em Pix, receba em stablecoin',
  description:
    'Crie o produto, copie o link de pagamento e receba. Seu cliente paga um Pix comum em reais e a venda cai em Real digital ou Dólar digital na sua carteira.',
  keywords: [
    'gateway de pagamento cripto',
    'gateway pagamento cripto',
    'gateway de pagamento criptomoeda',
    'gateway pix cripto',
    'link de pagamento cripto',
    'checkout cripto',
    'receber em stablecoin',
    'dolarizar faturamento',
  ],
  primaryKeyword: 'gateway de pagamento cripto',
  updatedAt: '2026-09-05T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'CHECKOUT E LINK DE PAGAMENTO',
  subhead:
    'Crie o produto, copie o link de pagamento e venda. Seu cliente paga um Pix comum, em reais, e você escolhe em que ativo a venda cai: Real digital ou Dólar digital, direto na sua carteira.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/brla.png', label: 'BRLA' },
    { src: '/brs.svg', label: 'BRS' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/qr-code.svg', label: 'Checkout' },
  ],
  ctaSubhead:
    'Fale com o time da Hodle sobre o checkout e o link de pagamento para o seu produto.',
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
      body: 'Um gateway de pagamento cripto é a camada que recebe o dinheiro de uma venda e entrega o valor a quem vendeu. O que separa um do outro é o que acontece nas duas pontas: em que o cliente paga, e em que o vendedor recebe. O gateway da Hodle inverte o arranjo mais comum do mercado. Em vez de exigir que o seu cliente tenha carteira e pague em cripto, ele paga um Pix em reais, do jeito que já paga tudo no Brasil. A stablecoin fica do seu lado: é você que escolhe se a venda cai em Real digital ou em Dólar digital.',
      bullets: [
        'Quem paga não precisa de carteira, de conta em corretora nem de saber o que é stablecoin.',
        'Quem vende escolhe o ativo de liquidação e recebe direto na carteira auto-custodial.',
        'A conversão acontece dentro do pagamento, sem etapa manual de compra ou venda.',
        'Não há maquininha, adquirente nem prazo de repasse no meio do caminho.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'checkout-e-link',
      kind: 'STEPS',
      heading: 'Do produto ao link de pagamento',
      body: 'O checkout é hospedado pela Hodle. Você não constrói página de pagamento, não lida com QR code e não escreve a tela de recibo.',
      bullets: [
        'Cadastre o produto. Imagem, descrição, preço e estoque — ilimitado ou contado. Você vê a prévia do que o cliente vai ver enquanto preenche.',
        'Escolha o que pedir do pagador. E-mail e CPF ou CNPJ são validados antes de o QR ser gerado, com dígito verificador conferido no cliente e no servidor.',
        'Copie o link. Cada produto tem um link de pagamento próprio, que você manda por WhatsApp, coloca na bio ou embute no seu site.',
        'O cliente paga. A página mostra o Pix com contagem regressiva e copia-e-cola, e atualiza sozinha quando o pagamento confirma.',
        'Você recebe em stablecoin. A venda cai no ativo configurado, e o estoque baixa uma vez só, quando a cobrança é confirmada.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'dolarizacao',
      kind: 'COMPARISON',
      heading: 'Em que moeda o seu faturamento fica',
      body: 'A escolha do ativo de liquidação é uma decisão de caixa, não de tecnologia. Vender em reais e receber em dólar digital protege a margem de quem tem custo em dólar ou simplesmente não quer carregar o real. Vender em reais e receber em real digital mantém o caixa na mesma moeda, mas on-chain e disponível 24 horas por dia.',
      bullets: [],
      icons: [],
      comparison: {
        headers: [
          'Como você recebe',
          'O que cai na carteira',
          'O que acontece com a sua margem',
        ],
        rows: [
          [
            'Gateway tradicional',
            'Reais na conta bancária, no prazo do adquirente',
            'Acompanha o real, e o caixa espera o repasse',
          ],
          [
            'Hodle — Real digital',
            'BRLA ou BRS na sua carteira, quando o Pix confirma',
            'Acompanha o real, disponível 24 horas por dia',
          ],
          [
            'Hodle — Dólar digital',
            'USDT ou USDC na sua carteira, quando o Pix confirma',
            'Acompanha o dólar, sem passar por operação de câmbio manual',
          ],
        ],
      },
      code: null,
      image: null,
    },
    {
      id: 'ativos-e-redes',
      kind: 'ASSETS',
      heading: 'Ativos e redes de liquidação',
      body: 'A venda liquida em um par explícito de ativo e rede, escolhido nas configurações do checkout. A lista que aparece para você é a dos trilhos efetivamente habilitados na sua conta: oferecer um ativo que a conta não consegue liquidar publicaria um link que falha na hora do QR.',
      bullets: [
        'Real digital: BRLA em Polygon e Base, BRS em Solana.',
        'Dólar digital: USDT em Polygon, Arbitrum e Solana; USDC em Polygon, Base, Gnosis e Solana.',
        'A preferência vale para os links novos e é propagada para os produtos que já existem.',
      ],
      icons: [
        { src: '/brla.png', label: 'BRLA' },
        { src: '/brs.svg', label: 'BRS' },
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
        { src: '/solana.svg', label: 'Solana' },
        { src: '/arbitrum.svg', label: 'Arbitrum' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'api',
      kind: 'CODE',
      heading: 'O mesmo checkout pela API',
      body: 'Tudo que o painel faz existe como chamada REST, autenticada por API key com escopo por plataforma. As rotas do pagador são públicas e limitadas por IP, porque quem paga não tem credencial.',
      bullets: [
        'POST /api/checkout/products — cria o produto que vira o link de pagamento.',
        'GET /api/checkout/products — lista os produtos com preço, estoque e status.',
        'PATCH /api/checkout/products/:productId — muda preço, estoque, ou pausa o link.',
        'PUT /api/checkout/settings — define em que ativo e rede as vendas liquidam.',
        'GET /api/public/checkout/products/:slug — o que a página de pagamento lê, sem autenticação.',
        'POST /api/public/checkout/orders — cria o pedido e devolve o Pix a ser pago.',
        'GET /api/public/checkout/orders/:trackId — o estado do pedido, para acompanhar até a confirmação.',
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
      body: 'A venda liquida em uma carteira auto-custodial sua: as chaves ficam sob o seu controle, e a Hodle não guarda o seu saldo nem o do seu cliente. O pedido público não aceita preço, ativo, rede, vendedor ou endereço de destino vindos de fora — esses campos saem sempre da linha do produto, para que ninguém consiga redirecionar dinheiro por um link. A Hodle é uma empresa de software e API: não é banco, não é instituição financeira, não emite moeda eletrônica e não emite stablecoin. Os fluxos regulados de câmbio e liquidação em real são conduzidos por parceiros licenciados e/ou regulados.',
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
        'É a camada que recebe o dinheiro de uma venda e entrega o valor a quem vendeu, usando cripto em alguma das pontas. No da Hodle, a cripto está do lado de quem recebe: o cliente paga um Pix em reais e a venda liquida em stablecoin na sua carteira.',
    },
    {
      question: 'Meu cliente precisa ter carteira ou saber usar cripto?',
      answer:
        'Não. Ele abre o link, informa e-mail e CPF ou CNPJ, e paga um Pix comum com QR code ou copia-e-cola. Do lado dele é um checkout normal, em reais.',
    },
    {
      question: 'Em que moeda eu recebo a venda?',
      answer:
        'Você escolhe nas configurações do checkout: Real digital (BRLA ou BRS) ou Dólar digital (USDT ou USDC), cada um em uma rede específica. A escolha vale para os links novos e é aplicada aos produtos que já existem.',
    },
    {
      question: 'Dá para dolarizar o faturamento com o checkout?',
      answer:
        'Sim. Você anuncia e vende em reais, o cliente paga em reais, e a liquidação cai em dólar digital. O faturamento passa a acompanhar o dólar sem que você precise fazer uma operação de câmbio separada a cada venda.',
    },
    {
      question: 'Preciso construir a página de pagamento?',
      answer:
        'Não. O checkout é hospedado: cada produto ganha um link de pagamento pronto, com resumo do pedido, formulário, Pix com contagem regressiva e recibo. Você só cria o produto e copia o link.',
    },
    {
      question: 'Dá para usar sem integrar nada?',
      answer:
        'Dá. O fluxo inteiro funciona pelo painel, sem escrever uma linha de código. Quando quiser automatizar, os mesmos recursos existem em REST, com rotas autenticadas para quem vende e rotas públicas para quem paga.',
    },
    {
      question: 'O checkout controla estoque?',
      answer:
        'Sim. O produto pode ter estoque ilimitado ou contado, e a baixa acontece uma vez só, quando a cobrança é confirmada. Produto pausado ou esgotado para de aceitar pedidos pelo link.',
    },
  ],
  related: [
    { label: 'Crypto as a Service', href: '/crypto-as-a-service' },
    { label: 'Como aceitar criptomoedas', href: '/como-aceitar-criptomoedas' },
    { label: 'Receber Pix em stablecoin', href: '/receber-pix-em-stablecoin' },
    { label: 'Real onchain', href: '/real-onchain' },
  ],
  ogImage: '/og-image-v2.png',
}
