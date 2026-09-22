import { TopicPage } from '../../types/topic'

export const pagarPixComUsdt: TopicPage = {
  slug: 'pagar-pix-com-usdt',
  title: 'Pagar Pix com USDT: como funciona',
  h1: 'Pague um Pix com saldo em USDT',
  description:
    'Veja como pagar Pix com cripto usando USDT ou USDC: confira o destino, a cotação, as taxas e as redes aceitas. Pelo painel ou pela API da Hodle.',
  keywords: [
    'pagar pix com usdt',
    'pagar pix com stablecoin',
    'pagar pix com cripto',
    'pagamento pix com saldo em usdt',
    'converter usdt em pix',
    'usdt para pix',
    'como fazer pix com cripto',
    'pagar pix com dólar digital',
  ],
  primaryKeyword: 'pagar pix com usdt',
  updatedAt: '2026-09-22T00:00:00Z',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'PAGAMENTOS',
  subhead:
    'Pagar Pix com cripto na Hodle é usar saldo em USDT ou USDC para enviar reais ao destinatário. Você informa os dados do pagamento, confere as condições e acompanha a liquidação. Quem recebe usa a conta bancária de sempre.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/tron.svg', label: 'Tron' },
    { src: '/base.png', label: 'Base' },
  ],
  ctaSubhead:
    'Use seu saldo em stablecoin para pagar Pix. Confira as condições disponíveis para sua conta.',
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
      "id": "fluxo-visual",
      "kind": "SCREENSHOT",
      "heading": "Visualize o caminho de USDT até o Pix",
      "body": "O Flow Builder público da Hodle mostra a origem, o destino e as etapas de integração. A imagem abaixo é uma captura real dessa ferramenta, com dados de exemplo. Consulte os guias de cada endpoint para os requisitos de execução.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": {
        "src": "/screenshots/seo/flow-usdt-pix.jpg",
        "alt": "Visualize o caminho de USDT até o Pix no Flow Builder público da Hodle",
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
      heading: 'Como fazer Pix com cripto',
      body: 'Comece com a conta e o fluxo aprovados. Confira o beneficiário, o ativo que será debitado e o custo total antes de confirmar; depois acompanhe a operação até o estado final.',
      bullets: [
        'Selecione uma carteira compatível, com saldo suficiente para o pagamento e a taxa. Use o PIN e o material protegido da mesma carteira.',
        'Informe o valor em reais e confira o beneficiário. Na API, /api/wallet/payout/beneficiary permite confirmar os dados e obter uma cotação vinculada ao destino.',
        'Confirme o pagamento. Envie o quoteId aplicável em /api/wallet/payout e mantenha um externalId por operação para evitar um segundo pagamento em uma retentativa.',
        'Guarde o transactionId. Consulte /api/wallet/payout/{transactionId} e os eventos assinados até COMPLETED ou FAILED. HTTP 202 significa que o pedido foi aceito, não que o Pix chegou.',
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
      body: 'No payout, USDT é documentado em Polygon, Solana e Tron; USDC, em Polygon, Base e Solana. Tron exige habilitação adicional. Em Polygon e Base, o mecanismo pode priorizar saldo em BRLA quando disponível: confira o ativo efetivamente selecionado na cotação e na resposta. USDT em Base não é aceito por este endpoint. Referência conferida em 22 de setembro de 2026.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/tron.svg', label: 'Tron' },
        { src: '/base.png', label: 'Base' },
        { src: '/solana.svg', label: 'Solana' },
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
        'Valide a assinatura do webhook e trate eventos repetidos sem pagar ou creditar duas vezes.',
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
    {
      "id": "requisitos",
      "kind": "PROSE",
      "heading": "O que precisa estar habilitado antes de pagar",
      "body": "A conta deve ter verificação cadastral, acesso ao payout e limites compatíveis. Pagar para CPF/CNPJ diferente do titular exige permissão de operações de terceiros. Uma chave de API válida não libera esse uso automaticamente. No sandbox, os fluxos suportados usam Base Sepolia e o Pix é simulado.",
      "bullets": [
        "Confirme o beneficiário antes da autorização do usuário.",
        "Pagamento pendente ou timeout exige consulta da operação existente, antes de qualquer novo envio.",
        "A conclusão deve ser comprovada pelo estado final e pelos identificadores disponíveis, como endToEndId e comprovante."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Beneficiário e cotação do payout",
          "href": "https://docs.hodle.com.br/docs/wallet-payout-beneficiary"
        },
        {
          "label": "Requisitos e redes do payout",
          "href": "https://docs.hodle.com.br/docs/wallet-payout"
        },
        {
          "label": "Conciliação Pix por API",
          "href": "/articles/conciliacao-pix-api"
        }
      ]
    },
    {
      "id": "custos",
      "kind": "PROSE",
      "heading": "Taxa de serviço e débito em stablecoin",
      "body": "A tabela comercial de on-ramp e off-ramp publica taxas de 2% a 0,5% por volume, com mínimo de R$ 0,75 por operação. Ela serve como referência comercial. Para executar um payout, confira a taxa e o total de ativos da cotação do beneficiário: a precificação do endpoint e as condições da conta precisam corresponder ao contratado.",
      "bullets": [
        "Exemplo ilustrativo da tabela, não uma cotação: a 2%, R$ 1.000 × 0,02 = R$ 20 de taxa de serviço.",
        "No mesmo exemplo de faixa, 2% de R$ 20 são R$ 0,40; o mínimo da tabela leva a taxa de serviço a R$ 0,75.",
        "Essas contas não determinam o total debitado em USDT. Cotação, ativo escolhido e condições da operação definem esse total; confirme-o antes de autorizar."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Tabela completa e condições",
          "href": "/precos"
        },
        {
          "label": "Como funciona a cotação",
          "href": "https://docs.hodle.com.br/docs/quote"
        },
        {
          "label": "Integrar a API Pix em Node.js",
          "href": "/articles/integrar-api-pix-nodejs"
        }
      ]
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre pagar Pix com saldo em stablecoin.',
  faq: [
    {
      question: 'Tem como transformar criptomoeda em Pix?',
      answer:
        'Sim. No pagamento com USDT ou USDC, o saldo em cripto financia uma transferência em reais para a chave Pix informada. A conta, o ativo e a rede precisam estar habilitados para esse fluxo. Para comprar cripto usando reais, o caminho é a compra com Pix.',
    },
    {
      question: 'Como posso pagar com USDT?',
      answer:
        'Você mantém saldo em USDT na carteira, informa a chave Pix e o valor, e dispara o pagamento pelo painel ou por um POST em /api/wallet/payout. A stablecoin é debitada e o Pix é liquidado em reais para quem recebe, sem etapa manual de venda antes.',
    },
    {
      question: 'Como posso pagar boletos com USDT?',
      answer:
        'Se o boleto oferecer QR Code Pix ou Pix copia-e-cola, use esse código no fluxo de pagamento Pix compatível. O código de barras tradicional de um boleto não é um código Pix e não é processado por este fluxo.',
    },
    {
      question: 'Como usar USDT no Brasil?',
      answer:
        'Na Hodle, você compra USDT com Pix, guarda na carteira auto-custodial e usa esse saldo para pagar Pix, QR codes e boletos com código Pix, ou para converter de volta para reais quando precisar sacar.',
    },
    {
      question: 'A USDT é confiável?',
      answer:
        'USDT é um ativo privado emitido pela Tether que busca acompanhar o dólar. Carrega riscos do emissor, do lastro, da rede e de perda da paridade. Usar USDT como saldo para um Pix não transforma o ativo em depósito bancário nem elimina esses riscos.',
    },
    {
      question: 'Dá para pagar Pix com cripto sem converter antes?',
      answer:
        'Sim. Não existe etapa manual de venda: a conversão acontece dentro do próprio fluxo de pagamento. Você sai de um saldo em dólar digital direto para um Pix pago em reais.',
    },
    {
      question: 'Quem recebe sabe que o pagamento veio de cripto?',
      answer:
        'O destinatário recebe reais via Pix e não precisa ter carteira de cripto. Os dados exibidos no comprovante dependem da operação e das instituições envolvidas; este fluxo não promete ocultar a origem do pagamento.',
    },
    {
      question: 'Preciso pagar taxa de rede (gas) para pagar um Pix?',
      answer:
        'Não nas redes EVM. O gas de Polygon e Base é patrocinado pela Hodle, então você não precisa manter saldo em moeda nativa da rede só para conseguir pagar.',
    },
    {
      question: 'Quais stablecoins e redes posso usar como saldo?',
      answer:
        'USDT: Polygon, Solana e Tron, com habilitação adicional para Tron. USDC: Polygon, Base e Solana. O ativo efetivamente debitado depende da carteira, do saldo e do mecanismo de seleção do payout; confira a cotação e a resposta da operação.',
    },
  ],
  related: [
    { label: 'Comprar USDT com Pix', href: '/comprar-usdt-com-pix' },
    { label: 'Receber Pix em stablecoin', href: '/receber-pix-em-stablecoin' },
    { label: 'API de Pix com stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Carteiras auto-custodiais', href: '/wallet-auto-custodial' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Perguntas frequentes', href: '/faq' },
  ],
  ogImage: '/og-image-v2.png',
}
