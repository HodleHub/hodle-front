import { TopicPage } from '../../types/topic'

export const baas: TopicPage = {
  "slug": "baas",
  "title": "BaaS: Banking as a Service, Pix e APIs",
  "h1": "BaaS: conecte Pix, contas e stablecoins ao seu produto",
  "description": "Entenda BaaS, Banking as a Service e embedded finance. Conheça a camada de tecnologia da Hodle para integrar Pix, contas via parceiros e ativos digitais.",
  "keywords": [
    "BaaS",
    "Banking as a Service",
    "embedded finance",
    "infraestrutura financeira",
    "serviços financeiros por API",
    "contas digitais via API"
  ],
  "primaryKeyword": "BaaS",
  "updatedAt": "2026-09-22T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "INFRAESTRUTURA PARA FINTECHS",
  "subhead": "BaaS, ou Banking as a Service, conecta produtos digitais a serviços financeiros por meio de APIs e instituições autorizadas. A Hodle fornece a camada de software para integrar Pix, contas via parceiros e ativos digitais à operação da sua empresa.",
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
      "id": "o-que-e",
      "kind": "PROSE",
      "heading": "O que é Banking as a Service",
      "body": "No modelo Banking as a Service, uma empresa incorpora serviços financeiros ao seu produto usando a infraestrutura de uma instituição autorizada. A jornada pode acontecer no software da empresa, mas a prestação do serviço financeiro continua sujeita ao contrato e às responsabilidades de cada participante.\n\nEmbedded finance é o contexto mais amplo: serviços financeiros dentro de uma experiência de compra, gestão ou operação. BaaS é um dos modelos de infraestrutura que pode viabilizar essa experiência.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "hodle",
      "kind": "COMPARISON",
      "heading": "Onde a Hodle entra na infraestrutura financeira",
      "body": "A Hodle oferece plataforma e API para orquestrar fluxos de Pix, contas por meio de parceiros e carteiras auto-custodiais. Sua empresa integra o produto; a Hodle conecta as operações documentadas; os parceiros conduzem os serviços financeiros e o fluxo regulado de fundos.\n\nA Hodle não é banco nem instituição financeira e não assume as licenças dos parceiros. Uma integração não dispensa sua empresa de avaliar as obrigações do próprio modelo de negócio.",
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
            "Jornada e experiência do cliente",
            "Sua empresa integra painel, API ou checkout",
            "Definir produto, consentimentos e atendimento"
          ],
          [
            "Software e orquestração",
            "Hodle conecta os fluxos documentados",
            "Recursos e limites habilitados por conta"
          ],
          [
            "Conta e serviço financeiro",
            "Instituição parceira presta o serviço",
            "Onboarding, aprovação, KYC/KYB e contrato"
          ],
          [
            "Carteira auto-custodial",
            "Usuário controla as chaves",
            "Responsabilidade pela guarda e uso das chaves"
          ]
        ]
      },
      "code": null,
      "image": null
    },
    {
      "id": "produtos",
      "kind": "PROSE",
      "heading": "Pix, subcontas e contas digitais via API",
      "body": "A API permite identificar clientes por subconta e operar os fluxos habilitados. Uma conta nominal PJ é uma etapa própria: depende de abertura e aprovação na instituição parceira, com a titularidade no CNPJ da empresa. Uma subconta de API não é automaticamente uma conta bancária.\n\nA conexão com ativos digitais permite converter reais via Pix, pagar em reais usando saldo em stablecoin e acompanhar operações por webhooks e extrato. Ativos, redes, pagadores permitidos e condições variam conforme o fluxo.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "avaliacao",
      "kind": "PROSE",
      "heading": "Como avaliar uma solução BaaS para sua empresa",
      "body": "Compare a operação de que você precisa, além do nome da categoria. Um projeto de conta PJ, um gateway de vendas e uma operação de tesouraria com stablecoins exigem conjuntos diferentes de serviços.",
      "bullets": [
        "Titularidade: em nome de quem fica a conta e qual instituição presta o serviço?",
        "Cobertura: quais fluxos de Pix, ativos, redes e perfis de cliente estão disponíveis?",
        "Operação: como consultar status, conciliar, tratar falha, devolução e disputa?",
        "Comercial: quais taxas, limites, responsabilidades e condições estão no contrato?",
        "Integração: o que pode ser testado em sandbox e o que depende de aprovação em produção?"
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "implantacao",
      "kind": "PROSE",
      "heading": "Da integração em sandbox à operação aprovada",
      "body": "Teste primeiro os fluxos de API cobertos pelo sandbox, sem dinheiro real. A abertura de conta nominal PJ está disponível só em produção e depende da análise cadastral e da aprovação aplicáveis.\n\nO primeiro passo com a Hodle é apresentar seu fluxo: quem são os clientes, quem recebe, quais valores circulam e qual é o destino dos recursos. Com esse desenho, o time confirma a combinação de software, parceiros e produtos disponível para o projeto.",
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
      "question": "O que é BaaS?",
      "answer": "BaaS significa Banking as a Service. É um modelo que permite integrar serviços financeiros a produtos de outras empresas usando APIs e a infraestrutura de instituições autorizadas."
    },
    {
      "question": "Qual a diferença entre BaaS e embedded finance?",
      "answer": "Embedded finance descreve a presença de serviços financeiros dentro de outra experiência, como um software de gestão. BaaS descreve um modelo de infraestrutura para disponibilizar esses serviços via integração."
    },
    {
      "question": "A Hodle é uma instituição prestadora de BaaS regulada?",
      "answer": "A Hodle atua como software, plataforma e camada de integração. Ela não é banco nem instituição financeira. A prestação dos serviços financeiros e os fluxos regulados são conduzidos por parceiros licenciados ou regulados."
    },
    {
      "question": "Quais componentes a Hodle oferece para um projeto de BaaS?",
      "answer": "A Hodle integra fluxos de Pix, contas PJ por parceiros, subcontas de clientes, carteiras auto-custodiais e operações com ativos digitais, conforme habilitação. Cada componente tem requisitos próprios; conta nominal exige aprovação e está disponível só em produção."
    }
  ],
  "related": [
    {
      "label": "Conta digital PJ",
      "href": "/conta-digital-pj"
    },
    {
      "label": "Produtos Pix",
      "href": "/pix"
    },
    {
      "label": "API Pix",
      "href": "/api-pix"
    },
    {
      "label": "Crypto as a Service",
      "href": "/crypto-as-a-service"
    },
    {
      "label": "Neobank",
      "href": "/neobank"
    },
    {
      "label": "Termos da Hodle",
      "href": "/termos"
    },
    {
      "label": "Banco Central: modelo BaaS",
      "href": "https://www.bcb.gov.br/detalhenoticia/20950/nota"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
