# Contrato — página de tópico `/real-onchain`

Primeira página do registry de tópicos de SEO. Você implementa **estrutura**; a copy
abaixo é final e vai no código **palavra por palavra**. Não reescreva, não resuma, não
adicione seção, não invente número. Falta algo? Comente no card.

Contexto e por quê: `docs/seo/real-onchain.walkthrough.md`.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`,
`any`, type assertion (`as any` / `as unknown as X`), `readonly` · RO-RO com múltiplos
parâmetros · arquivos em camelCase · linha em branco entre statements · sem comentário no
meio do código · sem emoji · pt-BR com acentos completos.

Reuse o vocabulário visual da home (`src/app/page.tsx`) e do FAQ
(`src/app/faq/page.tsx`): `max-w-[1200px] mx-auto px-6`,
`heading = 'font-[family-name:var(--font-space-grotesk)]'`, `text-foreground`,
`text-gray-500`, `border-gray-200`, `hero-grid` + `hero-spotlight` no hero,
`ButtonShadow` nos CTAs, `<details>` no FAQ, `AnimatedSection` nas seções,
`next/image` com `width`/`height` explícitos. **Nenhuma cor nova, nenhuma dependência
nova.**

## Arquivos

**Criar**

```
src/types/topic.ts
src/content/topics/realOnchain.ts
src/content/topics/topics.ts
src/utils/getAllTopics.ts
src/utils/getTopicBySlug.ts
src/utils/reservedSlugs.ts
src/components/topic/topicHero.tsx
src/components/topic/topicIconRow.tsx
src/components/topic/topicSections.tsx
src/components/topic/topicFaq.tsx
src/components/topic/topicRelated.tsx
src/components/topic/topicCta.tsx
src/components/topic/topicJsonLd.tsx
src/app/[slug]/page.tsx
```

**Editar**

```
src/app/sitemap.ts             espalhar as entradas de getAllTopics() (sem hardcode por página)
src/components/ui/Footer.tsx   coluna "Produtos": adicionar { label: 'Real onchain', href: '/real-onchain' }
```

**Ícone do BRLA** — não existe ainda no repo e **não deve ser gerado**. Copie o que o
admin da Hodle já usa, como primeiro passo, e commite junto:

```sh
cp ~/javascript/Hodler/apps/admin/public/brla.png public/brla.png
```

Se esse arquivo de origem não existir, pare e comente no card. Não invente ícone, não
troque por outro asset.

## Tipos — `src/types/topic.ts`

```ts
export type TopicIcon = { src: string; label: string }

export type TopicFaq = { question: string; answer: string }

export type TopicCta = { label: string; href: string }

export type TopicSectionKind = 'PROSE' | 'STEPS' | 'ASSETS' | 'COMPARISON' | 'CODE'

export type TopicComparison = { headers: string[]; rows: string[][] }

export type TopicSection = {
  id: string
  kind: TopicSectionKind
  heading: string
  body: string
  bullets: string[]
  icons: TopicIcon[]
  comparison: TopicComparison | null
}

export type TopicPage = {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  primaryKeyword: string
  updatedAt: string
  changeFrequency: 'weekly' | 'monthly'
  priority: number
  kicker: string
  subhead: string
  heroIcons: TopicIcon[]
  ctaPrimary: TopicCta
  ctaSecondary: TopicCta
  sections: TopicSection[]
  faq: TopicFaq[]
  related: TopicCta[]
  ogImage: string
}
```

## Conteúdo — `src/content/topics/realOnchain.ts`

Copie exatamente. O `<title>` não leva `| Hodle` (o template do `layout.tsx` já aplica).

```ts
import { TopicPage } from '../../types/topic'

