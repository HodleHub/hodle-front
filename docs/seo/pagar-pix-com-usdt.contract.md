# Contrato — página de tópico `/pagar-pix-com-usdt`

Contexto, keyword map e decisões: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md) §5.1.

Você implementa **estrutura**; a copy abaixo é final e vai no código **palavra por
palavra**. Não reescreva, não resuma, não adicione seção, não invente número. Faltou algo?
Comente no card.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`,
`any`, type assertion, `readonly` · RO-RO com múltiplos parâmetros · arquivos em camelCase ·
linha em branco entre statements · sem comentário no meio do código · sem emoji · pt-BR com
acentos completos.

Reuse o vocabulário visual da home e do FAQ: `max-w-[1200px] mx-auto px-6`,
`heading = 'font-[family-name:var(--font-space-grotesk)]'`, `text-foreground`,
`text-gray-500`, `border-gray-200`, `hero-grid` + `hero-spotlight` no hero, `ButtonShadow`
nos CTAs, `<details>` no FAQ, `AnimatedSection` nas seções, `next/image` com `width`/`height`
explícitos. **Nenhuma cor nova, nenhuma dependência nova.**

## Arquivos

**Criar:** `src/content/topics/pagarPixComUsdt.ts`
**Editar:** `src/content/topics/topics.ts` (uma linha no array `topics`)

Nada mais. O template `src/app/[slug]/page.tsx`, o `sitemap.ts`, o `topicJsonLd.tsx` e os
componentes de `src/components/topic/` já existem e já resolvem metadata, JSON-LD, OG,
breadcrumb e sitemap a partir do registry. **Se você precisou editar `sitemap.ts`, a
arquitetura foi violada** — pare e comente no card.

## Fronteiras desta página

- **Nenhum número de prazo de liquidação.** A documentação não publica um SLA para
  `POST /api/wallet/payout`. Escreva "24/7" e "sem depender de horário bancário", nunca
  "em segundos" nem "em X minutos".
- **Nenhuma taxa.** Taxa vive em `/articles/precos`.
- **Nenhuma menção a DEPIX** (decisão 6 do walkthrough).
- **Nenhum concorrente nomeado** e nenhuma seção `COMPARISON` (decisão 5).
- **Nenhuma afirmação de que a Hodle é regulada, é banco ou custodia ativos.**
- Tron aparece **só em texto**, nunca como ícone: não existe `tron.svg` em `public/`.

## Registro `TopicPage`

`src/content/topics/pagarPixComUsdt.ts` exporta `pagarPixComUsdt`. Valores exatos:

```
slug:            'pagar-pix-com-usdt'
primaryKeyword:  'pagar pix com usdt'
title:           'Pagar Pix com USDT: como funciona'
h1:              'Pague um Pix com saldo em USDT'
updatedAt:       '2026-07-28'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'PAGAMENTOS'
```

`description` (152 caracteres):

> Pague qualquer Pix usando saldo em USDT ou USDC, sem converter antes. Veja o passo a passo, as redes aceitas e como fazer isso pela API da Hodle.

`keywords`:

```
'pagar pix com usdt'
'pagar pix com stablecoin'
'pagar pix com cripto'
'pagamento pix com saldo em usdt'
'converter usdt em pix'
'pagar pix com dólar digital'
```

`subhead` (29 palavras):

> A Hodle liquida o Pix a partir do seu saldo em stablecoin. Você mantém dólar digital na carteira, dispara o pagamento e quem recebe cai em reais, como qualquer outro Pix.

`heroIcons` (5, todos existem em `public/`):

```
{ src: '/pix.svg',     label: 'Pix' }
{ src: '/usdt.svg',    label: 'USDT' }
{ src: '/usdc.svg',    label: 'USDC' }
{ src: '/polygon.svg', label: 'Polygon' }
{ src: '/base.png',    label: 'Base' }
```

`ctaPrimary`:
```
{ label: 'Falar com vendas', href: 'https://api.whatsapp.com/send?phone=5511960000445' }
```

`ctaSecondary`:
```
{ label: 'Ver a documentação', href: 'https://docs.hodle.com.br/docs/wallet-payout' }
```

## Seções (5, nesta ordem)

### 1 — `id: 'o-que-e'` · `kind: 'PROSE'`

`heading`: **O que é pagar Pix com USDT**

`body`:

> Pagar Pix com USDT é liquidar uma cobrança em reais usando dólar digital como fonte de fundos. Você não precisa vender a stablecoin antes, nem passar o valor por uma conta bancária: o saldo em USDT financia o pagamento e a liquidação em reais acontece no mesmo fluxo.
>
> Para quem recebe, nada muda. O Pix entra em reais, com o mesmo comprovante de sempre. A ponte entre a stablecoin e o sistema de pagamentos brasileiro fica do lado da Hodle.

`bullets`:

```
'Você mantém o saldo em dólar digital e paga em reais quando precisa.'
'Sem etapa manual de venda: a conversão faz parte do pagamento.'
'Disponível 24/7, sem depender de horário bancário.'
'Quem recebe não precisa ter carteira nem saber de cripto.'
```

`icons`: `[]` · `comparison`: `null`

### 2 — `id: 'como-funciona'` · `kind: 'STEPS'`

`heading`: **Como funciona, do request à liquidação**

`body`:

> São quatro etapas. Na integração por API, as duas do meio são um POST e um GET.

`bullets` (cada item vira um passo numerado):

```
'Saldo na carteira. O usuário tem USDT em Polygon ou Tron, ou USDC em Base, na carteira auto-custodial dele.'
'Chave do Pix e valor. Você informa o destino e o valor da cobrança em reais.'
'Disparo do payout. Um POST em /api/wallet/payout debita a stablecoin e inicia a liquidação. O gas da rede é patrocinado pela Hodle.'
'Confirmação. Um GET no mesmo recurso devolve o estado, e o webhook assinado avisa quando o Pix foi liquidado.'
```

`icons`: `[]` · `comparison`: `null`

### 3 — `id: 'ativos-e-redes'` · `kind: 'ASSETS'`

`heading`: **Ativos e redes aceitos no pagamento**

`body`:

> O saldo que financia o Pix pode estar em USDT ou USDC, em mais de uma rede. USDT é aceito em Polygon e Tron; USDC em Base. As duas stablecoins também circulam em Arbitrum e Spark dentro da plataforma.

`bullets`: `[]`

`icons`:

```
{ src: '/usdt.svg',    label: 'USDT' }
{ src: '/usdc.svg',    label: 'USDC' }
{ src: '/polygon.svg', label: 'Polygon' }
{ src: '/base.png',    label: 'Base' }
{ src: '/arbitrum.svg',label: 'Arbitrum' }
```

`comparison`: `null`

### 4 — `id: 'pela-api'` · `kind: 'CODE'`

`heading`: **Pelo painel ou por um POST**

`body`:

> No painel, o pagamento é um formulário. Na integração, é uma chamada. O mesmo endpoint que a Hodle usa internamente é o que você consome, autenticado por API key com escopo por plataforma.
>
> O gas das redes EVM é patrocinado: você não precisa manter saldo nativo de Polygon ou Base para conseguir pagar.

`bullets`:

```
'POST /api/wallet/payout para disparar o pagamento.'
'GET no mesmo recurso para acompanhar o estado.'
'Webhook assinado com HMAC quando o estado muda.'
'API key com escopo por plataforma, documentada em docs.hodle.com.br.'
```

`icons`: `[]` · `comparison`: `null`

O componente `topicCodeBlock.tsx` renderiza o `<CodeBlock />` existente sem props — não
passe props novas nem crie um snippet inline.

### 5 — `id: 'quem-recebe'` · `kind: 'PROSE'`

`heading`: **Quem recebe continua recebendo em reais**

`body`:

> A pessoa ou empresa do outro lado recebe um Pix comum, em reais, na conta que ela já usa. Não há carteira para instalar, endereço para copiar nem rede para escolher. É isso que torna o pagamento com stablecoin utilizável para fornecedor, prestador de serviço e cobrança do dia a dia.
>
> As chaves privadas da carteira de origem seguem sob controle exclusivo do usuário. A Hodle não custodia os ativos que financiam o pagamento.

`bullets`: `[]` · `icons`: `[]` · `comparison`: `null`

## FAQ (5 pares, nas formulações da SERP)

```
Q: Como pagar um Pix com USDT?
A: Você mantém saldo em USDT na carteira, informa a chave Pix e o valor, e dispara o pagamento pelo painel ou por um POST em /api/wallet/payout. A stablecoin é debitada e o Pix é liquidado em reais para quem recebe.

