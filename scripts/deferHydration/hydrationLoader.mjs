/**
 * Browser loader serialized into every prerendered page by `transformHtml`.
 * It must stay self-contained plain ES5: no imports and no closures over
 * module scope, because only its source text reaches the page.
 *
 * Injects the deferred Next.js chunk scripts, in order, on the first user
 * interaction, or after the window load event plus the first contentful paint
 * plus `idleFallbackMs`, with a hard upper bound after load. Tab visibility and
 * page-hide events are deliberately not triggers: they can fire without a
 * person behind them and would start the scripts before the first paint. The
 * scroll listener is not capturing, so only the page itself scrolling counts:
 * an inner scroller that settles during layout must not start the scripts. A click that lands on a JS-only control before
 * hydration is replayed once the control has a React fiber. Only buttons are
 * replayed: links navigate natively, a form submit button and native form
 * fields already acted on the first click, and a second click would undo a
 * checkbox or submit a form twice.
 *
 * @param scripts Pairs of chunk URL and optional element id, in load order.
 * @param idleFallbackMs Wait after load and first paint before injecting without interaction.
 */
export const hydrationLoader = (scripts, idleFallbackMs) => {
  var HARD_LIMIT_MS = 8000
  var IDLE_TIMEOUT_MS = 1500
  var POLL_MS = 50
  var POLL_GIVE_UP_MS = 10000
  var FIBER_KEY = /^__react(Fiber|Props)\$/
  var CONTAINER_KEY = /^__reactContainer\$/
  var CLICKABLE = 'button, [role="button"], a'
  var INTERACTIONS = ['pointerdown', 'keydown', 'touchstart', 'wheel']

  if (window.__hodleHydrationLoader) return

  window.__hodleHydrationLoader = true

  var injected = false
  var scheduled = false
  var pending = null
  var pollTimer = 0
  var pollStarted = 0

  var hasKey = function (target, pattern) {
    return Object.keys(target).some(function (key) {
      return pattern.test(key)
    })
  }

  var stopReplay = function () {
    window.clearInterval(pollTimer)
    window.removeEventListener('click', onClick, true)
  }

  var poll = function () {
    var ready = pending ? hasKey(pending, FIBER_KEY) : hasKey(document, CONTAINER_KEY)

    if (!ready && Date.now() - pollStarted < POLL_GIVE_UP_MS) return

    var target = pending

    pending = null
    stopReplay()

    if (ready && target && target.isConnected) target.click()
  }

  var inject = function () {
    if (injected) return

    injected = true
    scripts.forEach(function (entry) {
      var script = document.createElement('script')

      script.src = entry[0]

      if (entry[1]) script.id = entry[1]

      script.async = true
      document.head.appendChild(script)
    })
    pollStarted = Date.now()
    pollTimer = window.setInterval(poll, POLL_MS)
  }

  var onClick = function (event) {
    var origin = event.target
    var control = origin && origin.closest ? origin.closest(CLICKABLE) : null

    if (!control) return

    var tag = control.tagName.toLowerCase()

    if (tag === 'a' && control.getAttribute('href') !== null) return

    if (tag === 'button' && control.form && control.type === 'submit') return

    pending = control
    inject()
  }

  var scheduleIdle = function () {
    if (scheduled) return

    scheduled = true
    window.setTimeout(function () {
      if (window.requestIdleCallback) return window.requestIdleCallback(inject, { timeout: IDLE_TIMEOUT_MS })

      inject()
    }, idleFallbackMs)
  }

  var painted = function () {
    return window.performance.getEntriesByName('first-contentful-paint').length > 0
  }

  var afterLoad = function () {
    window.setTimeout(inject, HARD_LIMIT_MS)

    if (document.hidden || !window.PerformanceObserver || painted()) return scheduleIdle()

    try {
      var observer = new window.PerformanceObserver(function () {
        if (!painted()) return

        observer.disconnect()
        scheduleIdle()
      })

      observer.observe({ type: 'paint', buffered: true })
    } catch (error) {
      scheduleIdle()
    }
  }

  INTERACTIONS.forEach(function (name) {
    window.addEventListener(name, inject, { once: true, passive: true, capture: true })
  })
  window.addEventListener('scroll', inject, { once: true, passive: true })
  window.addEventListener('click', onClick, true)

  if (document.readyState === 'complete') return afterLoad()

  window.addEventListener('load', afterLoad)
}
