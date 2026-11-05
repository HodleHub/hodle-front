# Plano de ação SEO/GEO — hodle.com.br

Fonte: auditoria de 4 nov 2026 (coleta 20h35–21h, horário de Brasília). Dados brutos em /workspace/seo (crawl.json, links.json, lh_*.json, llms.txt, md.txt, psi.json).

Objetivos: Aquisição = tráfego orgânico que vira cliente; Leads = captação e conversão; Autoridade = confiança da marca e citações por buscadores e IAs.

## Resumo

| # | Severidade | Esforço | Objetivo | Problema |
|---|---|---|---|---|
| 1 | alta | médio | Leads, Aquisição | Nenhum formulário de lead nas 50 páginas |
| 2 | alta | alto | Autoridade, Aquisição | Poucas menções externas |
| 3 | alta | baixo | Autoridade | Dados da entidade não batem entre páginas |
| 4 | média | médio | Autoridade, Aquisição | Ambiguidade de marca |
| 5 | média | baixo | Autoridade | O `sameAs` do Organization não inclui o LinkedIn |
| 6 | média | baixo | Autoridade | Artigos com autor = Organization e a mesma imagem genérica |
| 7 | média | alto | Aquisição, Autoridade | Blog pequeno |
| 8 | média | alto | Aquisição | Posição fraca em termos de varejo |
| 9 | média | baixo | Aquisição, Autoridade | www.hodle.com.br não resolve (DNS NXDOMAIN) |
| 10 | média | baixo | Aquisição, Autoridade | Links internos fracos para alguns artigos |
| 11 | média | médio | Leads | CTAs dependem de WhatsApp |
| 12 | baixa | baixo | Aquisição | Acessibilidade |
| 13 | baixa | baixo | Aquisição | Títulos curtos ou redundantes |
| 14 | baixa | baixo | Aquisição | Meta descriptions acima de 160 caracteres em 6 páginas |
| 15 | baixa | baixo | Autoridade | llms-full.txt não é superconjunto do llms.txt |
| 16 | baixa | baixo | Autoridade | Link externo quebrado em /cookies |
| 17 | baixa | baixo | Autoridade | HSTS sem `includeSubDomains` e `preload` |

## Ações detalhadas

### 1. Nenhum formulário de lead nas 50 páginas

- **Severidade:** alta
- **Esforço:** médio
- **Objetivo:** Leads, Aquisição
- **Evidência:** Nenhum formulário de lead nas 50 páginas (0 `<form>`). Conversão só via WhatsApp, e-mail ou cadastro no app
- **Correção proposta:** Formulário curto (nome, e-mail, empresa, volume mensal, caso de uso) em /contato, /precos e nas páginas de produto. Medir envios como conversão no GA4/Ads e mandar para o CRM

### 2. Poucas menções externas

- **Severidade:** alta
- **Esforço:** alto
- **Objetivo:** Autoridade, Aquisição
- **Evidência:** Poucas menções externas: só achei posts no LinkedIn (incluindo o anúncio da Nora Finance) e perfis próprios. Nenhuma matéria de imprensa ou review apareceu
- **Correção proposta:** PR digital (Nora/BRS, sandbox, PSAV), guest posts em blogs de dev e fintech, presença em listas comparativas de 'API Pix stablecoin', Crunchbase/Wikidata e diretórios de APIs

### 3. Dados da entidade não batem entre páginas

- **Severidade:** alta
- **Esforço:** baixo
- **Objetivo:** Autoridade
- **Evidência:** Dados da entidade não batem entre páginas: /faq diz 'plataforma brasileira… compra e venda de ativos digitais', mas /sobre diz 'empresa de software', LLC em Wyoming, que não custodia. Redes de payout: /sobre cita só Polygon/Tron/Base, o docs inclui Solana e a lista 'Supported Networks' do llms.txt não cita Solana
- **Correção proposta:** Uma frase canônica de 'quem é a Hodle' e uma tabela única de ativos/redes, reaproveitadas em /faq, /sobre, home, llms.txt e docs

### 4. Ambiguidade de marca

- **Severidade:** média
- **Esforço:** médio
- **Objetivo:** Autoridade, Aquisição
- **Evidência:** Ambiguidade de marca: a busca por 'Hodle' traz hodle.co (contratação em Singapura) no top 5. 'HODL' também é um termo genérico de cripto
- **Correção proposta:** Reforçar 'Hodle Pix' / 'Hodle API' nos títulos e perfis, criar item no Wikidata, padronizar a bio em X, LinkedIn e GitHub

### 5. O `sameAs` do Organization não inclui o LinkedIn

- **Severidade:** média
- **Esforço:** baixo
- **Objetivo:** Autoridade
- **Evidência:** O `sameAs` do Organization não inclui o LinkedIn (linkedin.com/company/hodle-app existe e aparece na busca)
- **Correção proposta:** Adicionar LinkedIn (e Crunchbase/Wikidata quando existirem) ao `sameAs`, e o CNPJ como `identifier`/`taxID`

### 6. Artigos com autor = Organization e a mesma imagem genérica

- **Severidade:** média
- **Esforço:** baixo
- **Objetivo:** Autoridade
- **Evidência:** Artigos com autor = Organization e a mesma imagem genérica (og-image-v2.png) em todos os BlogPosting
- **Correção proposta:** Autor pessoa com bio e página própria (schema Person com `sameAs`), mais uma imagem OG por artigo

### 7. Blog pequeno

