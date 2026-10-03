export type BrsCopy = {
  hero: {
    eyebrow: string
    title: string
    metadataTitle: string
    availability: string
    description: string
    issuer: string
    buyCta: string
    apiCta: string
    mapLabel: string
  }
  valueProps: {
    eyebrow: string
    title: string
    items: { title: string; desc: string }[]
  }
  howItWorks: {
    eyebrow: string
    title: string
    steps: { number: string; title: string; desc: string }[]
  }
  useCases: {
    eyebrow: string
    title: string
    items: { title: string; desc: string }[]
    closingLead: string
    closingHighlight: string
  }
  developer: {
    eyebrow: string
    title: string
    description: string
    items: string[]
    docsCta: string
  }
  faq: {
    eyebrow: string
    title: string
    items: { question: string; answer: string }[]
  }
  finalCta: {
    eyebrow: string
    title: string
    description: string
    buyCta: string
  }
  resources: {
    title: string
    reviewed: string
    links: { label: string; href: string }[]
  }
  codeComment: string
}

export const brsCopy: Record<'pt' | 'en', BrsCopy> = {
  "pt": {
    "hero": {
      "eyebrow": "BRS na Hodle",
      "title": "BRS: compre com Pix na Hodle",
      "metadataTitle": "BRS: comprar com Pix e pagar em reais",
      "description": "BRS é a stablecoin vinculada ao real do ecossistema Nora Finance. Na Hodle, compre BRS com Pix, receba na sua carteira Solana e use o saldo nos fluxos de transferência e pagamento habilitados para sua conta.",
      "availability": "Disponível só em produção, após aprovação cadastral e habilitação de BRS na conta.",
      "issuer": "BRS · Nora Finance",
      "buyCta": "Comprar BRS na Hodle",
      "apiCta": "Integrar BRS por API",
      "mapLabel": "São Paulo"
    },
    "valueProps": {
      "eyebrow": "BRS e Hodle",
      "title": "O ativo em reais. A operação na Hodle.",
      "items": [
        {
          "title": "Referência de 1 BRS para R$ 1",
          "desc": "A Nora apresenta o BRS como um ativo lastreado com paridade de referência em reais. Consulte as informações de reservas na fonte oficial."
        },
        {
          "title": "Compra com Pix",
          "desc": "Gere a cobrança na Hodle e acompanhe a entrega. A confirmação do Pix e a chegada do BRS à carteira são etapas diferentes."
        },
        {
          "title": "Sua carteira Solana",
          "desc": "Por padrão, a compra entrega BRS na carteira Solana da própria conta. A entrega direta a um endereço externo exige habilitação específica e taxa de entrega."
        },
        {
          "title": "Plataforma e API da Hodle",
          "desc": "A Hodle conecta a compra, a carteira e os pagamentos. A emissão do ativo segue o ecossistema Nora; a Hodle não emite a stablecoin."
        }
      ]
    },
    "howItWorks": {
      "eyebrow": "Passo a passo",
      "title": "Como comprar BRS com Pix na Hodle",
      "steps": [
        {
          "number": "01",
          "title": "Prepare a conta",
          "desc": "Conclua a verificação cadastral, confirme a habilitação de BRS e tenha uma carteira Solana na Hodle."
        },
        {
          "number": "02",
          "title": "Confira e pague o Pix",
          "desc": "Escolha BRS, confira o valor líquido, as condições e o mínimo aplicável antes de pagar a cobrança."
        },
        {
          "number": "03",
          "title": "Acompanhe a entrega",
          "desc": "Acompanhe a chegada do BRS à carteira de destino confirmada na compra. Não use a confirmação do Pix como confirmação de entrega."
        },
        {
          "number": "04",
          "title": "Transfira ou pague",
          "desc": "Com saldo disponível, use a transferência on-chain ou o pagamento Pix habilitado e acompanhe o status até a conclusão."
        }
      ]
    },
    "useCases": {
      "eyebrow": "Usos na plataforma",
      "title": "O que fazer com BRS na Hodle",
      "items": [
        {
          "title": "Comprar BRS com reais",
          "desc": "Entre por Pix em uma conta habilitada e receba o token na sua própria carteira Solana."
        },
        {
          "title": "Consultar saldo da carteira",
          "desc": "Acompanhe o saldo BRS e as operações na Hodle. Consulte a carteira após a confirmação de entrega."
        },
        {
          "title": "Transferir BRS on-chain",
          "desc": "Envie um saldo já disponível para um endereço compatível. Transferir tokens é um fluxo diferente de pagar Pix."
        },
        {
          "title": "Pagar uma chave ou QR Code Pix",
          "desc": "Use BRS para financiar um pagamento em reais, com o destinatário conferido e a funcionalidade liberada."
        },
        {
          "title": "Integrar o produto por API",
          "desc": "Conecte cadastro, compra, consulta e pagamentos ao seu sistema, respeitando as permissões de cada conta."
        },
        {
          "title": "Conciliar cada etapa",
          "desc": "Associe a cobrança ao pedido e acompanhe consulta de status e eventos. Uma operação pendente ainda não é uma operação concluída."
        }
      ],
      "closingLead": "Escolha o fluxo pelo destino do dinheiro.",
      "closingHighlight": "BRS na carteira ou reais via Pix."
    },
    "developer": {
      "eyebrow": "Para desenvolvedores",
      "title": "API da Hodle para BRS e Pix",
      "description": "A compra usa POST /api/deposit/asset com BRS e solana. O valor é informado em centavos. Este exemplo usa a entrega padrão à carteira Solana da própria conta; entrega externa exige habilitação e taxa específicas. A entrega é assíncrona e deve ser acompanhada conforme a documentação.",
      "items": [
        "Conta de produção aprovada, BRS habilitado e carteira Solana criada",
        "Compra padrão sem campo de endereço; confira os requisitos de entrega externa na documentação",
        "Pagamento Pix do saldo em /api/wallet/payout, sujeito à habilitação"
      ],
      "docsCta": "Ver o guia BRS da Hodle"
    },
    "faq": {
      "eyebrow": "Perguntas sobre BRS",
      "title": "BRS, Pix e Hodle: respostas diretas",
      "items": [
        {
          "question": "O que é BRS e qual a relação com a Hodle?",
          "answer": "BRS é uma stablecoin de referência em reais do ecossistema Nora Finance. A Hodle oferece acesso à compra com Pix, carteira e integração de pagamentos para contas habilitadas. A Hodle não é a emissora do BRS."
        },
        {
          "question": "Onde comprar BRS com Pix?",
          "answer": "Na Hodle, uma conta aprovada e habilitada para BRS pode gerar uma compra com Pix. Prepare sua carteira Solana, confira o destino e as condições e acompanhe o status até a confirmação da entrega."
        },
        {
          "question": "Posso comprar BRS para uma carteira de terceiros?",
          "answer": "Sim, com habilitação específica para entrega externa. Por padrão, a compra entrega na carteira Solana da própria conta. Para entregar diretamente a outro endereço Solana, a conta precisa estar autorizada e ter saldo BRS na sua carteira Hodle para pagar a taxa de entrega. Confira os requisitos e a taxa antes de gerar o Pix. Também é possível comprar para a própria carteira e transferir depois."
        },
        {
          "question": "Como transformar BRS em Pix ou pagar um QR Code?",
          "answer": "Na Hodle, o saldo BRS pode financiar um pagamento para chave Pix ou QR Code, com a função de pagamento habilitada. Confirme o beneficiário, o valor e o status final. A solicitação pode ficar pendente enquanto a liquidação é processada."
        },
        {
          "question": "Em qual rede a Hodle opera a compra de BRS?",
          "answer": "A compra documentada de BRS na Hodle usa Solana. Confirme o ativo e a rede indicados na operação; suporte do ecossistema Nora a outras redes não implica disponibilidade do mesmo fluxo na Hodle."
        },
        {
          "question": "Qual a diferença entre BRS e BRLA na Hodle?",
          "answer": "São ativos distintos com referência no real. BRS pertence ao ecossistema Nora e a compra na Hodle usa Solana. BRLA é emitido pela Avenia e os fluxos documentados da Hodle usam Polygon ou Base, conforme a operação e a habilitação da conta."
        },
        {
          "question": "Qual o custo para comprar BRS?",
          "answer": "Confira o valor líquido mostrado na operação e as condições da sua conta. O tratamento de custos pode variar por configuração; a paridade de referência com o real não garante que toda operação tenha custo zero."
        },
        {
          "question": "BRS rende automaticamente na Hodle?",
          "answer": "Manter BRS na carteira não significa contratar um produto de rendimento na Hodle. Uso em um protocolo de terceiros é uma operação separada, com condições e riscos próprios; esta página descreve compra, transferência e pagamentos."
        },
        {
          "question": "BRS funciona no sandbox da Hodle?",
          "answer": "Não. BRS está disponível só em produção na Hodle, com aprovação cadastral e habilitação por conta. O sandbox não reproduz a operação real de BRS em Solana."
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Comece pela sua conta",
      "title": "Compre e movimente BRS na Hodle",
      "description": "Confira a habilitação de BRS, prepare sua carteira e veja as condições antes de gerar o Pix.",
      "buyCta": "Abrir conta na Hodle"
    },
    "resources": {
      "title": "Fontes e próximos passos",
      "reviewed": "Conteúdo revisado em 3 de outubro de 2026.",
      "links": [
        {
          "label": "BRS: guia de compra e pagamento da Hodle",
          "href": "https://docs.hodle.com.br/docs/asset-brs"
        },
        {
          "label": "BRS no ecossistema Nora Finance",
          "href": "https://www.nora.finance/"
        },
        {
          "label": "BRLA com Pix na Hodle",
          "href": "/brla"
        },
        {
          "label": "Entenda o real onchain",
          "href": "/real-onchain"
        },
        {
          "label": "Preços e condições",
          "href": "/precos"
        },
        {
          "label": "Papel da Hodle e dos parceiros",
          "href": "/termos"
        }
      ]
    },
    "codeComment": "Compra BRS: valor em centavos; entrega na sua carteira Solana."
  },
  "en": {
    "hero": {
      "eyebrow": "BRS at Hodle",
      "title": "BRS: buy with Pix on Hodle",
      "metadataTitle": "BRS: buy with Pix and pay in Brazilian reais",
      "description": "BRS is the Brazilian Real stablecoin in the Nora Finance ecosystem. On Hodle, buy BRS with Pix, receive it in your Solana wallet and use the transfer and payment flows enabled for your account.",
      "availability": "Available only in production, after account approval and BRS enablement.",
      "issuer": "BRS · Nora Finance",
      "buyCta": "Buy BRS on Hodle",
      "apiCta": "Integrate the BRS API",
      "mapLabel": "São Paulo"
    },
    "valueProps": {
      "eyebrow": "BRS and Hodle",
      "title": "The BRL asset. Your workflow on Hodle.",
      "items": [
        {
          "title": "A reference peg of 1 BRS to R$ 1",
          "desc": "Nora describes BRS as a reserve-backed asset pegged to the Brazilian Real. Consult the official reserve information."
        },
        {
          "title": "Buy with Pix",
          "desc": "Create a payment request on Hodle and follow delivery. Pix payment confirmation and BRS arrival in the wallet are separate steps."
        },
        {
          "title": "Your Solana wallet",
          "desc": "By default, a BRS purchase delivers to the account’s own Solana wallet. Direct delivery to an external address requires separate enablement and a delivery fee."
        },
        {
          "title": "Hodle platform and API",
          "desc": "Hodle connects purchases, wallets and payments. Asset issuance belongs to the Nora ecosystem; Hodle does not issue the stablecoin."
        }
      ]
    },
    "howItWorks": {
      "eyebrow": "Step by step",
      "title": "How to buy BRS with Pix on Hodle",
      "steps": [
        {
          "number": "01",
          "title": "Prepare your account",
          "desc": "Complete identity verification, confirm BRS enablement and create a Solana wallet on Hodle."
        },
        {
          "number": "02",
          "title": "Review and pay with Pix",
          "desc": "Select BRS and check the net amount, conditions and applicable minimum before paying."
        },
        {
          "number": "03",
          "title": "Follow delivery",
          "desc": "Track BRS delivery to the destination wallet confirmed for the purchase. Pix confirmation alone does not confirm token delivery."
        },
        {
          "number": "04",
          "title": "Transfer or pay",
          "desc": "Use an available balance for an enabled on-chain transfer or Pix payment and follow its status through completion."
        }
      ]
    },
    "useCases": {
      "eyebrow": "Platform use cases",
      "title": "What you can do with BRS on Hodle",
      "items": [
        {
          "title": "Buy BRS with reais",
          "desc": "Pay with Pix through an enabled account and receive the token in your own Solana wallet."
        },
        {
          "title": "Check wallet balances",
          "desc": "Follow your BRS balance and operations on Hodle. Check the wallet after delivery confirmation."
        },
        {
          "title": "Transfer BRS on-chain",
          "desc": "Send an available balance to a compatible address. A token transfer is a different flow from a Pix payment."
        },
        {
          "title": "Pay a Pix key or QR code",
          "desc": "Use BRS to fund a payment in reais after verifying the beneficiary and enabling the payment feature."
        },
        {
          "title": "Integrate through the API",
          "desc": "Connect onboarding, purchases, queries and payments to your product, subject to each account’s permissions."
        },
        {
          "title": "Reconcile each step",
          "desc": "Match the payment request to your order and follow status queries and events. A pending operation is not a completed operation."
        }
      ],
      "closingLead": "Choose the flow by its destination.",
      "closingHighlight": "BRS in a wallet or reais through Pix."
    },
    "developer": {
      "eyebrow": "For developers",
      "title": "Hodle API for BRS and Pix",
      "description": "Purchases use POST /api/deposit/asset with BRS and solana. The value is in BRL cents. This example uses default delivery to the account’s own Solana wallet; external delivery requires separate enablement and a fee. Delivery is asynchronous and must be tracked as documented.",
      "items": [
        "Approved production account, BRS enabled and a Solana wallet created",
        "Default purchases omit the address field; check the documentation for external delivery requirements",
        "Pix payments from the balance use /api/wallet/payout, subject to enablement"
      ],
      "docsCta": "Read the Hodle BRS guide"
    },
    "faq": {
      "eyebrow": "BRS questions",
      "title": "BRS, Pix and Hodle: direct answers",
      "items": [
        {
          "question": "What is BRS and how is it related to Hodle?",
          "answer": "BRS is a Brazilian Real stablecoin in the Nora Finance ecosystem. Hodle provides Pix purchases, wallets and payment integrations for enabled accounts. Hodle does not issue BRS."
        },
        {
          "question": "Where can I buy BRS with Pix?",
          "answer": "On Hodle, an approved account with BRS enabled can create a Pix purchase. Prepare your Solana wallet, confirm the destination and conditions, and track the operation until delivery is confirmed."
        },
        {
          "question": "Can I buy BRS for a third-party wallet?",
          "answer": "Yes, with separate external-delivery enablement. By default, purchases deliver to the account’s own Solana wallet. Direct delivery to another Solana address requires authorization and a BRS balance in the account’s Hodle wallet to pay the delivery fee. Check the requirements and fee before creating the Pix charge. You can also buy into your own wallet and transfer afterward."
        },
        {
          "question": "How can I convert BRS to Pix or pay a QR code?",
          "answer": "On Hodle, a BRS balance can fund a payment to a Pix key or QR code when the payment feature is enabled. Confirm the beneficiary, amount and final status. A request can remain pending while settlement is processed."
        },
        {
          "question": "Which network does Hodle use for BRS purchases?",
          "answer": "The documented BRS purchase flow on Hodle uses Solana. Check the asset and network shown for your operation; Nora ecosystem support for other networks does not imply that the same flow is available on Hodle."
        },
        {
          "question": "How do BRS and BRLA differ on Hodle?",
          "answer": "They are distinct BRL-pegged assets. BRS belongs to the Nora ecosystem and Hodle purchases use Solana. BRLA is issued by Avenia and documented Hodle flows use Polygon or Base, depending on the operation and account enablement."
        },
        {
          "question": "What does buying BRS cost?",
          "answer": "Check the net amount shown for the operation and your account conditions. Cost treatment can vary by configuration; a peg to the real does not mean every operation has zero cost."
        },
        {
          "question": "Does BRS earn automatically on Hodle?",
          "answer": "Holding BRS in a wallet does not mean you have subscribed to a yield product on Hodle. Using a third-party protocol is a separate operation with its own conditions and risks; this page describes purchases, transfers and payments."
        },
        {
          "question": "Does BRS work in the Hodle sandbox?",
          "answer": "No. BRS is available only in production on Hodle, after account approval and enablement. The sandbox does not reproduce a real BRS operation on Solana."
        }
      ]
    },
    "finalCta": {
      "eyebrow": "Start with your account",
      "title": "Buy and move BRS on Hodle",
      "description": "Confirm BRS enablement, prepare your wallet and review the conditions before creating a Pix payment request.",
      "buyCta": "Open a Hodle account"
    },
    "resources": {
      "title": "Sources and next steps",
      "reviewed": "Content reviewed on October 3, 2026.",
      "links": [
        {
          "label": "Hodle BRS purchase and payment guide",
          "href": "https://docs.hodle.com.br/docs/asset-brs"
        },
        {
          "label": "BRS in the Nora Finance ecosystem",
          "href": "https://www.nora.finance/"
        },
        {
          "label": "BRLA with Pix on Hodle (Português)",
          "href": "/brla"
        },
        {
          "label": "Real onchain explained (Português)",
          "href": "/real-onchain"
        },
        {
          "label": "Pricing and conditions (Português)",
          "href": "/precos"
        },
        {
          "label": "Hodle and its partners (Português)",
          "href": "/termos"
        }
      ]
    },
    "codeComment": "BRS purchase: value in BRL cents; delivery to your Solana wallet."
  }
}
