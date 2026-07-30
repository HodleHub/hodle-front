# Contrato — página de tópico `/lightning-para-pix`

Leva B. Contexto: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md) §10.

Você implementa **estrutura**; a copy é final e vai no código **palavra por palavra**.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`, `any`,
type assertion, `readonly` · arquivos em camelCase · linha em branco entre statements · sem
comentário no meio do código · sem emoji · pt-BR com acentos completos.

Vocabulário visual da home e do FAQ. **Nenhuma cor nova, nenhuma dependência nova.**

## Arquivos

**Criar:** `src/content/topics/lightningParaPix.ts`
**Editar:** `src/content/topics/topics.ts` (uma linha)

Nada mais. Se precisou editar `sitemap.ts`, `[slug]/page.tsx` ou `components/topic/*`, pare e
comente no card.

## Phase 2 — mapa de keyword (ao vivo, 2026-07-29)

- **Primária:** `lightning para pix` — intent: comercial/informacional
- **SERP observada:** **nenhuma página de produto é dona do termo.** Ocupam: KriptoBR
  (educacional), Binance FAQ (depósito/saque LN), Brasil Bitcoin (blog "pagar Pix com
  criptomoedas"), Bipa (home), `mercadobitcoin.pt/pix` ("PIX na Europa | Envie Dinheiro para o
  Brasil"), notícia sobre Bitget/Aeon
- **Secundárias:** receber pagamento em lightning · invoice lightning e sacar em pix · receber
  do exterior em bitcoin · bolt11 para pix · liquidação em reais de pagamento lightning
- **Descartadas:** "lightning network o que é" (informacional puro, dominado por exchange e
  portal educacional; não é a nossa intenção)
- **PAA → FAQ:** 1) Como receber um pagamento em Lightning e sacar em Pix? 2) Quem paga
  precisa saber de Pix? 3) Quanto tempo leva? 4) Preciso rodar um nó Lightning? 5) O que
  acontece se a invoice não for paga?
- **Ângulo vazio (nossa tese):** o `mercadobitcoin.pt/pix` é o mais próximo — remessa de fora
  para o Brasil — mas é fluxo de app, não API, e não usa Lightning. Ninguém cobre
  **invoice BOLT11 emitida por API que dispara payout Pix automaticamente**. É literalmente
  um fluxo documentado nosso (`/docs/flow-lightning-pix`)
- **Proibidos:** taxa · promessa de câmbio · "sem burocracia" · afirmar que a Hodle é regulada,
  é banco ou custodia ativos · DEPIX · `tron.svg`

## Fronteira específica

**Aqui o "em segundos" é permitido**, e só aqui: a documentação publica, para o fluxo Lightning
↔ PIX, *"once paid, settle BRL via PIX in seconds"* e marca o endpoint como `Sub-second` na
emissão. Use exatamente "em segundos", nunca um número.

Não afirme cobertura de país. A documentação diz "customers anywhere in the world" — a copy
abaixo usa "de qualquer lugar", que é a mesma afirmação. Não liste países.

## Registro `TopicPage`

`src/content/topics/lightningParaPix.ts` exporta `lightningParaPix`.

```
slug:            'lightning-para-pix'
primaryKeyword:  'lightning para pix'
title:           'Lightning para Pix: receber do exterior'
h1:              'Cobre em Lightning, liquide em Pix'
updatedAt:       '2026-07-29'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'LIGHTNING'
```

`description` (149 caracteres):

> Emita uma invoice Lightning por API. Quando ela é paga, o valor liquida em Pix em segundos, em reais, na conta de quem recebe no Brasil.

`keywords`:

```
'lightning para pix'
'receber pagamento em lightning'
'invoice lightning e sacar em pix'
'receber do exterior em bitcoin'
'bolt11 para pix'
'api lightning pix'
```

`subhead` (29 palavras):

> Quem paga está em qualquer lugar e usa Lightning. Quem recebe está no Brasil e recebe reais por Pix. A ponte entre os dois é uma chamada de API.

`faqSubhead`:

> Tire suas dúvidas sobre receber em Lightning e liquidar em Pix.

`ctaSubhead`:

> Comece pela documentação ou fale com o time da Hodle.

`heroIcons`:

```
{ src: '/ln.svg',   label: 'Lightning' }
{ src: '/btc.svg',  label: 'Bitcoin' }
{ src: '/pix.svg',  label: 'Pix' }
{ src: '/spark.svg',label: 'Spark' }
```

`ctaPrimary`:
```
{ label: 'Ver a documentação', href: 'https://docs.hodle.com.br/docs/flow-lightning-pix' }
```

`ctaSecondary`:
```
{ label: 'Falar com vendas', href: 'https://api.whatsapp.com/send?phone=5511960000445' }
```

## Seções (5)

### 1 — `id: 'o-que-e'` · `kind: 'PROSE'`

`heading`: **O que é liquidar Lightning em Pix**

`body`:

> É receber um pagamento na Lightning Network e entregar o valor em reais, por Pix, para quem recebe no Brasil. A invoice é emitida do seu lado por uma chamada de API. O pagador escaneia ou cola, paga em bitcoin, e o payout Pix é disparado automaticamente quando a invoice é liquidada.
>
> Para quem paga, é um pagamento Lightning comum. Para quem recebe, é um Pix comum em reais. Nenhum dos dois lados precisa lidar com o outro trilho.

`bullets`:

```
'Quem paga usa Lightning, de qualquer lugar.'
'Quem recebe cai em reais por Pix, no Brasil.'
'O payout dispara sozinho quando a invoice é paga.'
'Você não precisa rodar nó Lightning nem manter canal.'
```

`icons`: `[]` · `comparison`: `null`

### 2 — `id: 'como-funciona'` · `kind: 'STEPS'`

`heading`: **Da invoice ao Pix liquidado**

`body`:

> Quatro etapas. A primeira é sua; as três seguintes acontecem sozinhas.

`bullets`:

```
'Emitir a invoice. Um POST em /api/lightning/invoice devolve uma BOLT11 com valor e validade.'
'Entregar ao pagador. Você mostra o QR code ou o texto lnbc... onde faz sentido no seu produto.'
'Pagamento. O pagador liquida a invoice na Lightning Network, de qualquer lugar.'
'Liquidação em reais. O payout Pix é disparado automaticamente e liquida em segundos. O webhook assinado avisa cada transição.'
```

`icons`: `[]` · `comparison`: `null`

### 3 — `id: 'quem-usa'` · `kind: 'PROSE'`

`heading`: **Quem tem esse problema**

`body`:

> O caso mais direto é receber de fora do Brasil sem passar por transferência internacional. Prestador de serviço com cliente no exterior, plataforma que paga colaborador em outro país, e-commerce vendendo para fora — todos precisam que o dinheiro chegue em reais, na conta brasileira, sem depender de horário bancário.
>
> Lightning resolve a perna internacional e o Pix resolve a perna local. O que faltava era a costura entre as duas, e é isso que a API entrega.

`bullets`:

```
'Prestador de serviço com cliente fora do Brasil.'
'Plataforma que recebe de pagador internacional e liquida local.'
'Operação que não pode esperar horário bancário.'
```

`icons`: `[]` · `comparison`: `null`

### 4 — `id: 'pela-api'` · `kind: 'CODE'`

`heading`: **Uma chamada emite, o webhook fecha**

`body`:

> O endpoint de invoice é documentado com as telas, as chamadas e os modos de falha. A confirmação chega por webhook assinado com HMAC, não por polling.

`bullets`:

```
'POST /api/lightning/invoice — emite a BOLT11.'
'Webhook assinado com HMAC em cada mudança de estado.'
'Extrato com saldo por ativo e operações paginadas.'
'Guia completo em docs.hodle.com.br/docs/flow-lightning-pix.'
```

`icons`: `[]` · `comparison`: `null`

Renderize com o `<CodeBlock />` existente via `topicCodeBlock.tsx`, sem props novas.

### 5 — `id: 'redes'` · `kind: 'ASSETS'`

`heading`: **Bitcoin, Lightning e o trilho brasileiro**

`body`:

> Bitcoin circula on-chain e por Lightning. A Spark também transporta ativos sobre o Bitcoin. A saída em reais é por Pix, 24 horas por dia, todos os dias.

`bullets`: `[]`

`icons`:

```
{ src: '/btc.svg',   label: 'Bitcoin' }
{ src: '/ln.svg',    label: 'Lightning' }
{ src: '/spark.svg', label: 'Spark' }
{ src: '/pix.svg',   label: 'Pix' }
```

`comparison`: `null`

## FAQ (5 pares)

```
Q: Como receber um pagamento em Lightning e sacar em Pix?
A: Você emite uma invoice BOLT11 com um POST em /api/lightning/invoice e entrega ao pagador. Quando ele paga, o payout Pix é disparado automaticamente e liquida em reais em segundos, na conta de quem recebe no Brasil.

Q: Quem paga precisa saber de Pix?
A: Não. Do lado de quem paga é um pagamento Lightning comum: escanear ou colar a invoice e pagar em bitcoin. O Pix acontece só na perna brasileira, depois.

Q: Quanto tempo leva?
A: A liquidação em reais acontece em segundos depois que a invoice é paga, e funciona 24 horas por dia, sem depender de horário bancário.

Q: Preciso rodar um nó Lightning?
A: Não. A emissão da invoice e a liquidação são operações da API. Você não mantém nó, não abre canal e não administra liquidez de rede.

Q: O que acontece se a invoice não for paga?
A: A invoice tem prazo de validade e expira sem que nada seja movimentado. Nenhum payout é disparado, e o webhook informa o estado. Você pode emitir outra.
```

## Relacionados (`related`)

```
{ label: 'Pagar Pix com USDT',     href: '/pagar-pix-com-usdt' }
{ label: 'API Pix stablecoin',     href: '/api-pix-stablecoin' }
{ label: 'Glossário',              href: '/glossario' }
{ label: 'Preços e taxas',         href: '/precos' }
```

## Link de entrada (obrigatório)

Na coluna **Produtos** do `src/components/ui/Footer.tsx`, depois de `Pagar Pix com USDT`:

```
{ label: 'Lightning para Pix', href: '/lightning-para-pix' }
```

## Aceite

- [ ] `pnpm build` verde; rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro novo; `pnpm eslint` sem erro novo
- [ ] copy **idêntica** ao contrato; `faqSubhead` e `ctaSubhead` preenchidos
- [ ] um único `<h1>`; todo ícone existe em `public/`
- [ ] `/sitemap.xml` contém `/lightning-para-pix` com `lastmod` 2026-07-29
- [ ] `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; FAQPage casa com as 5 visíveis
- [ ] rodapé (Produtos) aponta para a página; a página aponta para ≥2 internos
- [ ] nenhuma taxa; nenhum número de prazo (só "em segundos"); nenhum país listado; nenhum
      concorrente nomeado; nenhum DEPIX
- [ ] rotas existentes seguem abrindo; zero 404 de asset; sem overflow em 390px

## Review Block

```markdown
## Review Block
LABEL: lightning-para-pix
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /lightning-para-pix
  - expectVisible: "Cobre em Lightning, liquide em Pix"
  - expectOne: h1
  - shot: "lightning-para-pix-desktop"
  - viewport: 390x844
  - shot: "lightning-para-pix-mobile"
  - assertSitemap: /lightning-para-pix
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
```

Não faça merge. Não rode deploy.
