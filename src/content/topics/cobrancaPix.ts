import { TopicPage } from '../../types/topic'

export const cobrancaPix: TopicPage = {
  "slug": "cobranca-pix",
  "title": "Cobrança Pix: QR Code e recebimento por API",
  "h1": "Cobrança Pix com QR Code para sua operação",
  "description": "Crie cobrança Pix com QR Code e Pix Copia e Cola na Hodle. Entenda o checkout, o depósito por API, a confirmação e as condições para receber de clientes.",
  "keywords": [
    "cobrança Pix",
    "Pix Cobrança",
    "QR Code Pix",
    "Pix Copia e Cola",
    "cobrança por API",
    "QR Code estático e dinâmico"
  ],
  "primaryKeyword": "cobrança Pix",
  "updatedAt": "2026-09-22T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "PIX PARA EMPRESAS",
  "subhead": "Cobrança Pix organiza o recebimento com um QR Code ou código Copia e Cola. Na Hodle, use o checkout para vendas ou a API de depósito para converter reais em ativos digitais, conforme as condições da conta.",
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
    "href": "https://docs.hodle.com.br/docs/deposit-asset"
  },
  "sections": [
    {
      "id": "qr-code",
      "kind": "PROSE",
      "heading": "QR Code Pix estático ou cobrança por operação",
      "body": "Um QR Code estático pode ser reutilizado. Uma cobrança criada para uma operação tem uma referência própria para acompanhar o pagamento. Essa diferença importa quando você precisa relacionar o recebimento a um pedido específico.\n\nNa Hodle, o checkout cria o pedido que será pago, enquanto a API de depósito devolve a cobrança da conversão solicitada. O recebimento automático por chave Pix é outro fluxo, com configuração e liberação próprias.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "criar",
      "kind": "STEPS",
      "heading": "Como criar uma cobrança Pix na Hodle",
      "body": "Comece pelo tipo de recebimento. Para uma venda, configure o produto no checkout. Para uma conversão por API, informe valor, ativo, rede e destino exigidos pela referência técnica.",
      "bullets": [
        "Defina o valor em reais e o ativo de liquidação disponível para sua conta.",
        "Crie o pedido ou depósito e guarde a referência da operação.",
        "Apresente o QR Code e o Pix Copia e Cola devolvidos pelo fluxo.",
        "Acompanhe a confirmação e confira o resultado no histórico ou no extrato."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "pagador",
      "kind": "PROSE",
      "heading": "Receber de clientes exige habilitação do fluxo",
      "body": "Uma cobrança de depósito, por padrão, só pode ser paga pelo titular da conta a que a operação pertence. Para receber de terceiros pela API de depósito, a conta precisa da habilitação correspondente e os dados exigidos do pagador.\n\nO checkout também precisa estar habilitado e ter um ativo de liquidação disponível. Validar essas condições antes de divulgar a cobrança evita que o cliente chegue a um pagamento que sua conta não pode receber.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "confirmacao",
      "kind": "PROSE",
      "heading": "Confirmação de pagamento e conciliação",
      "body": "Confirme o recebimento pelo estado da operação, não por uma captura de comprovante enviada pelo cliente. Na API, os eventos e as consultas permitem diferenciar criação, processamento, conclusão e falha.\n\nEm uma operação com conversão, receber reais e entregar o ativo são etapas distintas. Trate o resultado final e eventuais devoluções conforme a documentação para manter o pedido e o financeiro consistentes.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "modalidades",
      "kind": "PROSE",
      "heading": "Cobrança imediata, vencimento e Pix Automático",
      "body": "O ecossistema Pix inclui modalidades diferentes. Uma cobrança avulsa não equivale a uma autorização de Pix Automático, e gerar um QR Code não significa oferecer juros, multa, parcelamento ou cobrança recorrente.\n\nEsta página descreve os fluxos de checkout e depósito documentados pela Hodle. Se o seu projeto depende de vencimento, recorrência ou outra modalidade, confirme a disponibilidade com o time antes de contratar ou integrar.",
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
      "question": "O que é Pix Cobrança?",
      "answer": "É uma funcionalidade do Pix para organizar e receber cobranças. Na integração da Hodle, os fluxos documentados nesta página são o pedido do checkout e a cobrança de depósito para conversão em ativo digital."
    },
    {
      "question": "Como gerar um QR Code Pix para uma venda?",
      "answer": "Com checkout habilitado, crie o produto, compartilhe o link e deixe o cliente abrir o pedido. A página apresenta o QR Code e o Copia e Cola. Para um fluxo próprio, use a referência técnica aplicável."
    },
    {
      "question": "Qual a diferença entre QR Code estático e dinâmico?",
      "answer": "O estático pode ser reutilizado; o dinâmico está associado a dados de uma cobrança consultados pelo aplicativo pagador. Escolha o fluxo conforme a necessidade de identificar e conciliar cada recebimento."
    },
    {
      "question": "Posso cobrar qualquer CPF ou CNPJ pela API de depósito?",
      "answer": "Não por padrão. A cobrança de depósito exige pagamento pelo titular da conta da operação. Recebimento de terceiros precisa ser habilitado e respeitar os dados e condições aplicáveis."
    }
  ],
  "related": [
    {
      "label": "Link de pagamento Pix",
      "href": "/link-de-pagamento-pix"
    },
    {
      "label": "API Pix",
      "href": "/api-pix"
    },
    {
      "label": "Conciliação Pix",
      "href": "/conciliacao-pix"
    },
    {
      "label": "Receber por chave em stablecoin",
      "href": "/receber-pix-em-stablecoin"
    },
    {
      "label": "Referência de depósito",
      "href": "https://docs.hodle.com.br/docs/deposit-asset"
    },
    {
      "label": "Pix Cobrança no Banco Central",
      "href": "https://www.bcb.gov.br/estabilidadefinanceira/pix-cobranca"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
