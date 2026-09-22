import { integrationPaths } from '../integrationPaths'

/**
 * Markdown representation of the home page, served under
 * `Accept: text/markdown`.
 */
export const homeMarkdown = `# Receba em Pix, guarde em dólar, pague em stablecoin.

> A infraestrutura que conecta Pix, dólar e stablecoins — via API ou plataforma. Feita para empresas que movem dinheiro na América Latina.

Fonte canônica: https://hodle.com.br

A Hodle é uma empresa de software que constrói infraestrutura de pagamento entre o real e o dólar digital. O produto é entregue em duas frentes: um painel para o time de operações e uma API REST para o time de engenharia. A Hodle não é banco, não é instituição financeira e não custodia fundos ou ativos de clientes.

## Compra e venda de ativos digitais

Compre stablecoins e bitcoin com Pix. Quando quiser, venda e receba em reais na sua conta.

## Contas PJ nominais

Uma conta nominal no nome da sua empresa, aberta por parceiro financeiro e conectada ao painel da Hodle. Acompanhe os dados da conta, as operações Pix e os recursos de conversão habilitados para o seu negócio. A abertura depende da análise cadastral e da aprovação do KYB.

**Disponível só em produção.** [Conhecer a conta PJ](https://hodle.com.br/conta-digital-pj).

## Wallets 100% auto-custodiais

Chaves privadas 100% sob o controle do usuário, sem custódia de terceiros. A chave é derivada no cliente e a Hodle guarda apenas um envelope cifrado que não consegue abrir, então nem um comprometimento da nossa infraestrutura move o saldo.

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

Integre pagamentos com Pix e stablecoin no seu produto em minutos. REST, OpenAPI e webhooks — pensados para times de produto e agentes de IA.

- \`POST /api/wallet/payout\` — paga um Pix debitando saldo em USDT (Polygon, Tron) ou USDC (Base), com gas patrocinado.
- \`POST /api/lightning/invoice\` — invoice BOLT11 que dispara um payout Pix automaticamente quando é pago.
- \`POST /api/deposit/asset\` — on-ramp: Pix entra, cripto sai no endereço informado.
- \`POST /api/quote\` — preço indicativo e composição da taxa de um par BRL ↔ ativo.
- \`GET /api/wallet\` — endereços e saldos por rede de uma carteira auto-custodial.
- \`GET /api/account/statement\` — saldo por ativo e operações paginadas, para conciliação.
- \`POST /api/kyc\` — envia e consulta o KYC dos usuários finais da sua plataforma.

Especificação OpenAPI 3.1: https://hodle.com.br/openapi.json
Documentação: https://docs.hodle.com.br
Recursos para desenvolvedores: https://hodle.com.br/desenvolvedores

## Pagamento de QR codes com stablecoins

Pague qualquer QR code Pix usando USDT ou USDC. A conversão para real é automática e a liquidação é instantânea — para o lojista o crédito é um Pix comum, com o mesmo comprovante e a mesma conciliação.

## Tudo que flui pela Hodle

| Grupo | O que é | Itens |
| --- | --- | --- |
| Pagamentos | Entrada e saída em reais via Pix, disponível 24/7. | Pix |
| Stablecoins | Dólar digital que circula pela plataforma e paga QR codes. | USDT, USDC |
| Bitcoin & Lightning | BTC on-chain e liquidação instantânea pela rede Lightning. | Bitcoin, Lightning |
| Redes | Redes onde você recebe, guarda e envia seus ativos. | Arbitrum, Polygon, Base, Spark, Solana, Tron, Liquid |

## Preço

On-ramp e off-ramp começam em 2% e caem por faixa de volume mensal até o piso de 0,5%, com mínimo de R$ 0,75 por operação. Transferência entre carteiras na mesma rede não tem custo. A referência oficial, com a tabela completa, é https://hodle.com.br/precos — qualquer número citado fora dela deve ser conferido antes de ser considerado válido.

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
