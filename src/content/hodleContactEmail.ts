/**
 * Public contact address the site publishes (FAQ, /contato, legal pages,
 * schema.org and llms.txt). It is the mailbox that actually receives mail
 * (Chatwoot inbox 2 via the inbox subdomain); the root-domain `contato@`
 * alias bounces. Same value as `HODLE_CONTACT_EMAIL` in the Hodler monorepo.
 */
export const HODLE_CONTACT_EMAIL = 'contato@inbox.hodle.com.br' as const
