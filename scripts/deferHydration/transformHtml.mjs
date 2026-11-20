import { hydrationLoader } from './hydrationLoader.mjs'

const CHUNK_SCRIPT = /<script src="(\/_next\/static\/chunks\/[^"]+)"(?: id="([^"]+)")? async=""><\/script>/g
const WEBPACK_PRELOAD = /<link rel="preload" as="script" fetchPriority="low" href="\/_next\/static\/chunks\/webpack-[^"]+"\/>/g

export const DEFER_MARKER = 'data-defer-hydration'
export const IDLE_FALLBACK_MS = 4000

const buildLoader = (scripts) =>
  `<script ${DEFER_MARKER}="">(${hydrationLoader.toString()})(${JSON.stringify(scripts)},${IDLE_FALLBACK_MS})</script>`

/**
 * Moves the Next.js chunk scripts of a prerendered page behind an inline
 * loader that injects them, in their original order, on the first user
 * interaction (see `hydrationLoader`), or `IDLE_FALLBACK_MS` after both the
 * window load event and the first contentful paint when nobody interacts.
 * Pure and idempotent: pages already transformed, without chunk scripts or
 * without a closing body tag are returned unchanged with `count` 0.
 *
 * @param args.html Prerendered page markup.
 * @returns The new markup and how many scripts were deferred.
 */
export const transformHtml = ({ html }) => {
  if (html.includes(DEFER_MARKER)) return { html, count: 0 }

  const scripts = [...html.matchAll(CHUNK_SCRIPT)].map((match) => [match[1], match[2] ?? null])

  if (scripts.length === 0) return { html, count: 0 }

  const stripped = html.replace(CHUNK_SCRIPT, '').replace(WEBPACK_PRELOAD, '')
  const closing = stripped.lastIndexOf('</body>')

  if (closing === -1) return { html, count: 0 }

  return {
    html: `${stripped.slice(0, closing)}${buildLoader(scripts)}${stripped.slice(closing)}`,
    count: scripts.length,
  }
}
