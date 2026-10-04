import { integrationPaths } from '../integrationPaths'

/**
 * Markdown representation of the home page, served under
 * `Accept: text/markdown`.
 */
export const homeMarkdown = `# Receba em Pix, guarde em dólar, pague em stablecoin.

> A infraestrutura que conecta Pix, dólar e stablecoins, via API ou plataforma. Feita para empresas que movem dinheiro na América Latina.

Fonte canônica: https://hodle.com.br

A Hodle é uma empresa de software que constrói infraestrutura de pagamento entre o real e o dólar digital. O produto é entregue em duas frentes: um painel para o time de operações e uma API REST para o time de engenharia. A Hodle não é banco, não é instituição financeira e não custodia fundos ou ativos de clientes. Os serviços financeiros e os fluxos de fundos regulados são conduzidos por parceiros licenciados e/ou regulados.

## Compra e venda de ativos digitais

Compre stablecoins e bitcoin com Pix. Quando quiser, venda e receba em reais na sua conta.

## Contas PJ nominais

Uma conta nominal no nome da sua empresa, aberta por parceiro financeiro e conectada ao painel da Hodle. Acompanhe os dados da conta, as operações Pix e os recursos de conversão habilitados para o seu negócio. A abertura depende da análise cadastral e da aprovação do KYB.

**Disponível só em produção.** [Conhecer a conta PJ](https://hodle.com.br/conta-digital-pj).

## Wallets e autorização de operações

O controle das operações depende do modelo de assinatura escolhido. Na integração por API com PIN, a plataforma fornece o PIN e a chave protegida da wallet selecionada para autorizar a assinatura temporária no servidor. A plataforma é responsável por proteger essas credenciais e obter a autorização do titular. Há também fluxos de assinatura pelo usuário; confira os requisitos de cada modelo antes de integrar.

[Modelo de chaves e PIN](https://docs.hodle.com.br/docs/wallet-keys) · [Autorização de transferências](https://docs.hodle.com.br/docs/wallet-transfer).

## O que você quer construir?

${integrationPaths.map((path) => `- [${path.title}](https://hodle.com.br${path.href}): ${path.description}`).join('\n')}

## Pix para o dia a dia da sua empresa

A Hodle reúne produtos Pix, stablecoins e uma camada de software para integrar serviços BaaS de parceiros licenciados.

[Conheça os produtos Pix](https://hodle.com.br/pix).

- [API Pix](https://hodle.com.br/api-pix) — integre cobranças, pagamentos e acompanhamento de operações no seu produto.
- [Cobrança Pix](https://hodle.com.br/cobranca-pix) — receba por QR Code ou Pix copia e cola, com identificação do pedido.
- [Link de pagamento Pix](https://hodle.com.br/link-de-pagamento-pix) — compartilhe um checkout hospedado e receba no ativo habilitado na sua conta.
- [Conciliação Pix](https://hodle.com.br/conciliacao-pix) — acompanhe pedidos, extratos e eventos para conferir cada pagamento.
- [BaaS](https://hodle.com.br/baas) — conecte seu software a serviços financeiros conduzidos por parceiros licenciados.
- [Conta digital PJ](https://hodle.com.br/conta-digital-pj) — conta nominal por parceiro, disponível em produção após análise e aprovação do KYB.

## Uma API. Pix, dólar e stablecoins.

Integre pagamentos com Pix e stablecoin usando REST, OpenAPI e webhooks. A disponibilidade depende do ativo, da rede, da operação e das permissões da conta.

- \`POST /api/wallet/payout\` — inicia um Pix com saldo em stablecoin; acompanhe o status até a confirmação. [Ativos, redes e requisitos do payout](https://docs.hodle.com.br/docs/wallet-payout).
- \`POST /api/lightning/invoice\` — em produção, o pagamento da invoice inicia o fluxo de Pix. A invoice de sandbox não é pagável.
- \`POST /api/deposit/asset\` — cria uma cobrança Pix para entrega do ativo na rede habilitada. A confirmação do Pix e a entrega do ativo são etapas distintas. [Requisitos de depósito](https://docs.hodle.com.br/docs/deposit-asset).
- \`POST /api/quote\` — preço indicativo e composição da taxa de um par BRL ↔ ativo.
- \`GET /api/wallet\` — endereços e saldos por rede de uma carteira auto-custodial.
- \`GET /api/account/statement\` — saldo por ativo e operações paginadas, para conciliação.
- \`POST /api/kyc\` — envia e consulta o KYC dos usuários finais da sua plataforma.

Especificação OpenAPI 3.1: https://hodle.com.br/openapi.json
Documentação: https://docs.hodle.com.br
Recursos para desenvolvedores: https://hodle.com.br/desenvolvedores

## Pagamento de QR codes com stablecoins

O payout permite pagar QR Pix com saldo em stablecoin, sujeito à validação do código, saldo, limites e habilitação da conta. USDT é suportado em Polygon, Tron e Solana; USDC em Polygon, Base e Solana. Tron exige habilitação adicional. BRLA e BRS têm condições próprias descritas na [referência de payout](https://docs.hodle.com.br/docs/wallet-payout).

Após a confirmação, o destinatário recebe reais via Pix. O aceite da solicitação não garante liquidação imediata: acompanhe o estado final. A Hodle patrocina o gas nesse fluxo; isso não elimina as taxas de serviço.

## Tudo que flui pela Hodle

| Grupo | O que é | Itens |
| --- | --- | --- |
| Pagamentos | Entrada e saída em reais via Pix, disponível 24/7. | Pix |
| Stablecoins | Ativos digitais com suporte por operação e rede. | USDT, USDC, BRLA, BRS |
| Bitcoin & Lightning | Fluxos de Bitcoin e Lightning, com condições próprias de confirmação e entrega. | Bitcoin, Lightning |
| Redes | A presença no catálogo não habilita todos os fluxos. Confira a documentação da operação. | Arbitrum, Polygon, Base, Spark, Solana, Tron, Liquid |

## Sandbox e acesso à produção

Crie um cadastro separado em https://app-sandbox.hodle.com.br e use uma chave de teste. Os fluxos suportados usam ativos de teste em Base Sepolia; Pix é simulado, sem movimentação de reais. Consulte a [cobertura do sandbox](https://docs.hodle.com.br/docs/sandbox).

Produção exige conta aprovada em KYC ou KYB, chave de produção e habilitação de cada fluxo. Testar no sandbox não aprova a conta nem libera todos os produtos em produção.

## Preço

A tabela comercial por volume publica faixas de 2% a 0,5%, com mínimo de R$ 0,75, para operações abrangidas por uma proposta ou contrato que adote essas condições. API payout, Lightning e wallet podem ter tarifas próprias. Confira o fluxo e a condição da conta em https://hodle.com.br/precos e valide a taxa e o total na cotação antes de confirmar. Transferência entre carteiras Hodle na mesma rede é sem custo nas combinações previstas; transferências entre redes têm condições próprias.

## Falar com a Hodle

- WhatsApp comercial e suporte: +55 11 96000-0445
- E-mail: contato@hodle.com.br
- Painel: https://app.hodle.com.br

## Onde ir a seguir

- [Sobre a Hodle](https://hodle.com.br/sobre) — entidades, registros e o que a empresa é e não é.
- [Contato](https://hodle.com.br/contato) — todos os canais oficiais.
- [Desenvolvedores](https://hodle.com.br/desenvolvedores) — OpenAPI, autenticação, webhooks e sandbox.
- [Preços e taxas](https://hodle.com.br/precos) — a referência oficial de preço.
- [Perguntas frequentes](https://hodle.com.br/faq)
- [Glossário](https://hodle.com.br/glossario)
- [Artigos](https://hodle.com.br/articles)
- [Política de uso por IA](https://hodle.com.br/ai)
- [Central Legal](https://hodle.com.br/legal)
- [llms.txt](https://hodle.com.br/llms.txt) · [llms-full.txt](https://hodle.com.br/llms-full.txt) · [sitemap.xml](https://hodle.com.br/sitemap.xml)
`
