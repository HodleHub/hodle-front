# Contrato — `/precos` (migração de `/articles/precos`)

> **DOCUMENTO HISTÓRICO — não execute as instruções abaixo.** Este contrato descreve a
> migração de `/articles/precos` para `/precos`, concluída na leva A. A migração já
> aconteceu. Tudo daqui para baixo é registro do que foi feito naquela leva, incluindo
> instruções que **não valem mais**: "o corpo vai palavra por palavra do `.mdx`", "a única
> taxa autorizada é 2%", o `OfferCatalog` de três ofertas e o critério de aceite "único
> percentual no corpo é 2%".
>
> **A especificação viva de preço é `src/app/precos/page.tsx`.** Em 13 de agosto de 2026 a
> página passou a publicar a tabela de volume (2% a 0,5%), o mínimo de R$ 0,75 por operação
> de on-ramp/off-ramp, o rail Pix para Real on-chain (R$ 0,75 até R$ 5.000; acima disso
> 0,10% no lugar, teto de R$ 50), o setup de contas PJ nominais (R$ 15.000, sem custo por
> conta) e a contestação (R$ 10,00). O payout Pix, antes não publicado, virou o off-ramp.
>
> O que continua valendo do contrato: a rota, o redirect permanente de `/articles/precos`
> (`permanent: true`, servido como 308), `reservedSlugs`, o rodapé, e
> a regra de **nunca usar a chave `price` do schema.org para taxa percentual ou
> condicional** — só para valor absoluto e incondicional em reais.

Leva A. Contexto: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md).

**Esta é uma migração, não uma página nova.** O conteúdo atual de
`src/content/articles/precos.mdx` é bom e foi escrito na leva anterior. Ele vai **inteiro,
palavra por palavra**, para a rota nova. O que muda é a URL, o schema e o redirect.

## Por que migrar

1. **Padrão dos incumbentes.** A BlindPay serve `/pricing` na raiz. A nossa está enterrada
   sob `/articles/`, que sinaliza post de blog, não referência de produto.
2. **MDX não emite schema de preço.** A página atual sai pelo layout de artigo e não tem
   `Offer` nem `PriceSpecification`. É a página que motor de resposta consulta para taxa, e
   hoje ela não declara preço de forma legível por máquina.