export const realOnchain: TopicPage = {
  slug: 'real-onchain',
  title: 'Real tokenizado: stablecoin de real com Pix',
  h1: 'Receba em Pix, guarde em real onchain',
  description:
    'Como funciona o real tokenizado na prática: entra Pix, sai BRLA na rede Polygon, converte em dólar digital e volta em Pix — por API ou pela plataforma.',
  keywords: [
    'real tokenizado',
    'real onchain',
    'stablecoin de real',
    'stablecoin brasileira',
    'BRLA',
    'BRZ',
    'BRL1',
    'Drex',
    'Pix',
    'Polygon',
  ],
  primaryKeyword: 'real tokenizado',
  updatedAt: '2026-07-25',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'Real onchain',
  subhead:
    'O real tokenizado é o real que circula em blockchain. Na Hodle você entra por Pix, recebe BRLA na rede Polygon e converte para dólar digital quando quiser.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/brla.png', label: 'BRLA' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
  ],
  ctaPrimary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: { label: 'Criar minha conta', href: 'https://app.hodle.com.br' },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é real tokenizado',
      body: 'Real tokenizado é um token emitido em blockchain com paridade de 1 para 1 com o real: cada unidade equivale a R$ 1 e é lastreada em reais mantidos fora da rede. O termo real onchain descreve o mesmo ativo pelo lado da operação — o real que você movimenta em rede pública, 24 horas por dia, sem depender do horário bancário. Na Hodle, o real onchain é o BRLA, emitido pela Avenia.',
      bullets: [
        'Paridade de 1 para 1 com o real, com lastro mantido fora da rede',
        'Liquidação em segundos, 24 horas por dia, inclusive no fim de semana',
        'Emissão privada: não é o Drex e não é moeda do Banco Central',
        'Na Hodle, circula na rede Polygon',
      ],
      icons: [],
      comparison: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Como funciona na prática: do Pix ao real onchain',
      body: 'O caminho é o mesmo que a sua operação já faz em reais. A diferença é que, no meio do trajeto, o dinheiro passa a circular em rede pública.',
      bullets: [
        'Você envia um Pix para a sua conta na Hodle.',
        'O valor vira BRLA na rede Polygon, com paridade de 1 para 1 com o real.',
        'Com saldo em real onchain você transfere para endereços e parceiros ou converte para dólar digital em USDT e USDC.',
        'Quando precisar de reais na conta bancária, a saída também é Pix.',
      ],
      icons: [],
      comparison: null,
    },
    {
      id: 'onde-circula',
      kind: 'ASSETS',
      heading: 'Onde o real onchain circula na Hodle',
      body: 'A Hodle opera o BRLA na rede Polygon, ao lado do dólar digital e do Pix. É a combinação que permite receber em real, guardar em dólar e pagar em stablecoin sem trocar de plataforma.',
      bullets: [
        'BRLA: real onchain na rede Polygon',
        'USDT e USDC: dólar digital para proteger poder de compra',
        'Pix: entrada e saída em reais, 24 horas por dia',
        'Compra e recebimento de BRLA disponíveis para contas com KYC completo',
      ],
      icons: [
        { src: '/brla.png', label: 'BRLA' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/pix.svg', label: 'Pix' },
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
      ],
      comparison: null,
    },
    {
      id: 'brla-brz-brl1',
      kind: 'COMPARISON',
      heading: 'BRLA, BRZ e BRL1: qual é a diferença?',
      body: 'Existem mais de dez stablecoins de real em circulação. Todas prometem paridade com o real; o que muda é quem emite, o que dá lastro e onde o token circula.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Token', 'Quem emite', 'Lastro', 'Na Hodle'],
        rows: [
          [
            'BRLA',
            'Avenia, empresa privada brasileira',
            'Reais em reserva, 1 para 1',
            'Sim: compra, recebimento e transferência por API na Polygon',
          ],
          [
            'BRZ',
            'Transfero, empresa privada',
            'Reais em reserva, 1 para 1',
            'Não',
          ],
          [
            'BRL1',
            'Consórcio de Foxbit, Bitso, Mercado Bitcoin e Cainvest',
            'Reais em reserva, 1 para 1',
            'Não',
          ],
          [
            'Drex',
            'Banco Central do Brasil',
            'Emissão soberana',
            'Não: é infraestrutura do Banco Central, não uma stablecoin',
          ],
        ],
      },
    },
    {
      id: 'vs-drex',
      kind: 'PROSE',
      heading: 'Real onchain e Drex não são a mesma coisa',
      body: 'O Drex é o projeto de moeda digital do Banco Central: emissão soberana, infraestrutura própria e acesso intermediado por instituições autorizadas. O real tokenizado é emissão privada, com lastro em reais custodiados, e já circula em redes públicas. Um não substitui o outro — enquanto o Drex avança, o real onchain já liquida pagamentos em segundos.',
      bullets: [
        'Drex: moeda digital do Banco Central, com emissão soberana',
        'Real tokenizado: emissão privada com lastro em reais',
        'Pix é meio de pagamento, não moeda: os três convivem',
      ],
      icons: [],
      comparison: null,
    },
    {
      id: 'rendimento',
      kind: 'PROSE',
      heading: 'Real onchain rende?',
      body: 'Depende do token. Algumas stablecoins de real são lastreadas em títulos públicos e repassam parte do rendimento das reservas para quem carrega o token. Outras, como o BRLA, são lastreadas em reais e não distribuem rendimento por si. Existe ainda rendimento oferecido por protocolos onchain, que carrega o risco do protocolo, não do emissor. A Hodle não oferece produto de rendimento em real hoje.',
      bullets: [
        'Stablecoin lastreada em títulos públicos pode repassar o rendimento das reservas',
        'BRLA é lastreado em reais e não distribui rendimento',
        'Rendimento em protocolo onchain é risco do protocolo, não do emissor',
        'A Hodle não oferece produto de rendimento em real hoje',
      ],
      icons: [],
      comparison: null,
    },
    {
      id: 'api',
      kind: 'CODE',
      heading: 'Real onchain no seu produto, por API',
      body: 'A mesma operação existe como API: sua aplicação recebe por Pix, movimenta BRLA na rede Polygon e converte para dólar digital sem passar por tela. A transferência on-chain é assinada e submetida pelo servidor, com gas patrocinado, então seu time não gerencia carteira nem taxa de rede. O acesso à API de transferência é liberado por conta.',
      bullets: [
        'Transferência de BRLA, USDT e USDC na Polygon em um endpoint',
        'Gas patrocinado: sem gerenciar saldo de rede',
        'Webhooks para conciliar entrada e saída',
        'Documentação em docs.hodle.com.br',
      ],
      icons: [],
      comparison: null,
    },
  ],
  faq: [
    {
      question: 'O que é real tokenizado?',
      answer:
        'Real tokenizado é um token em blockchain com paridade de 1 para 1 com o real, lastreado em reais mantidos fora da rede. Ele permite transferir reais em segundos, 24 horas por dia, sem depender do horário bancário. Na Hodle, o real tokenizado é o BRLA, emitido pela Avenia e operado na rede Polygon.',
    },
    {
      question: 'Qual a diferença entre real onchain e Drex (real digital)?',
      answer:
        'O Drex é a moeda digital do Banco Central, com emissão soberana e acesso intermediado por instituições autorizadas. O real onchain é emissão privada, com lastro em reais custodiados, e já circula em redes públicas. São infraestruturas diferentes e podem coexistir.',
    },
    {
      question: 'Como comprar BRLA com Pix?',
      answer:
        'Você envia um Pix para a sua conta na Hodle e escolhe BRLA como ativo; o valor é creditado na rede Polygon. A compra de BRLA está disponível para contas com KYC completo.',
    },
    {
      question: 'Quem emite o BRLA e o que dá lastro ao token?',
      answer:
        'O BRLA é emitido pela Avenia, empresa privada brasileira, com lastro em reais mantidos em reserva na proporção de 1 para 1. Não é moeda do Banco Central e não tem garantia soberana.',
    },
    {
      question: 'Real onchain rende?',
      answer:
        'O BRLA não distribui rendimento, porque é lastreado em reais. Existem stablecoins de real lastreadas em títulos públicos que repassam parte do rendimento das reservas, e existe rendimento oferecido por protocolos onchain, que carrega o risco do protocolo. A Hodle não oferece produto de rendimento em real hoje.',
    },
  ],
  related: [
    { label: 'Perguntas frequentes', href: '/faq' },
    { label: 'Preços e taxas', href: '/articles/precos' },
    { label: 'Artigos', href: '/articles' },
  ],
  ogImage: '/og-image-v2.png',
}
```

## Registry e acesso

```ts
// src/content/topics/topics.ts
import { TopicPage } from '../../types/topic'
import { realOnchain } from './realOnchain'

