# Contrato — `/glossario`

Leva A. Contexto: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md).

**Esta página NÃO é um tópico.** Ela não cabe no `TopicPage` (precisa de índice A-Z e de N
pares termo/definição, não de 5 seções). É rota própria, no padrão de `src/app/ai/page.tsx`.

## Por que existe

Pesquisa ao vivo em 2026-07-29: o glossário em pt da Lumx (`lumx.io/pt/stablecoin-glossary`)
ranqueia **1º** para `glossário stablecoin termos on-ramp off-ramp liquidação brasil`. O
formato funciona, e é o que uma LLM extrai melhor: definição curta, factual, sem marketing.

Concorrentes com glossário: Lumx (uma página, âncoras A-Z), Chainlink, Modern Treasury,
Cobre, Due (`/glossary/<termo>`, página por termo). Adotamos o modelo da Lumx: **uma página
com âncoras**, mais barato de manter e concentra autoridade numa URL.

**Ângulo vazio:** nenhum glossário em pt-BR cobre os termos **regulatórios brasileiros** e os
termos **operacionais dos trilhos** no mesmo lugar. O da Lumx é inglês traduzido.

E há um ganho específico nosso: a decisão 2 do walkthrough tirou VASP, PSAV e marco legal do
JSON-LD, porque a Hodle não pode afirmar aquele status. **No glossário esses termos voltam de
forma verdadeira** — como definição do que o termo significa, nunca como alegação sobre a
Hodle. É a única forma correta de recuperar aquela cobertura.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`, `any`,
type assertion, `readonly` · arquivos em camelCase · linha em branco entre statements · sem
comentário no meio do código · sem emoji · pt-BR com acentos completos.

Visual: padrão de `src/app/ai/page.tsx` e `src/app/cookies/page.tsx` —
`max-w-[1200px] mx-auto px-6`, `heading = 'font-[family-name:var(--font-space-grotesk)]'`,
`text-foreground`, `text-gray-500`, `border-gray-200`. **Nenhuma cor nova, nenhuma dependência
nova.**

## Arquivos

**Criar:**
- `src/content/glossary/glossaryTerms.ts` — o dado, um export
- `src/types/glossary.ts` — o tipo, um export
- `src/app/glossario/page.tsx` — a rota

**Editar:**
- `src/app/sitemap.ts` — uma entrada para `/glossario`
- `src/utils/reservedSlugs.ts` — acrescentar `'glossario'` (senão um tópico futuro colide)
- `src/components/ui/Footer.tsx` — coluna **Recursos**, item `Glossário` → `/glossario`

## Tipo

`src/types/glossary.ts`:

```ts
export type GlossaryTerm = {
  term: string
  definition: string
}
```

`src/content/glossary/glossaryTerms.ts` exporta
`export const glossaryTerms: GlossaryTerm[] = [...]` com os pares abaixo, **na ordem dada**
(já está alfabética por `term`, ignorando acento).

## Metadata da rota

```ts
title: 'Glossário de stablecoins e pagamentos'
description: 'Definições objetivas dos termos de stablecoin, Pix, Lightning e regulação de criptoativos no Brasil. Referência para quem integra pagamentos.'
alternates: { canonical: 'https://hodle.com.br/glossario' }
openGraph: { title, description, url: 'https://hodle.com.br/glossario', images: ['/og-image-v2.png'] }
```

`description` tem 152 caracteres. Um único `<h1>`: **Glossário de stablecoins e pagamentos**.

Subhead abaixo do h1, uma frase:

> Definições curtas dos termos que aparecem quando se integra pagamentos com stablecoin no Brasil. Sem marketing, sem promessa.

## Estrutura da página

1. `<h1>` + subhead.
2. **Índice A-Z**: linha de âncoras derivada das letras que existem em `glossaryTerms`. Não
   renderize letra sem termo. Cada âncora aponta para `#letra-<x>`.
3. Para cada letra com termos: um `<h2 id="letra-x">` com a letra, e a lista de pares. O
   termo em `<dt>`/`<strong>`, a definição em `<dd>`/`<p className="text-gray-500">`.
   Use `<dl>` — é a marcação semântica correta para glossário e é o que ajuda extração.
4. Um bloco de fechamento com links internos: `/api-pix-stablecoin`, `/pagar-pix-com-usdt`,
   `/wallet-auto-custodial`, `/para-agentes-de-ia`, `/faq`.

**Derive o agrupamento por letra em runtime** a partir de `glossaryTerms`, com uma função
pura em arquivo próprio (`src/utils/groupGlossaryByLetter.ts`, um export). Não escreva o
agrupamento à mão — adicionar termo depois tem que ser só editar o array.

Normalize acento ao agrupar: `Auto-custódia` entra em `A`, `Índice` entraria em `I`.

