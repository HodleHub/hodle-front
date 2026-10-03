import type { ReactNode } from 'react'
import SiteDocument from '../siteDocument'

export { metadata, viewport } from '../siteDocument'

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <SiteDocument language="pt-BR">{children}</SiteDocument>
}
