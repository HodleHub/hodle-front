import { TopicPage } from '../../types/topic'

export const apiPix: TopicPage = {
  "slug": "api-pix",
  "title": "API Pix: integração, QR Code e webhooks",
  "h1": "API Pix para conectar seu produto à Hodle",
  "description": "Integre a API Pix da Hodle para gerar cobranças, pagar com stablecoins e conciliar por webhooks. Consulte documentação, sandbox e requisitos da sua conta.",
  "keywords": [
    "API Pix",
    "integração Pix",
    "API de pagamentos",
    "webhook Pix",
    "API Pix sandbox",
    "QR Code dinâmico"
  ],
  "primaryKeyword": "API Pix",
  "updatedAt": "2026-09-22T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "DESENVOLVEDORES",
  "subhead": "API Pix é a integração que conecta seu software a recebimentos e pagamentos. Na Hodle, a API REST reúne depósitos por Pix, saída em reais a partir de ativos digitais, extrato e webhooks, com requisitos definidos para cada fluxo.",
  "heroIcons": [
    {
      "src": "/pix.svg",
      "label": "Pix"
    },
    {
      "src": "/usdc.svg",
      "label": "USDC"
    },
    {
      "src": "/usdt.svg",
      "label": "USDT"
    }
  ],
  "ctaSubhead": "Converse com a Hodle sobre o seu fluxo, a habilitação da conta e as condições comerciais.",
  "ctaPrimary": {
    "label": "Falar com vendas",
    "href": "https://api.whatsapp.com/send?phone=5511960000445"
  },
  "ctaSecondary": {
    "label": "Ver documentação",
    "href": "https://docs.hodle.com.br/docs/integration-guide"
  },
  "sections": [
    {
      "id": "operacoes",
      "kind": "PROSE",
      "heading": "Uma API de pagamentos com operações documentadas",
      "body": "Escolha a operação pelo resultado esperado. Gerar uma cobrança de depósito converte reais em um ativo digital; criar um produto de checkout gera um link de venda; um payout envia reais ao destino a partir do saldo em ativo. As três operações não são intercambiáveis.",
      "bullets": [
        "POST /api/deposit/asset: cobrança de depósito com valor em reais e destino em ativo digital.",
        "POST /api/checkout/products: produto do checkout hospedado, com disponibilidade condicionada à conta.",
        "POST /api/wallet/payout: pagamento Pix financiado pelo saldo em ativo digital.",
        "GET /api/account/statement: extrato de operações para conferência por período."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "integracao",
      "kind": "STEPS",
      "heading": "Como integrar Pix ao seu sistema",
      "body": "A integração começa no backend da sua empresa. Mantenha as credenciais fora do navegador e use a documentação da operação escolhida para definir os campos e tratar falhas.",
      "bullets": [
        "Obtenha uma chave da API no ambiente adequado e autentique com Authorization: Bearer.",
        "Conclua a verificação cadastral aplicável ao titular e às subcontas.",
        "Teste o depósito ou o payout com os ativos e destinos permitidos para sua conta.",
        "Persista o identificador retornado, acompanhe o estado e reconcilie a operação."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "webhooks",
      "kind": "PROSE",
      "heading": "Webhook Pix para confirmação e conciliação",
      "body": "Webhooks comunicam eventos como conclusão ou falha de depósito e pagamento. Verifique a assinatura e o timestamp antes de atualizar seu pedido. Consulte o recurso e o extrato para recuperar o estado quando necessário.\n\nA criação de um QR Code não confirma o recebimento. Uma resposta de criação de payout também não garante que o Pix já foi entregue. Modele os estados de processamento e falha para evitar baixa prematura ou pagamentos duplicados.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "sandbox",
      "kind": "PROSE",
      "heading": "Sandbox da API Pix: teste antes da produção",
      "body": "O sandbox usa um host e uma chave próprios, sem dinheiro real. Nos fluxos cobertos, o Pix é simulado e a etapa on-chain ocorre na Base Sepolia com token de teste. O QR Code de teste não deve ser pago no aplicativo do banco.\n\nA cobertura é específica por operação. Conta nominal PJ está disponível só em produção; outros recursos dependem do parceiro e da rede. Confira a tabela de cobertura da documentação antes de montar seu teste.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "contrato",
      "kind": "PROSE",
      "heading": "API da Hodle, API Pix do BC e recebimento de terceiros",
      "body": "A especificação API Pix do Banco Central e a API de integração da Hodle têm contratos diferentes. A API da Hodle acrescenta orquestração de ativos digitais, carteiras e parceiros; não presuma que uma biblioteca feita para outro PSP funcionará sem adaptação.\n\nNo depósito, por padrão o pagador deve ser o titular da conta da operação. Receber de terceiros exige habilitação específica. A criação de subcontas também não concede, por si só, uma conta nominal ou autorização para movimentar recursos.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    }
  ],
  "faqSubhead": "Respostas para avaliar a solução e preparar sua operação.",
  "faq": [
    {
      "question": "Como integrar uma API Pix?",
      "answer": "Escolha o fluxo, obtenha a chave do ambiente, implemente a chamada no backend e acompanhe o status. Na Hodle, comece pelo guia de integração e teste os casos cobertos no sandbox antes da produção."
    },
    {
      "question": "A API Pix da Hodle tem sandbox?",
      "answer": "Sim, para os fluxos cobertos na documentação. Ele usa Pix simulado e ativos de teste na Base Sepolia. Conta nominal PJ não tem equivalente em sandbox."
    },
    {
      "question": "Como confirmar um pagamento Pix por webhook?",
      "answer": "Valide X-Hodle-Signature com o segredo do webhook, confira X-Hodle-Timestamp e só então processe o evento. Use a referência técnica para conferir o payload e consulte o estado da operação se houver dúvida."
    },
    {
      "question": "Posso migrar a integração de outro provedor de API Pix?",
      "answer": "É possível avaliar a migração, mas contratos de API, identificação de clientes, liquidação, webhooks e limites precisam ser adaptados. Faça um teste do seu fluxo real em vez de apenas substituir a URL."
    }
  ],
  "related": [
    {
      "label": "Produtos Pix",
      "href": "/pix"
    },
    {
      "label": "API Pix com stablecoins",
      "href": "/api-pix-stablecoin"
    },
    {
      "label": "Cobrança Pix",
      "href": "/cobranca-pix"
    },
    {
      "label": "Conciliação e webhooks",
      "href": "/conciliacao-pix"
    },
    {
      "label": "Documentação do sandbox",
      "href": "https://docs.hodle.com.br/docs/sandbox"
    },
    {
      "label": "Guia de integração",
      "href": "https://docs.hodle.com.br/docs/integration-guide"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
