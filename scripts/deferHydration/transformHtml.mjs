const CHUNK_SCRIPT = /<script src="(\/_next\/static\/chunks\/[^"]+)"(?: id="([^"]+)")? async=""><\/script>/g
const WEBPACK_PRELOAD = /<link rel="preload" as="script" fetchPriority="low" href="\/_next\/static\/chunks\/webpack-[^"]+"\/>/g

export const DEFER_MARKER = 'data-defer-hydration'

const buildLoader = (scripts) => {
  const list = JSON.stringify(scripts)

  return `<script ${DEFER_MARKER}="">(function(){var s=${list},d=0,e=["pointerdown","keydown","touchstart","wheel","scroll"];function l(){if(d)return;d=1;s.forEach(function(c){var t=document.createElement("script");t.src=c[0];if(c[1])t.id=c[1];t.async=true;document.head.appendChild(t)})}e.forEach(function(n){addEventListener(n,l,{once:true,passive:true,capture:true})});function w(){setTimeout(function(){window.requestIdleCallback?requestIdleCallback(l,{timeout:1500}):l()},200)}function p(){return performance.getEntriesByName("first-contentful-paint").length>0}function i(){if(document.hidden||!window.PerformanceObserver||p())return w();setTimeout(l,4000);try{var o=new PerformanceObserver(function(){if(p()){o.disconnect();w()}});o.observe({type:"paint",buffered:true})}catch(x){w()}}document.readyState==="complete"?i():addEventListener("load",i)})()</script>`
}

/**
 * Moves the Next.js chunk scripts of a prerendered page behind an inline
 * loader that injects them, in their original order, on the first user
 * interaction or when the browser is idle after both the window load event
 * and the first contentful paint. Waiting for the paint matters: on a fast
 * connection `load` can fire before the first frame, and scripts that start
 * before it compete with the paint they were moved out of the way of.
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