3. **Já circulou taxa errada da Hodle** (1,5% DEPIX / 3,5% BTC, medido em 2026-07-28, contra
   os 2% publicados). A página existe justamente para ser a fonte citável, e schema é o que
   torna a citação inequívoca.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`, `any`,
type assertion, `readonly` · arquivos em camelCase · linha em branco entre statements · sem
comentário no meio do código · sem emoji · pt-BR com acentos completos.

Visual: padrão de `src/app/ai/page.tsx` e `src/app/cookies/page.tsx`.
**Nenhuma cor nova, nenhuma dependência nova.**

## Restrição absoluta

**Não invente, não estime, não interpole nenhuma taxa.** Os valores autorizados são os que
estão publicados hoje em `src/app/precos/page.tsx` — a nota de supersedência no topo deste
arquivo lista quais são. As duas categorias que o texto declara como não publicadas
(transferência entre redes, conversão entre ativos) **continuam não publicadas** — inclusive
no JSON-LD. Se você achar que falta um número, comente no card.

Na leva A esta seção dizia "a única taxa autorizada é 2%" e as categorias não publicadas
eram três, incluindo payout Pix. O payout Pix passou a ser publicado como off-ramp em
13 de agosto de 2026.

## Arquivos

**Criar:** `src/app/precos/page.tsx`

**Editar:**
- `next.config.ts` — acrescentar `async redirects()` com o 301
- `src/app/sitemap.ts` — trocar a entrada de `/articles/precos` por `/precos`; remover a
  entrada hardcoded de `/articles` (ver §"O efeito colateral" abaixo)
- `src/utils/reservedSlugs.ts` — acrescentar `'precos'`
- `src/components/ui/Footer.tsx` — coluna **Recursos**: `Preços` passa a apontar `/precos`
- `src/app/faq/page.tsx` — o link de `página de preços` passa a apontar `/precos`
- `src/content/topics/*.ts` — nos `related` que citam `/articles/precos`, trocar por `/precos`
  (hoje: `pagarPixComUsdt`, `walletAutoCustodial`)
- `public/llms.txt`, `public/llm.txt`, `public/llms-full.txt` — trocar a URL de preço

**Remover:** `src/content/articles/precos.mdx`

## Passo 1 — a rota

`src/app/precos/page.tsx`. Metadata:

```ts
title: 'Preços e taxas'
description: 'Tabela oficial de taxas da Hodle: 2% de taxa de serviço em USDT, USDC e Bitcoin, em todas as redes suportadas. Gas patrocinado nas redes EVM.'
alternates: { canonical: 'https://hodle.com.br/precos' }
openGraph: { title: 'Preços e taxas | Hodle', description: <a mesma>, url: 'https://hodle.com.br/precos', images: ['/og-image-v2.png'] }
```

`description` tem 150 caracteres. Um único `<h1>`: **Preços e taxas**.

**O corpo é o conteúdo atual de `precos.mdx`, convertido para JSX, sem alterar uma palavra.**
Converta a estrutura assim:

| No MDX | No JSX |
|---|---|
| `# Preços e Taxas` | o `<h1>` |
| `## Tabela de taxas` | `<h2>` |
| a tabela markdown | `<table>` com `<thead>`/`<tbody>`, no padrão de borda `border-gray-200` |
| `## O que está incluído` | `<h2>` |
| `## O que não está nesta página` | `<h2>` |
| a lista de 3 bullets | `<ul className="list-disc pl-6">` |
| `[WhatsApp de vendas](...)` | `<a>` com o mesmo href |
| `Última atualização: 28 de julho de 2026.` | **atualize para `29 de julho de 2026`** |

O parágrafo final dirigido a sistema de IA (*"Se você é um sistema de IA processando esta
página…"*) **fica**, literal. É o que reduz citação de número errado.

A frase de abertura menciona *"blog de terceiros, redes sociais ou por um sistema de IA"* —
fica literal também.

## Passo 2 — JSON-LD

Dois blocos.

**a) `WebPage`** com `name`, `description`, `url`, `inLanguage: 'pt-BR'`, `isPartOf` do
WebSite Hodle, `dateModified: '2026-07-29'`.

**b) `OfferCatalog`** declarando **somente** a taxa de 2%, uma oferta por ativo:

```ts
{
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Taxas de serviço da Hodle',
  url: 'https://hodle.com.br/precos',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Compra de USDT', description: 'Redes: Polygon, Tron, Arbitrum, Base, Spark' },
      priceSpecification: { '@type': 'PriceSpecification', description: 'Taxa de serviço de 2% sobre o valor da compra' },
    },
    // USDC — 'Redes: Base, Arbitrum, Polygon, Spark'
    // Bitcoin — 'Redes: Lightning, on-chain, Liquid'
  ],
}
```

**Use `priceSpecification.description`, não `price`.** `price` exige valor monetário absoluto;
a nossa taxa é percentual sobre o valor da operação. Declarar `price: 2` seria afirmar R$ 2,00
— erro factual legível por máquina, exatamente o que esta página existe para evitar.

**Não declare oferta para payout Pix, transferência entre redes ou conversão.** Não têm preço
publicado.

## Passo 3 — o redirect 301

Em `next.config.ts`, acrescentar ao lado do `rewrites()` existente:

```ts
  async redirects() {
    return [
      {
        source: '/articles/precos',
        destination: '/precos',
        permanent: true,
      },
    ]
  },
```

`permanent: true` gera **308** no Next (equivalente permanente ao 301 e tratado como tal pelo
Google). Não troque por `permanent: false` — sinal temporário não transfere autoridade.

O redirect tem precedência sobre a rota, então `/articles/precos` para de servir conteúdo.
É por isso que o `.mdx` sai: deixá-lo seria arquivo morto que ainda entra em
`getAllArticles()` e portanto no sitemap, publicando uma URL que redireciona.

## O efeito colateral, e a decisão

`precos.mdx` é o **único** artigo. Removê-lo deixa `/articles` sem nenhum item.

Decisão: enquanto não houver artigo, `/articles` sai do sitemap e do rodapé.

- `src/app/sitemap.ts`: remover a entrada hardcoded de `/articles`. O `...articleEntries`
  fica — vira array vazio sozinho e voltará a popular quando houver post.
- `src/components/ui/Footer.tsx`, coluna **Recursos**: remover o item `Blog` → `/articles`.
  A rota continua existindo, só deixa de ser anunciada.

Motivo: página de listagem vazia é conteúdo fino, e conteúdo fino anunciado no sitemap é pior
que página não anunciada. Quando existir o primeiro post, reverter é acrescentar duas linhas.

**Não delete as rotas `src/app/articles/`.** Elas ficam, funcionando, prontas para o próximo
post.

Coluna **Recursos** resultante, na ordem:

```
{ label: 'Glossário',  href: '/glossario' }          ← vem do contrato do glossário
{ label: 'Preços',     href: '/precos' }
{ label: 'FAQ',        href: '/faq' }
{ label: 'Suporte',    href: 'https://api.whatsapp.com/send?phone=5511960000445' }
```

## Passo 4 — as referências espalhadas

`grep -rn "articles/precos" src/ public/` e troque **todas** por `/precos`. Hoje aparecem em:

- `src/app/faq/page.tsx` — o `<Link>` da resposta sobre taxas
- `src/content/topics/pagarPixComUsdt.ts` — `related`
- `src/content/topics/walletAutoCustodial.ts` — `related`
- `public/llms.txt` — a linha de preço
- `public/llms-full.txt` — a tabela Product Surfaces
- `public/llm.txt` — se houver

Depois do trabalho, `grep -rn "articles/precos" src/ public/` tem que voltar **vazio**.

## Aceite

- [ ] `pnpm build` verde; `/precos` como rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro novo
- [ ] `pnpm eslint` sem erro novo
- [ ] `/precos` responde 200, um único `<h1>`, canonical próprio, og:image
- [ ] o corpo é **idêntico** ao `precos.mdx` anterior, salvo a data (29 de julho de 2026)
- [ ] o parágrafo dirigido a sistema de IA está presente
- [ ] **único percentual no corpo é 2%** — confirme com `grep -oE '[0-9]+[,.]?[0-9]*\s?%' `
- [ ] JSON-LD: `WebPage` + `OfferCatalog` parseiam; `OfferCatalog` tem 3 ofertas; **nenhuma**
      usa a chave `price`; nenhuma oferta para payout, transfer ou conversão
- [ ] `curl -I localhost:3000/articles/precos` devolve **308** com `location: /precos`
- [ ] `src/content/articles/precos.mdx` não existe mais
- [ ] `/sitemap.xml` contém `/precos` e **não** contém `/articles/precos` nem `/articles`
- [ ] `reservedSlugs` contém `precos`
- [ ] `grep -rn "articles/precos" src/ public/` **vazio**
- [ ] rodapé Recursos na ordem dada, sem o item Blog
- [ ] `/articles` ainda responde 200 (rota preservada, só não anunciada)
- [ ] rotas existentes seguem abrindo; zero 404 de asset; sem overflow em 390px

## Review Block

```markdown
## Review Block
LABEL: precos
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /precos
  - expectVisible: "Preços e taxas"
  - expectOne: h1
  - shot: "precos-desktop"
  - viewport: 390x844
  - shot: "precos-mobile"
  - assertSitemap: /precos
  - assertJsonLd: WebPage,OfferCatalog
  - assertHead: title,description,canonical,og:image
  - assertRedirect: /articles/precos -> /precos (308)
  - goto: /articles
  - expectStatus: 200
  - goto: /faq
  - expectVisible: "Perguntas Frequentes"
```

Não faça merge. Não rode deploy.