export const topics: TopicPage[] = [realOnchain]
```

```ts
// src/utils/getAllTopics.ts
import { TopicPage } from '../types/topic'
import { topics } from '../content/topics/topics'

export const getAllTopics = (): TopicPage[] => topics
```

```ts
// src/utils/getTopicBySlug.ts
import { TopicPage } from '../types/topic'
import { topics } from '../content/topics/topics'

export const getTopicBySlug = ({ slug }: { slug: string }): TopicPage | null =>
  topics.find((topic) => topic.slug === slug) ?? null
```

```ts
// src/utils/reservedSlugs.ts
export const reservedSlugs: string[] = [
  'api',
  'articles',
  'animation',
  'checkout',
  'cookies',
  'create',
  'faq',
  'lnurlp',
  'privacidade',
  'termos',
  'test-lightning',
  '.well-known',
]
```

## Template — `src/app/[slug]/page.tsx`

- `export const dynamic = 'force-static'` e `export const dynamicParams = false`.
- `generateStaticParams` retorna os slugs de `getAllTopics()` e **lança erro** se algum
  slug estiver em `reservedSlugs` (colisão silenciosa com rota existente é o pior caso).
- `generateMetadata` recebe `params: Promise<{ slug: string }>` e faz `await params`
  (Next 15). Preenche `title`, `description`, `keywords`,
  `alternates.canonical = https://hodle.com.br/<slug>`, `openGraph` (`type: 'article'`,
  `locale: 'pt_BR'`, imagem `topic.ogImage` 1200x630) e `twitter`
  (`summary_large_image`).