Q: Dá para pagar Pix com cripto sem converter antes?
A: Sim. Não existe etapa manual de venda: a conversão acontece dentro do próprio fluxo de pagamento. Você sai de um saldo em dólar digital direto para um Pix pago em reais.

Q: Quem recebe sabe que o pagamento veio de cripto?
A: Não. Do lado de quem recebe é um Pix comum, em reais, com o comprovante de sempre. Não é preciso ter carteira nem conhecer stablecoins.

Q: Preciso pagar taxa de rede (gas) para pagar um Pix?
A: Não nas redes EVM. O gas de Polygon e Base é patrocinado pela Hodle, então você não precisa manter saldo em moeda nativa da rede só para conseguir pagar.

Q: Quais stablecoins e redes posso usar como saldo?
A: USDT em Polygon e Tron, e USDC em Base. As duas também circulam em Arbitrum e Spark dentro da plataforma.
```

## Relacionados (`related`)

```
{ label: 'API de Pix com stablecoin',        href: '/api-pix-stablecoin' }
{ label: 'Carteiras auto-custodiais',        href: '/wallet-auto-custodial' }
{ label: 'Preços e taxas',                   href: '/articles/precos' }
{ label: 'Perguntas frequentes',             href: '/faq' }
```

## Link de entrada (obrigatório)

Acrescente na coluna **Produtos** do `src/components/ui/Footer.tsx`:

```
{ label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' }
```

Não crie coluna nova. Sem esse link a página é órfã e o review reprova.

## Aceite

- [ ] `pnpm build` verde e `/pagar-pix-com-usdt` aparece como rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro
- [ ] `pnpm eslint` sem erro novo
- [ ] copy **idêntica** a este contrato, sem texto inventado
- [ ] um único `<h1>`, igual ao campo `h1`
- [ ] todo `src` de ícone existe em `public/` (nenhum `tron.svg`)
- [ ] `/sitemap.xml` contém `https://hodle.com.br/pagar-pix-com-usdt` com `lastmod` 2026-07-28
- [ ] `<title>`, description, canonical e OG conferem com o registro
- [ ] `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; `FAQPage` casa com as 5 perguntas visíveis
- [ ] rodapé aponta para a página (coluna Produtos); a página aponta para ≥2 destinos internos
- [ ] nenhum número de prazo de liquidação, nenhuma taxa, nenhum "DEPIX", nenhum concorrente nomeado
- [ ] `/faq`, `/termos`, `/privacidade`, `/cookies`, `/articles`, `/checkout`, `/real-onchain` continuam abrindo
- [ ] zero erro de console, zero 404 de asset, sem overflow horizontal em 390px

## Review Block

```markdown
## Review Block
LABEL: pagar-pix-com-usdt
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /pagar-pix-com-usdt
  - expectVisible: "Pague um Pix com saldo em USDT"
  - expectOne: h1
  - shot: "pagar-pix-com-usdt-desktop"
  - viewport: 390x844
  - shot: "pagar-pix-com-usdt-mobile"
  - assertSitemap: /pagar-pix-com-usdt
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
  - goto: /faq
  - expectVisible: "Perguntas Frequentes"
  - goto: /real-onchain
  - expectOne: h1
```

Não faça merge. Não rode deploy.
