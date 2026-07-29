# Contrato — página de tópico `/para-agentes-de-ia`

Leva A do programa de descobribilidade. Contexto e diagnóstico:
[`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md).
Mineração de termos dos concorrentes: §10 do mesmo walkthrough.

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

**Criar:** `src/content/topics/paraAgentesDeIa.ts`
**Editar:** `src/content/topics/topics.ts` (uma linha)

Nada mais. O template, o `sitemap.ts` e os componentes de `src/components/topic/` já
resolvem metadata, JSON-LD, OG, breadcrumb e sitemap a partir do registry. **Se você precisou
editar `sitemap.ts`, pare e comente no card.**

## Phase 2 — mapa de keyword (pesquisa ao vivo, 2026-07-29)

- **Primária:** `api para agentes de IA pagamento` — intent: transacional (dev/produto)
- **SERP observada:** mista, e o termo dominante do mercado é **"pagamentos agênticos"**.
  Ocupam a primeira página: `agents.bipa.app` ("MCP de Pagamentos para Agentes de IA | Pix
  pelo Claude, ChatGPT e mais" — subdomínio dedicado), Bipa blog
  (`/blog/agente-de-ia-pode-pagar-suas-contas`), Zoop (`/blog/negocios/pagamento-agentico`),
  Vanquish (Pix + Iniciador + Open Finance), Seu Crédito Digital, PagBrasil (blog de devs)
- **Secundárias:** pagamentos agênticos · MCP pagamentos · agente de IA pix · api pix para
  agentes · automatizar pagamento com IA · agente autônomo stablecoin
- **Descartadas:** "pix automático" (é o produto homônimo do BC, outra coisa; gera confusão)
- **PAA → FAQ:** 1) Um agente de IA pode pagar um Pix? 2) Como o agente é autorizado a
  movimentar? 3) O que impede o agente de gastar além do previsto? 4) Precisa de MCP?
  5) Quais operações o agente consegue fazer pela API?
- **Ângulo vazio (nossa tese):** o que existe hoje é **consumidor** — o agente paga a *sua*
  conta, com aprovação no celular. Ninguém cobre o caso **B2B programático**: o agente opera
  os trilhos de *uma empresa*, com chave por usuário final, gas patrocinado e webhook
  assinado. Comprador diferente, e é o que a API da Hodle já faz
- **Proibidos:** prometer que o agente é seguro por construção · "IA autônoma sem risco" ·
  qualquer taxa · qualquer SLA numérico · afirmar suporte a MCP (a Hodle **não** publica
  servidor MCP hoje — a página descreve REST)

## Fronteiras desta página

- **Não afirme que a Hodle tem servidor MCP.** Não temos. A FAQ 4 responde isso de frente.
- **Nenhum SLA numérico** para `POST /api/wallet/payout`. Permitido: "24/7", "sem depender
  de horário bancário". O "em segundos" só vale para o fluxo Lightning.
- **Nenhuma taxa.**
- **Nenhum concorrente nomeado**, nenhuma seção `COMPARISON` (`comparison` sempre `null`).
- **Nenhuma afirmação de que a Hodle é regulada, é banco ou custodia ativos.**
- **Nenhuma menção a DEPIX.** Tron só em texto — não existe `tron.svg`.
- Não prometa SDK: a documentação publica guias e referência REST, não SDKs versionados.

## Registro `TopicPage`

`src/content/topics/paraAgentesDeIa.ts` exporta `paraAgentesDeIa`.

```
slug:            'para-agentes-de-ia'
primaryKeyword:  'api para agentes de IA pagamento'
title:           'API de pagamento para agentes de IA'
h1:              'Trilhos que um agente opera sozinho'
updatedAt:       '2026-07-29'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'AGENTES DE IA'
```

`description` (151 caracteres):

> API REST para agentes de IA moverem dinheiro: pagar Pix com stablecoin, emitir invoice Lightning, transferir entre redes e reconciliar por webhook.

`keywords`:

```
'api para agentes de IA pagamento'
'pagamentos agênticos'
'agente de IA pix'
'api pix para agentes'
'automatizar pagamento com IA'
'agente autônomo stablecoin'
```

`subhead` (30 palavras):

> Um agente precisa de operações determinísticas, autorização por chave e confirmação assinada. É o que a API entrega: dispara o pagamento, lê o estado, recebe o webhook. Sem clique humano no meio.

`faqSubhead`:

> Tire suas dúvidas sobre agentes de IA operando pagamentos pela API.

`ctaSubhead`:

> Comece pela documentação ou fale com o time da Hodle.

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

## Seções (5, nesta ordem)

### 1 — `id: 'o-que-muda'` · `kind: 'PROSE'`

`heading`: **O que um agente precisa que uma pessoa não precisa**

`body`:

> Uma pessoa tolera ambiguidade: lê a tela, entende o erro, tenta de novo. Um agente não. Ele precisa de operação com resultado determinístico, de um jeito de provar que tem autorização para mover fundo, e de um sinal confiável de que a operação terminou.
>
> A API da Hodle é construída nesses três pontos. O disparo é um POST com corpo em JSON. A autorização é a chave do usuário, buscada uma vez e cacheada. O fim da operação chega por webhook assinado, não por polling esperançoso.

`bullets`:

```
'Operações com resultado determinístico, não fluxo de tela.'
'Autorização por chave do usuário final, não por sessão de navegador.'
'Confirmação por webhook assinado com HMAC, não por polling.'
'Gas patrocinado nas redes EVM: o agente não administra saldo de rede.'
```

`icons`: `[]` · `comparison`: `null`

### 2 — `id: 'o-que-o-agente-faz'` · `kind: 'STEPS'`

`heading`: **O que o agente consegue fazer pela API**

`body`:

> Cada item é uma chamada documentada. Nenhum passo exige interface.

`bullets`:

```
'Pagar um Pix com saldo em stablecoin. POST /api/wallet/payout, financiado por USDT em Polygon ou Tron, ou USDC em Base.'
'Receber de fora do Brasil. POST /api/lightning/invoice emite uma BOLT11 que, ao ser paga, liquida em Pix em segundos.'
'Converter reais em ativo. O deposit-asset entrega em Lightning, USDT, USDC ou USDCE num endereço.'
'Mover entre redes. USDT para qualquer endereço em Polygon, Base ou Tron, com gas patrocinado nas EVM.'
'Ler estado. Endereços por rede, saldo por ativo e extrato paginado de operações.'
'Reconciliar. Webhook assinado com HMAC em depósito, payout e mudança de KYC.'
```

`icons`: `[]` · `comparison`: `null`

### 3 — `id: 'autorizacao'` · `kind: 'PROSE'`

`heading`: **Quem autoriza o que**

`body`:

> Há dois níveis. A API key identifica a sua plataforma e define o escopo do que ela alcança. A chave do usuário final é o que permite mover os fundos dele: sem ela não há payout nem transfer, por construção.
>
> Isso significa que o desenho do seu agente decide o limite dele. Você escolhe quais usuários ele alcança, quais operações expõe e o que faz antes de cada disparo. A plataforma não decide isso no seu lugar, e a Hodle não movimenta fundo de usuário sem a chave dele.

`bullets`:

```
'API key com escopo por plataforma, nos headers.'
'Chave do usuário final necessária para qualquer movimentação.'
'A fronteira do agente é o desenho do seu fluxo, não uma configuração nossa.'
```

`icons`: `[]` · `comparison`: `null`

### 4 — `id: 'exemplo'` · `kind: 'CODE'`

`heading`: **A chamada que o agente faz**

`body`:

> A mesma API que roda o painel da Hodle é a que o agente consome. Autenticação por header, corpo em JSON, resposta com o estado da operação.

`bullets`:

```
'POST /api/wallet/payout — paga Pix com saldo em stablecoin.'
'POST /api/lightning/invoice — invoice BOLT11 que liquida em Pix ao ser paga.'
'GET wallet-keys — o protectedSymmetricKey do usuário, cacheado uma vez.'
'POST wallet-transfer — USDT em Polygon, Base ou Tron.'
```

`icons`: `[]` · `comparison`: `null`

Renderize com o `<CodeBlock />` existente via `topicCodeBlock.tsx`, sem props novas.

### 5 — `id: 'redes'` · `kind: 'ASSETS'`

`heading`: **Ativos e redes que o agente alcança**

`body`:

> USDT em Polygon e Tron, USDC em Base, as duas também em Arbitrum e Spark. Bitcoin on-chain e por Lightning. Reais entram e saem por Pix.

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
Q: Um agente de IA pode pagar um Pix?
A: Sim, pela API. O agente dispara um POST em /api/wallet/payout com a chave Pix e o valor, financiado por saldo em USDT ou USDC, e acompanha o resultado por webhook assinado. Não há tela no caminho.

Q: Como o agente é autorizado a movimentar fundos?
A: Por duas chaves. A API key identifica a sua plataforma e define o escopo. A chave do usuário final, buscada uma vez e cacheada, é o que autoriza mover os fundos dele — sem ela não há payout nem transfer.

Q: O que impede o agente de gastar além do previsto?
A: O desenho do seu fluxo. Você decide quais usuários o agente alcança, quais operações expõe e quais validações rodam antes de cada disparo. A Hodle não movimenta fundo de usuário sem a chave dele, mas o limite de comportamento do agente é responsabilidade de quem o constrói.

Q: Precisa de MCP para integrar?
A: Não. A Hodle expõe uma API REST, e é isso que a documentação cobre. Não publicamos servidor MCP hoje. Qualquer agente que faça chamada HTTP autenticada integra direto.

Q: Quais operações o agente consegue fazer?
A: Pagar Pix com stablecoin, emitir invoice Lightning que liquida em Pix, converter reais em Lightning, USDT, USDC ou USDCE, transferir USDT entre Polygon, Base e Tron, ler endereços, saldos e extrato, e receber webhook de cada mudança de estado.
```

## Relacionados (`related`)

```
{ label: 'API Pix stablecoin',         href: '/api-pix-stablecoin' }
{ label: 'Carteiras auto-custodiais',  href: '/wallet-auto-custodial' }
{ label: 'Glossário',                  href: '/glossario' }
{ label: 'Documentação da API',        href: 'https://docs.hodle.com.br' }
```

## Link de entrada (obrigatório)

Na coluna **Desenvolvedores** do `src/components/ui/Footer.tsx`, depois de
`API Pix stablecoin`:

```
{ label: 'Para agentes de IA', href: '/para-agentes-de-ia' }
```

Não crie coluna nova.

## Aceite

- [ ] `pnpm build` verde e `/para-agentes-de-ia` como rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro novo (só os pré-existentes de `articles/[slug]`)
- [ ] `pnpm eslint` sem erro novo
- [ ] copy **idêntica** a este contrato
- [ ] `faqSubhead` e `ctaSubhead` preenchidos (o tipo exige)
- [ ] um único `<h1>`
- [ ] todo `src` de ícone existe em `public/`; nenhum `tron.svg`
- [ ] `/sitemap.xml` contém `https://hodle.com.br/para-agentes-de-ia` com `lastmod` 2026-07-29
- [ ] `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; `FAQPage` casa com as 5 visíveis
- [ ] rodapé (coluna Desenvolvedores) aponta para a página; a página aponta para ≥2 internos
- [ ] **nenhuma** afirmação de que a Hodle tem MCP; nenhuma taxa; nenhum SLA numérico exceto o "em segundos" do Lightning; nenhum concorrente nomeado; nenhum "DEPIX"
- [ ] rotas existentes seguem abrindo: `/faq /termos /privacidade /cookies /articles /checkout /real-onchain /ai /pagar-pix-com-usdt /api-pix-stablecoin /wallet-auto-custodial`
- [ ] zero erro de console, zero 404 de asset, sem overflow horizontal em 390px

## Review Block

```markdown
## Review Block
LABEL: para-agentes-de-ia
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /para-agentes-de-ia
  - expectVisible: "Trilhos que um agente opera sozinho"
  - expectOne: h1
  - shot: "para-agentes-de-ia-desktop"
  - viewport: 390x844
  - shot: "para-agentes-de-ia-mobile"
  - assertSitemap: /para-agentes-de-ia
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
  - goto: /faq
  - expectVisible: "Perguntas Frequentes"
```

Não faça merge. Não rode deploy.
