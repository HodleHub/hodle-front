import { TopicPage } from '../../types/topic'

export const comprarBitcoinComPix: TopicPage = {
  slug: 'comprar-bitcoin-com-pix',
  primaryKeyword: 'comprar bitcoin com pix',
  title: 'Comprar Bitcoin com Pix: passo a passo e API',
  h1: 'Comprar Bitcoin com Pix, na sua carteira',
  description:
    'Saiba como comprar Bitcoin com Pix na Hodle, conferir cotação e taxas e receber na carteira. Veja o passo a passo pelo painel e a integração por API.',
  keywords: [
    'comprar bitcoin',
    'comprar bitcoin com pix',
    'como comprar bitcoin',
    'compra de bitcoin',
    'pix para bitcoin',
    'api para comprar bitcoin',
    'comprar bitcoin lightning',
  ],
  updatedAt: '2026-09-14T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'BITCOIN',
  subhead:
    'Comprar Bitcoin com Pix é pagar em reais para receber BTC na carteira escolhida. Você pode comprar uma fração de bitcoin: confira o valor, as taxas e as opções disponíveis para sua conta antes de gerar o Pix.',
  faqSubhead:
    'Como começar, conferir o valor em reais e escolher o destino da compra de Bitcoin.',
  ctaSubhead:
    'Acesse o painel para verificar sua conta e consultar as opções de compra de Bitcoin. A API atende quem quer integrar o fluxo ao próprio produto.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/btc.svg', label: 'Bitcoin' },
    { src: '/ln.svg', label: 'Lightning' },
  ],
  ctaPrimary: {
    label: 'Acessar o painel',
    href: 'https://app.hodle.com.br',
  },
  ctaSecondary: {
    label: 'Integrar por API',
    href: 'https://docs.hodle.com.br/docs/deposit-asset',
  },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'Como comprar Bitcoin com reais',
      body: 'Na compra de Bitcoin com Pix, você escolhe quanto quer pagar em reais e recebe a quantidade de BTC correspondente à cotação e às taxas da operação. Não precisa comprar um bitcoin inteiro.\n\nNa Hodle, a compra pode ser feita pelo painel ou integrada por API. A conta precisa estar aprovada e ter o ativo habilitado. As opções de destino devem ser conferidas na compra, antes de enviar dinheiro.',
      bullets: [
        'Escolha o valor em reais e confira quanto BTC vai receber.',
        'Use uma carteira compatível com a opção de entrega selecionada.',
        'Confira as condições e a validade da cobrança antes de pagar.',
        'Acompanhe o status até a entrega do ativo.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Passo a passo da compra de Bitcoin com Pix',
      body: 'Acesse a compra de ativos no painel da Hodle com a conta verificada.',
      bullets: [
        'Selecione Bitcoin ou a opção Lightning disponível para sua conta e informe um destino compatível.',
        'Digite o valor em reais e confira cotação, taxa e quantidade a receber.',
        'Gere o QR Code e pague o Pix pelo banco, dentro da validade e com a titularidade exigida na cobrança.',
        'Acompanhe a confirmação e a entrega na carteira. Um Pix pago ainda pode estar aguardando o processamento do envio.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'carteira-e-rede',
      kind: 'ASSETS',
      heading: 'Carteira Bitcoin e Lightning: confira o destino',
      body: 'Um endereço de Bitcoin e uma invoice Lightning são formatos diferentes e não podem ser usados como se fossem iguais. Se escolher Lightning, use uma invoice ou um endereço Lightning aceito pelo fluxo. Para outras opções de BTC, confira a rede e o formato exigidos na compra.\n\nA disponibilidade varia conforme a conta e a operação. Nunca envie para uma rede apenas porque a carteira também exibe saldo em bitcoin.',
      bullets: [],
      icons: [
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/pix.svg', label: 'Pix' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'pela-api',
      kind: 'CODE',
      heading: 'Comprar Bitcoin com Pix por API',
      body: 'O endpoint de depósito cria a compra a partir de um valor em reais. Para Lightning, informe o destino no formato aceito pela documentação. A geração da cobrança, a confirmação do Pix e a entrega são etapas que sua integração deve acompanhar.',
      bullets: [
        'Consulte os ativos e destinos aceitos por POST /api/deposit/asset.',
        'Concilie a operação pelo identificador do depósito e pelos webhooks.',
        'A permissão de uma rede em outro endpoint não libera a compra nessa rede.',
        'Teste a integração no sandbox antes de operar com valores reais.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'kyc',
      kind: 'PROSE',
      heading: 'Verificação da conta, taxas e limites',
      body: 'A compra depende da verificação de identidade e da aprovação da conta. A tela informa as condições aplicáveis à operação; na integração, consulte também os limites e o estado do KYC.\n\nA cotação do Bitcoin muda. Confira o total em reais e a quantidade a receber antes de pagar, sem usar uma cotação antiga como promessa de entrega.',
      bullets: [
        'Conta aprovada e ativo habilitado antes da compra.',
        'Taxas e limites devem ser conferidos para cada operação.',
        'Compra de Bitcoin não implica rendimento garantido.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faq: [
    {
      question: 'Como faço para comprar Bitcoin com Pix?',
      answer:
        'Acesse o painel da Hodle com sua conta aprovada, escolha a opção de Bitcoin disponível, informe valor e destino, confira as taxas e gere o Pix. Após pagar pelo banco, acompanhe o status da compra e a entrega. Para automatizar, use a API de depósito.',
    },
    {
      question: 'Preciso comprar um Bitcoin inteiro?',
      answer:
        'Não. Bitcoin é divisível e você pode comprar uma fração. O valor mínimo e os limites dependem da operação disponível na sua conta; confira essas condições na tela de compra.',
    },
    {
      question: 'Quanto dá R$ 100 em Bitcoin?',
      answer:
        'Depende da cotação e das taxas no momento da compra. Informe R$ 100 na simulação, se estiver dentro dos limites da sua conta, e confira a quantidade de BTC a receber. Esta página não exibe preço em tempo real.',
    },
    {
      question: 'Em qual rede o Bitcoin é entregue?',
      answer:
        'Use uma das opções disponíveis para sua conta e confira o formato de destino exigido. Lightning usa invoice ou endereço Lightning; outras opções de BTC usam o formato indicado no fluxo. A documentação do endpoint informa o que sua integração pode solicitar.',
    },
    {
      question: 'Dá para entregar no endereço do meu usuário final?',
      answer:
        'A integração permite informar o destino nos fluxos documentados, respeitando as permissões da conta e a identificação do pagador. Confira o ativo, a rede e o formato do endereço antes de criar a cobrança.',
    },
    {
      question: 'Qual a taxa para comprar Bitcoin com Pix?',
      answer:
        'Consulte a página de preços e confira a taxa e a quantidade a receber na operação. O custo e os limites podem variar conforme a configuração da conta e a opção de entrega.',
    },
    {
      question: 'Precisa de KYC?',
      answer:
        'Sim. A verificação de identidade do usuário final é exigida para operações de entrada e saída, e é feita pela própria API, com submissão e consulta de estado documentadas.',
    },
  ],
  related: [
    { label: 'Comprar USDT com Pix', href: '/comprar-usdt-com-pix' },
    { label: 'Lightning para Pix', href: '/lightning-para-pix' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Glossário', href: '/glossario' },
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Documentação de compra por API', href: 'https://docs.hodle.com.br/docs/deposit-asset' },
  ],
}
