import { GlossaryTerm } from '../types/glossary'

const normalizeLetter = (term: string): string => {
  const first = term.normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase()

  return first
}

export type GroupedTerms = Record<string, GlossaryTerm[]>

export const groupGlossaryByLetter = (terms: GlossaryTerm[]): GroupedTerms => {
  const groups: GroupedTerms = {}

  for (const term of terms) {
    const letter = normalizeLetter(term.term)

    if (!groups[letter]) {
      groups[letter] = []
    }

    groups[letter].push(term)
  }

  return groups
}