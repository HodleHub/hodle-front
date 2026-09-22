import { TopicPage } from '../../types/topic'

export const conciliacaoPix: TopicPage = {
  "slug": "conciliacao-pix",
  "title": "Conciliação Pix: webhooks, extrato e confirmação",
  "h1": "Conciliação Pix para acompanhar cada operação",
  "description": "Faça conciliação Pix com webhooks assinados e extrato da Hodle. Relacione pedidos, depósitos e pagamentos e acompanhe falhas, devoluções e liquidação.",
  "keywords": [
    "conciliação Pix",
    "webhook Pix",
    "confirmação de pagamento Pix",
    "conciliação de pagamentos",
    "extrato por API",
    "endToEndId"
  ],
  "primaryKeyword": "conciliação Pix",
  "updatedAt": "2026-09-22T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "OPERAÇÃO E CONCILIAÇÃO",
  "subhead": "Conciliação Pix relaciona o que sua empresa cobrou ou pagou ao que efetivamente aconteceu. Na Hodle, use referências de operação, webhooks assinados e extrato por API para acompanhar recebimentos, payouts e entrega de ativos.",
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
    "href": "https://docs.hodle.com.br/docs/webhooks"
  },
  "sections": [
    {
      "id": "referencias",
      "kind": "PROSE",
      "heading": "Identifique o pedido e a operação financeira",
      "body": "Um identificador interno do pedido ajuda a relacionar a venda ao depósito. No fluxo de depósito, o campo externalId permite fornecer essa referência conforme as regras da API. O identificador devolvido pela Hodle acompanha a operação até seu desfecho.\n\nO endToEndId identifica uma transação Pix e o txHash identifica uma transação on-chain, quando disponíveis. Eles representam etapas diferentes: não substitua um pelo outro nem conclua que a conversão terminou apenas porque o Pix foi iniciado.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "eventos",
      "kind": "PROSE",
      "heading": "Webhook Pix: valide antes de dar baixa",
      "body": "A Hodle assina as entregas de webhook com HMAC-SHA256. A integração verifica X-Hodle-Signature e X-Hodle-Timestamp sobre o corpo original da requisição antes de confiar no evento. O segredo do webhook deve permanecer no backend.\n\nProcesse os eventos de forma que uma nova entrega do mesmo resultado não cause uma segunda baixa. Para dúvidas de estado, consulte a operação e reconcilie com o extrato.",
      "bullets": [
        "DEPOSIT_ASSET_SUCCESS indica a conclusão bem-sucedida do depósito.",
        "DEPOSIT_ASSET_FAILED sinaliza falha na entrega do ativo de um depósito pago.",
        "PAYOUT_SUCCESSFUL e PAYOUT_FAILED informam o resultado do pagamento.",
        "Eventos de devolução e disputa exigem atualizar também a posição financeira."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "extrato",
      "kind": "PROSE",
      "heading": "Extrato por API para conferir entradas e saídas",
      "body": "O extrato da Hodle reúne operações por período, com paginação e filtros por tipo. Use-o para conferir o fechamento e localizar pagamentos cujo evento ainda não foi processado no seu sistema.\n\nCompare valor, ativo, rede, direção, status e taxa antes de somar. A API de depósito recebe reais em centavos; os campos do extrato seguem as unidades descritas na referência. Misturar centavos com reais ou USDC com BRL produz um saldo incorreto.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "rotina",
      "kind": "STEPS",
      "heading": "Uma rotina de conciliação para sua empresa",
      "body": "Separe o pedido comercial do estado financeiro. Um pedido pode aguardar pagamento, enquanto uma operação já paga ainda aguarda a entrega do ativo; a experiência do cliente deve deixar essa diferença clara.",
      "bullets": [
        "Registre o pedido, a referência externa e o identificador financeiro retornado.",
        "Receba e valide os webhooks, armazenando o resultado sem duplicar a baixa.",
        "Confira periodicamente o extrato e os itens ainda em processamento.",
        "Trate falhas, devoluções e disputas com uma fila de acompanhamento."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "limites",
      "kind": "PROSE",
      "heading": "Conciliação no seu software e cobertura de eventos",
      "body": "A Hodle fornece os dados e eventos documentados para montar essa rotina no seu ERP ou backend. Isso não significa que exista um conector pronto para todo sistema.\n\nA cobertura de eventos varia por recurso. Verifique a referência técnica do fluxo e use a consulta de status quando necessário, em vez de presumir que toda etapa da operação dispara um webhook.",
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
      "question": "O que é conciliação Pix?",
      "answer": "É a conferência entre cobranças, pagamentos e seus resultados financeiros. Ela relaciona o pedido ao valor recebido ou enviado e considera taxas, estados finais, devoluções e diferenças."
    },
    {
      "question": "Como confirmar um Pix automaticamente?",
      "answer": "Use o status da operação e os eventos previstos pelo fluxo integrado. Valide a assinatura do webhook e confira o resultado final. Um QR Code gerado ou um comprovante enviado pelo cliente não substituem essa confirmação."
    },
    {
      "question": "Qual a diferença entre endToEndId e txHash?",
      "answer": "O endToEndId identifica a transferência Pix. O txHash identifica a transação em blockchain. Em um fluxo com conversão, guarde ambos quando retornados para acompanhar as etapas correspondentes."
    },
    {
      "question": "A Hodle já integra a conciliação ao meu ERP?",
      "answer": "A API e os webhooks permitem desenvolver essa integração. A disponibilidade de um conector específico deve ser confirmada com o time; não presuma compatibilidade automática."
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
      "label": "BaaS e responsabilidades",
      "href": "/baas"
    },
    {
      "label": "Referência de webhooks",
      "href": "https://docs.hodle.com.br/docs/webhooks"
    },
    {
      "label": "Referência do extrato",
      "href": "https://docs.hodle.com.br/docs/account-statement"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
