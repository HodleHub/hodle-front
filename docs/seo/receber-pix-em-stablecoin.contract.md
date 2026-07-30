# Contrato — página de tópico `/receber-pix-em-stablecoin`

Origem: feature flag `PIX2STABLE` do monorepo Hodler. Contexto e decisões:
[`receber-pix-em-stablecoin.walkthrough.md`](receber-pix-em-stablecoin.walkthrough.md).

Você implementa **estrutura**; a copy é final e vai no código **palavra por palavra**.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`, `any`,
type assertion, `readonly` · arquivos em camelCase · linha em branco entre statements · sem
comentário no meio do código · sem emoji · pt-BR com acentos completos.

Vocabulário visual da home e dos tópicos existentes. **Nenhuma cor nova, nenhuma dependência
nova.**

## Fronteiras — leia antes de escrever qualquer linha

- **NUNCA escreva "Woovi"** na página, no commit, no PR ou em comentário. O provedor não é
  citado. O sujeito é sempre "a sua conta", "a chave Pix da sua conta".
- **NUNCA use "Pix automático".** É o produto de débito recorrente que o Banco Central lançou
  em 16/jun/2026, assunto totalmente diferente. Usar o termo atrai a busca errada.
- **Nenhum percentual, nenhuma taxa numérica** no texto. A taxa vive em `/precos`.
- **Nenhuma afirmação tributária.** Nada de "sem IOF", "economia fiscal", "não paga imposto".
  A Resolução BCB 521 (fev/2026) trata ativo referenciado em moeda estrangeira como operação
  de câmbio; a página não opina sobre enquadramento.
- **Nenhuma promessa de prazo.** Proibido "em segundos", "instantâneo", "na hora". Permitido:
  "disparado pelo recebimento", "sem depender de horário bancário".
- **Não afirme custódia, regulação ou que a Hodle é banco.** O destino é carteira externa do
  cliente; as chaves não são nossas.
- **Nenhum ativo ou rede além de USDC na Base.** É o único par em produção
  (`PIX2STABLE_TARGETS`). Não invente Polygon, Tron, USDT nesta página.
- **O par é entregue só quando o Pix chega sem cobrança emitida** (chave / QR Code estático).
  Pix pago contra uma cobrança segue o fluxo da cobrança. A FAQ 4 diz isso e não pode ser
  amaciada.

## Arquivos

**Criar:**
- `src/content/topics/receberPixEmStablecoin.ts`

**Editar:**
- `src/types/topic.ts` — novo tipo `TopicImage`, novo kind `SCREENSHOT`, novo campo `image`
- `src/components/topic/topicSections.tsx` — renderizar `SCREENSHOT` + parágrafos do `body`
- `src/content/topics/topics.ts` — import + uma linha no array
- os 8 tópicos existentes em `src/content/topics/*.ts` — `image: null` em cada seção

**Já commitado neste branch, não recrie:**
- `public/pix2stable-tela.png` (1920×3002, mock da tela no design system do dashboard)

## Phase 2 — mapa de keyword (ao vivo, 2026-07-30)

- **Primária:** `receber pix em stablecoin` — intent **comercial**
- **SERP observada:** a primeira página é **produto + notícia**, sem portal de autoridade
  dominando. Página de produto entra
- **Secundárias:** receber pix em dólar · chave pix customizada cripto · gateway de pagamento
  pix cripto · receber pagamento em USDC empresa · qr code estático pix · receber pix em usdt
- **Descartadas:** `pix automático` (homônimo — débito recorrente do BC, jun/2026) ·
  `pix internacional` (não existe pelo BC) · `comprar usdc com pix` (é on-ramp, já é
  `/comprar-usdt-com-pix`)
- **PAA → FAQ:** 1) Como receber Pix em stablecoin? 2) Empresa pode receber pagamento em
  stablecoin no Brasil? 3) Preciso emitir nota fiscal recebendo em stablecoin? 4) Qual a
  diferença entre chave Pix estática e QR Code dinâmico? 5) A stablecoin cai na minha carteira
  ou fica na plataforma?
- **Incumbentes:** `pixgo.org/blog/receber-pix-em-dolar` (PF, DePix→USDT na Liquid, D+1 — sem
  PJ, sem USDC/Base) · `finchain.com.br/receba-em-criptomoedas-e-stablecoin` (gateway, mas o
  ativo cai na wallet **da exchange**, custodial) · `br.beincrypto.com` /SmartPay-Truther (chave
  Pix personalizada → USDT **na carteira do app**, custodial, PF) · `pixbitcoin` (gateway "sem
  KYC", Liquid — posicionamento oposto)
- **Ângulo vazio (nossa tese):** todos são carteira-de-app ou saldo custodial na exchange.
  Ninguém entrega, para PJ, **a chave Pix que a empresa já divulga** com o valor caindo em USDC
  numa **carteira externa que a própria empresa cadastra**, sem saldo intermediário e sem uma
  chamada de API por transação
- **Proibidos:** ver §Fronteiras
- **Filha candidata:** `/receber-pix-em-dolar` (ângulo pessoa física, o termo do PixGo)

## Mudança de tipo — `src/types/topic.ts`

Adicionar o tipo e o kind, e o campo em `TopicSection`. Sem `readonly`, sem opcional:

```ts
export type TopicImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type TopicSectionKind =
  | 'PROSE'
  | 'STEPS'
  | 'ASSETS'
  | 'COMPARISON'
  | 'CODE'
  | 'SCREENSHOT'
```

`TopicSection` ganha `image: TopicImage | null`, na mesma posição relativa de `comparison` e
`code`. Todos os 8 tópicos existentes ganham `image: null` em **cada** seção — é varredura
mecânica, não mexa no texto deles.

## Mudança de render — `src/components/topic/topicSections.tsx`

Duas coisas, ambas com helper nomeado no topo do arquivo (sem ternário encadeado):

**1. Parágrafos do `body`.** Hoje o `body` inteiro cai num único `<p>`, então os `\n\n` que os
tópicos já usam colapsam num parágrafo corrido. Extraia um componente que quebra em `\n\n` e
renderiza um `<p>` por parágrafo, mantendo as classes atuais
(`text-gray-500 leading-relaxed`), com espaçamento entre parágrafos. Use-o em **todas** as
seções que hoje renderizam `section.body`.

**2. `SectionScreenshot`.** Mesma estrutura das outras: `<h2>` com as classes de `heading`, o
body em parágrafos, e então a imagem:

- `next/image` com `width`/`height` explícitos vindos de `section.image` (evita layout shift)
- `className="w-full h-auto rounded-2xl border border-gray-200"`, `sizes="(max-width: 768px)
  100vw, 700px"`
- `alt` = `section.image.alt`
- legenda abaixo: `<p className="mt-3 text-xs text-gray-400">{section.image.caption}</p>`
- se `section.image` for `null`, renderize só heading + body (fail-safe, sem crash)

Adicione o `case 'SCREENSHOT'` no `switch` do `renderSection`.

## Registro `TopicPage` — `src/content/topics/receberPixEmStablecoin.ts`

Exporta `receberPixEmStablecoin`. Copy final abaixo, **palavra por palavra**.

```
slug:            'receber-pix-em-stablecoin'
primaryKeyword:  'receber pix em stablecoin'
title:           'Receber Pix em stablecoin na sua carteira'
h1:              'Receba Pix em stablecoin, direto na sua carteira'
updatedAt:       '2026-07-30'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'RECEBIMENTO'
```

**description** (meta):

> Todo Pix que cai na chave ou no QR Code estático da sua empresa é convertido e entregue em USDC na Base, numa carteira externa que só você cadastra.

**keywords**:

```
'receber pix em stablecoin'
'receber pix em dólar'
'chave pix stablecoin'
'receber pagamento em usdc'
'gateway de pagamento pix cripto'
'qr code estático pix'
'receber pix em usdt'
```

**subhead**:

> Sua empresa continua divulgando a mesma chave Pix e o mesmo QR Code estático. Cada Pix que chega é convertido e entregue em USDC numa carteira externa que só você cadastra.

**heroIcons**:

```
{ src: '/pix.svg', label: 'Pix' }
{ src: '/qr-code.svg', label: 'QR Code' }
{ src: '/usdc.svg', label: 'USDC' }
{ src: '/base.png', label: 'Base' }
```

**ctaSubhead**:

> A liberação é avaliada caso a caso. Fale com o time da Hodle sobre o seu recebimento e a carteira de destino.

**ctaPrimary**: `{ label: 'Falar com o time', href: 'https://api.whatsapp.com/send?phone=5511960000445' }`

**ctaSecondary**: `{ label: 'Preços e taxas', href: '/precos' }`

**faqSubhead**:

> As dúvidas mais comuns de quem quer receber Pix em stablecoin.

---

### Seção 1 — `id: 'o-que-e'` · `kind: 'PROSE'`

**heading:** `O que é receber Pix em stablecoin`

**body:**

> Receber Pix em stablecoin é manter o meio de cobrança que a sua empresa já usa e trocar só o destino do dinheiro. O pagador faz um Pix comum, na chave ou no QR Code estático da sua conta, e o valor não fica parado em real: ele é convertido e sai em USDC para uma carteira externa que você cadastrou antes.
>
> Não existe uma chamada de API por transação nem um botão a apertar. O gatilho é o próprio Pix chegando na chave, então quem paga não precisa saber que existe stablecoin no meio do caminho.

**bullets:**

```
'A mesma chave Pix e o mesmo QR Code estático que você já divulga.'
'Quem paga faz um Pix comum, sem app novo e sem cadastro.'
'A conversão é disparada pelo recebimento, não por uma chamada sua.'
'O destino é uma carteira externa sua, não um saldo interno.'
```

`icons: []` · `comparison: null` · `code: null` · `image: null`

---

### Seção 2 — `id: 'como-funciona'` · `kind: 'STEPS'`

**heading:** `Da sua chave Pix até o USDC na carteira`

**body:**

> São três etapas, e você configura apenas a primeira.

**bullets:**

```
'Cadastrar a carteira de destino. Você adiciona o endereço na whitelist da sua conta e marca uma carteira como padrão. Sem carteira padrão nada é enviado: o valor fica retido na conta e o nosso time é avisado.'
'Receber o Pix normalmente. O pagador usa a chave ou o QR Code estático da sua conta, e nenhuma cobrança precisa ser emitida antes.'
'Receber em USDC. O valor é convertido e enviado para a carteira padrão da whitelist, e a conversão aparece na sua tela com o hash da transação on-chain.'
```

`icons: []` · `comparison: null` · `code: null` · `image: null`

---

### Seção 3 — `id: 'a-tela'` · `kind: 'SCREENSHOT'`

**heading:** `A tela que controla o recebimento`

**body:**

> Tudo o que você configura fica em uma tela: a chave Pix da sua conta, a whitelist de carteiras que podem receber, e o histórico de conversões com o hash de cada entrega on-chain.
>
> Uma carteira só entra na whitelist por ação sua. É isso que impede que um endereço que você não cadastrou receba um Pix da sua empresa.

**bullets:** `[]`

**image:**

```
src:     '/pix2stable-tela.png'
alt:     'Tela de recebimento em stablecoin, com a chave Pix da conta, a whitelist de carteiras externas em USDC na Base e o histórico de conversões'
caption: 'Tela do produto com dados ilustrativos.'
width:   1920
height:  3002
```

`icons: []` · `comparison: null` · `code: null`

---

### Seção 4 — `id: 'ativos'` · `kind: 'ASSETS'`

**heading:** `O que é entregue hoje: USDC na Base`

**body:**

> O par entregue hoje é USDC na rede Base. É o único par em produção, e ele está aqui porque foi provado ponta a ponta, não porque cabia em uma lista.
>
> Outras redes e outros ativos entram conforme forem validados. Confirme com o time o que está disponível antes de cadastrar a carteira de destino.

**bullets:** `[]`

**icons:**

```
{ src: '/pix.svg', label: 'Pix' }
{ src: '/qr-code.svg', label: 'QR Code estático' }
{ src: '/usdc.svg', label: 'USDC' }
{ src: '/base.png', label: 'Base' }
```

`comparison: null` · `code: null` · `image: null`

---

### Seção 5 — `id: 'autocustodia'` · `kind: 'PROSE'`

**heading:** `A carteira de destino é sua`

**body:**

> O endereço que recebe é um endereço seu, em uma carteira que você controla. A Hodle não guarda as chaves dessa carteira, então o USDC entregue não fica sob custódia nossa esperando um saque.
>
> Na prática isso muda quem depende de quem. O valor está na sua carteira desde a entrega, e cada entrega tem hash on-chain, verificável por qualquer pessoa em um explorador público.

**bullets:**

```
'As chaves da carteira de destino não ficam com a Hodle.'
'Cada entrega tem hash on-chain, verificável em explorador público.'
'A whitelist é da sua conta: só recebe o endereço que você cadastrou.'
```

`icons: []` · `comparison: null` · `code: null` · `image: null`

---

### Seção 6 — `id: 'condicoes'` · `kind: 'PROSE'`

**heading:** `Como habilitar na sua conta`

**body:**

> O recebimento em stablecoin é liberado conta por conta e não é autoatendimento. A liberação depende do seu perfil de recebimento, do volume e da carteira de destino, e por isso o primeiro passo é conversar com o time.
>
> Esta página também não substitui orientação contábil ou fiscal. A emissão da nota fiscal em reais, a apuração e o reporte das operações continuam sendo responsabilidade da sua empresa e do seu contador.

**bullets:**

```
'Sujeito a condições especiais: a liberação é avaliada caso a caso.'
'Conta verificada é pré-requisito.'
'Nota fiscal e apuração fiscal continuam com a sua empresa.'
```

`icons: []` · `comparison: null` · `code: null` · `image: null`

---

## FAQ (5 pares, na formulação da busca)

**1.** `Como receber Pix em stablecoin?`

> Você cadastra a carteira externa que vai receber e continua divulgando a chave Pix ou o QR Code estático da sua conta. Cada Pix que chega é convertido e enviado em USDC para essa carteira, sem uma chamada de API por transação.

**2.** `Empresa pode receber pagamento em stablecoin no Brasil?`

> Sim, e é o uso pretendido aqui: o que entra continua sendo um Pix em reais, e a entrega é feita em stablecoin em uma carteira sua. As obrigações contábeis e fiscais da operação continuam com a sua empresa, e a Hodle não presta orientação tributária.

**3.** `Preciso emitir nota fiscal recebendo em stablecoin?`

> A nota fiscal segue as regras da sua atividade e é emitida em reais, porque o pagamento que entra é um Pix em reais. Como o enquadramento depende do seu caso, confirme com o seu contador.

**4.** `Qual a diferença entre chave Pix estática e QR Code dinâmico?`

> A chave e o QR Code estático são fixos e aceitam qualquer valor, sem uma cobrança emitida antes, e é justamente esse caso que dispara a conversão. O QR Code dinâmico nasce de uma cobrança, e um Pix pago contra uma cobrança segue o fluxo dessa cobrança.

**5.** `A stablecoin cai na minha carteira ou fica na plataforma?`

> Cai na carteira externa que você marcou como padrão. Se nenhuma carteira estiver cadastrada, o valor fica retido na sua conta e o nosso time é avisado, então nada é enviado para um endereço que você não aprovou.

## Relacionados

```
{ label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' }
{ label: 'Comprar USDT com Pix', href: '/comprar-usdt-com-pix' }
{ label: 'API Pix stablecoin', href: '/api-pix-stablecoin' }
{ label: 'Preços e taxas', href: '/precos' }
```

## Link interno de entrada

A página precisa ser apontada de fora, não só apontar. Adicione `Receber Pix em stablecoin`
→ `/receber-pix-em-stablecoin` na mesma lista de links de tópico que o footer/home já usa
para os 8 tópicos existentes. Siga o padrão que estiver lá; **não** crie seção nova.

## Critérios de aceite

1. `pnpm build` verde. `generateStaticParams` inclui `receber-pix-em-stablecoin` e nenhuma
   colisão com `reservedSlugs`.
2. `pnpm lint` verde, sem novo warning.
3. `/sitemap.xml` contém `https://hodle.com.br/receber-pix-em-stablecoin` com `lastmod` —
   pelo registry, **sem** editar `sitemap.ts` à mão.
4. `<title>`, meta description, canonical e OG batem com este contrato. Exatamente um `<h1>`.
5. JSON-LD válido: `WebPage` + `FAQPage` (com as 5 perguntas realmente visíveis) +
   `BreadcrumbList`.
6. Os 8 tópicos existentes continuam buildando e **com o texto intacto** — só `image: null`.
7. `/faq`, `/termos`, `/precos`, `/checkout` continuam abrindo.
8. Zero erro de console, zero 404 de asset. O `pix2stable-tela.png` carrega.
9. Nenhuma ocorrência de "Woovi" nem de "Pix automático" no **código**:
   `git diff origin/main -- src/ public/ | grep -iE "woovi|pix autom"` não retorna nada.
   (O escopo exclui `docs/`, porque este contrato cita a palavra justamente para proibi-la.)

## Review Block (Claude Code executa; o seu relato não substitui)

```sh
cd ~/javascript/hodle-front
git checkout feat/seo-receber-pix-em-stablecoin
pnpm install --frozen-lockfile
pnpm build
pnpm dev &
sleep 6

curl -s localhost:3000/sitemap.xml | grep -c "receber-pix-em-stablecoin"
curl -s localhost:3000/receber-pix-em-stablecoin | grep -c "<h1"
curl -s localhost:3000/receber-pix-em-stablecoin \
  | grep -o 'rel="canonical" href="[^"]*"'
for r in faq termos precos checkout; do
  echo "$r -> $(curl -s -o /dev/null -w '%{http_code}' localhost:3000/$r)"
done
git diff origin/main -- src/ public/ | grep -icE "woovi|pix autom"
```

Playwright, com prints anexados ao PR:

- desktop 1440 e mobile 390, página inteira, sem overflow horizontal
- `application/ld+json` parseia sem erro, com os três tipos
- console limpo, zero request 404
- o print da tela (`pix2stable-tela.png`) aparece renderizado, não quebrado

## O que NÃO fazer

- Não escreva copy nova. Se algo estiver faltando, pare e comente no card.
- Não crie `.md` novo. O walkthrough é o único artefato de documentação.
- Não edite `sitemap.ts`, `robots.ts` nem `reservedSlugs.ts`.
- Não faça merge e não rode deploy.
- Não recrie nem otimize `public/pix2stable-tela.png`.
