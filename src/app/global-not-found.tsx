import SiteDocument from './siteDocument'
import NotFound from './(pt)/not-found'

export { metadata } from './(pt)/not-found'
export { viewport } from './siteDocument'

// Multiple root layouts have no shared layout for unmatched URLs. This boundary
// returns a complete document while keeping the site's existing recovery page.
export default function GlobalNotFound() {
  return (
    <SiteDocument language="pt-BR">
      <NotFound />
    </SiteDocument>
  )
}
