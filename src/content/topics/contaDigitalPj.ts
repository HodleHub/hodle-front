import { TopicPage } from '../../types/topic'

export const contaDigitalPj: TopicPage = {
  "slug": "conta-digital-pj",
  "title": "Conta digital PJ com Pix via parceiros",
  "h1": "Conta digital PJ no nome da sua empresa",
  "description": "Conheça a conta digital PJ nominal integrada pela Hodle, com Pix via instituição parceira. Abertura em produção sujeita a aprovação cadastral e KYB.",
  "keywords": [
    "conta digital PJ",
    "conta PJ com Pix",
    "conta nominal PJ",
    "conta empresarial",
    "conta para empresas",
    "subcontas"
  ],
  "primaryKeyword": "conta digital PJ",
  "updatedAt": "2026-09-22T00:00:00Z",
  "changeFrequency": "monthly",
  "priority": 0.8,
  "kicker": "DISPONÍVEL SÓ EM PRODUÇÃO",
  "subhead": "Conta digital PJ nominal é uma conta no CNPJ da empresa, aberta na instituição parceira com acompanhamento pela plataforma da Hodle. A abertura depende de aprovação e KYB. Disponível só em produção.",
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
  "ctaSubhead": "Apresente o perfil da sua empresa para confirmar a elegibilidade, o onboarding e as condições de abertura.",
  "ctaPrimary": {
    "label": "Falar com vendas",
    "href": "https://api.whatsapp.com/send?phone=5511960000445"
  },
  "ctaSecondary": {
    "label": "Ver requisitos de integração",
    "href": "https://docs.hodle.com.br/docs/integration-guide"
  },
  "sections": [
    {
      "id": "titularidade",
      "kind": "PROSE",
      "heading": "Conta nominal PJ: titularidade e responsabilidades",
      "body": "A conta nominal pertence à empresa identificada pelo CNPJ na instituição que a aprova. Ela tem identidade própria para os serviços disponibilizados pelo parceiro. A Hodle fornece a integração e o acompanhamento do fluxo.\n\nUma subconta usada para identificar um cliente na API não equivale, por si só, a essa conta nominal. A abertura é um processo adicional, sujeito aos documentos e à aprovação exigidos pela instituição.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "abertura",
      "kind": "STEPS",
      "heading": "Como funciona a abertura da conta empresarial",
      "body": "A abertura começa pela avaliação do perfil da empresa e do uso pretendido. O time confirma a elegibilidade e orienta o representante sobre o cadastro exigido pelo parceiro. Depois, a conta passa pelas etapas de aprovação e KYB aplicáveis.",
      "bullets": [
        "Apresente o perfil da empresa, o volume esperado e o uso pretendido ao time da Hodle.",
        "Confira as condições comerciais e os documentos necessários para o cadastro.",
        "Conclua o onboarding com os dados da empresa e dos responsáveis.",
        "Aguarde a aprovação final antes de usar a conta para transacionar."
      ],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "pix",
      "kind": "PROSE",
      "heading": "Pix e integração com a operação da empresa",
      "body": "Após a aprovação, a conta pode ser usada nas operações Pix e nos recursos de conversão habilitados para a empresa. O painel permite acompanhar a operação conforme o fluxo contratado.\n\nAntes de começar, confirme as chaves Pix, limites, taxas, recebimentos permitidos e a disponibilidade de integração ao seu software. A abertura da conta não garante a habilitação automática de todo o catálogo de produtos.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "disponibilidade",
      "kind": "PROSE",
      "heading": "Disponível só em produção",
      "body": "A conta nominal envolve abertura real em uma instituição parceira sob um documento real. Não existe conta nominal equivalente em sandbox. O teste dos fluxos de API não substitui a abertura nem a aprovação da conta empresarial.\n\nOs fluxos de depósito e payout que constam na cobertura do sandbox podem ser testados separadamente. Para a conta PJ, prepare o cadastro e acompanhe a aprovação em produção com o time da Hodle.",
      "bullets": [],
      "icons": [],
      "comparison": null,
      "code": null,
      "image": null
    },
    {
      "id": "api",
      "kind": "PROSE",
      "heading": "Conta PJ, subconta e integração: defina o que precisa",
      "body": "Uma conta nominal atende à titularidade da empresa no parceiro. Uma subconta da API identifica um cliente dentro de uma integração. São recursos distintos e criar um deles não substitui a contratação e a habilitação do outro.\n\nSe você quer oferecer contas dentro do seu produto, apresente esse desenho ao time. Confirme a cobertura da abertura e da gestão de contas para sua integração antes de implementar. A documentação pública descreve os fluxos de API que já podem ser consultados.",
      "bullets": [
        "Conta nominal: empresa identificada pelo CNPJ junto à instituição parceira.",
        "Subconta: identificação do cliente nos fluxos documentados da API.",
        "Integração: escopo, permissões e condições devem ser confirmados para o projeto.",
        "A relação da conta é estabelecida entre o cliente e a instituição parceira."
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
      "question": "O que é uma conta digital PJ nominal?",
      "answer": "É uma conta aberta no nome e CNPJ da empresa na instituição parceira. A Hodle integra o processo por software e API; a instituição analisa e presta os serviços financeiros."
    },
    {
      "question": "Posso abrir uma conta PJ pela API da Hodle?",
      "answer": "Confirme com o time o fluxo de abertura disponível para o seu projeto. A existência de subcontas na API não significa abertura automática de conta bancária; onboarding, aprovação da instituição e KYB continuam necessários."
    },
    {
      "question": "A conta PJ pode ser testada em sandbox?",
      "answer": "Não. A conta nominal está disponível só em produção. Outros fluxos da API podem ter cobertura de sandbox, conforme a documentação."
    },
    {
      "question": "Criar uma subconta já abre uma conta bancária?",
      "answer": "Não. Subconta é a identificação de um cliente na integração. A conta nominal exige um pedido próprio, onboarding e aprovação."
    }
  ],
  "related": [
    {
      "label": "BaaS e contas via parceiros",
      "href": "/baas"
    },
    {
      "label": "Pix para empresas",
      "href": "/pix"
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
      "label": "Requisitos de integração",
      "href": "https://docs.hodle.com.br/docs/integration-guide"
    },
    {
      "label": "Termos de serviço",
      "href": "/termos"
    }
  ],
  "ogImage": "/og-image-v2.png"
}
