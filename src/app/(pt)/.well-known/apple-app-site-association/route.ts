const APPLE_TEAM_ID = 'GQL28HJXKB'
const IOS_BUNDLE_ID = 'br.com.hodle.app'

export const dynamic = 'force-static'

/**
 * Apple App Site Association for the Hodle iOS app. `webcredentials` lets the
 * app create and use passkeys whose relying party is hodle.com.br (the same
 * passkeys the web uses); without it iOS refuses every passkey request from
 * the app. Served as JSON with no redirect, as Apple's CDN requires.
 */
const association = {
  webcredentials: {
    apps: [`${APPLE_TEAM_ID}.${IOS_BUNDLE_ID}`],
  },
}

export const GET = async (): Promise<Response> =>
  new Response(JSON.stringify(association), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  })
