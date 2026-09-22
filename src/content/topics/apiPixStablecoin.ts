import type { TopicPage } from '../../types/topic'
import { platformFacts } from '../platformFacts'
import { sandboxQuote } from '../sandboxQuote'

export const apiPixStablecoin: TopicPage = {
  slug: 'api-pix-stablecoin',
  language: 'pt-BR',
  translations: {
    'pt-BR': '/api-pix-stablecoin',
    en: '/en/pix-stablecoin-api',
  },
  title: 'API Pix stablecoin: on-ramp, off-ramp e sandbox',
  h1: 'API Pix stablecoin para integrar ao seu produto',
  description:
    'Integre Pix, USDT e USDC por API REST. Veja on-ramp, off-ramp, custódia, taxas publicadas, KYC/KYB, webhooks e um exemplo de sandbox.',
  keywords: [
    'api pix stablecoin',
    'api pix cripto',
    'on-ramp off-ramp api Brasil',
    'api usdt brasil',
    'webhook pix cripto',
  ],
  primaryKeyword: 'api pix stablecoin',
  updatedAt: '2026-09-22T00:00:00Z',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'DESENVOLVEDORES',
  subhead:
    'Conecte reais e stablecoins ao seu produto: cobre por Pix, entregue ativos digitais e pague Pix a partir de saldo em cripto. API REST, wallets auto-custodiais e webhooks assinados, com condições por fluxo e rede.',
  heroIcons: [
    {
      src: '/pix.svg',
      label: 'Pix',
    },
    {
      src: '/usdt.svg',
      label: 'USDT',
    },
    {
      src: '/usdc.svg',
      label: 'USDC',
    },
    {
      src: '/base.png',
      label: 'Base',
    },
  ],
  ctaSubhead:
    'Crie uma conta no ambiente de teste, gere sua chave e valide a integração antes de solicitar produção.',
  ctaPrimary: {
    label: 'Começar no sandbox',
    href: 'https://app-sandbox.hodle.com.br',
  },
  ctaSecondary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br',
  },
  sections: [
    {
      "id": "fluxo-visual",
      "kind": "SCREENSHOT",
      "heading": "Explore as etapas antes de integrar",
      "body": "O Flow Builder público da Hodle mostra a origem, o destino e as etapas de integração. A imagem abaixo é uma captura real dessa ferramenta, com dados de exemplo. Consulte os guias de cada endpoint para os requisitos de execução.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": {
        "src": "/screenshots/seo/flow-usdt-pix.jpg",
        "alt": "Explore as etapas antes de integrar no Flow Builder público da Hodle",
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
      id: 'on-ramp-off-ramp',
      kind: 'COMPARISON',
      heading: 'On-ramp e off-ramp: qual fluxo integrar?',
      body: 'On-ramp converte reais em ativos digitais. Off-ramp converte saldo em ativos digitais para pagar em reais via Pix. Confira o suporte no endpoint escolhido: uma rede do catálogo não habilita todas as operações. Depósitos e payouts de terceiros dependem de aprovação específica, além da verificação cadastral. Referências conferidas em 22 de setembro de 2026.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Fluxo', 'Ativo, rede e condição'],
        rows: [
          [
            'Cobrança Pix por API',
            'POST /api/deposit/asset. O depósito documenta USDT em Polygon/Arbitrum e USDC em Polygon/Base/Gnosis, sujeito à conta. A confirmação do Pix precede a conclusão da entrega do ativo.',
          ],
          [
            'Pagar Pix com saldo em stablecoin',
            'POST /api/wallet/payout. USDT em Polygon, Solana ou Tron; USDC em Polygon, Base ou Solana. Tron exige habilitação adicional. Confira o ativo efetivamente selecionado e a taxa no fluxo de confirmação.',
          ],
          [
            'Receber automaticamente em carteira externa',
            'Chave ou QR estático Pix → USDC na Base. Exige conta verificada, habilitação e carteira padrão externa na whitelist. Disponível só em produção.',
          ],
          [
            'Gateway Pix para USDT',
            'Checkout com cobrança Pix dinâmica. É um fluxo diferente do recebimento automático por chave estática.',
          ],
          [
            'Lightning para Pix',
            'POST /api/lightning/invoice emite uma invoice. Em produção, o pagamento dispara o fluxo de Pix; a invoice do sandbox não é pagável.',
          ],
        ],
      },
      code: null,
      image: null,
      links: [
        {
          label: 'Referência de on-ramp',
          href: 'https://docs.hodle.com.br/docs/deposit-asset',
        },
        {
          label: 'Referência de payout',
          href: 'https://docs.hodle.com.br/docs/wallet-payout',
        },
        {
          label: 'Recebimento por chave Pix em USDC',
          href: '/receber-pix-em-stablecoin',
        },
        {
          label: 'Gateway Pix para USDT',
          href: '/gateway-de-pagamento-cripto',
        },
      ],
    },
    ...platformFacts,
    {
      id: 'integracao',
      kind: 'STEPS',
      heading: 'Da chave de teste à primeira operação',
      body: 'Comece por uma cotação no sandbox e valide também rejeições, estados pendentes e conciliação. As rotas suportadas mantêm o mesmo caminho em produção; credenciais, dados e permissões são separados.',
      bullets: [
        'Cadastre-se em app-sandbox.hodle.com.br e crie uma chave de sandbox. Use o host sandbox-api.hodle.com.br e mantenha a chave apenas no seu backend.',
        'Autentique com Authorization: Bearer SUA_API_KEY. X-API-Key também é aceito. Não coloque a chave em URL, código de frontend ou logs.',
        'Faça POST /api/quote para obter uma cotação indicativa. A cotação não executa pagamento nem reserva câmbio.',
        'Para payouts, consulte POST /api/wallet/keys e use os dados da carteira selecionada conforme a documentação. Guarde o material protegido por carteira e respeite o PIN e o escopo da subconta.',
        'Antes de pagar, confirme o beneficiário e a cotação em POST /api/wallet/payout/beneficiary. Dispare POST /api/wallet/payout somente após a confirmação do usuário.',
        'Defina um externalId por payout, guarde o transactionId e consulte GET /api/wallet/payout/{transactionId}. Verifique os webhooks e deduplique os efeitos. Uma resposta de aceite não confirma a liquidação.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        {
          label: 'Passo a passo do sandbox',
          href: 'https://docs.hodle.com.br/docs/sandbox',
        },
        {
          label: 'Chaves e seleção de carteira',
          href: 'https://docs.hodle.com.br/docs/wallet-keys',
        },
        {
          label: 'Confirmar o beneficiário',
          href: 'https://docs.hodle.com.br/docs/wallet-payout-beneficiary',
        },
      ],
    },
    {
      id: 'exemplo',
      kind: 'CODE',
      heading: 'Exemplo real do contrato da API: cotação no sandbox',
      body: 'Substitua a variável por sua chave de teste no backend. Este exemplo consulta o preço de R$ 100 em USDC via Base; não movimenta dinheiro. Os valores do sandbox são de teste e não devem ser usados como preço de produção.',
      bullets: [],
      icons: [],
      comparison: null,
      code: sandboxQuote,
      image: null,
      links: [
        {
          label: 'Parâmetros e resposta de /api/quote',
          href: 'https://docs.hodle.com.br/docs/quote',
        },
        {
          label: 'Recursos para desenvolvedores',
          href: '/desenvolvedores',
        },
      ],
    },
    {
      id: 'conciliacao',
      kind: 'COMPARISON',
      heading: 'Como tratar confirmação, falha e repetição',
      body: 'Seu sistema deve liberar o pedido apenas após o estado final esperado. Uma chamada HTTP aceita, um Pix recebido e uma entrega on-chain são etapas distintas.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Situação', 'Tratamento na integração'],
        rows: [
          [
            'Operação pendente',
            'Guarde o identificador e acompanhe o status. Não crie um novo pagamento só porque a primeira consulta continua pendente.',
          ],
          [
            'Webhook repetido',
            'Verifique a assinatura e deduplique o evento antes de produzir efeitos no pedido ou no saldo.',
          ],
          [
            'Resposta 401 ou 403',
            'Confira host e chave do ambiente. Um 403 pode indicar permissão de fluxo, KYC/KYB ou habilitação ausente; não repita indefinidamente.',
          ],
          [
            'Resposta 429',
            'Respeite Retry-After quando presente e use retentativas com espera.',
          ],
          [
            'Timeout após o envio',
            'Resultado desconhecido não equivale a falha. Consulte a operação existente antes de considerar qualquer novo envio.',
          ],
        ],
      },
      code: null,
      image: null,
      links: [
        {
          label: 'Catálogo e assinatura de webhooks',
          href: 'https://docs.hodle.com.br/docs/webhooks',
        },
        {
          label: 'Fluxo stablecoin para Pix',
          href: 'https://docs.hodle.com.br/docs/flow-stable-pix',
        },
      ],
    },
    {
      "id": "guias-praticos",
      "kind": "PROSE",
      "heading": "Guias para colocar a integração em operação",
      "body": "A validação precisa cobrir a criação da cobrança, o processamento de eventos, a consulta do estado final e o fechamento da operação no seu sistema. Escolha o guia conforme a etapa que está implementando.",
      "bullets": [
        "Separe o pedido comercial, o pagamento Pix e a entrega do ativo no seu modelo de estados.",
        "Compare custos com a mesma entrada, saída, moeda de liquidação e perfil de volume. Uma tarifa de recebimento Pix não equivale ao custo de uma conversão em stablecoin.",
        "Os exemplos de taxa são ilustrativos. /api/quote é indicativo; o quoteId do beneficiário tem função específica no payout e não é o quoteToken genérico."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Integrar API Pix em Node.js",
          "href": "/articles/integrar-api-pix-nodejs"
        },
        {
          "label": "Validar assinatura e idempotência",
          "href": "/articles/validar-webhook-pix-idempotencia"
        },
        {
          "label": "Conciliação Pix por API",
          "href": "/articles/conciliacao-pix-api"
        },
        {
          "label": "Criar link de pagamento Pix por API",
          "href": "/articles/criar-link-pagamento-pix-api"
        },
        {
          "label": "Comparar API Pix e BaaS",
          "href": "/articles/comparar-api-pix-baas"
        }
      ]
    },
  ],
  faqSubhead: 'Condições para escolher a infraestrutura e começar a integração.',
  faq: [
    {
      question: 'A Hodle oferece API de on-ramp e off-ramp no Brasil?',
      answer:
        'Sim. A API conecta cobrança Pix à entrega de ativos digitais e permite pagar Pix a partir de saldo em stablecoin. Ativo, rede, habilitação e verificação variam por fluxo. Consulte o endpoint antes de escolher a integração.',
    },
    {
      question: 'A Hodle custodia os ativos dos clientes?',
      answer:
        'Não. A Hodle fornece software e wallets auto-custodiais, com chaves sob controle do usuário. Os serviços financeiros e fluxos regulados são executados por parceiros licenciados e/ou regulados.',
    },
    {
      question: 'O preço da API é somente sob consulta?',
      answer:
        'Não. A taxa de serviço de on-ramp e off-ramp é pública: de 2% a 0,5%, conforme volume, com mínimo de R$ 0,75 por operação. A tabela completa fica em /precos. Conversões e envios entre redes exigem consulta da condição aplicável; contratos negociados podem prevalecer.',
    },
    {
      question: 'O sandbox faz Pix real?',
      answer:
        'Não. O sandbox usa operações de teste em Base Sepolia nos fluxos suportados e simula a etapa Pix. É necessário cadastro separado e chave de sandbox. A aprovação de produção e a disponibilidade de cada módulo são independentes.',
    },
    {
      question: 'Todas as redes da plataforma funcionam em todos os endpoints?',
      answer:
        'Não. O suporte deve ser conferido por ativo, rede e operação. Por exemplo, o recebimento automático por chave Pix estática entrega USDC na Base; isso não significa suporte automático a USDT ou a todas as outras redes nesse mesmo fluxo.',
    },
    {
      question: 'Preciso de licença para usar a API?',
      answer:
        'Os requisitos dependem do seu modelo de negócio. A Hodle é uma empresa de software, não é banco nem instituição financeira. A integração não substitui a análise jurídica da sua operação nem transfere as licenças de parceiros para sua empresa.',
    },
  ],
  related: [
    { label: 'API Pix: integração e operações', href: '/api-pix' },
    { label: 'Conciliação Pix', href: '/conciliacao-pix' },
    { label: 'BaaS e infraestrutura financeira', href: '/baas' },
    {
      label: 'Recursos para desenvolvedores',
      href: '/desenvolvedores',
    },
    {
      label: 'Infraestrutura para neobank',
      href: '/neobank',
    },
    {
      label: 'Crypto as a Service',
      href: '/crypto-as-a-service',
    },
    {
      label: 'Pagar fornecedores com USDC',
      href: '/pagar-fornecedores-com-usdc',
    },
    {
      label: 'English: Pix stablecoin API',
      href: '/en/pix-stablecoin-api',
    },
  ],
  ogImage: '/og-image-v2.png',
}
