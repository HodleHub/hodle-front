# Contrato — página de tópico `/comprar-usdt-com-pix`

Leva B. Contexto: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md) §10.

Você implementa **estrutura**; a copy é final e vai no código **palavra por palavra**.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`, `any`,
type assertion, `readonly` · arquivos em camelCase · linha em branco entre statements · sem
comentário no meio do código · sem emoji · pt-BR com acentos completos.

Vocabulário visual da home e do FAQ. **Nenhuma cor nova, nenhuma dependência nova.**

## Arquivos

**Criar:** `src/content/topics/comprarUsdtComPix.ts`
**Editar:** `src/content/topics/topics.ts` (uma linha)

## Phase 2 — mapa de keyword (ao vivo, 2026-07-29)

- **Primária:** `comprar usdt com pix por api`
- **Frase real confirmada:** o mercado escreve **"comprar USDT com Pix"**, não "pix para usdt".
  O esboço inicial da leva B usava `/pix-para-usdt`, copiado do padrão `<stable>-to-<fiat>` da
  BlindPay — errado para pt-BR. Slug corrigido para a frase que as pessoas digitam
- **SERP observada:** `bitcoinp2p.com.br/comprar-usdt-com-pix` (guia, anuncia **0,45%** e API
  REST), `paybis.com/buy-usdt-with-pix`, Exame (Smartpay "swapix"),
  `azify.com/blog/on-ramp-off-ramp-cripto-empresas` (B2B), `tonramp.io` (checkout Pix→USDT em
  TON), `bipa.app/usdt` ("Comprar USDT com Pix: Dólar Digital Sem IOF")
- **Secundárias:** comprar usdt com pix · on-ramp usdt api · dólar digital por api ·
  converter reais em usdt · api para comprar stablecoin
- **Descartadas:** "sem IOF" — é o ângulo da Bipa e é afirmação **tributária** que não podemos
  fazer sem base. Também descartado "melhor cotação" e qualquer variante de câmbio
- **PAA → FAQ:** 1) Como comprar USDT com Pix por API? 2) Em qual rede o USDT é entregue?
  3) Dá para entregar no endereço do meu usuário? 4) Qual a taxa? 5) Precisa de KYC?
- **Ângulo vazio (nossa tese):** a SERP é **guia de compra para pessoa física** mais dois
  produtos de checkout. Ninguém cobre **on-ramp por API para empresas com entrega multi-rede
  no endereço do usuário final**. É o `deposit-asset`, e o diferencial é o destino: endereço
  indicado, não saldo interno
- **Proibidos:** competir em preço (a SERP tem 0,45% anunciado; nossa taxa publicada é 2% e
  esta página **não** discute quem é mais barato) · "sem IOF" · qualquer afirmação tributária ·
  "melhor cotação" · promessa de câmbio · afirmar que a Hodle é regulada, é banco ou custodia
  ativos · DEPIX

## Fronteiras

- **Nenhum percentual na página.** A taxa vive em `/precos`, e a FAQ 4 **linka** para lá.
- **Nenhum prazo numérico**, e **não** use "em segundos" — a documentação só publica isso para
  o fluxo Lightning ↔ PIX de entrada. Permitido: "24/7", "sem depender de horário bancário".
- **Nenhuma afirmação tributária.** Nada sobre IOF, imposto de renda ou declaração.
- **Tron aparece só em texto** — não existe `tron.svg` em `public/`.
- **Não afirme custódia.** A entrega é num endereço indicado; as chaves são do usuário.

## Registro `TopicPage`

`src/content/topics/comprarUsdtComPix.ts` exporta `comprarUsdtComPix`.

```
slug:            'comprar-usdt-com-pix'
primaryKeyword:  'comprar usdt com pix por api'
title:           'Comprar USDT com Pix por API'
h1:              'Reais entram por Pix, sai dólar digital'
updatedAt:       '2026-07-29'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'ON-RAMP'
```

`description` (152 caracteres):

> Converta reais em USDT, USDC ou USDCE por API e entregue na rede que escolher, no endereço do seu usuário. Disponível 24 horas por dia, todos os dias.

`keywords`:

```
'comprar usdt com pix por api'
'comprar usdt com pix'
'on-ramp usdt api'
'dólar digital por api'
'converter reais em usdt'
'api para comprar stablecoin'
```

`subhead` (31 palavras):

> Uma chamada recebe reais por Pix e entrega dólar digital no endereço que você indicar. A rede é parâmetro da operação, então o mesmo código atende Polygon, Base ou Tron.

`faqSubhead`:

> Tire suas dúvidas sobre comprar USDT com Pix por API.

`ctaSubhead`:

> Comece pela documentação ou fale com o time da Hodle.

`heroIcons`:

```
{ src: '/pix.svg',     label: 'Pix' }
{ src: '/usdt.svg',    label: 'USDT' }
{ src: '/usdc.svg',    label: 'USDC' }
{ src: '/polygon.svg', label: 'Polygon' }
{ src: '/base.png',    label: 'Base' }
```

`ctaPrimary`:
```
{ label: 'Ver a documentação', href: 'https://docs.hodle.com.br/docs/deposit-asset' }
```

`ctaSecondary`:
```
{ label: 'Falar com vendas', href: 'https://api.whatsapp.com/send?phone=5511960000445' }
```

## Seções (5)

### 1 — `id: 'o-que-e'` · `kind: 'PROSE'`

`heading`: **O que é comprar USDT com Pix por API**

`body`:

> É converter reais em dólar digital numa chamada e entregar o ativo direto num endereço. O Pix entra, a conversão acontece, e a stablecoin sai na rede que você escolheu para o destino que você indicou.
>
> A diferença em relação a comprar numa exchange é o destino. Não existe saldo interno intermediário esperando saque: a entrega é o passo final da própria operação.

`bullets`:

```
'Entrada em reais por Pix, disponível 24 horas por dia.'
'Saída em USDT, USDC ou USDCE.'
'Destino é um endereço que você indica, não um saldo interno.'
'A rede é parâmetro da operação, não integração separada.'
```

`icons`: `[]` · `comparison`: `null`

### 2 — `id: 'como-funciona'` · `kind: 'STEPS'`

`heading`: **Do Pix ao dólar digital entregue**

`body`:

> Três etapas, e as decisões suas são o ativo e a rede.

`bullets`:

```
'Escolher ativo e rede. USDT em Polygon ou Tron, USDC em Base, e as duas também em Arbitrum e Spark.'
'Disparar a operação. O deposit-asset recebe o valor em reais e o endereço de destino.'
'Entrega e confirmação. A stablecoin chega no endereço indicado, e o webhook assinado com HMAC avisa a mudança de estado.'
```

`icons`: `[]` · `comparison`: `null`

### 3 — `id: 'para-que-serve'` · `kind: 'PROSE'`

`heading`: **Por que uma empresa faz isso por API**

`body`:

> O caso mais comum é dar ao usuário final exposição a dólar sem que a sua plataforma precise operar uma tesouraria em moeda estrangeira. O usuário deposita em reais, o saldo dele fica em dólar digital, e o seu produto só orquestra a chamada.
>
> O segundo caso é operacional: pagar fornecedor ou colaborador que prefere receber em stablecoin. A entrada continua em reais, e a saída já sai no ativo e na rede que o destinatário usa.

`bullets`:

```
'Dar exposição a dólar ao usuário final, sem tesouraria própria.'
'Pagar quem prefere receber em stablecoin.'
'Sem depender de horário bancário.'
```

`icons`: `[]` · `comparison`: `null`

### 4 — `id: 'redes'` · `kind: 'ASSETS'`

`heading`: **Ativos e redes de entrega**

`body`:

> USDT é entregue em Polygon e Tron. USDC em Base. As duas também circulam em Arbitrum e Spark. USDCE é a versão ponte da USDC em determinadas redes e também está disponível como destino.

`bullets`: `[]`

`icons`:

```
{ src: '/usdt.svg',     label: 'USDT' }
{ src: '/usdc.svg',     label: 'USDC' }
{ src: '/polygon.svg',  label: 'Polygon' }
{ src: '/base.png',     label: 'Base' }
{ src: '/arbitrum.svg', label: 'Arbitrum' }
{ src: '/spark.svg',    label: 'Spark' }
{ src: '/pix.svg',      label: 'Pix' }
```

`comparison`: `null`

### 5 — `id: 'pela-api'` · `kind: 'CODE'`

`heading`: **A chamada de entrada**

`body`:

> O mesmo endpoint que converte reais em USDT converte em USDC, USDCE e Lightning. Trocar o ativo de destino é trocar um parâmetro, não refazer a integração.

`bullets`:

```
'deposit-asset — converte reais e entrega no endereço indicado.'
'Ativos de destino: USDT, USDC, USDCE e Lightning.'
'Webhook assinado com HMAC em cada mudança de estado.'
'KYC do usuário final pela mesma API, exigido para entrada e saída.'
```

`icons`: `[]` · `comparison`: `null`

Renderize com o `<CodeBlock />` existente via `topicCodeBlock.tsx`, sem props novas.

## FAQ (5 pares)

```
Q: Como comprar USDT com Pix por API?
A: Você dispara a operação de deposit-asset informando o valor em reais, o ativo de destino e o endereço que vai receber. A stablecoin chega nesse endereço e o webhook assinado avisa a conclusão.

