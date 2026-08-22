import { InfoPage } from '../../types/infoPage'

const emptySection = {
  body: [] as string[],
  bullets: [] as string[],
  rows: [] as never[],
  links: [] as never[],
}

export const desenvolvedores: InfoPage = {
  slug: 'desenvolvedores',
  kicker: 'Desenvolvedores',
  title: 'API Hodle para desenvolvedores',
  h1: 'API Hodle para desenvolvedores',
  description:
    'Recursos para desenvolvedores da API Hodle: especificação OpenAPI 3.1, autenticação por API key, webhooks assinados com HMAC, sandbox e a lista de operações com operationId.',
  updatedAt: '2026-08-22T00:00:00-03:00',
  intro: [
    'A API Hodle é uma API REST para mover dinheiro entre o real e o dólar digital: pagar Pix a partir de saldo em stablecoin, emitir invoice Lightning que liquida em Pix, rodar on-ramp e off-ramp, ler carteiras auto-custodiais e enviar KYC de usuário final. Autenticação é por API key no header, respostas são JSON e cada mudança de estado chega por webhook assinado.',
    'Esta página é o índice estável dos recursos de desenvolvimento da Hodle. Os endereços abaixo não mudam: se você é um agente ou um script procurando a especificação da API Hodle, comece por /openapi.json e por /.well-known/api-catalog.',
  ],
  sections: [
    {
      ...emptySection,
      id: 'recursos',
      kind: 'LINKS',
      heading: 'Recursos da API Hodle',
      body: [
        'Todos os endereços abaixo respondem em hodle.com.br ou em docs.hodle.com.br e são estáveis.',
      ],
      links: [
        {
          label: 'Especificação OpenAPI 3.1 da API Hodle',
          href: '/openapi.json',
          description:
            'Contrato completo em JSON: operationId, parâmetros tipados, schema de resposta e descrição em cada operação. É o arquivo que ferramentas de function calling e geradores de cliente consomem.',
        },
        {
          label: 'Catálogo de APIs (RFC 9727)',
          href: '/.well-known/api-catalog',
          description:
            'Linkset em application/linkset+json apontando para a especificação, a documentação e os canais de suporte. É o ponto de descoberta padronizado.',
        },
        {
          label: 'Documentação da API Hodle',
          href: 'https://docs.hodle.com.br',
          description:
            'Guias por endpoint, fluxos ponta a ponta e referência navegável gerada da mesma especificação.',
        },
        {
          label: 'Autenticação',
          href: 'https://docs.hodle.com.br/docs/authentication',
          description:
            'Como emitir a API key e assinar as chamadas com Authorization: Bearer.',
        },
        {
          label: 'Webhooks',
          href: 'https://docs.hodle.com.br/docs/webhooks',
          description:
            'Catálogo de eventos, formato do payload e verificação da assinatura HMAC.',
        },
        {
          label: 'Sandbox',
          href: 'https://docs.hodle.com.br/docs/sandbox',
          description:
            'Ambiente em sandbox-api.hodle.com.br com USDB de teste na Base Sepolia e nenhum dinheiro real.',
        },
        {
          label: 'llms.txt',
          href: '/llms.txt',
          description:
            'Resumo legível por máquina do que a Hodle faz, com dados de identificação e o mapa da API.',
        },
        {
          label: 'llms-full.txt',
          href: '/llms-full.txt',
          description: 'Versão estendida do llms.txt, com mais contexto de produto.',
        },
        {
          label: 'Código aberto no GitHub',
          href: 'https://github.com/HodleHub',
          description: 'Repositórios públicos e exemplos de integração.',
        },
      ],
    },
    {
      ...emptySection,
      id: 'operacoes',
      kind: 'ROWS',
      heading: 'Operações da API',
      body: [
        'A lista abaixo é o resumo do que a especificação declara. Cada linha traz o operationId, que é o identificador estável usado em function calling e na geração de clientes.',
      ],
      rows: [
        {
          label: 'POST /api/wallet/payout',
          value:
            'walletPayout — dispara um payout Pix a partir do saldo em stablecoin da carteira, com gas patrocinado.',
        },
        {
          label: 'GET /api/wallet/payout/{transactionId}',
          value: 'walletPayoutStatus — estado final de um payout.',
        },
        {
          label: 'POST /api/lightning/invoice',
          value:
            'createLightningInvoice — invoice BOLT11 que dispara um payout Pix quando pago.',
        },
        {
          label: 'POST /api/deposit/asset',
          value: 'depositAsset — on-ramp: Pix entra, cripto sai.',
        },
        {
          label: 'POST /api/quote',
          value:
            'quote — preço indicativo e composição da taxa de um par BRL ↔ ativo.',
        },
        {
          label: 'GET /api/wallet',
          value: 'walletGet — endereços e saldos por rede de uma carteira.',
        },
        {
          label: 'POST /api/wallet/keys',
          value:
            'walletKeys — devolve o protectedSymmetricKey necessário para assinar no cliente.',
        },
        {
          label: 'POST /api/wallet/transfer',
          value:
            'walletTransfer — envia USDT para qualquer endereço nas redes suportadas.',
        },
        {
          label: 'POST /api/subaccount',
          value: 'subAccountCreate — cria a subconta de um usuário final.',
        },
        {
          label: 'GET /api/subaccount',
          value: 'subAccountList — lista as subcontas da sua plataforma.',
        },
        {
          label: 'GET /api/subaccount/{subAccountId}',
          value: 'subAccountGet — lê uma subconta.',
        },
        {
          label: 'POST /api/kyc',
          value: 'kycCreate — inicia uma tentativa de KYC.',
        },
        {
          label: 'GET /api/kyc',
          value: 'kycGet — estado atual do KYC.',
        },
        {
          label: 'POST /api/kyc/import-token',
          value:
            'kycImportToken — importa uma verificação Sumsub já existente.',
        },
        {
          label: 'GET /api/account/statement',
          value:
            'accountStatement — saldo por ativo e operações paginadas em uma janela.',
        },
        {
          label: 'POST /webhook/{webhookId}',
          value:
            'webhookDelivery — o payload que o seu servidor recebe, declarado na especificação para você gerar o handler.',
        },
      ],
    },
    {
      ...emptySection,
      id: 'ambientes',
      kind: 'ROWS',
      heading: 'Ambientes',
      rows: [
        { label: 'Produção', value: 'https://api.hodle.com.br' },
        {
          label: 'Sandbox',
          value:
            'https://sandbox-api.hodle.com.br — USDB de teste na Base Sepolia, sem dinheiro real',
        },
        {
          label: 'Autenticação',
          value: 'Authorization: Bearer SUA_API_KEY em toda requisição',
        },
        {
          label: 'Formato',
          value: 'JSON em requisição e resposta; especificação OpenAPI 3.1.0',
        },
        {
          label: 'Assinatura de webhook',
          value: 'HMAC no header, verificável com o segredo do endpoint',
        },
      ],
    },
    {
      ...emptySection,
      id: 'agentes',
      kind: 'PROSE',
      heading: 'Para agentes e LLMs',
      body: [
        'O site responde em markdown para quem pede. Envie Accept: text/markdown em qualquer página listada em /llms.txt e a resposta volta como text/markdown; a resposta declara Vary: Accept, então um cache intermediário não entrega a variante errada. Um tipo que não sabemos servir recebe 406.',
        'Caminhos inexistentes respondem 404 de verdade, com um corpo curto apontando para o sitemap, o llms.txt e a documentação — nunca 200 com o shell da aplicação.',
        'A especificação em /openapi.json tem operationId único, descrição e schema de resposta em cada operação, que é o formato esperado pelos conversores de OpenAPI para tool calling. Os limites de taxa declarados hoje estão nas respostas 429 das operações que os têm.',
      ],
    },
  ],
  cta: {
    heading: 'Começar a integrar',
    body: 'Crie a chave no painel, aponte para o sandbox e rode o primeiro fluxo.',
    links: [
      {
        label: 'Documentação',
        href: 'https://docs.hodle.com.br',
        description: 'Guias por endpoint e fluxos ponta a ponta.',
      },
      {
        label: 'API Pix stablecoin',
        href: '/api-pix-stablecoin',
        description: 'A visão de produto do que a API resolve.',
      },
      {
        label: 'Para agentes de IA',
        href: '/para-agentes-de-ia',
        description: 'Como um agente usa a Hodle como trilho de pagamento.',
      },
    ],
  },
}
