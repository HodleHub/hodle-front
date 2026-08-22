export type InfoPageRow = {
  label: string
  value: string
}

export type InfoPageLink = {
  label: string
  href: string
  description: string
}

export type InfoPageSectionKind = 'PROSE' | 'BULLETS' | 'ROWS' | 'LINKS'

export type InfoPageSection = {
  id: string
  kind: InfoPageSectionKind
  heading: string
  body: string[]
  bullets: string[]
  rows: InfoPageRow[]
  links: InfoPageLink[]
}

export type InfoPageCta = {
  heading: string
  body: string
  links: InfoPageLink[]
}

export type InfoPage = {
  slug: string
  kicker: string
  title: string
  h1: string
  description: string
  updatedAt: string
  intro: string[]
  sections: InfoPageSection[]
  cta: InfoPageCta
}
