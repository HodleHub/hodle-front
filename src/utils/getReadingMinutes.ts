const WORDS_PER_MINUTE = 200

/**
 * Reading time in whole minutes for a raw MDX body. Fences, tags and frontmatter
 * markers are dropped first so a code-heavy article is not counted as prose.
 */
export const getReadingMinutes = ({ body }: { body: string }): number => {
  const prose = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`[\]()|-]/g, ' ')

  const words = prose.split(/\s+/).filter((word) => word.length > 0)

  return Math.max(1, Math.round(words.length / WORDS_PER_MINUTE))
}
