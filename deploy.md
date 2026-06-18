# Deploy — hodle-front

Production: **https://hodle.com.br**

This repo has two deploy paths. **Vercel is the one that currently works and serves `hodle.com.br`.** The Fly.io GitHub Action is present but broken (see below) — don't rely on it.

## TL;DR — ship to production

```bash
# from repo root, on main with your change merged
vercel --prod --yes
```

That builds (`next build`), uploads, and aliases the deployment to `hodle.com.br`. Takes ~1 min.

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
```

Verify the live page after deploy, e.g.:

```bash
curl -s https://hodle.com.br/articles/precos | grep -oE '[0-9.]+%'
```

## Useful Vercel commands

```bash
vercel ls                                 # recent deployments
vercel inspect <url> --logs               # build/runtime logs for a deployment
vercel redeploy <url>                      # redeploy an existing build
vercel --prod --yes                        # build + deploy current dir to prod
```

## Fly.io (legacy / currently broken)

`.github/workflows/fly-deploy.yml` runs `flyctl deploy --remote-only` on every push
to `main`. It has been **failing since deploy #23** with:

```
Error: no access token available. Please login with 'flyctl auth login'
```

The GitHub Actions secret `FLY_API_TOKEN` is empty/expired, and there is no `fly.toml`
in the repo. Until that's fixed the Fly action is a no-op failure — production is served
by Vercel regardless.

To revive Fly later:
```bash
fly tokens create deploy                          # generate a deploy token
gh secret set FLY_API_TOKEN --repo HodleHub/hodle-front   # paste the token
```
…and commit a `fly.toml`. Otherwise consider removing the workflow to stop the red Xs.
