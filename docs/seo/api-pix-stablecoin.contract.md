# Contrato — página de tópico `/api-pix-stablecoin`

Contexto, keyword map e decisões: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md) §5.2.

Esta é a página que responde à query **"api"** no contexto da Hodle. É a mais disputada das
três: a SERP é ocupada por páginas de produto de concorrentes diretos. O que nos diferencia
está no §5.2 do walkthrough e é o eixo da copy abaixo.

Você implementa **estrutura**; a copy é final e vai no código **palavra por palavra**. Não
reescreva, não resuma, não adicione seção, não invente número.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`,
`any`, type assertion, `readonly` · RO-RO com múltiplos parâmetros · arquivos em camelCase ·
linha em branco entre statements · sem comentário no meio do código · sem emoji · pt-BR com
acentos completos.

Vocabulário visual da home e do FAQ: `max-w-[1200px] mx-auto px-6`,
`heading = 'font-[family-name:var(--font-space-grotesk)]'`, `text-foreground`,
`text-gray-500`, `border-gray-200`, `hero-grid` + `hero-spotlight`, `ButtonShadow`,
`<details>` no FAQ, `AnimatedSection`, `next/image` com dimensões explícitas. **Nenhuma cor
nova, nenhuma dependência nova.**

## Arquivos

**Criar:** `src/content/topics/apiPixStablecoin.ts`
**Editar:** `src/content/topics/topics.ts` (uma linha)

Nada mais. Se precisou editar `sitemap.ts`, pare e comente no card.

## Fronteiras desta página

- **Nenhum SLA numérico.** A documentação publica "sub-second" para a emissão da invoice
  Lightning, não para a liquidação ponta a ponta. Não escreva prazo em número para
  `/api/wallet/payout`. Para o fluxo Lightning é permitido reproduzir a formulação da
  própria documentação — "liquida em Pix em segundos" — e **somente** essa.
- **Nenhuma taxa.**
- **Nenhum concorrente nomeado**, nenhuma seção `COMPARISON`, nenhuma frase do tipo "ao
  contrário de outros provedores" (decisão 5). O diferencial se afirma no positivo.
- **Nenhuma afirmação de que a Hodle é regulada, é banco ou custodia ativos.**
- **Nenhuma menção a DEPIX.**
- Tron só em texto — não existe `tron.svg`.
- Não prometa SDK: a documentação lista guias e referência REST, não SDKs versionados.

## Registro `TopicPage`

`src/content/topics/apiPixStablecoin.ts` exporta `apiPixStablecoin`.

```
slug:            'api-pix-stablecoin'
primaryKeyword:  'api pix stablecoin'
title:           'API Pix stablecoin para desenvolvedores'
h1:              'A API que paga Pix com stablecoin'
updatedAt:       '2026-07-28'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'DESENVOLVEDORES'
```

`description` (150 caracteres):

> API REST para pagar Pix com saldo em USDT ou USDC, emitir invoice Lightning que liquida em Pix e mover stablecoin entre redes. Gas patrocinado.

`keywords`:

```
'api pix stablecoin'
'api pix cripto'
'api de pagamento stablecoin'
'api usdt brasil'
'webhook pix cripto'
'api pix para desenvolvedores'
'on-ramp off-ramp api'
```

`subhead` (31 palavras):

> Uma API REST para os trilhos brasileiros: pagar Pix com saldo em stablecoin, receber por invoice Lightning, mover USDT entre redes e reconciliar por webhook assinado. O gas em redes EVM é nosso.

`heroIcons`:

```
{ src: '/pix.svg',     label: 'Pix' }
{ src: '/usdt.svg',    label: 'USDT' }
{ src: '/usdc.svg',    label: 'USDC' }
{ src: '/ln.svg',      label: 'Lightning' }
{ src: '/polygon.svg', label: 'Polygon' }
```

`ctaPrimary`:
```
{ label: 'Ver a documentação', href: 'https://docs.hodle.com.br' }
```

`ctaSecondary`:
```
{ label: 'Falar com vendas', href: 'https://api.whatsapp.com/send?phone=5511960000445' }
```

Note a inversão em relação às outras páginas: aqui a intenção é de dev avaliando, então o CTA
primário é a documentação.

## Seções (5, nesta ordem)

### 1 — `id: 'o-que-a-api-faz'` · `kind: 'PROSE'`

`heading`: **O que a API Pix stablecoin resolve**

`body`:

> A API da Hodle conecta saldo em stablecoin ao sistema de pagamentos brasileiro. Você dispara um Pix financiado por USDT ou USDC, emite uma invoice Lightning que liquida em reais quando for paga, converte reais em stablecoin e move ativos entre redes — tudo por HTTP, com autenticação por API key com escopo por plataforma.
>
> São dois fluxos ponta a ponta que cobrem a maioria das integrações: stablecoin para Pix, e Lightning para Pix. Cada um está documentado com as telas, as chamadas e os modos de falha.

`bullets`:

```
'Pagar Pix com saldo em USDT (Polygon, Tron) ou USDC (Base).'
'Emitir invoice Lightning BOLT11 que dispara um payout Pix ao ser paga.'
'Converter reais em Lightning, USDT, USDC ou USDCE e entregar em um endereço.'
'Ler saldos por ativo e o extrato paginado de operações.'
'Receber webhook assinado com HMAC em depósito, payout e mudança de KYC.'
```

`icons`: `[]` · `comparison`: `null`

### 2 — `id: 'integracao'` · `kind: 'STEPS'`

`heading`: **A integração mais curta é um POST e um GET**

`body`:

> O fluxo de pagamento não exige orquestração no seu lado. Você autentica, dispara, e escuta.

`bullets`:

```
'Autenticação. API key nos headers, com escopo por plataforma. Guia em docs.hodle.com.br/docs/authentication.'
'Chave da carteira. Um GET em /docs/wallet-keys devolve o protectedSymmetricKey usado para assinar payouts e transfers. Cache uma vez por usuário.'
'Disparo. POST /api/wallet/payout para pagar um Pix com stablecoin, ou POST /api/lightning/invoice para emitir uma invoice que liquida em Pix.'
'Confirmação. GET no recurso devolve o estado atual, e o webhook assinado com HMAC avisa cada transição — é o caminho recomendado para reconciliação.'
```

`icons`: `[]` · `comparison`: `null`

### 3 — `id: 'gas-patrocinado'` · `kind: 'PROSE'`

`heading`: **Gas patrocinado nas redes EVM**

`body`:

> Em Polygon e Base, a Hodle paga o gas dos transfers e dos payouts. Isso remove da sua integração o problema operacional de manter saldo em moeda nativa de cada rede, monitorar preço de gas e tratar transação que falhou por falta de fundo para taxa.
>
> Na prática, o seu usuário só precisa ter a stablecoin. A rede é detalhe de implementação.

`bullets`:

```
'Sem saldo nativo de Polygon ou Base para operar.'
'Sem monitoramento de preço de gas no seu backend.'
'Sem transação travada por falta de fundo para taxa.'
```

`icons`: `[]` · `comparison`: `null`

### 4 — `id: 'exemplo'` · `kind: 'CODE'`

`heading`: **Exemplo de chamada**

`body`:

> A mesma API que roda o painel da Hodle é a que você consome. Autenticação por header, corpo em JSON, resposta com o estado da operação.

`bullets`:

```
'POST /api/wallet/payout — paga Pix com saldo em stablecoin.'
'POST /api/lightning/invoice — invoice BOLT11 que liquida em Pix em segundos ao ser paga.'
'GET /docs/wallet-get — endereços por rede e saldos do usuário da API key.'
'POST /docs/wallet-transfer — USDT para qualquer endereço em Polygon, Base ou Tron.'
```

`icons`: `[]` · `comparison`: `null`

Renderize com o `<CodeBlock />` existente via `topicCodeBlock.tsx`, sem props novas.

### 5 — `id: 'redes-e-ativos'` · `kind: 'ASSETS'`

`heading`: **Redes e ativos disponíveis pela API**

`body`:

> USDT em Polygon e Tron, USDC em Base, e as duas também em Arbitrum e Spark. Bitcoin on-chain e por Lightning. Reais entram e saem por Pix.

`bullets`: `[]`

`icons`:

```
{ src: '/usdt.svg',     label: 'USDT' }
{ src: '/usdc.svg',     label: 'USDC' }
{ src: '/btc.svg',      label: 'Bitcoin' }
{ src: '/ln.svg',       label: 'Lightning' }
{ src: '/polygon.svg',  label: 'Polygon' }
{ src: '/base.png',     label: 'Base' }
{ src: '/arbitrum.svg', label: 'Arbitrum' }
{ src: '/spark.svg',    label: 'Spark' }
```

`comparison`: `null`

## FAQ (5 pares)

```
Q: Como integrar uma API de Pix com stablecoin?
A: Autentique com uma API key nos headers, busque o protectedSymmetricKey do usuário uma vez, e dispare um POST em /api/wallet/payout com a chave Pix e o valor. Um GET no recurso devolve o estado e o webhook assinado avisa cada transição.

