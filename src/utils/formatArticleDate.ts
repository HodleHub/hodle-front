const formatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  // Frontmatter dates are bare `YYYY-MM-DD`, so they parse as UTC midnight.
  // Formatting in the local zone would render the previous day west of GMT.
  timeZone: 'UTC',
})

/**
 * Compact byline date: `24 mar 2026`.
 */
export const formatArticleDate = ({ date }: { date: string }): string =>
  formatter.format(new Date(date)).replace(/\./g, '').replace(/ de /g, ' ')
