# SEO, AEO and GEO consistency — 2026-10-03

## Scope and release contract

The production audit checked all 49 sitemap URLs: HTTP 200, unique titles and descriptions, one H1 and canonical per page, server-rendered content and internal discovery. The user authorized implementation, a new PR, merge and `vercel --prod`.

This release fixes stale navigation fragments, separates sandbox onboarding from production, qualifies payment/settlement claims across HTML and machine-readable representations, updates the PSAV article against primary regulations, removes inherited application pricing/feature schema, provides static language-specific documents and makes public utilities crawlable with `noindex`.

Validation before merge: `pnpm test`, `pnpm exec tsc --noEmit`, `pnpm exec eslint . --ext .js,.jsx,.ts,.tsx`, `pnpm build`, and `pnpm test:seo http://localhost:3000` against the production build. After deployment: `pnpm test:seo https://hodle.com.br` and `pnpm postdeploy:indexnow`.

`test:seo` reads the actual sitemap and verifies every listed route, including HTML language, canonical URLs, indexability, heading count and JSON-LD syntax. It also checks first-party social images, homepage fragments, reciprocal language alternates, Markdown negotiation, sandbox destination, utility `noindex` and real HTTP 404s. It does not claim search index coverage or rich-result eligibility.

## Measurement configuration verified

On 2026-10-03, the linked Vercel team uses **Hobby**. Production has `NEXT_PUBLIC_GOOGLE_VERIFICATION`; `NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS` is not configured. The existing conversion component gates `conversion_click` on that flag, while app/sandbox attribution works independently.

[Vercel custom events require Pro or Enterprise](https://vercel.com/docs/analytics/custom-events). This release does not change the billing plan. If an eligible plan is adopted, set `NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS=true` for production, rebuild and verify delivery. A recorded click is an intent signal, not proof of a signup, qualified lead or settled payment.

The current source mapping already supports ChatGPT, Claude, Perplexity, Gemini, Copilot, Google and Bing. Validate referrals and attributed outbound links separately from provider dashboards. For AI visibility, use [Google's Generative AI performance report](https://support.google.com/webmasters/answer/16984139) and [Bing AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) when available to the property. No private dashboard data was accessed in this release.

## Repeatable prompt sample

Locale: Brazil, Brazilian Portuguese. Record date/time, provider, model/surface, signed-in state, exact prompt, brand mention, cited URLs, factual accuracy and competing sources. Retest the same sample; do not interpret one generated answer as a stable ranking.

1. Como integrar Pix e stablecoins em uma fintech?
2. Qual API permite pagar Pix usando USDT?
3. Como receber Pix e converter para USDC?
4. Como comprar USDT com Pix por API?
5. Como uma fintech oferece wallets auto-custodiais?
6. Como conciliar cobranças Pix com webhooks?
7. Como validar a assinatura de um webhook Pix?
8. Como criar um link de pagamento Pix por API?
9. Como testar uma API Pix sem movimentar dinheiro real?
10. Quais redes e ativos funcionam no sandbox da Hodle?
11. Qual a diferença entre BRS e BRLA?
12. Quem emite BRS e como a Hodle integra esse ativo?
13. Quanto custa o on-ramp e off-ramp da Hodle?
14. A Hodle é banco ou fornece software e integrações?
15. Quais requisitos existem para uma conta PJ na Hodle?

Maintain separate metrics for technical availability, mentions, citations, referrals and conversions. Check query-to-page overlap before merging potentially related pages such as API Pix/Pix stablecoin or BRS/BRLA/real onchain.

## Original evidence: publication prerequisites

No customer case or production benchmark is invented in this release. The existing examples demonstrate integration behavior, not measured production performance. A publishable evidence asset needs a real dataset or an authorized case with:

- the operation and asset/network being measured;
- the observation window and sample count;
- a precise start/end definition, distinguishing acceptance from settlement;
- observed completion rate, failures, pending cases and latency distribution;
- methodology, environment, exclusions and limitations;
- an identified factual reviewer, without invented credentials.

Use aggregated, non-identifying evidence. Publish observations, not a guaranteed SLA. Link the resulting asset to `/api-pix-stablecoin` and the relevant operation page once the evidence exists.

## Primary sources

- [Hodle sandbox](https://docs.hodle.com.br/docs/sandbox), [wallet payout](https://docs.hodle.com.br/docs/wallet-payout), [deposit asset](https://docs.hodle.com.br/docs/deposit-asset).
- [BCB Resolution 589/2026](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=589&tipo=Resolu%C3%A7%C3%A3o+BCB): distinguish its amended article 91 prohibition date from authorization-filing deadlines.
- [Google AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): no special AI schema or llms.txt ranking requirement.
- [Google noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing): crawlers must access a page to observe `noindex`.