Q: Como funciona o webhook de confirmação?
A: A Hodle envia um payload assinado com HMAC quando há depósito, payout ou mudança de estado de KYC. Você verifica a assinatura e usa o evento para reconciliar, em vez de ficar consultando o estado em loop.

Q: Quem paga a taxa de rede nas transações?
A: Nas redes EVM, a Hodle. O gas de Polygon e Base é patrocinado, tanto em transfer quanto em payout, então o seu usuário só precisa ter a stablecoin.

Q: Quais redes a API suporta?
A: USDT em Polygon e Tron, USDC em Base, ambas também em Arbitrum e Spark. Bitcoin on-chain e por Lightning Network. Reais por Pix.

Q: Preciso de licença para usar a API?
A: A Hodle é uma empresa de software e API: não é banco, não é instituição financeira e não custodia fundos ou ativos de clientes. O fluxo de fundos regulados e os serviços financeiros são conduzidos por parceiros licenciados e/ou regulados. Os requisitos aplicáveis ao seu caso dependem do seu modelo de negócio — trate isso com o seu jurídico e fale com o nosso time comercial.
```

A resposta da quinta pergunta usa a redação do §6 dos termos. **Não a reescreva.**

## Relacionados (`related`)

```
{ label: 'Pagar Pix com USDT',        href: '/pagar-pix-com-usdt' }
{ label: 'Carteiras auto-custodiais', href: '/wallet-auto-custodial' }
{ label: 'Documentação da API',       href: 'https://docs.hodle.com.br' }
{ label: 'Perguntas frequentes',      href: '/faq' }
```

## Link de entrada (obrigatório)

Na coluna **Desenvolvedores** do `src/components/ui/Footer.tsx`, acrescente como primeiro
item:

```
{ label: 'API Pix stablecoin', href: '/api-pix-stablecoin' }
```

## Aceite

- [ ] `pnpm build` verde e `/api-pix-stablecoin` como rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro
- [ ] `pnpm eslint` sem erro novo
- [ ] copy **idêntica** a este contrato
- [ ] um único `<h1>`
- [ ] todo `src` de ícone existe em `public/` (nenhum `tron.svg`)
- [ ] `/sitemap.xml` contém `https://hodle.com.br/api-pix-stablecoin` com `lastmod` 2026-07-28
- [ ] `<title>` tem 39 caracteres e a keyword primária nos primeiros 40
- [ ] `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; `FAQPage` casa com as 5 perguntas visíveis
- [ ] rodapé (coluna Desenvolvedores) aponta para a página; a página aponta para ≥2 destinos internos
- [ ] nenhum SLA numérico exceto o "em segundos" do fluxo Lightning; nenhuma taxa; nenhum concorrente nomeado; nenhum "DEPIX"
- [ ] `/faq`, `/termos`, `/privacidade`, `/cookies`, `/articles`, `/checkout`, `/real-onchain` continuam abrindo
- [ ] zero erro de console, zero 404 de asset, sem overflow horizontal em 390px

## Review Block

```markdown
## Review Block
LABEL: api-pix-stablecoin
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /api-pix-stablecoin
  - expectVisible: "A API que paga Pix com stablecoin"
  - expectOne: h1
  - shot: "api-pix-stablecoin-desktop"
  - viewport: 390x844
  - shot: "api-pix-stablecoin-mobile"
  - assertSitemap: /api-pix-stablecoin
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
  - goto: /faq
  - expectVisible: "Perguntas Frequentes"
```

Não faça merge. Não rode deploy.