- **Severidade:** média
- **Esforço:** alto
- **Objetivo:** Aquisição, Autoridade
- **Evidência:** Blog pequeno: 7 artigos. /articles tem 400 palavras, 0 H2, meta description de 92 caracteres e title 'Artigos | Hodle'
- **Correção proposta:** Calendário editorial com intenção de busca (ex.: 'como pagar fornecedor no exterior com Pix', 'USDT x BRLA'), um hub /articles com categorias e uma descrição de 140–155 caracteres

### 8. Posição fraca em termos de varejo

- **Severidade:** média
- **Esforço:** alto
- **Objetivo:** Aquisição
- **Evidência:** Posição fraca em termos de varejo: em 'comprar usdt com pix' a Hodle saiu em 5º, atrás de Binance, Bipa, WEEX e LBank. Em 'pagar pix com usdt api' a Woovi saiu em 1º
- **Correção proposta:** Focar em B2B/API, onde a Hodle já lidera ('api pix stablecoin'). Comparativos honestos (Hodle x Woovi x Lunium) e estudos de caso com números

### 9. www.hodle.com.br não resolve (DNS NXDOMAIN)

- **Severidade:** média
- **Esforço:** baixo
- **Objetivo:** Aquisição, Autoridade
- **Evidência:** www.hodle.com.br não resolve: DNS NXDOMAIN (consultado via dns.google)
- **Correção proposta:** Criar CNAME www → Vercel e redirecionar com 308 para https://hodle.com.br. Quem digita www hoje recebe um erro

### 10. Links internos fracos para alguns artigos

- **Severidade:** média
- **Esforço:** baixo
- **Objetivo:** Aquisição, Autoridade
- **Evidência:** Links internos fracos para alguns artigos: psav-regulacao-banco-central e auto-custodia-… recebem links de só 3 páginas. As páginas /en/* recebem de 4 a 6
- **Correção proposta:** Linkar os artigos a partir das páginas de produto relacionadas (ex.: /baas → PSAV) e incluir 'Leia também'

### 11. CTAs dependem de WhatsApp

- **Severidade:** média
- **Esforço:** médio
- **Objetivo:** Leads
- **Evidência:** CTAs dependem de WhatsApp ('Falar com vendas' aparece 4 vezes na home). Não há isca de conteúdo nem newsletter
- **Correção proposta:** Oferecer simulador de taxas em /precos, guia em PDF/checklist de integração em troca de e-mail e newsletter de produto. Manter o WhatsApp como opção

### 12. Acessibilidade

- **Severidade:** baixa
- **Esforço:** baixo
- **Objetivo:** Aquisição
- **Evidência:** Acessibilidade (Lighthouse): contraste insuficiente, links sem nome acessível (ex.: ícone do GitHub em /contato), sem landmark `<main>` em /precos e /faq
- **Correção proposta:** `aria-label` nos ícones, `<main>` no layout e ajuste das cores de texto secundário

### 13. Títulos curtos ou redundantes

- **Severidade:** baixa
- **Esforço:** baixo
- **Objetivo:** Aquisição
- **Evidência:** Títulos curtos ou redundantes: /marca (13 caracteres), /contato (15), /articles (15), 'Sobre a Hodle | Hodle'. Acima de 60: /en/pix-stablecoin-api (64), /pagar-fornecedores-com-usdc (63), /articles/conciliacao-pix-api (61)
- **Correção proposta:** Títulos de 30 a 60 caracteres com termo + marca (ex.: 'Contato comercial e suporte | Hodle')

### 14. Meta descriptions acima de 160 caracteres em 6 páginas

- **Severidade:** baixa
- **Esforço:** baixo
- **Objetivo:** Aquisição
- **Evidência:** Meta descriptions acima de 160 caracteres em 6 páginas: /neobank (173), /legal (169), /crypto-as-a-service (167), /faq (165), comparar-api-pix-baas (166), auto-custodia (166)
- **Correção proposta:** Encurtar para 140–155 caracteres, com o benefício no começo

### 15. llms-full.txt não é superconjunto do llms.txt

- **Severidade:** baixa
- **Esforço:** baixo
- **Objetivo:** Autoridade
- **Evidência:** llms-full.txt se apresenta como 'versão estendida', mas não tem seções que o llms.txt tem (Markdown/AI Discovery). Ele também aparece indexado na busca sem título
- **Correção proposta:** Gerar os dois arquivos da mesma fonte, com o full sendo um superconjunto de fato

### 16. Link externo quebrado em /cookies

- **Severidade:** baixa
- **Esforço:** baixo
- **Objetivo:** Autoridade
- **Evidência:** Link externo quebrado em /cookies: support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge (404)
- **Correção proposta:** Trocar pela URL atual da Microsoft

### 17. HSTS sem `includeSubDomains` e `preload`

- **Severidade:** baixa
- **Esforço:** baixo
- **Objetivo:** Autoridade
- **Evidência:** HSTS sem `includeSubDomains` e `preload` (max-age=63072000)
- **Correção proposta:** Avaliar adicionar `includeSubDomains; preload` depois de confirmar HTTPS em todos os subdomínios

## Contexto técnico (da auditoria)

- 50/50 URLs do sitemap com 200, self-canonical, index,follow; JSON-LD em todas; Lighthouse SEO 100 (home, /precos, /faq).
- Lighthouse mobile performance: home 97 (LCP 2,4 s), /precos 100, /faq 100. Acessibilidade: home 92, /precos 91, /faq 94.
- 140 links únicos verificados: 1 externo quebrado (Microsoft, em /cookies). Nenhum interno quebrado.
- www.hodle.com.br: NXDOMAIN. http→https não medido (porta 80 bloqueada no ambiente da auditoria).
- PageSpeed Insights/CrUX: API devolveu 429; só dados de laboratório.
- Backlinks, DR, tráfego, cobertura de indexação: exigem Ahrefs/Semrush/Search Console (não medidos).