## JSON-LD

Um bloco `application/ld+json` do tipo `DefinedTermSet`, com `hasDefinedTerm` mapeando cada
par. É o schema correto para glossário e é lido por motor de resposta:

```ts
{
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossário de stablecoins e pagamentos',
  url: 'https://hodle.com.br/glossario',
  inLanguage: 'pt-BR',
  dateModified: '2026-07-29',
  hasDefinedTerm: glossaryTerms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    inDefinedTermSet: 'https://hodle.com.br/glossario',
  })),
}
```

Derive do array, não escreva à mão.

## Fronteiras — leia antes de escrever

- **Nenhuma definição afirma nada sobre a Hodle.** Definição descreve o termo. Onde o termo
  toca o produto, a formulação é "na plataforma da Hodle, X é Y" **somente** nos casos em que
  o contrato abaixo já escreveu assim.
- **Os termos regulatórios são definidos, nunca reivindicados.** `VASP`, `PSAV`,
  `Lei 14.478/2022`, `Resolução BCB 519`, `Resolução BCB 520`, `Resolução BCB 521` descrevem
  o que a norma é. Em nenhum lugar se diz que a Hodle detém aquele status.
- **Nenhuma taxa, nenhum SLA numérico, nenhum concorrente nomeado, nenhum DEPIX.**
- **Só termos que o produto ou a documentação da Hodle realmente tocam.** Não encha o
  glossário com termos de DeFi que não temos (AMM, CDP, staking, yield farming). Um glossário
  que fala de coisa que não fazemos dilui relevância — é o antipadrão que o blog da Avenia
  mostra (posts de fitness num site de liquidez).

## Termos (39 pares, valor final)

```
AML — Conjunto de normas e procedimentos de prevenção à lavagem de dinheiro. Em pagamentos com criptoativos, se traduz em verificação de identidade, monitoramento de transação e comunicação de operações suspeitas.

API key — Credencial que identifica uma plataforma nas chamadas à API e define o escopo do que ela alcança. Vai nos headers da requisição.

Arbitrum — Rede de camada 2 do Ethereum. Na plataforma da Hodle, USDT e USDC circulam nela.

Auto-custódia — Arranjo em que a chave privada fica sob controle exclusivo do dono dos ativos. Nenhum terceiro consegue mover, bloquear ou recuperar o saldo.

Base — Rede de camada 2 do Ethereum mantida pela Coinbase. É a rede em que a Hodle opera USDC.

BOLT11 — Formato padrão de invoice da Lightning Network. É a cobrança que o pagador escaneia ou cola para pagar.

BRL — Código da moeda real brasileiro. Nos trilhos da Hodle, entra e sai por Pix.

BRLA — Stablecoin lastreada em real, de emissão privada. É o real onchain que circula em redes públicas.

Carteira custodial — Carteira em que a plataforma guarda a chave privada e o saldo do usuário é um registro interno. É o modelo oposto à auto-custódia.

Chave Pix — Identificador que aponta para uma conta no arranjo Pix: CPF, CNPJ, e-mail, telefone ou chave aleatória.

Compliance — Aderência a leis, normas e políticas internas aplicáveis à operação. Em pagamentos, concentra-se em identificação de cliente, monitoramento e reporte.

COAF — Conselho de Controle de Atividades Financeiras, órgão brasileiro que recebe comunicações de operações suspeitas.

Deposit asset — Operação de entrada: converte reais em Lightning, USDT, USDC ou USDCE e entrega num endereço.

Extrato — Consulta que devolve saldo por ativo e a lista paginada de operações num intervalo.

Finalidade de liquidação — Momento em que a transferência se torna irreversível e o valor está disponível para quem recebe.

Gas — Taxa paga à rede blockchain para processar uma transação. Em redes EVM é cobrada na moeda nativa da rede.

Gas patrocinado — Arranjo em que quem opera a infraestrutura paga o gas da transação, e não o usuário. Nas redes EVM da Hodle, transfers e payouts têm o gas patrocinado, então o usuário só precisa ter a stablecoin.

HMAC — Código de autenticação de mensagem baseado em hash. É como o recebedor de um webhook confirma que o payload veio de quem diz ter vindo e não foi alterado.

Invoice Lightning — Cobrança emitida na Lightning Network, no formato BOLT11, com valor e prazo de validade.

KYB — Verificação de identidade de pessoa jurídica: quem é a empresa, quem a controla e quem responde por ela.

KYC — Verificação de identidade de pessoa física, exigida para operações de entrada e saída de valores.

Lei 14.478/2022 — Lei brasileira que estabelece diretrizes para prestação de serviços com ativos virtuais e define o que é ativo virtual. Conhecida como marco legal dos criptoativos.

Lightning Network — Rede de pagamentos construída sobre o Bitcoin, desenhada para transferências instantâneas e de baixo custo.

Liquid — Sidechain do Bitcoin usada para emissão e transferência de ativos.

Marco legal dos criptoativos — Conjunto formado pela Lei 14.478/2022 e pela regulamentação infralegal que a detalha, incluindo as resoluções do Banco Central sobre prestadores de serviço de ativos virtuais.

Off-ramp — Caminho de saída: converter criptoativo em moeda fiduciária. No Brasil, tipicamente termina num Pix.

On-ramp — Caminho de entrada: converter moeda fiduciária em criptoativo. No Brasil, tipicamente começa num Pix.

Payout — Operação de saída que envia valor para um destino. Na Hodle, um payout Pix é financiado por saldo em stablecoin.

Pix — Arranjo de pagamentos instantâneos brasileiro, criado pelo Banco Central, disponível 24 horas por dia todos os dias.

Polygon — Rede compatível com EVM. É uma das redes em que a Hodle opera USDT.

protectedSymmetricKey — Chave do usuário final, obtida pela API, necessária para assinar payouts e transfers. Sem ela não há movimentação de fundos.

PSAV — Prestador de Serviços de Ativos Virtuais. É o termo em português para a categoria que a Lei 14.478/2022 regula.

Resolução BCB 519 — Resolução do Banco Central que designa o próprio BCB como autoridade responsável por regular e supervisionar prestadores de serviço de ativos virtuais no âmbito da Lei 14.478/2022.

Resolução BCB 520 — Resolução do Banco Central que estabelece requisitos de autorização, governança e obrigações operacionais para prestadores de serviço de ativos virtuais no Brasil.

Resolução BCB 521 — Resolução do Banco Central que define padrões de gestão de risco, controles internos e conformidade para prestadores de serviço de ativos virtuais.

Spark — Rede de pagamentos construída sobre o Bitcoin, usada para transferência de ativos.

Stablecoin — Criptoativo desenhado para manter valor estável em relação a uma referência, em geral uma moeda fiduciária, por meio de lastro ou de mecanismo de ajuste.

Tron — Rede blockchain em que a Hodle opera USDT, ao lado de Polygon.

USDC — Stablecoin lastreada em dólar emitida pela Circle.

USDCE — Versão ponte da USDC em determinadas redes, distinta da emissão nativa.

USDT — Stablecoin lastreada em dólar emitida pela Tether. É a de maior circulação no Brasil.

VASP — Virtual Asset Service Provider, termo internacional para prestador de serviços de ativos virtuais. O equivalente em português é PSAV.

Webhook — Chamada HTTP que a plataforma envia ao seu servidor quando um evento acontece. Na Hodle, cobre depósito, payout e mudança de estado de KYC, com payload assinado.
```

