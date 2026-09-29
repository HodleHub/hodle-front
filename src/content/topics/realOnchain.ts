import { TopicPage } from '../../types/topic'

export const realOnchain: TopicPage = {
  slug: 'real-onchain',
  title: 'Real tokenizado: stablecoin de real com Pix',
  h1: 'Receba em Pix, guarde em real onchain',
  description:
    'Entenda BRS e BRLA na Hodle: real tokenizado, compra com Pix, redes, carteiras e pagamentos. Compare os ativos e escolha o fluxo disponível para sua conta.',
  keywords: [
    'real tokenizado',
    'real onchain',
    'stablecoin de real',
    'stablecoin brasileira',
    'BRLA',
    'BRS',
    'Drex',
    'Pix',
    'Polygon',
  ],
  primaryKeyword: 'real tokenizado',
  updatedAt: '2026-09-29T00:00:00Z',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'Real onchain',
  subhead:
    'Real onchain é um ativo digital com referência no real brasileiro. Na Hodle, conheça BRS e BRLA, os fluxos de compra com Pix e as redes disponíveis para cada operação.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/brla.png', label: 'BRLA' },
    { src: '/brs.svg', label: 'BRS' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
  ],
  ctaSubhead:
    'Receba em Pix, guarde em real onchain na Hodle.',
  ctaPrimary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: { label: 'Criar minha conta', href: 'https://app.hodle.com.br' },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é real tokenizado',
      body: 'Real tokenizado, ou real onchain, é uma expressão para ativos digitais privados que buscam acompanhar o real brasileiro. BRS e BRLA são exemplos distintos: BRS pertence ao ecossistema Nora Finance e BRLA é emitido pela Avenia. A Hodle oferece acesso aos fluxos habilitados de compra, carteira e pagamento; não emite esses ativos.',
      bullets: [
        'Referência de 1 para 1 com o real; consulte o lastro na fonte de cada ativo',
        'Pix confirmado e token entregue são etapas diferentes da operação',
        'Emissão privada: não é o Drex e não é moeda do Banco Central',
        'Na Hodle, confira ativo, rede e habilitação antes de iniciar',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Como funciona na prática: do Pix ao real onchain',
      body: 'O caminho é o mesmo que a sua operação já faz em reais. A diferença é que, no meio do trajeto, o dinheiro passa a circular em rede pública.',
      bullets: [
        'Com a conta aprovada, escolha o ativo e confira as condições antes de pagar a cobrança Pix.',
        'A compra de BRLA usa um endereço na rede habilitada; a compra de BRS entrega na carteira Solana da própria conta.',
        'Aguarde a entrega do ativo; depois use a transferência ou o pagamento permitido para seu saldo.',
        'Para receber reais via Pix, confira o destinatário e acompanhe a operação de pagamento até a conclusão.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'onde-circula',
      kind: 'ASSETS',
      heading: 'Onde o real onchain circula na Hodle',
      body: 'Nos fluxos documentados da Hodle, BRLA opera em Polygon e Base, enquanto a compra de BRS entrega na carteira Solana da própria conta. Cada combinação de ativo, rede e operação tem condições de disponibilidade.',
      bullets: [
        'BRLA: fluxos documentados em Polygon e Base',
        'BRS: compra documentada em Solana, na carteira da própria conta',
        'Pix: entrada e saída em reais, 24 horas por dia',
        'Verificação cadastral e habilitação conforme o ativo e o fluxo',
      ],
      icons: [
        { src: '/brla.png', label: 'BRLA' },
        { src: '/brs.svg', label: 'BRS' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/pix.svg', label: 'Pix' },
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      "id": "brla-brz-brl1",
      "kind": "COMPARISON",
      "heading": "BRS e BRLA: qual real onchain usar na Hodle?",
      "body": "Escolha pelo destino e pela rede de sua operação. Os ativos têm referência no real, mas não compartilham os mesmos emissores, contratos ou condições de entrega.",
      "bullets": [],
      "icons": [],
      "comparison": {
        "headers": [
          "Critério",
          "BRS",
          "BRLA"
        ],
        "rows": [
          [
            "Ecossistema",
            "Nora Finance",
            "Avenia"
          ],
          [
            "Compra documentada na Hodle",
            "Solana",
            "Polygon e Base, conforme habilitação"
          ],
          [
            "Destino da compra",
            "Carteira Solana da própria conta",
            "Endereço informado na rede selecionada"
          ],
          [
            "Acesso",
            "Produção e BRS habilitado na conta",
            "Verificação e habilitação do fluxo"
          ]
        ]
      },
      "code": null,
      "image": null,
      "links": [
        {
          "label": "BRS: comprar com Pix na Hodle",
          "href": "/brs"
        },
        {
          "label": "BRLA: comprar com Pix na Hodle",
          "href": "/brla"
        },
        {
          "label": "Ativos e redes na API Hodle",
          "href": "https://docs.hodle.com.br/docs/assets"
        }
      ]
    },
    {
      id: 'vs-drex',
      kind: 'PROSE',
      heading: 'Real onchain e Drex não são a mesma coisa',
      body: 'O Drex é o projeto de moeda digital do Banco Central: emissão soberana, infraestrutura própria e acesso intermediado por instituições autorizadas. O real tokenizado é emissão privada, com lastro em reais custodiados, e já circula em redes públicas. Consulte as condições de cada infraestrutura; a disponibilidade e a conclusão dos pagamentos dependem do fluxo utilizado.',
      bullets: [
        'Drex: moeda digital do Banco Central, com emissão soberana',
        'Real tokenizado: emissão privada com lastro em reais',
        'Pix é meio de pagamento, não moeda: os três convivem',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'rendimento',
      kind: 'PROSE',
      heading: 'Real onchain rende?',
      body: 'Comprar e manter uma stablecoin na carteira não significa contratar um produto de rendimento na Hodle. O lastro informado pelo emissor e uma aplicação em protocolo de terceiros são coisas diferentes. Avalie as condições de cada operação separadamente.',
      bullets: [
        'Consulte como o ativo é lastreado nas fontes oficiais',
        'Não deduza rendimento do saldo pela composição das reservas',
        'Rendimento em protocolo onchain é risco do protocolo, não do emissor',
        'Esta página descreve compra, transferência e pagamentos',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'api',
      kind: 'CODE',
      heading: 'Real onchain no seu produto, por API',
      body: 'A API da Hodle separa compra, transferência de saldo e pagamento Pix. O exemplo mostra uma transferência de BRLA já disponível na carteira em Polygon; não cria uma compra. Valide as credenciais, a carteira de origem, o endereço e a habilitação na documentação antes de integrar.',
      bullets: [
        'Transferência de BRLA, USDT e USDC na Polygon em um endpoint',
        'Gas patrocinado: sem gerenciar saldo de rede',
        'Webhooks para conciliar entrada e saída',
        'Documentação em docs.hodle.com.br',
      ],
      icons: [],
      comparison: null,
      code: {
        label: 'Transferir real onchain',
        language: 'cURL',
        snippet: `curl -X POST https://api.hodle.com.br/api/wallet/transfer \\
  -H "Authorization: Bearer $HODLE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "asset": "BRLA",
    "network": "polygon",
    "amount": "50",
    "recipientAddress": "0x520ec4aD3BdC629D13a49dB558D7F6813f3696aD",
    "reference": "pedido-9f3c1a",
    "walletPin": "1234",
    "protectedSymmetricKey": "AoofiKHyVRLvdrknnXzo..."
  }'

# 200 -> { "success": true, "data": { "txHash": "0xd3c1...", "asset": "BRLA", "amount": "50" } }`,
      },
      image: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre real tokenizado e real onchain.',
  faq: [
    {
      question: 'O que é real tokenizado?',
      answer:
        'Real tokenizado é um ativo digital privado com referência no real brasileiro. Na Hodle, BRS e BRLA permitem operar essa referência em redes e fluxos distintos, conforme a disponibilidade da conta. A compra e a transferência de tokens são diferentes de manter um saldo bancário em reais.',
    },
    {
      question: 'Qual a diferença entre real onchain e Drex (real digital)?',
      answer:
        'O Drex é a moeda digital do Banco Central, com emissão soberana e acesso intermediado por instituições autorizadas. O real onchain é emissão privada, com lastro em reais custodiados, e já circula em redes públicas. São infraestruturas diferentes e podem coexistir.',
    },
    {
      question: 'Como comprar BRLA com Pix?',
      answer:
        'Na Hodle, conclua a verificação exigida, selecione BRLA e confira a rede e o endereço disponíveis na operação. Revise o valor líquido e as taxas, pague a cobrança Pix e acompanhe a entrega. Os fluxos documentados de BRLA incluem Polygon e Base.',
    },
    {
      question: 'Quem emite o BRLA e o que dá lastro ao token?',
      answer:
        'BRLA é emitido pela Avenia, que publica informações sobre a paridade de referência com o real e as reservas. A Hodle oferece os fluxos de operação do ativo e não é sua emissora. Consulte a composição e os relatórios na fonte do ativo.',
    },
    {
      question: 'Real onchain rende?',
      answer:
        'Manter BRLA ou BRS na carteira não significa contratar rendimento na Hodle. O uso de um token em protocolos de terceiros é uma operação separada, com condições e riscos próprios.',
    },
  ],
  related: [
    { label: 'Comprar BRS com Pix', href: '/brs' },
    { label: 'Comprar BRLA com Pix', href: '/brla' },
    { label: 'BRS no ecossistema Nora', href: 'https://www.nora.finance/' },
    { label: 'BRLA e reservas na Avenia', href: 'https://avenia.io/brla' },
    { label: 'Perguntas frequentes', href: '/faq' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Artigos', href: '/articles' },
  ],
  ogImage: '/og-image-v2.png',
}
