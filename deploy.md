# Deploy — hodle-front

Production: **https://hodle.com.br**

Production is served by **Vercel** and deployed manually with the Vercel CLI. Merging to `main` does not deploy: run the release command below after every merge that should go live.

## TL;DR — ship to production

```bash
# from repo root, on main with your change merged
vercel --prod --yes
```

That builds (`next build`), uploads, and aliases the deployment to `hodle.com.br`. Takes ~1 min.

After the production deployment succeeds, submit the sitemap URLs to IndexNow:

```bash
pnpm run postdeploy:indexnow
```

## Deferred hydration build step

`pnpm build` runs `next build`, then `scripts/defer-hydration.mjs`, then the crawl-budget check. The middle step rewrites every prerendered page in `.next/server/app/**/*.html`: the `/_next/static/chunks/...` script tags are removed and an inline loader (`scripts/deferHydration/hydrationLoader.mjs`, serialized into the page by `transformHtml.mjs`) injects them, in order, later. This keeps ~145 KB of JavaScript and the React hydration off the critical path, so the page is painted and the main thread is quiet while a measurement runs (Lighthouse mobile LCP on a local build: `/precos` 2.6 s to 1.6 s, `/` 2.9 s to 1.7 s).

Behaviour, in order of precedence:

- The first `pointerdown`, `keydown`, `touchstart`, `wheel` or `scroll` injects the scripts immediately.
- Hiding the tab or leaving the page does not inject them: those events can fire without a person behind them.
- With no interaction, the loader waits for the window `load` event and the first contentful paint, then `IDLE_FALLBACK_MS` (4000, in `transformHtml.mjs`), then injects on `requestIdleCallback` (1.5 s timeout, plain call when unsupported). A tab that is already hidden skips the wait for a paint entry but keeps the delay.
- Hard upper bound: 8 s after `load` the scripts are injected even if no paint entry was ever observed.

Click replay: a click that lands before hydration on a JS-only control (mobile menu button, FAQ accordion, copy button) is not lost. A capturing `click` listener finds the nearest `button, [role="button"], a`. Nothing is replayed when there is no match, when the match is an `<a href>` (native navigation) or a submit button inside a form (the native submit already happened). Form fields, labels and `<summary>` are left alone on purpose: they already act natively, and a second click would undo a checkbox. Otherwise the element is remembered (only the latest) and the scripts are injected. After injection the loader polls every 50 ms, up to 10 s, until the element has a `__reactFiber$` or `__reactProps$` key, then calls `.click()` on it once if it is still in the document, and removes the listener. The original event is never prevented or stopped.

Trade-offs, stated plainly:

- Without any interaction the page hydrates about 4 s after it is painted. Vercel Analytics and Speed Insights start after hydration, so they miss visits that leave within that time without touching, scrolling or typing.
- Client-side navigation and link prefetch only start after hydration. Until then a link click is a normal full page load.
- A tap before hydration waits for the chunks (usually a few hundred milliseconds) before its effect shows.

Safety: the step exits non-zero if it finds prerendered pages and rewrites none, which means a Next.js upgrade changed the markup. Fix `scripts/deferHydration/transformHtml.mjs` (covered by `pnpm test:defer`) or disable the step.

To disable it, drop `node scripts/defer-hydration.mjs &&` from the `build` script in `package.json`.

## Prerequisites (one-time)

- `vercel` CLI installed (`pnpm add -g vercel`) and logged in:
  ```bash
  vercel whoami        # expect: thiago-mota-santos
  vercel login         # if not authenticated
  ```
- The repo is already linked to the Vercel project via `.vercel/project.json`
  (project `hodle-front`, org `team_TEiicR9sBufaLnzPixVHRb0o`). No `vercel link` needed.

## Standard release flow

```bash
git checkout -b <type>/<short-name>
# ...make changes...
git add -A && git commit -m "..."
git push -u origin <branch>
gh pr create --title "..." --body "..."
gh pr merge <n> --merge --delete-branch   # fast-forwards main
vercel --prod --yes                       # deploy main to production
pnpm run postdeploy:indexnow              # notify IndexNow after production deploy
```

Verify the live page after deploy, e.g.:

```bash
curl -s https://hodle.com.br/articles/precos | grep -oE '[0-9.]+%'
```

Confirm production serves the current `main` (the two hashes must match):

```bash
curl -s https://hodle.com.br/llms.txt | git hash-object --stdin
git rev-parse main:public/llms.txt
```

## Useful Vercel commands

```bash
vercel ls                                 # recent deployments
vercel inspect <url> --logs               # build/runtime logs for a deployment
vercel redeploy <url>                      # redeploy an existing build
vercel --prod --yes                        # build + deploy current dir to prod
```

## Fly.io (removed)

The `.github/workflows/fly-deploy.yml` action failed on every push to `main` (no
`FLY_API_TOKEN`, no `fly.toml`) since deploy #23, while Vercel serves `hodle.com.br`. It was removed so a
red check on `main` means something again.
