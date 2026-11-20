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

`pnpm build` runs `next build`, then `scripts/defer-hydration.mjs`, then the crawl-budget check. The middle step rewrites every prerendered page in `.next/server/app/**/*.html`: the `/_next/static/chunks/...` script tags are removed and a small inline loader injects them on the first `pointerdown`, `keydown`, `touchstart`, `wheel` or `scroll`, or when the browser is idle after the window `load` event. This keeps ~145 KB of JavaScript off the critical path before first paint (Lighthouse mobile LCP on a local build: `/precos` 2.6 s to 1.6 s, `/` 2.9 s to 1.7 s).

Trade-off: hydration starts after `load` or on the first interaction. A tap made before hydration only triggers the loader, so the page is not interactive until the chunks arrive (usually a few hundred milliseconds).

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
