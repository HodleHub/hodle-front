import assert from 'node:assert/strict'
import test from 'node:test'
import { hydrationLoader } from '../deferHydration/hydrationLoader.mjs'

const IDLE = 4000
const HARD = 8000
const SCRIPTS = [['/a.js', '_R_'], ['/b.js', null], ['/c.js', null]]

const makeHarness = ({ readyState = 'loading', hidden = false, painted = false } = {}) => {
  const state = { now: 0, timers: [], listeners: {}, docListeners: {}, appended: [], observerCb: null, painted }
  const advance = (ms) => {
    const target = state.now + ms

    while (true) {
      const due = state.timers.filter((t) => t.at <= target).sort((x, y) => x.at - y.at)[0]

      if (!due) break

      state.now = due.at

      if (due.every) {
        due.at += due.every
      } else {
        state.timers.splice(state.timers.indexOf(due), 1)
      }

      due.fn()
    }

    state.now = target
  }
  const add = (at, fn, every) => {
    const timer = { at: state.now + at, fn, every }

    state.timers.push(timer)

    return timer
  }
  const window = {
    performance: { getEntriesByName: () => (state.painted ? [{}] : []) },
    PerformanceObserver: function (cb) {
      state.observerCb = cb
      this.observe = () => {}
      this.disconnect = () => {}
    },
    setTimeout: (fn, ms) => add(ms, fn),
    setInterval: (fn, ms) => add(ms, fn, ms),
    clearInterval: (timer) => {
      const index = state.timers.indexOf(timer)

      if (index !== -1) state.timers.splice(index, 1)
    },
    addEventListener: (name, fn, options) => {
      state.listeners[name] = [...(state.listeners[name] || []), fn]
      state.options = { ...(state.options || {}), [name]: options }
    },
    removeEventListener: (name, fn) => {
      state.listeners[name] = (state.listeners[name] || []).filter((f) => f !== fn)
    },
  }
  const document = {
    readyState,
    hidden,
    head: { appendChild: (el) => state.appended.push(el) },
    createElement: () => ({}),
    addEventListener: (name, fn) => {
      state.docListeners[name] = [...(state.docListeners[name] || []), fn]
    },
  }
  const dateStub = { now: () => state.now }
  const run = new Function('window', 'document', 'Date', `return (${hydrationLoader.toString()})`)(window, document, dateStub)

  return {
    state,
    document,
    advance,
    start: () => run(SCRIPTS, IDLE),
    emit: (name, event = {}) => (state.listeners[name] || []).slice().forEach((fn) => fn(event)),
    load: () => (state.listeners.load || []).forEach((fn) => fn()),
    paint: () => {
      state.painted = true
      state.observerCb()
    },
  }
}

const makeControl = (tag, attrs = {}) => {
  const control = { tagName: tag.toUpperCase(), isConnected: true, clicks: 0, click: () => (control.clicks += 1) }

  control.getAttribute = (name) => (name in attrs ? attrs[name] : null)
  control.closest = () => control

  return control
}

const injected = (h) => h.state.appended.map((el) => [el.src, el.id ?? null])

test('an interaction event injects all scripts once, in order, with the webpack id', () => {
  const h = makeHarness()

  h.start()
  h.emit('pointerdown')
  h.emit('keydown')

  assert.deepEqual(injected(h), [['/a.js', '_R_'], ['/b.js', null], ['/c.js', null]])
  assert.ok(h.state.appended.every((el) => el.async === true))
})

test('without interaction nothing is injected before load, paint and the idle fallback', () => {
  const h = makeHarness()

  h.start()
  h.advance(HARD)
  assert.equal(h.state.appended.length, 0)

  h.load()
  h.advance(1000)
  h.paint()
  h.advance(IDLE - 1)
  assert.equal(h.state.appended.length, 0)

  h.advance(1)
  assert.equal(h.state.appended.length, 3)
})

test('a page already loaded and painted injects after the idle fallback', () => {
  const h = makeHarness({ readyState: 'complete', painted: true })

  h.start()
  h.advance(IDLE - 1)
  assert.equal(h.state.appended.length, 0)

  h.advance(1)
  assert.equal(h.state.appended.length, 3)
})

test('the hard upper bound injects when no paint entry ever appears', () => {
  const h = makeHarness()

  h.start()
  h.load()
  h.advance(HARD - 1)
  assert.equal(h.state.appended.length, 0)

  h.advance(1)
  assert.equal(h.state.appended.length, 3)
})

test('a hidden tab waits the idle fallback without a paint entry', () => {
  const h = makeHarness({ readyState: 'complete', hidden: true })

  h.start()
  h.advance(IDLE - 1)
  assert.equal(h.state.appended.length, 0)

  h.advance(1)
  assert.equal(h.state.appended.length, 3)
})

test('the scroll trigger listens to the page only, not to inner scrollers', () => {
  const h = makeHarness()

  h.start()

  assert.equal(Boolean(h.state.options.scroll.capture), false)
  assert.equal(h.state.options.pointerdown.capture, true)

  h.emit('scroll')

  assert.equal(h.state.appended.length, 3)
})

test('hiding the tab or leaving the page does not inject', () => {
  const h = makeHarness()

  h.start()
  h.emit('pagehide')
  h.document.hidden = true
  ;(h.state.docListeners.visibilitychange ?? []).forEach((fn) => fn())

  assert.equal(h.state.appended.length, 0)
})

test('a pre-hydration click on a button is replayed once after the fiber appears', () => {
  const h = makeHarness()
  const button = makeControl('button')

  h.start()
  h.emit('click', { target: button })
  assert.equal(h.state.appended.length, 3)

  h.advance(500)
  assert.equal(button.clicks, 0)

  button.__reactFiber$abc = {}
  h.advance(50)
  h.advance(500)

  assert.equal(button.clicks, 1)
  assert.deepEqual(h.state.listeners.click, [])
})

test('a click on a link with href or on a form submit button is not replayed', () => {
  const link = makeControl('a', { href: '/x' })
  const submit = makeControl('button')

  submit.form = {}
  submit.type = 'submit'
  const h = makeHarness()

  h.start()
  h.emit('click', { target: link })
  h.emit('click', { target: submit })
  assert.equal(h.state.appended.length, 0)

  h.emit('pointerdown')
  link.__reactProps$abc = {}
  submit.__reactProps$abc = {}
  h.advance(1000)

  assert.equal(link.clicks, 0)
  assert.equal(submit.clicks, 0)
})

test('a click with no clickable ancestor does nothing', () => {
  const h = makeHarness()

  h.start()
  h.emit('click', { target: { closest: () => null } })

  assert.equal(h.state.appended.length, 0)
})

test('a replay is skipped when the element left the document', () => {
  const h = makeHarness()
  const button = makeControl('button')

  h.start()
  h.emit('click', { target: button })
  button.isConnected = false
  button.__reactFiber$abc = {}
  h.advance(100)

  assert.equal(button.clicks, 0)
})

test('the replay gives up after the timeout without clicking', () => {
  const h = makeHarness()
  const button = makeControl('button')

  h.start()
  h.emit('click', { target: button })
  h.advance(10000)
  button.__reactFiber$abc = {}
  h.advance(1000)

  assert.equal(button.clicks, 0)
  assert.deepEqual(h.state.listeners.click, [])
})

test('a second run does not inject twice', () => {
  const h = makeHarness()

  h.start()
  h.start()
  h.emit('pointerdown')

  assert.equal(h.state.appended.length, 3)
})