Contagem real: **43 pares.** Se algum termo acima não puder ser afirmado com a documentação
atual, **comente no card em vez de reescrever**.

## Aceite

- [ ] `pnpm build` verde; `/glossario` como rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro novo
- [ ] `pnpm eslint` sem erro novo
- [ ] um único `<h1>`, canonical próprio, og:image presente
- [ ] índice A-Z renderiza **só** letras que têm termo, e cada âncora navega
- [ ] os 43 pares presentes, texto **idêntico** ao contrato
- [ ] marcação `<dl>`/`<dt>`/`<dd>`
- [ ] JSON-LD `DefinedTermSet` parseia e tem 43 `hasDefinedTerm`, derivado do array
- [ ] agrupamento por letra vem de `groupGlossaryByLetter`, não escrito à mão; acento normalizado
- [ ] `/sitemap.xml` contém `https://hodle.com.br/glossario`
- [ ] `reservedSlugs` contém `glossario`
- [ ] rodapé (coluna Recursos) aponta para `/glossario`; a página aponta para ≥2 internos
- [ ] nenhuma definição afirma status regulatório da Hodle; grep de `a Hodle é regulada`, `somos regulados` vazio
- [ ] nenhuma taxa, nenhum SLA numérico, nenhum concorrente nomeado, nenhum DEPIX
- [ ] rotas existentes seguem abrindo; zero 404 de asset; sem overflow em 390px

## Review Block

```markdown
## Review Block
LABEL: glossario
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /glossario
  - expectVisible: "Glossário de stablecoins e pagamentos"
  - expectOne: h1
  - shot: "glossario-desktop"
  - viewport: 390x844
  - shot: "glossario-mobile"
  - assertSitemap: /glossario
  - assertJsonLd: DefinedTermSet
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
  - goto: /faq
  - expectVisible: "Perguntas Frequentes"
```

Não faça merge. Não rode deploy.
