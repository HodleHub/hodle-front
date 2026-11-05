# Implementação da auditoria SEO/GEO — novembro de 2026

Base: branch `seo/auditoria-geo-fixes`, a partir de `03c02f7`. Plano completo em
[plano-seo-geo-2026-11.md](plano-seo-geo-2026-11.md). Dados de `/workspace/seo`
consultados somente para leitura: crawl das 50 URLs, links e Lighthouse das três
páginas. Não houve push, PR, merge, deploy ou submissão IndexNow.

A tabela revalida cada achado contra o código atual, sem assumir que produção está
na mesma revisão. Caminhos `app/(pt)` abaixo são relativos a `src/`.

| # | Status | Arquivos alterados / evidência no código | Notas |
| --- | --- | --- | --- |
| 1 | pendente de decisão | Nenhuma mudança de formulário; `src/app/api` só contém artigos e OG | Não existe backend/CRM de captura. Não criar endpoint fictício, ID de analytics ou fluxo de consentimento presumido. |
| 2 | externo | Documento de pendências externas | Links e menções editoriais dependem de terceiros. Diretórios/comparativos conflitam com decisão anterior; requer decisão do Thiago. |
| 3 | implementado | `src/content/faq/faqItems.ts`, `src/content/pages/sobre.ts`, `public/llms.txt`, `public/llms-full.txt` | FAQ descreve software/API e as entidades aprovadas; payout explicita Polygon/Base/Tron/Solana, ativos e condições por operação. Home/Markdown e API topic já incluíam Solana: já resolvido no código nessas superfícies. Docs externos não alterados. |
| 4 | parcialmente | Títulos de marca, sobre, contato e articles (ação 13); schema existente em `src/app/siteDocument.tsx` | O grafo já identifica LLC, LTDA e domínio. Não inventar apelido de marca nem dados externos. Perfis e Wikidata/Crunchbase ficam externos/decisão. |
| 5 | implementado | `src/app/siteDocument.tsx` | LinkedIn confirmado incluído em `Organization.sameAs`. CNPJ `63.673.264/0001-26` já resolvido no código como identifier de subOrganization; preservado sem atribuí-lo à LLC. |
| 6 | parcialmente | `src/components/article/articleJsonLd.tsx`; geração existente em `app/(pt)/articles/[slug]/opengraph-image/route.tsx` | OG por artigo já resolvido no código em metadata/capa; BlogPosting ainda usava imagem genérica e agora usa a rota individual. Autor continua Organization: frontmatters e fallback só identificam Hodle/Equipe Hodle, sem pessoa real. |
| 7 | parcialmente | `app/(pt)/articles/page.tsx`, `layout.tsx`, `src/utils/groupArticlesByCategory.ts`, `articlesIndexToMarkdown.ts` | Sete artigos existentes agrupados por tema/categoria, com H2 também em Markdown e description de 152 caracteres. Calendário e artigos novos não implementados. |
| 8 | não aplicável ao código | Produto B2B/API já tem páginas no registry; pendências externas | Posição depende de medição externa. Comparativos nomeados contradizem decisão 5 do walkthrough; não criar estudos de caso sem evidência autorizada. |
| 9 | externo | `next.config.ts` não configura DNS | Resolver www e redirects na infraestrutura; não adicionar redirect sem domínio/certificado. |
| 10 | implementado | `src/content/topics/baas.ts` | Link contextual BaaS → artigo PSAV. Wallet → auto-custódia e bloco de artigos relacionados já resolvidos no código; preservados. O hub com categorias também facilita descoberta. |
| 11 | pendente de decisão | `/precos` já contém exemplos de cálculo e links à cotação; contato já oferece e-mail | Não há integração de newsletter/captura. Simulador interativo e conteúdo em troca de e-mail exigem escopo e decisões. Não gerar PDF ou formulário fictício. |
| 12 | implementado | `app/(pt)/faq/page.tsx`, `precos/page.tsx`, `src/components/ui/Footer.tsx`, `src/components/landingV2/TilePile.tsx` | Um main por página, sem main no layout. GitHub no rodapé ganha nome acessível em todas as páginas. Datas de preços passam de gray-400 a gray-600; “ARRASTE E ARREMESSE” de #A3A3A3 a gray-600. Seletores vêm dos lh_home/lh_precos; lh_faq não apontou contraste. |
| 13 | implementado | `src/content/pages/{sobre,contato}.ts`, `app/(pt)/marca/page.tsx`, `articles/layout.tsx`, `src/content/topics/{englishPixStablecoin,pagarFornecedoresComUsdc}.ts`, artigo `conciliacao-pix-api.mdx` | Os sete títulos apontados ficam entre 30 e 60 caracteres no HTML, com um único sufixo de marca via template. O layout intermediário de articles passa a declarar o template: a herança anterior não adicionava marca aos artigos. Quatro outros títulos de artigos (integrar-api-pix-nodejs, validar-webhook-pix-idempotencia, criar-link-pagamento-pix-api e psav-regulacao-banco-central) foram encurtados para caber com o sufixo. Não duplicar Hodle em title. |
| 14 | implementado | Metadata de neobank, legal, CaaS e FAQ; frontmatters comparar-api-pix-baas e auto-custódia; hub articles; `src/content/markdown/{neobank,cryptoAsAService}Markdown.ts` | Os seis snippets longos e o curto de articles ficam entre 140–155 caracteres. Resumos Markdown de CaaS/neobank alinhados à página. Não há promessa de ranking nem limite universal do Google. |
| 15 | implementado | `public/llms-full.txt`, `public/llms.txt`, `src/utils/seoAudit.spec.ts` | Arquivos estáticos. Full começa com todo o short e mantém seções exclusivas estendidas; inclui Markdown/AI Discovery. H1 na primeira linha já resolvido no código; título de resultado de busca não é controlável pelo arquivo. Muito abaixo de 1,5 MB. |
| 16 | implementado | `app/(pt)/cookies/page.tsx` | Link trocado pelo suporte oficial atual da Microsoft pt-BR, verificado por consulta web em 4/11/2026: [gerenciar e excluir cookies no Edge](https://support.microsoft.com/pt-br/edge/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use). |
| 17 | externo | Sem alteração de headers | Não há Strict-Transport-Security em next.config/middleware/config Vercel do repo. Não adicionar includeSubDomains/preload; inventário e aprovação de infraestrutura necessários. |

## Fontes canônicas e conflitos preservados

- `ai-discoverability.walkthrough.md` §2–3 e `entity-authority.contract.md`: LLC
  primária, LTDA brasileira com CNPJ; software/API, serviços financeiros por parceiros.
  A abertura antiga do FAQ (“plataforma brasileira”) foi alinhada a essa definição.
- `wallet-auto-custodial.contract.md`, revisão de 4/10/2026, matrizes por operação:
  Solana em payout com USDT/USDC/BRS. Substitui as listas antigas restritas a
  Polygon/Tron/Base de `/sobre` e FAQ. O catálogo global não habilita cada operação.
  Os resumos antigos de USDT/USDC no llms receberam Solana com escopo explícito.
- O plano #8 propõe comparativos; o walkthrough decisão 5 e as pendências §3.1 os
  descartam. Preservada a decisão, sem criar novos comparativos ou diretórios.
- O contrato histórico de entidade fixa textos e listas antigas. As revisões de
  consistência de outubro e o contrato vivo de wallet prevalecem para matrizes e
  assinatura; nenhuma afirmação de regulação própria foi introduzida.
- `review-2026-10.md` recomenda conferir snippets antes de cortes; esta tarefa
  autoriza expressamente a faixa 140–155 para os sete casos, preservando fatos.
- `ai-discovery-consistency-2026-10-04.md` já registra o conflito entre termos
  (“não detém, não acessa e não recupera as chaves privadas”) e assinatura temporária
  por PIN. Os termos não foram reescritos; revisão jurídica continua pendente.
- O guia OG histórico é de julho; os artigos já têm rota de imagem nativa. Foi
  reaproveitada essa implementação, sem criar imagem com conteúdo inventado.

## Decisões para o Thiago

1. Backend/CRM, campos, consentimento LGPD, retenção, responsável e destino real de leads/newsletter (#1/#11).
2. Se deseja simulador interativo além dos exemplos existentes; escopo comercial e editorial do material de captura (#11).
3. Pessoa real responsável pelos artigos, atribuição/bio/perfis aprovados (#6).
4. Calendário editorial e evidência autorizada de casos, métricas e clientes (#7/#8).
5. Se reabre a decisão anterior sobre comparativos e agregadores (#2/#4/#8).
6. Responsáveis e acesso para DNS www, HTTPS/redirects, perfis, GSC/Bing e dados CrUX; decisão de HSTS após inventário (#9/#17).
7. Revisão jurídica das cláusulas de chaves versus assinatura temporária por PIN, pendência preexistente de outubro (#3).

Detalhes de execução, motivos, responsáveis e critérios de verificação estão em
[auditoria-2026-11-pendencias-externas.md](auditoria-2026-11-pendencias-externas.md).

## Validação

Todos os comandos finais concluíram com código de saída 0:

| Comando | Resultado |
| --- | --- |
| `pnpm install --frozen-lockfile` | Lockfile atualizado, dependências já instaladas; pnpm informa scripts de dependências ignorados pela política existente. |
| `pnpm lint` | Sem erros; cinco warnings preexistentes: Card não usado e quatro ocorrências de any. Também avisos da depreciação de next lint e detecção do plugin Next. |
| `pnpm exec tsc --noEmit` | Sem erros. Rodado separadamente porque o build ignora tipos/lint. |
| `pnpm test` | 25 arquivos / 119 testes Vitest; 13 testes Node de exemplos e 5 de crawl; 137 testes passaram, zero falhas. |
| `pnpm build` | 111 páginas estáticas; 254 arquivos no checker, todos ≤ 1.500.000 bytes. Maior HTML: neobank, 244.334 bytes. Aviso preexistente de classe Tailwind ease ambígua. |
| `pnpm test:seo http://localhost:3000` | 50 URLs, 38 assets JS/CSS e 8 imagens sociais; orçamento, canonical, H1, idioma, indexabilidade, JSON-LD, navegação, hreflang, Markdown, sandbox, noindex utilitário e 404 passaram. Servidor encerrado após verificação. |
| Checagem HTTP adicional | 11 títulos alterados entre 30–60 caracteres com uma marca; sete descriptions entre 140–155; exatamente um main em FAQ/preços; hub H2 Engenharia/Mercado. |
| `git diff --check` | Sem erros. |

Não foi repetido Lighthouse nem medido ganho de ranking, conversão ou CrUX. Os
ajustes de contraste usam as ocorrências e cores da coleta original. Durante os
testes de rota desconhecida, o servidor registrou `Internal: NoFallbackError` na
rota dinâmica de tópicos; as respostas 404 e todas as asserções do verificador
passaram. Não foi alterado o mecanismo de fallback nesta entrega.

## Commits bloqueados pelo ambiente

A tentativa de `git add docs/seo/plano-seo-geo-2026-11.md` retornou:

```text
fatal: Unable to create '/workspace/hodle-front/.git/index.lock': Read-only file system
```

A configuração desta sessão expõe `.git` somente para leitura. Nenhum commit pôde
ser criado; não foi tentado contornar essa restrição. As alterações estão no
working tree da branch solicitada. Em um ambiente com `.git` gravável:

```sh
git add docs/seo/plano-seo-geo-2026-11.md
git commit -m "docs(seo): registrar plano da auditoria SEO e GEO de novembro"
git add src public
git commit -m "fix(seo): corrigir metadados acessibilidade e descoberta por IA"
git add docs/seo/pendencias-externas.md docs/seo/auditoria-2026-11-implementacao.md docs/seo/auditoria-2026-11-pendencias-externas.md
git commit -m "docs(seo): registrar implementacao e pendencias da auditoria"
```

## Arquivos alterados

- `docs/seo/auditoria-2026-11-implementacao.md`
- `docs/seo/auditoria-2026-11-pendencias-externas.md`
- `docs/seo/pendencias-externas.md`
- `docs/seo/plano-seo-geo-2026-11.md`
- `public/llms-full.txt`
- `public/llms.txt`
- `src/app/(pt)/articles/layout.tsx`
- `src/app/(pt)/articles/page.tsx`
- `src/app/(pt)/cookies/page.tsx`
- `src/app/(pt)/crypto-as-a-service/page.tsx`
- `src/app/(pt)/faq/page.tsx`
- `src/app/(pt)/legal/page.tsx`
- `src/app/(pt)/marca/page.tsx`
- `src/app/(pt)/neobank/page.tsx`
- `src/app/(pt)/precos/page.tsx`
- `src/app/siteDocument.tsx`
- `src/components/article/articleJsonLd.tsx`
- `src/components/landingV2/TilePile.tsx`
- `src/components/ui/Footer.tsx`
- `src/content/articles/auto-custodia-nao-e-detalhe-de-implementacao.mdx`
- `src/content/articles/comparar-api-pix-baas.mdx`
- `src/content/articles/conciliacao-pix-api.mdx`
- `src/content/articles/criar-link-pagamento-pix-api.mdx`
- `src/content/articles/integrar-api-pix-nodejs.mdx`
- `src/content/articles/psav-regulacao-banco-central.mdx`
- `src/content/articles/validar-webhook-pix-idempotencia.mdx`
- `src/content/faq/faqItems.ts`
- `src/content/markdown/cryptoAsAServiceMarkdown.ts`
- `src/content/markdown/neobankMarkdown.ts`
- `src/content/pages/contato.ts`
- `src/content/pages/sobre.ts`
- `src/content/topics/baas.ts`
- `src/content/topics/englishPixStablecoin.ts`
- `src/content/topics/pagarFornecedoresComUsdc.ts`
- `src/utils/articlesIndexToMarkdown.ts`
- `src/utils/groupArticlesByCategory.ts`
- `src/utils/seoAudit.spec.ts`
