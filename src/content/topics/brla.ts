import type { TopicPage } from '../../types/topic'

/** Canonical BRLA product guide, backed by public asset and API documentation. */
export const brla: TopicPage = {
  "slug": "brla",
  "title": "BRLA: comprar com Pix e pagar em reais",
  "h1": "BRLA: compre com Pix na Hodle",
  "description": "Compre BRLA com Pix na Hodle e conheça os fluxos em Polygon e Base. Entenda a stablecoin de real da Avenia, os pagamentos Pix e a diferença para BRS.",
  "keywords": [
    "BRLA",
    "comprar BRLA com Pix",
    "BRLA na Hodle",
    "BRLA para Pix",
    "BRLA Polygon",
    "BRLA Base",
    "BRS e BRLA"
  ],
  "primaryKeyword": "comprar BRLA com Pix",
  "updatedAt": "2026-09-29T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "BRLA NA HODLE",
  "subhead": "BRLA é a stablecoin de referência em reais emitida pela Avenia. Na Hodle, você compra com Pix e usa o saldo em transferências ou pagamentos habilitados. Os fluxos documentados de BRLA operam em Polygon e Base.",
  "heroIcons": [
    {
      "src": "/brla.png",
      "label": "BRLA"
    },
    {
      "src": "/pix.svg",
      "label": "Pix"
    },
    {
      "src": "/polygon.svg",
      "label": "Polygon"
    },
    {
      "src": "/base.png",
      "label": "Base"
    }
  ],
  "ctaSubhead": "Confira a disponibilidade de BRLA e as condições do fluxo na sua conta Hodle.",
  "ctaPrimary": {
    "label": "Comprar BRLA na Hodle",
    "href": "https://app.hodle.com.br/register"
  },
  "ctaSecondary": {
    "label": "Ver ativos e redes da API",
    "href": "https://docs.hodle.com.br/docs/assets"
  },
  "sections": [
    {
      "id": "o-que-e",
      "kind": "PROSE",
      "heading": "O que é BRLA e onde entra a Hodle?",
      "body": "BRLA é um token com paridade de referência de 1 BRLA para R$ 1. A Avenia é a emissora e publica informações sobre o lastro do ativo. A Hodle é a plataforma que conecta sua conta, carteira, Pix e integração por API; não é a emissora do BRLA.",
      "bullets": [
        "BRL é o real brasileiro; BRLA é um ativo digital que busca acompanhar essa moeda.",
        "A paridade de referência não elimina os riscos do emissor, da rede ou da operação."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "BRLA: definição e reservas na Avenia",
          "href": "https://avenia.io/brla"
        },
        {
          "label": "Papel da Hodle e dos parceiros",
          "href": "/termos"
        }
      ]
    },
    {
      "id": "comprar-com-pix",
      "kind": "STEPS",
      "heading": "Como comprar BRLA com Pix na Hodle",
      "body": "Comece com uma conta verificada e confira se BRLA e a rede desejada estão disponíveis no seu fluxo. A confirmação do Pix e a entrega do token são etapas distintas.",
      "bullets": [
        "Conclua o cadastro e a verificação exigida para a operação.",
        "Selecione BRLA e a rede disponível; confirme o endereço compatível que receberá o ativo.",
        "Confira o valor líquido, as taxas e os limites antes de gerar a cobrança Pix.",
        "Pague a cobrança e acompanhe o status até a confirmação da entrega na carteira."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Contrato de compra por API",
          "href": "https://docs.hodle.com.br/docs/deposit-asset"
        },
        {
          "label": "Preços e condições",
          "href": "/precos"
        }
      ]
    },
    {
      "id": "brla-para-pix",
      "kind": "PROSE",
      "heading": "Como usar BRLA para pagar Pix?",
      "body": "Com saldo e funcionalidade habilitados, a Hodle permite financiar um pagamento Pix com BRLA. Quem recebe tem crédito em reais; não precisa receber o token. Para enviar BRLA a uma carteira, use o fluxo de transferência on-chain.",
      "bullets": [
        "Confira a titularidade da chave ou os dados do QR Code antes de confirmar.",
        "Consulte o valor total debitado, incluindo as taxas aplicáveis.",
        "Uma solicitação aceita ainda precisa ser acompanhada até o status final."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Pagamento Pix com saldo de stablecoin",
          "href": "https://docs.hodle.com.br/docs/wallet-payout"
        },
        {
          "label": "Transferência de BRLA entre carteiras",
          "href": "https://docs.hodle.com.br/docs/wallet-transfer"
        }
      ]
    },
    {
      "id": "brla-ou-brs",
      "kind": "COMPARISON",
      "heading": "BRLA ou BRS: qual a diferença na Hodle?",
      "body": "Os dois ativos têm referência no real, mas são tokens distintos. Escolha pela rede, pelo destino e pelo fluxo disponível na sua conta; um endereço de uma rede não substitui o de outra.",
      "bullets": [],
      "icons": [],
      "comparison": {
        "headers": [
          "Critério",
          "BRLA",
          "BRS"
        ],
        "rows": [
          [
            "Ecossistema do ativo",
            "Avenia",
            "Nora Finance"
          ],
          [
            "Compra documentada na Hodle",
            "Polygon ou Base, conforme habilitação",
            "Solana, na carteira da própria conta"
          ],
          [
            "Destino da compra",
            "Endereço compatível informado na operação",
            "Carteira Solana da própria conta Hodle"
          ],
          [
            "Pagamento em reais",
            "Pix com saldo e funcionalidade habilitados",
            "Pix com saldo e funcionalidade habilitados"
          ]
        ]
      },
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Comprar BRS com Pix na Hodle",
          "href": "/brs"
        },
        {
          "label": "Entenda o real onchain",
          "href": "/real-onchain"
        }
      ]
    },
    {
      "id": "api",
      "kind": "PROSE",
      "heading": "Como integrar BRLA na API da Hodle",
      "body": "A integração informa ativo, rede e destino em cada operação. Compra, transferência de saldo e pagamento Pix têm contratos diferentes. Use a documentação correspondente para validar os campos, a autenticação e a forma de acompanhar a conclusão.",
      "bullets": [
        "Comprar com Pix: POST /api/deposit/asset, com BRLA, rede e endereço de destino.",
        "Transferir um saldo existente: POST /api/wallet/transfer.",
        "Pagar Pix a partir do saldo: POST /api/wallet/payout."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Matriz de ativos e redes da Hodle",
          "href": "https://docs.hodle.com.br/docs/assets"
        },
        {
          "label": "Sandbox: escopo dos testes",
          "href": "https://docs.hodle.com.br/docs/sandbox"
        },
        {
          "label": "Documentação para integrar Pix",
          "href": "/api-pix"
        }
      ]
    },
    {
      "id": "condicoes",
      "kind": "PROSE",
      "heading": "Taxas, disponibilidade e informações do ativo",
      "body": "Confira preços e condições na Hodle e as informações de emissão e reservas na Avenia. Ter BRLA na carteira não significa contratar um produto de rendimento na Hodle. Aplicações em protocolos de terceiros têm condições próprias.",
      "bullets": [
        "As redes e operações disponíveis dependem da conta e de sua habilitação.",
        "O sandbox usa ativos de teste; ele não representa uma compra de BRLA real.",
        "Conteúdo revisado em 29 de setembro de 2026."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null,
      "links": [
        {
          "label": "Fonte do ativo: BRLA na Avenia",
          "href": "https://avenia.io/brla"
        },
        {
          "label": "Preços da Hodle",
          "href": "/precos"
        }
      ]
    }
  ],
  "faqSubhead": "Respostas para quem busca BRLA, compra com Pix e pagamentos na Hodle.",
  "faq": [
    {
      "question": "Onde comprar BRLA com Pix?",
      "answer": "Na Hodle, você pode iniciar a compra de BRLA com Pix em uma conta verificada e com o fluxo disponível. Confira a rede, o endereço de destino, o valor líquido e as taxas antes de pagar. A entrega do token deve ser acompanhada até a conclusão."
    },
    {
      "question": "A Hodle emite o BRLA?",
      "answer": "Não. BRLA é emitido pela Avenia. A Hodle oferece a plataforma, a carteira e as integrações para operar o ativo nos fluxos habilitados, conforme os termos e a disponibilidade da conta."
    },
    {
      "question": "BRLA é igual a BRL?",
      "answer": "BRL é o código do real brasileiro. BRLA é uma stablecoin privada com referência de 1 para 1 nessa moeda. Uma unidade do token não é a mesma coisa que um saldo bancário em reais e está sujeita às condições do ativo e da operação."
    },
    {
      "question": "Em quais redes posso usar BRLA na Hodle?",
      "answer": "Os fluxos documentados de compra, transferência e pagamento com BRLA na Hodle incluem Polygon e Base. Confirme a combinação disponível na sua conta e nunca use uma rede diferente da indicada pelo destinatário."
    },
    {
      "question": "Posso converter BRLA em Pix na Hodle?",
      "answer": "Com saldo e funcionalidade habilitados, o pagamento Pix da Hodle pode usar BRLA como origem. Confirme o beneficiário e o valor total, envie a solicitação e acompanhe o status. O destinatário recebe reais via Pix."
    },
    {
      "question": "Qual a diferença entre BRS e BRLA?",
      "answer": "BRLA é emitido pela Avenia; BRS pertence ao ecossistema Nora Finance. Na Hodle, a compra documentada de BRLA usa Polygon ou Base, enquanto a compra de BRS entrega na carteira Solana da própria conta. Ambos têm referência no real e condições de uso distintas."
    },
    {
      "question": "BRLA rende automaticamente na Hodle?",
      "answer": "Manter BRLA na carteira não significa contratar rendimento na Hodle. A Avenia apresenta usos do ativo em plataformas de terceiros, mas essas aplicações são operações separadas e têm condições e riscos próprios."
    },
    {
      "question": "Qual é a taxa para comprar ou pagar Pix com BRLA?",
      "answer": "Use a página de preços da Hodle e os valores mostrados para sua operação. A paridade do ativo com o real não significa que compra, transferência e pagamento tenham a mesma tarifa ou sejam gratuitos."
    }
  ],
  "related": [
    {
      "label": "BRS na Hodle",
      "href": "/brs"
    },
    {
      "label": "Real onchain",
      "href": "/real-onchain"
    },
    {
      "label": "Pix para empresas",
      "href": "/pix"
    },
    {
      "label": "Preços e taxas",
      "href": "/precos"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
