import { TopicPage } from '../../types/topic'

export const pix: TopicPage = {
  "slug": "pix",
  "title": "Pix para empresas: cobrança, pagamentos e API",
  "h1": "Pix para empresas, do recebimento ao pagamento",
  "description": "Pix para empresas com cobrança por QR Code, link de pagamento, API e conciliação. Conheça os fluxos da Hodle que conectam reais, contas PJ e stablecoins.",
  "keywords": [
    "pix para empresas",
    "produtos pix",
    "pix PJ",
    "receber pix",
    "pagamentos pix",
    "gateway pix"
  ],
  "primaryKeyword": "pix para empresas",
  "updatedAt": "2026-09-22T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "PIX PARA EMPRESAS",
  "subhead": "Pix para empresas na Hodle conecta cobrança, pagamentos e conciliação a uma plataforma com API. Receba em reais, escolha um fluxo com stablecoins ou integre contas PJ por meio de parceiros, conforme a habilitação da sua conta.",
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
      "id": "produtos-pix",
      "kind": "COMPARISON",
      "heading": "Produtos Pix para cada etapa da operação",
      "body": "Uma empresa que vende por link tem uma necessidade diferente de uma fintech que integra pagamentos. A Hodle reúne esses caminhos: checkout com QR Code, API para entrada e saída via Pix e contas nominais PJ por meio de instituição parceira.\n\nO ponto de partida é decidir quem paga, quem recebe e em qual moeda o valor será entregue. A mesma palavra “Pix” pode descrever uma venda, uma transferência ou a compra de um ativo digital; cada operação tem condições próprias.",
      "bullets": [],
      "icons": [],
      "comparison": {
        "headers": [
          "Necessidade",
          "Caminho na Hodle",
          "Condição"
        ],
        "rows": [
          [
            "Cobrar uma venda",
            "Link de pagamento com QR Code e Pix Copia e Cola",
            "Checkout e ativo de liquidação habilitados"
          ],
          [
            "Converter reais em ativos digitais",
            "Depósito por Pix via API",
            "Cadastro aprovado e par ativo/rede disponível"
          ],
          [
            "Pagar em reais usando stablecoins",
            "Payout para chave ou QR Code Pix",
            "Saldo, limites e destino aceitos"
          ],
          [
            "Oferecer conta PJ nominal",
            "Abertura no parceiro via integração Hodle",
            "Disponível só em produção; aprovação e KYB"
          ]
        ]
      },
      "code": null,
      "image": null
    },
    {
      "id": "receber-pix",
      "kind": "PROSE",
      "heading": "Receber Pix com QR Code ou link de pagamento",
      "body": "No checkout da Hodle, você cadastra um produto com preço em reais e compartilha o link. O cliente abre a página hospedada, preenche os dados necessários e paga pelo aplicativo do banco. A venda segue para o ativo e a rede configurados na conta do vendedor.\n\nPara operações próprias por API, a cobrança de depósito converte reais em ativos digitais. Recebimentos de terceiros precisam estar expressamente habilitados: uma integração criada para o próprio titular não aceita automaticamente pagamentos de qualquer cliente.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "pagar-pix",
      "kind": "PROSE",
      "heading": "Pagamentos Pix com saldo em stablecoin",
      "body": "A saída em reais conecta o saldo em ativo digital ao destinatário no Brasil. A integração informa o destino, consulta as condições da operação e acompanha o pagamento até um estado final. O recebedor recebe Pix; o sistema da empresa acompanha também a conversão e a taxa aplicável.",
      "bullets": [
        "Confira o valor líquido, as taxas, a rede e o destino antes de confirmar.",
        "Guarde o identificador da operação para conciliar e consultar o status.",
        "Se houver falha ou demora, consulte a operação antes de enviar um novo pagamento."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "integrar",
      "kind": "PROSE",
      "heading": "API, conciliação e conta digital PJ",
      "body": "A API permite incorporar os fluxos ao seu software. Webhooks assinados comunicam eventos de depósitos e pagamentos; o extrato permite conferir operações por período. A conta nominal, quando aprovada, mantém a titularidade da empresa na instituição parceira.\n\nA Hodle fornece software e integrações. Os serviços financeiros e o fluxo regulado de fundos são conduzidos pelos parceiros. Condições comerciais, limites, verificações cadastrais e disponibilidade são avaliados conforme a operação.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "comecar",
      "kind": "STEPS",
      "heading": "Como começar a usar Pix na Hodle",
      "body": "Leve ao time um exemplo de operação: valor cobrado em reais, perfil dos pagadores, destino dos recursos e frequência dos pagamentos. Isso permite escolher o caminho e verificar os requisitos antes da integração.",
      "bullets": [
        "Defina se precisa de checkout, API de conversão ou conta nominal PJ.",
        "Confirme os requisitos de cadastro, recebimento de terceiros, taxas e limites.",
        "Teste os fluxos de API cobertos pelo sandbox, sem movimentar dinheiro real.",
        "Ative a operação em produção após as aprovações exigidas."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    }
  ],
  "faqSubhead": "Respostas para avaliar a solução e preparar sua operação.",
  "faq": [
    {
      "question": "Como receber Pix na empresa com a Hodle?",
      "answer": "Use o checkout para criar um link com QR Code ou integre o fluxo de depósito por API. No checkout, a liquidação segue o ativo habilitado na conta. Recebimentos por chave com conversão automática são um produto específico e dependem de liberação."
    },
    {
      "question": "A Hodle tem API Pix?",
      "answer": "Sim. A API da Hodle integra cobranças de depósito, pagamentos Pix com ativos digitais, consulta de operações e webhooks. As rotas e condições são próprias da Hodle; consulte a documentação antes de adaptar uma integração de outro fornecedor."
    },
    {
      "question": "Quanto custa usar Pix na Hodle?",
      "answer": "Consulte a página de preços e as condições da sua conta. O custo depende do fluxo, da conversão e da rede quando houver ativo digital. Confirme a cotação antes de operar."
    },
    {
      "question": "A Hodle é um banco?",
      "answer": "Não. A Hodle é uma plataforma de tecnologia e API. Contas e serviços financeiros são prestados por instituições parceiras; a titularidade da conta nominal é da empresa junto à instituição que a aprova."
    }
  ],
  "related": [
    {
      "label": "API Pix",
      "href": "/api-pix"
    },
    {
      "label": "Cobrança Pix",
      "href": "/cobranca-pix"
    },
    {
      "label": "Link de pagamento Pix",
      "href": "/link-de-pagamento-pix"
    },
    {
      "label": "Conciliação Pix",
      "href": "/conciliacao-pix"
    },
    {
      "label": "Conta digital PJ",
      "href": "/conta-digital-pj"
    },
    {
      "label": "BaaS e infraestrutura financeira",
      "href": "/baas"
    },
    {
      "label": "Preços e taxas",
      "href": "/precos"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
