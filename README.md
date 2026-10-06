This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Crawl payload budget

`pnpm build` checks generated HTML/RSC, browser JS/CSS/JSON and public text assets
against a **1,500,000-byte (1.5 MB) budget per uncompressed file**. It fails when a
file exceeds the budget or the production build is missing. Run `pnpm check:crawl`
to repeat the check on an existing build, and `pnpm test:crawl` for the checker tests.

[Googlebot's limit](https://developers.google.com/search/docs/crawling-indexing/googlebot)
is 2 MB per file, not the sum of a page's resources. The budget leaves room for
headers and runtime additions. Gzip/Brotli does not change this limit. Server-only
bundles, source maps, fonts and raster/video assets are excluded. The RSC and SVG
checks are additional project budgets, not claims about Google's media crawlers.

After starting the production server, `pnpm test:seo http://localhost:3000` also
checks the decoded HTML of every sitemap URL and its same-origin JS/CSS resources.
Use the deployed origin to verify responses after middleware/CDN processing.
Dynamic APIs and third-party assets still need separate checks when introduced.

Keep decorative artwork in external assets rather than repeating large inline SVGs
in both HTML and React's serialized payload. The BRS map uses an external SVG;
section entrance effects use the Web Animations API and keep content visible in
the server HTML, including when JavaScript is unavailable.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
