# Cards OG por página

11 imagens 1200×630, uma por URL de `hodle.com.br`. **Não estão aplicadas no site** — hoje
todas as páginas continuam servindo `/og-image-v2.png`. Estão aqui para revisão e para serem
aplicadas quando o dono decidir.

Geradas em 2026-07-29.

## Mapa

| Arquivo | URL | Headline (linha 1 / linha 2 em azul) |
|---|---|---|
| `pagar-pix-com-usdt.png` | `/pagar-pix-com-usdt` | Pague um Pix / com saldo em USDT |
| `lightning-para-pix.png` | `/lightning-para-pix` | Cobre em Lightning, / liquide em Pix |
| `api-pix-stablecoin.png` | `/api-pix-stablecoin` | Uma API. / Pix, dólar e stablecoins. |
| `para-agentes-de-ia.png` | `/para-agentes-de-ia` | Trilhos que um agente / opera sozinho |
| `wallet-auto-custodial.png` | `/wallet-auto-custodial` | Carteiras em que / a chave é do usuário |
| `comprar-bitcoin-com-pix.png` | `/comprar-bitcoin-com-pix` | Reais entram por Pix, / sai bitcoin |
| `comprar-usdt-com-pix.png` | `/comprar-usdt-com-pix` | Reais entram por Pix, / sai dólar digital |
| `real-onchain.png` | `/real-onchain` | Receba em Pix, / guarde em real onchain |
| `precos.png` | `/precos` | Taxa de serviço, / publicada e única |
| `glossario.png` | `/glossario` | Os termos de stablecoin / e pagamentos |
| `ai.png` | `/ai` | Política de uso / por IA |

Cada card carrega, além da headline, um diagrama de fluxo de três células e quatro pares
rótulo/valor no rodapé, todos derivados do `h1`, do `subhead` e das seções reais da página
correspondente. Nada inventado.

## Referência visual

Seguem a referência **halftone** fornecida pelo dono: fundo off-white, ilustração em campo de
pontos, setas azuis conectando o fluxo, wordmark ODLE no topo à esquerda, headline em duas
linhas com a segunda em azul, e uma linha de features com rótulo preto, valor azul e ícone.

A segunda referência (moedas 3D cromadas) **não foi usada**: exige modelo de imagem, e a
ferramenta `image_generate` não está disponível no Claude Code — ela roda no Hermes (profile
`t` ou `hodle-seo`). Se quiser essa linguagem, é um card no Hermes.

## Por que HTML e não modelo de imagem

A referência halftone é um **diagrama**: grade, setas, rótulos, ícones. É layout com muito
texto, e a própria skill `generate-images` manda cair para HTML nesses casos, porque
`gpt-image-2` corrompe acentos em português. Palavras como "conversão", "custódia",
"disponível", "verificáveis" e "atribuição" aparecem nesses cards — em modelo de imagem elas
quebram.

Render por HTML é determinístico: mesmo input, mesmo pixel, texto sempre correto.

## Tokens usados

De `~/.claude/skills/generate-images/references/hodle-design-system.md`:

| Token | Hex | Onde |
|---|---|---|
| `dune.bg` | `#F9FAFB` | fundo (nunca branco puro) |
| `dune.text` | `#0F0F15` | headline linha 1, rótulos, pontos do halftone |
| `dune.border` | `#E5E7EB` | grade, divisórias, campo de pontos de fundo |
| `signal.blue` | `#2563EB` | headline linha 2, valores, setas |

Fonte: Space Grotesk 700 na headline, 500 nas features. Um único acento saturado por card, que
é a regra do sistema.

O wordmark é o **asset real** (`public/new_logo_hodle.png`, 868×257, renderizado a 115×34), não
texto redesenhado — a skill é explícita que o wordmark nunca deve ser desenhado, porque
corrompe em "HODLE".

## Reproduzir ou editar

A fonte está em `src/`. Para re-renderizar depois de editar copy:

```sh
cd docs/seo/og/src
python3 -m http.server 8099 &
B="$HOME/.claude/skills/gstack/browse/dist/browse"
$B viewport 1200x630
for s in pagar-pix-com-usdt lightning-para-pix api-pix-stablecoin para-agentes-de-ia \
         wallet-auto-custodial comprar-bitcoin-com-pix comprar-usdt-com-pix real-onchain \
         precos glossario ai; do
  $B goto "http://localhost:8099/card.html?slug=$s"
  $B wait --networkidle
  $B screenshot --viewport "../$s.png"
done
```

Trocar copy é editar `src/cards.js` — um objeto por slug, com `l1`, `l2`, `flow` (3 glifos) e
`feats` (4 pares). Acrescentar página é acrescentar uma entrada.

Os glifos de marca em `src/assets/` são cópias de `public/`. Os glifos geométricos (chave,
rede, escudo, raio, código) são SVG inline no `card.html`, em duas variantes: grossa para a
máscara do halftone a 108px e fina para os ícones de feature a 26px — a mesma espessura não
funciona nos dois tamanhos.

## Como aplicar, se quiser

Não aplicado por decisão do dono. Quando for:

1. Mover os PNGs para `public/og/<slug>.png`
2. Nas páginas de tópico, preencher `ogImage: '/og/<slug>.png'` no registro `TopicPage` — o
   template já resolve `og:image` e `twitter:image` a partir desse campo
3. Em `/precos`, `/glossario` e `/ai`, trocar `images: ['/og-image-v2.png']` no `openGraph` do
   metadata

Nota: `/og-image-v2.png` não é arquivo estático — é rewrite para `/api/og` no `next.config.ts`.
Os cards aqui são PNG de verdade, ~100KB cada, contra os 354KB da imagem atual.

## Não feito

Upload para R2 (`files.hodle.com.br`), que a skill `generate-images` pede como passo
obrigatório. As credenciais não estão configuradas nesta máquina (`R2_ACCESS_KEY_ID` ausente no
ambiente e em `~/.hermes/.env`). Como o pedido era entregar num folder, ficou só local.
