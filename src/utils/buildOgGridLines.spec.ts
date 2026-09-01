import { expect, test } from 'vitest'
import { buildOgGridLines } from './buildOgGridLines'
import { getOgKickerFontSize } from './getOgKickerFontSize'

const size = { width: 1200, height: 630 }

test('every grid line stays inside the card', () => {
  const lines = buildOgGridLines(size)

  expect(lines.length).toBeGreaterThan(0)

  lines.forEach((line) => {
    expect(line.left).toBeGreaterThanOrEqual(0)
    expect(line.top).toBeGreaterThanOrEqual(0)
    expect(line.left).toBeLessThanOrEqual(size.width + 120)
    expect(line.top).toBeLessThanOrEqual(size.height + 120)
  })
})

test('fully transparent lines are dropped instead of drawn', () => {
  const lines = buildOgGridLines(size)

  lines.forEach((line) => {
    expect(line.opacity).toBeGreaterThan(0)
    expect(line.opacity).toBeLessThanOrEqual(0.06)
  })
})

test('lines fade as they move away from the mask centre', () => {
  const lines = buildOgGridLines(size)
  const vertical = lines.filter((line) => line.height === size.height)

  const centre = vertical.reduce((closest, line) =>
    Math.abs(line.left - size.width / 2) < Math.abs(closest.left - size.width / 2)
      ? line
      : closest,
  )

  const edge = vertical.reduce((furthest, line) =>
    Math.abs(line.left - size.width / 2) > Math.abs(furthest.left - size.width / 2)
      ? line
      : furthest,
  )

  expect(centre.opacity).toBeGreaterThan(edge.opacity)
})

test('grid line keys are unique', () => {
  const lines = buildOgGridLines(size)
  const keys = new Set(lines.map((line) => line.key))

  expect(keys.size).toBe(lines.length)
})

test('kicker type size steps down as the kicker gets longer', () => {
  const short = getOgKickerFontSize({ kicker: 'Regulação de ativos virtuais no Brasil' })
  const long = getOgKickerFontSize({
    kicker: 'Chaves sob controle do usuário e o que isso muda na arquitetura',
  })
  const veryLong = getOgKickerFontSize({
    kicker:
      'Chaves sob controle do usuário e o que isso muda na arquitetura de um produto financeiro inteiro',
  })

  expect(short).toBe(72)
  expect(long).toBe(60)
  expect(veryLong).toBe(50)
})
