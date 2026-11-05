# Evidências visuais — auditoria SEO/GEO, novembro de 2026

Main: http://localhost:3200; branch `seo/auditoria-geo-fixes`: http://localhost:3201. Dados extraídos dos servidores de produção locais e dos logs existentes; nenhuma métrica Lighthouse foi gerada. Captura em desktop de 1280 px; recortes alinhados pelo conteúdo, FAQ aberto via DOM. Pares preservam a escala original. Cores dos PNGs quantizadas para respeitar 500 KB.

- [01-faq-definicao.png](01-faq-definicao.png): Comparação visual de /faq — O que é a Hodle. Fonte: http://localhost:3200/faq e http://localhost:3201/faq. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [02-faq-payout.png](02-faq-payout.png): Comparação visual de /faq — payout. Fonte: http://localhost:3200/faq e http://localhost:3201/faq. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [03-sobre-payout.png](03-sobre-payout.png): Comparação visual de /sobre — Pagar Pix a partir. Fonte: http://localhost:3200/sobre e http://localhost:3201/sobre. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [04-precos-contraste.png](04-precos-contraste.png): Comparação visual de /precos — Atualizado em. Fonte: http://localhost:3200/precos e http://localhost:3201/precos. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [05-cookies-navegadores.png](05-cookies-navegadores.png): Comparação visual de /cookies — microsoft. Fonte: http://localhost:3200/cookies e http://localhost:3201/cookies. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [06-articles-hub.png](06-articles-hub.png): Comparação visual de /articles. Fonte: http://localhost:3200/articles e http://localhost:3201/articles. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [07-artigo-conciliacao.png](07-artigo-conciliacao.png): Comparação visual de /articles/conciliacao-pix-api. Fonte: http://localhost:3200/articles/conciliacao-pix-api e http://localhost:3201/articles/conciliacao-pix-api. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [08-baas-relacionados.png](08-baas-relacionados.png): Comparação visual de /baas. Fonte: http://localhost:3200/baas e http://localhost:3201/baas. Ferramenta: Chrome CDP + Pillow (recorte e composição).
- [09-metadados-parte-1.png](09-metadados-parte-1.png): Title e description — antes / depois (1/5) Fonte: HTTP: http://localhost:3200 e http://localhost:3201; title e meta[name=description].. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [10-metadados-parte-2.png](10-metadados-parte-2.png): Title e description — antes / depois (2/5) Fonte: HTTP: http://localhost:3200 e http://localhost:3201; title e meta[name=description].. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [11-metadados-parte-3.png](11-metadados-parte-3.png): Title e description — antes / depois (3/5) Fonte: HTTP: http://localhost:3200 e http://localhost:3201; title e meta[name=description].. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [12-metadados-parte-4.png](12-metadados-parte-4.png): Title e description — antes / depois (4/5) Fonte: HTTP: http://localhost:3200 e http://localhost:3201; title e meta[name=description].. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [13-metadados-parte-5.png](13-metadados-parte-5.png): Title e description — antes / depois (5/5) Fonte: HTTP: http://localhost:3200 e http://localhost:3201; title e meta[name=description].. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [14-json-ld.png](14-json-ld.png): JSON-LD real — sameAs, image e author Fonte: HTTP /articles/conciliacao-pix-api nos dois servidores; scripts application/ld+json.. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [15-llms-cobertura.png](15-llms-cobertura.png): llms.txt → llms-full.txt: cobertura por H2 Fonte: HTTP /llms.txt e /llms-full.txt nos servidores :3200 e :3201.. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [16-llms-redes.png](16-llms-redes.png): Redes suportadas — trechos reais Fonte: HTTP /llms.txt e /llms-full.txt nos servidores :3200 e :3201.. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [17-cookies-href-microsoft.png](17-cookies-href-microsoft.png): Cookies — href Microsoft extraído do HTML Fonte: HTTP http://localhost:3200/cookies e http://localhost:3201/cookies; outerHTML do link Microsoft.. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [18-log-lint.png](18-log-lint.png): Log real — lint Fonte: /workspace/seo/evidence-logs/lint.log. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [19-log-typecheck.png](19-log-typecheck.png): Log real — typecheck Fonte: /workspace/seo/evidence-logs/typecheck.log. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [20-log-test.png](20-log-test.png): Log real — test Fonte: /workspace/seo/evidence-logs/test.log. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [21-log-build.png](21-log-build.png): Log real — build Fonte: /workspace/seo/evidence-logs/build.log. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.
- [22-log-test-seo.png](22-log-test-seo.png): Log real — test:seo Fonte: /workspace/seo/evidence-logs/test-seo.log. Ferramenta: HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow.

## Reprodução

Requer servidores já ativos, Node com WebSocket nativo, Python 3/Pillow e Chrome. Não recompila nem encerra servidores.

```bash
/usr/bin/google-chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars --remote-debugging-port=9333 --user-data-dir=/tmp/seo-evidence-chrome about:blank
# Em outro terminal, na raiz do repositório:
node docs/seo/evidencias/2026-11/scripts/generate.mjs
```

Scripts: [generate.mjs](scripts/generate.mjs), [render.py](scripts/render.py). HTMLs e dados intermediários ficam em `/tmp/hodle-seo-evidence`. As faixas 30–60 e ≤160 são apenas critérios visuais solicitados; as contagens usam caracteres Unicode do texto decodificado. A cobertura llms exige tanto o mesmo H2 quanto o corpo completo da seção short dentro de full.
