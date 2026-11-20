import assert from 'node:assert/strict'
import test from 'node:test'
import { transformHtml } from '../deferHydration/transformHtml.mjs'

const WEBPACK = '/_next/static/chunks/webpack-abc.js'
const MAIN = '/_next/static/chunks/main-app-def.js'
const PAGE = '/_next/static/chunks/app/page-123.js'
const JSON_LD = '<script type="application/ld+json">{"@type":"Organization"}</script>'
const PUSH = '<script>self.__next_f.push([1,"x"])</script>'
const NO_MODULE = '<script src="/_next/static/chunks/polyfills-xyz.js" noModule=""></script>'

const page = [
  '<html><head>',
  `<link rel="preload" as="script" fetchPriority="low" href="${WEBPACK}"/>`,
  '</head><body><main>Hodle</main>',
  NO_MODULE,
  `<script src="${WEBPACK}" id="_R_" async=""></script>`,
  `<script src="${MAIN}" async=""></script>`,
  `<script src="${PAGE}" async=""></script>`,
  JSON_LD,
  PUSH,
  '</body></html>',
].join('')

const run = (html) => transformHtml({ html })

test('removes chunk scripts and lists them in order in the loader', () => {
  const { html, count } = run(page)

  assert.equal(count, 3)
  assert.ok(!html.includes(`<script src="${MAIN}" async="">`))
  assert.ok(html.includes(`[["${WEBPACK}","_R_"],["${MAIN}",null],["${PAGE}",null]]`))
})

test('preserves the webpack runtime id', () => {
  assert.ok(run(page).html.includes(`["${WEBPACK}","_R_"]`))
})

test('removes the webpack preload hint', () => {
  assert.ok(!run(page).html.includes('rel="preload"'))
})

test('is idempotent', () => {
  const first = run(page)
  const second = run(first.html)

  assert.equal(second.html, first.html)
  assert.equal(second.count, 0)
})

test('returns a page without chunk scripts unchanged', () => {
  const plain = `<html><body>${JSON_LD}${PUSH}</body></html>`
  const result = run(plain)

  assert.equal(result.html, plain)
  assert.equal(result.count, 0)
})

test('leaves noModule polyfill, JSON-LD and inline pushes untouched', () => {
  const { html } = run(page)

  assert.ok(html.includes(NO_MODULE))
  assert.ok(html.includes(JSON_LD))
  assert.ok(html.includes(PUSH))
})

test('places the loader before the closing body tag', () => {
  const { html } = run(page)

  assert.ok(html.indexOf('data-defer-hydration') < html.lastIndexOf('</body>'))
})
