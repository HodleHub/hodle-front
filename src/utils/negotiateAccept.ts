export type AcceptPreference = 'MARKDOWN' | 'HTML' | 'UNSUPPORTED'

type MediaRange = {
  type: string
  subtype: string
  quality: number
}

const DEFAULT_QUALITY = 1

const parseQuality = (parameters: string[]): number => {
  const qParameter = parameters.find((parameter) =>
    parameter.trim().toLowerCase().startsWith('q='),
  )

  if (!qParameter) {
    return DEFAULT_QUALITY
  }

  const quality = Number.parseFloat(qParameter.trim().slice(2))

  if (Number.isNaN(quality)) {
    return DEFAULT_QUALITY
  }

  return Math.min(Math.max(quality, 0), 1)
}

const parseMediaRange = (rawRange: string): MediaRange | undefined => {
  const [rawType, ...parameters] = rawRange.split(';')
  const [type, subtype] = rawType.trim().toLowerCase().split('/')

  if (!type || !subtype) {
    return undefined
  }

  return { type, subtype, quality: parseQuality(parameters) }
}

const matchesMarkdown = (range: MediaRange): boolean =>
  range.type === 'text' && range.subtype === 'markdown'

const matchesHtml = (range: MediaRange): boolean =>
  (range.type === 'text' && range.subtype === 'html') ||
  (range.type === 'application' && range.subtype === 'xhtml+xml')

const matchesWildcard = (range: MediaRange): boolean =>
  range.subtype === '*' && (range.type === '*' || range.type === 'text')

const bestQuality = (
  ranges: MediaRange[],
  matches: (range: MediaRange) => boolean,
): number =>
  ranges
    .filter(matches)
    .reduce((best, range) => Math.max(best, range.quality), 0)

/**
 * Resolves which representation an `Accept` header asks for, honouring
 * q-values as required by RFC 9110 and the acceptmarkdown.com checks.
 *
 * A wildcard (`* / *` or `text/*`) resolves to HTML so browsers and generic
 * crawlers keep the visual page.
 */
export const negotiateAccept = (accept: string | null): AcceptPreference => {
  if (!accept || accept.trim() === '') {
    return 'HTML'
  }

  const ranges = accept
    .split(',')
    .map(parseMediaRange)
    .filter((range): range is MediaRange => range !== undefined)

  if (ranges.length === 0) {
    return 'HTML'
  }

  const markdown = bestQuality(ranges, matchesMarkdown)
  const html = Math.max(
    bestQuality(ranges, matchesHtml),
    bestQuality(ranges, matchesWildcard),
  )

  if (markdown === 0 && html === 0) {
    return 'UNSUPPORTED'
  }

  if (markdown > html) {
    return 'MARKDOWN'
  }

  return 'HTML'
}
