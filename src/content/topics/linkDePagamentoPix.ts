import { TopicPage } from '../../types/topic'

export const linkDePagamentoPix: TopicPage = {
  "slug": "link-de-pagamento-pix",
  "title": "Link de pagamento Pix: cobre sem criar um checkout",
  "h1": "Link de pagamento Pix para vender por mensagem",
  "description": "Crie um link de pagamento Pix na Hodle e compartilhe no WhatsApp ou no seu site. Checkout hospedado com QR Code e liquidação no ativo habilitado da conta.",
  "keywords": [
    "link de pagamento Pix",
    "checkout Pix",
    "cobrar pelo WhatsApp",
    "link de cobrança",
    "pagamento online",
    "QR Code Pix"
  ],
  "primaryKeyword": "link de pagamento Pix",
  "updatedAt": "2026-09-22T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "PIX PARA EMPRESAS",
  "subhead": "Link de pagamento Pix é uma página que você compartilha para cobrar uma venda. Na Hodle, o checkout hospedado mostra o produto, coleta os dados do pagador e apresenta o QR Code, com liquidação no ativo habilitado para sua conta.",
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
    "href": "https://docs.hodle.com.br/docs/checkout"
  },
  "sections": [
    {
      "id": "sem-site",
      "kind": "PROSE",
      "heading": "Cobrar pelo WhatsApp ou pelo seu site",
      "body": "Você não precisa construir uma página de pagamento para cada venda. Cadastre o produto no painel ou pela API e compartilhe o link no canal em que atende seu cliente. O link abre uma página de checkout; o pagamento é concluído no aplicativo do banco do pagador.\n\nCompartilhar o link pelo WhatsApp não é uma integração automática de mensagens. Sua empresa escolhe o canal e envia o endereço ao cliente.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "criar-link",
      "kind": "STEPS",
      "heading": "Como criar um link de pagamento Pix",
      "body": "O checkout deve estar habilitado para a conta e ter um ativo e uma rede disponíveis para liquidação. Com isso definido, o cadastro do produto estabelece o que o cliente verá e pagará.",
      "bullets": [
        "Configure o ativo e a rede de recebimento entre as opções habilitadas.",
        "Cadastre nome, descrição e preço do produto em reais; defina o estoque quando necessário.",
        "Copie o link do produto e compartilhe com o cliente.",
        "Acompanhe o pedido até a confirmação e confira a liquidação no histórico."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "experiencia",
      "kind": "PROSE",
      "heading": "O que o cliente vê no checkout Pix",
      "body": "O cliente encontra o resumo do produto e os campos necessários para criar o pedido, incluindo CPF ou CNPJ. Depois, a página apresenta o QR Code, o Pix Copia e Cola e o prazo indicado para pagamento. O estado do pedido permite acompanhar a confirmação.\n\nO preço e o destino da liquidação vêm do produto e da configuração do vendedor. O cliente não escolhe outro endereço para receber os recursos. Do lado do pagador, a operação é um Pix em reais.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "recebimento",
      "kind": "PROSE",
      "heading": "Como a venda liquida para sua empresa",
      "body": "O pagamento entra pelo fluxo de Pix e a venda segue para liquidação no ativo e na rede configurados. As opções dependem da habilitação da conta; consulte a página do gateway para entender o recebimento em stablecoins.\n\nA existência do link não elimina as taxas, os limites ou as verificações cadastrais. Confirme as condições comerciais e o destino dos valores antes de publicar o produto.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "gestao",
      "kind": "PROSE",
      "heading": "Gerencie preço, estoque e status pela API",
      "body": "Quando o catálogo muda, a API permite atualizar o produto e pausar novas vendas. O pedido tem um identificador para acompanhar o status. Essa estrutura atende desde a venda por mensagem até um catálogo integrado ao seu software.",
      "bullets": [
        "POST /api/checkout/products: cria o produto.",
        "PATCH /api/checkout/products/:productId: atualiza preço, estoque ou status.",
        "GET /api/public/checkout/orders/:trackId: consulta o estado do pedido.",
        "As credenciais do vendedor ficam no seu backend; nunca no link público."
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
      "question": "Como criar um link de pagamento Pix?",
      "answer": "Habilite o checkout, configure o recebimento e cadastre um produto com preço em reais. A Hodle gera o link para compartilhar com o cliente. A API também permite criar e gerenciar os produtos."
    },
    {
      "question": "Preciso ter site para cobrar por link?",
      "answer": "Não. O checkout é hospedado pela Hodle. Você pode compartilhar o link por mensagem ou incluí-lo no seu site, sem desenvolver uma página de pagamento."
    },
    {
      "question": "O cliente precisa ter criptomoedas?",
      "answer": "Não. O cliente paga um Pix em reais. A liquidação no ativo configurado ocorre do lado de quem vende, de acordo com as condições da conta."
    },
    {
      "question": "Link de pagamento Pix é cobrança recorrente?",
      "answer": "Não necessariamente. O link descrito aqui cria pedidos avulsos. Ele não representa uma autorização de Pix Automático ou débito recorrente."
    }
  ],
  "related": [
    {
      "label": "Cobrança Pix por operação",
      "href": "/cobranca-pix"
    },
    {
      "label": "Gateway Pix para USDT",
      "href": "/gateway-de-pagamento-cripto"
    },
    {
      "label": "Produtos Pix",
      "href": "/pix"
    },
    {
      "label": "Preços e taxas",
      "href": "/precos"
    },
    {
      "label": "Referência do checkout",
      "href": "https://docs.hodle.com.br/docs/checkout"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
