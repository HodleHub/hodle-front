export type OrganizationContactPoint = {
  '@type': 'ContactPoint'
  contactType: string
  email: string
  telephone?: string
  areaServed: string[]
  availableLanguage: string[]
  url?: string
}

/**
 * The `contactPoint` block of the Organization JSON-LD, shared by the root
 * layout and by `/contato` so both publish the same channels.
 */
export const organizationContactPoints: OrganizationContactPoint[] = [
  {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contato@hodle.com.br',
    telephone: '+55-11-96000-0445',
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/contato',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'contato@hodle.com.br',
    telephone: '+55-11-96000-0445',
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/contato',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'technical support',
    email: 'contato@hodle.com.br',
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/desenvolvedores',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'privacy',
    email: 'contato@hodle.com.br',
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/privacidade',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'security',
    email: 'contato@hodle.com.br',
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/contato',
  },
]