Q: Em qual rede o USDT é entregue?
A: Na que você escolher. USDT é entregue em Polygon e Tron, USDC em Base, e as duas também circulam em Arbitrum e Spark. A rede é parâmetro da operação.

Q: Dá para entregar no endereço do meu usuário final?
A: Sim, e é o desenho pretendido. A entrega é num endereço que você indica, sem saldo interno intermediário esperando saque. As chaves do endereço de destino não ficam com a Hodle.

Q: Qual a taxa?
A: A taxa de serviço está publicada na página de preços, que é a única fonte oficial. Qualquer valor citado fora dela deve ser conferido antes de ser considerado válido.

Q: Precisa de KYC?
A: Sim. A verificação de identidade do usuário final é exigida para operações de entrada e saída, e é feita pela própria API, com submissão e consulta de estado documentadas.
```

A resposta 4 **linka** `/precos` na expressão "página de preços".

## Relacionados (`related`)

```
{ label: 'Pagar Pix com USDT',        href: '/pagar-pix-com-usdt' }
{ label: 'Comprar Bitcoin com Pix',   href: '/comprar-bitcoin-com-pix' }
{ label: 'Preços e taxas',            href: '/precos' }
{ label: 'Glossário',                 href: '/glossario' }
```

## Link de entrada (obrigatório)

Na coluna **Produtos** do `src/components/ui/Footer.tsx`, depois de `Lightning para Pix`:

```
{ label: 'Comprar USDT com Pix', href: '/comprar-usdt-com-pix' }
```

## Aceite

- [ ] `pnpm build` verde; rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro novo; `pnpm eslint` sem erro novo
- [ ] copy **idêntica** ao contrato; `faqSubhead` e `ctaSubhead` preenchidos
- [ ] um único `<h1>`; todo ícone existe em `public/`; **nenhum `tron.svg`**
- [ ] `/sitemap.xml` contém `/comprar-usdt-com-pix` com `lastmod` 2026-07-29
- [ ] `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; FAQPage casa com as 5 visíveis
- [ ] rodapé (Produtos) aponta para a página; a página aponta para ≥2 internos
- [ ] **nenhum percentual na página** — `grep -oE '[0-9]+[,.]?[0-9]*\s?%'` no arquivo de
      conteúdo tem que voltar vazio
- [ ] nenhuma menção a IOF, imposto ou declaração; nenhuma comparação de preço; nenhum prazo
      numérico; nenhum "em segundos"; nenhum concorrente nomeado; nenhum DEPIX
- [ ] a FAQ 4 linka `/precos`
- [ ] rotas existentes seguem abrindo; zero 404 de asset; sem overflow em 390px

## Review Block

```markdown
## Review Block
LABEL: comprar-usdt-com-pix
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /comprar-usdt-com-pix
  - expectVisible: "Reais entram por Pix, sai dólar digital"
  - expectOne: h1
  - shot: "comprar-usdt-com-pix-desktop"
  - viewport: 390x844
  - shot: "comprar-usdt-com-pix-mobile"
  - assertSitemap: /comprar-usdt-com-pix
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
```

Não faça merge. Não rode deploy.
