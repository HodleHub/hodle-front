import { HODLE_CONTACT_EMAIL } from './hodleContactEmail'

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
    email: HODLE_CONTACT_EMAIL,
    telephone: '+55-11-96000-0445',
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/contato',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: HODLE_CONTACT_EMAIL,
    telephone: '+55-11-96000-0445',
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/contato',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'technical support',
    email: HODLE_CONTACT_EMAIL,
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/desenvolvedores',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'privacy',
    email: HODLE_CONTACT_EMAIL,
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/privacidade',
  },
  {
    '@type': 'ContactPoint',
    contactType: 'security',
    email: HODLE_CONTACT_EMAIL,
    areaServed: ['BR', 'US'],
    availableLanguage: ['Portuguese', 'English'],
    url: 'https://hodle.com.br/contato',
  },
]
