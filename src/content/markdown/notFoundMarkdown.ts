/**
 * Body of the 404 response, in markdown, so an agent that hits a dead path can
 * recover without parsing the visual page. Rendered inside the HTML 404 too.
 */
export const notFoundMarkdown = `# 404 — página não encontrada

Este caminho não existe em hodle.com.br. A resposta é um 404 de verdade, não
uma página vazia com status 200.

## Por onde continuar

- [Home](https://hodle.com.br/) — o que a Hodle faz
- [llms.txt](https://hodle.com.br/llms.txt) — resumo legível por máquina, com o mapa do site
- [sitemap.xml](https://hodle.com.br/sitemap.xml) — todas as URLs indexáveis
- [Desenvolvedores](https://hodle.com.br/desenvolvedores) — OpenAPI, autenticação, webhooks, sandbox
- [openapi.json](https://hodle.com.br/openapi.json) — especificação OpenAPI 3.1 da API
- [Documentação](https://docs.hodle.com.br) — guias por endpoint
- [Preços](https://hodle.com.br/precos) · [FAQ](https://hodle.com.br/faq) · [Glossário](https://hodle.com.br/glossario) · [Artigos](https://hodle.com.br/articles)
- [Sobre](https://hodle.com.br/sobre) · [Contato](https://hodle.com.br/contato) · [Central Legal](https://hodle.com.br/legal)

## Negociação de conteúdo

Envie \`Accept: text/markdown\` em qualquer página listada no llms.txt para
receber a versão markdown. As respostas declaram \`Vary: Accept\`.
`