- Slug desconhecido → `notFound()`.
- Ordem de render: hero (kicker, `h1`, subhead, icon row, CTA duplo) → seções →
  FAQ → relacionados → CTA final. Exatamente **um `<h1>`**; cada seção em `<h2>`;
  `<h3>` só nos passos.
- `CODE` renderiza o `<CodeBlock />` existente (sem props).
- `COMPARISON` renderiza tabela com `<thead>`/`<tbody>` dentro de um container
  `overflow-x-auto` (no mobile a tabela rola dentro dela mesma, a página não).
- `ASSETS` renderiza os ícones com rótulo; `next/image` com `width`/`height` fixos.

## JSON-LD — `src/components/topic/topicJsonLd.tsx`

Três blocos `application/ld+json`, no padrão de `src/app/layout.tsx`:

1. `WebPage` — `name` (h1), `description`, `url`, `inLanguage: 'pt-BR'`,
   `dateModified: topic.updatedAt`, `isPartOf` do WebSite Hodle.
2. `FAQPage` — apenas as perguntas de `topic.faq`, que estão visíveis no HTML.
3. `BreadcrumbList` — `Home` (`https://hodle.com.br`) → `topic.h1`
   (`https://hodle.com.br/<slug>`).

## Sitemap — `src/app/sitemap.ts`

```ts
const topicEntries: MetadataRoute.Sitemap = getAllTopics().map((topic) => ({
  url: `${siteUrl}/${topic.slug}`,
  lastModified: new Date(topic.updatedAt),
  changeFrequency: topic.changeFrequency,
  priority: topic.priority,
}))
```

Espalhe `...topicEntries` no retorno. Nenhuma entrada hardcoded por página.

## Aceite

- [ ] `pnpm build` verde e `/real-onchain` aparece como rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro — **obrigatório**: `next.config.ts` tem
      `typescript.ignoreBuildErrors: true` e `eslint.ignoreDuringBuilds: true`, então o
      build não pega erro de tipo nem de lint
- [ ] `pnpm eslint` sem erro novo
- [ ] `/real-onchain` renderiza kicker, um `<h1>`, subhead, icon row, as 7 seções na
      ordem do contrato, FAQ com 5 perguntas, 3 relacionados e CTA duplo
- [ ] a copy no código é **idêntica** à deste contrato (nenhum texto novo)
- [ ] todo `src` de ícone existe em `public/` (`pix.svg`, `brla.png`, `polygon.svg`,
      `usdt.svg`, `usdc.svg`, `avenia.png`)
- [ ] `/sitemap.xml` inclui `https://hodle.com.br/real-onchain` com `lastmod`
- [ ] `<title>`, meta description, canonical e OG conferem com o registro
- [ ] os três JSON-LD parseiam; o `FAQPage` casa com o FAQ visível
- [ ] Footer aponta para `/real-onchain`; a página aponta para `/faq`,
      `/articles/precos` e `/articles`
- [ ] `/`, `/faq`, `/termos`, `/privacidade`, `/cookies`, `/articles`, `/checkout`
      continuam abrindo (o catch-all não engoliu rota)
- [ ] zero erro de console, zero 404 de asset, sem overflow horizontal em 390px
- [ ] nenhuma promessa de rendimento, nenhum percentual, nenhuma alegação de regulação
      própria

## Review Block

```markdown
## Review Block
LABEL: real-onchain
BASE_URL: http://localhost:3000
STEPS:
  - build
  - typecheck
  - goto: /real-onchain
  - expectVisible: "Receba em Pix, guarde em real onchain"
  - expectVisible: "BRLA, BRZ e BRL1: qual é a diferença?"
  - expectOne: h1
  - shot: "real-onchain-desktop"
  - viewport: 390x844
  - shot: "real-onchain-mobile"
  - assertSitemap: /real-onchain
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - goto: /faq
  - expectVisible: "Perguntas Frequentes"
```

## Definition of Done

Todos os itens de aceite verificados (não marque o que não rodou), PR **draft** a partir
de `origin/main` na branch `feat/seo-real-onchain`, corpo com os checkboxes e o Review
Block. Nada mergeado, nada deployado.
