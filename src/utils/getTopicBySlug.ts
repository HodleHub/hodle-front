import { TopicPage } from '../types/topic'
import { topics } from '../content/topics/topics'

export const getTopicBySlug = ({ slug }: { slug: string }): TopicPage | null =>
  topics.find((topic) => topic.slug === slug) ?? null
