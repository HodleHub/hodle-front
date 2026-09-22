import { TopicPage } from '../../types/topic'

export const comprarUsdtComPix: TopicPage = {
  slug: 'comprar-usdt-com-pix',
  primaryKeyword: 'comprar usdt com pix',
  title: 'Comprar USDT com Pix: dólar digital na sua carteira',
  h1: 'Comprar USDT com Pix, direto na sua carteira',
  description:
    'Veja como comprar USDT com Pix na Hodle: confira a cotação em reais, as taxas e a rede antes de pagar. Pelo painel ou por API, com entrega na carteira.',
  keywords: [
    'comprar usdt',
    'comprar usdt com pix',
    'comprar stablecoins no brasil',
    'comprar dólar digital',
    'converter reais em usdt',
    'comprar usdt com pix por api',
  ],
  updatedAt: '2026-09-22T00:00:00Z',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'COMPRA DE USDT',
  subhead:
    'Comprar USDT com Pix é trocar reais por uma stablecoin que busca acompanhar o dólar. Na Hodle, você escolhe o ativo, a rede e o destino, confere a cotação e paga o Pix. A entrega acontece após a confirmação e o processamento da compra.',
  faqSubhead:
    'Cotação, taxas, carteira e verificação de conta para comprar USDT.',
  ctaSubhead:
    'Acesse o painel para verificar sua conta e consultar as opções de compra. Para integrar a compra ao seu produto, veja a API.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/arbitrum.svg', label: 'Arbitrum' },
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
      "id": "fluxo-visual",
      "kind": "SCREENSHOT",
      "heading": "Visualize o caminho do Pix até sua carteira",
      "body": "O Flow Builder público da Hodle mostra a origem, o destino e as etapas de integração. A imagem abaixo é uma captura real dessa ferramenta, com dados de exemplo. Consulte os guias de cada endpoint para os requisitos de execução.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": {
        "src": "/screenshots/seo/flow-pix-usdt.jpg",
        "alt": "Visualize o caminho do Pix até sua carteira no Flow Builder público da Hodle",
        "caption": "Flow Builder da documentação Hodle, capturado em 22/09/2026. Visualização de integração; não representa uma transação executada ou um caso de cliente.",
        "width": 1280,
        "height": 720
      },
      "links": [
        {
          "label": "Abrir o Flow Builder interativo",
          "href": "https://docs.hodle.com.br/docs/flow-builder"
        }
      ]
    },
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'Como comprar USDT no Brasil com Pix',
      body: 'Você paga em reais e recebe USDT no destino escolhido para a compra. O Pix é o meio de pagamento; USDT é o ativo comprado. Na Hodle, o painel permite fazer essa operação, e a API permite incorporá-la ao seu aplicativo ou plataforma.\n\nAntes de pagar, confira se a carteira aceita o ativo na mesma rede selecionada. Ter um endereço de USDT não significa que ele aceite depósitos em qualquer rede.',
      bullets: [
        'Conta aprovada e compra habilitada são pré-requisitos.',
        'Valor em reais, taxa e quantidade a receber aparecem na compra.',
        'Confira o ativo, a rede e a carteira de destino antes de gerar o Pix.',
        'Acompanhe a confirmação do pagamento e a entrega do ativo.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Passo a passo para converter Pix em USDT',
      body: 'No painel da Hodle, acesse a compra de ativos após concluir a verificação da conta.',
      bullets: [
        'Selecione USDT e uma rede disponível para a sua conta. Informe a carteira de destino compatível.',
        'Digite o valor em reais e confira a cotação, a taxa e quanto USDT você vai receber.',
        'Gere o QR Code e pague o Pix pelo seu banco, respeitando a validade e a titularidade exigidas na cobrança.',
        'Acompanhe o status até a entrega. O pagamento do Pix e o envio do USDT são etapas distintas da operação.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'stablecoin-e-dolar-digital',
      kind: 'PROSE',
      heading: 'Comprar stablecoins: USDT, USDC e dólar digital',
      body: 'Stablecoin é um criptoativo projetado para acompanhar uma referência de valor. USDT, emitido pela Tether, e USDC, emitido pela Circle, buscam acompanhar o dólar americano e são frequentemente chamados de dólar digital. São ativos diferentes, com emissores e redes próprios.\n\nComprar dólar digital em stablecoin não abre uma conta bancária em dólares. O valor em reais varia com a cotação, e a estabilidade pretendida não elimina os riscos do emissor, da rede ou de perda da paridade.',
      bullets: [
        'USDT e USDC não são o mesmo token.',
        'A carteira de destino precisa aceitar o ativo e a rede selecionados.',
        'A compra não oferece rendimento garantido.',
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
      body: 'A documentação de depósito lista USDT em Polygon e Arbitrum; USDC em Polygon, Base e Gnosis. As opções disponíveis dependem da conta e do fluxo usado. Confira a rede na tela de compra ou na documentação do endpoint antes de informar o endereço. Uma rede aceita para pagar Pix não é necessariamente aceita para comprar USDT.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
        { src: '/arbitrum.svg', label: 'Arbitrum' },
        { src: '/pix.svg', label: 'Pix' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'pela-api',
      kind: 'CODE',
      heading: 'Comprar USDT com Pix por API',
      body: 'Para integrar a compra ao seu produto, use POST /api/deposit/asset. A chamada cria a cobrança em reais; pagar o Pix inicia a entrega do ativo. Consulte a documentação para informar valor, ativo, rede, endereço e identificação da operação.',
      bullets: [
        'Use o mesmo identificador para conciliar a cobrança e sua entrega.',
        'Acompanhe a operação pela consulta de depósito e pelos webhooks.',
        'Por padrão, o CPF/CNPJ pagador deve ser o titular da conta que recebe a operação. Informar taxId não libera outro pagador; receber de terceiros exige habilitação.',
        'No sandbox, teste somente as combinações documentadas: o Pix é simulado e a cobertura não replica todas as redes de produção.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      "id": "taxas-e-cotacao",
      "kind": "PROSE",
      "heading": "Quanto custa comprar USDT com Pix",
      "body": "A tabela de serviço começa em 2% e chega a 0,5% conforme o volume liquidado no mês anterior, somando compra e venda. A taxa por operação é o maior valor entre o percentual da faixa e R$ 0,75. Consulte as faixas e a condição contratada antes de iniciar a compra.",
      "bullets": [
        "Exemplo ilustrativo, não uma cotação: numa compra de R$ 1.000 na faixa de 2%, a taxa de serviço é R$ 20.",
        "Se considerarmos apenas essa taxa, restam R$ 980 para a conversão. A quantidade de USDT depende do preço e da composição final informados na operação; não é possível deduzi-la desta conta.",
        "Para R$ 20 na mesma faixa, o percentual daria R$ 0,40, mas o mínimo da tabela resulta em R$ 0,75. O exemplo não afirma que todo fluxo aceite esse ticket."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Tabela de preços",
          "href": "/precos"
        },
        {
          "label": "Cotação indicativa e taxas",
          "href": "https://docs.hodle.com.br/docs/quote"
        }
      ]
    },
    {
      "id": "confirmacao-e-titularidade",
      "kind": "PROSE",
      "heading": "Quem pode pagar e quando a compra termina",
      "body": "Na cobrança de depósito, a titularidade depende de como a conta e a subconta foram habilitadas. Por padrão, o banco recusa o pagamento feito por outro CPF/CNPJ e nenhum ativo é entregue. Solicite a habilitação apropriada antes de usar uma cobrança de depósito para receber de clientes.",
      "bullets": [
        "FIAT_PAID confirma o recebimento em reais, mas ainda não a entrega do USDT.",
        "PROCESSING indica entrega em andamento; COMPLETED identifica a entrega concluída.",
        "Concilie externalId, endToEndId e transactionHash quando disponíveis. Confira receivedAmount junto de receivedAmountDecimals para interpretar a quantidade entregue."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Regras de titularidade e estados do depósito",
          "href": "https://docs.hodle.com.br/docs/deposit-asset"
        },
        {
          "label": "Verificar webhooks e idempotência",
          "href": "/articles/validar-webhook-pix-idempotencia"
        },
        {
          "label": "Criar link de pagamento Pix pela API",
          "href": "/articles/criar-link-pagamento-pix-api"
        }
      ]
    },
  ],
  faq: [
    {
      question: 'Como converter Pix em USDT?',
      answer:
        'Na Hodle, acesse o painel com a conta aprovada, selecione USDT, rede e carteira, informe o valor em reais e confira a cotação. Gere e pague o Pix da compra; depois acompanhe a entrega do USDT. Empresas também podem integrar esse fluxo por API.',
    },
    {
      question: 'Quanto vale 1 USDT em reais?',
      answer:
        'USDT busca acompanhar 1 dólar americano, não 1 real. O valor em reais depende da cotação no momento da compra. Confira a taxa e a quantidade final a receber na tela da operação; esta página não exibe uma cotação ao vivo.',
    },
    {
      question: 'Qual a diferença entre USDT e USDC?',
      answer:
        'São stablecoins distintas: USDT é emitido pela Tether e USDC pela Circle. Ambas buscam acompanhar o dólar, mas têm emissores e disponibilidade de redes diferentes. Escolha o ativo aceito pela carteira ou pelo destinatário da operação.',
    },
    {
      question: 'Em qual rede o USDT é entregue?',
      answer:
        'Escolha uma das redes exibidas para sua conta. No endpoint de depósito, a documentação lista Polygon e Arbitrum para USDT. Confirme a compatibilidade da carteira; não use uma rede só porque ela está disponível em outro tipo de operação.',
    },
    {
      question: 'Dá para entregar no endereço do meu usuário final?',
      answer:
        'A API aceita um endereço de destino para USDT. A titularidade do pagamento, o KYC e as permissões da conta também precisam corresponder à operação; informar um endereço não libera pagamentos de terceiros automaticamente.',
    },
    {
      question: 'Qual a taxa para comprar USDT com Pix?',
      answer:
        'A tabela de on-ramp publica taxa de serviço de 2% a 0,5%, conforme volume, com mínimo de R$ 0,75 por operação. Confira também a cotação e a quantidade final da compra; a taxa de serviço isolada não é a cotação do USDT. Condições negociadas dependem do contrato.',
    },
    {
      question: 'Precisa de KYC?',
      answer:
        'Sim. A verificação de identidade do usuário final é exigida para operações de entrada e saída, e é feita pela própria API, com submissão e consulta de estado documentadas.',
    },
  ],
  related: [
    { label: 'Receber vendas em USDT via Pix', href: '/gateway-de-pagamento-cripto' },
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'Comprar Bitcoin com Pix', href: '/comprar-bitcoin-com-pix' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Glossário', href: '/glossario' },
    { label: 'Ativos e redes na API', href: 'https://docs.hodle.com.br/docs/assets' },
  ],
}
