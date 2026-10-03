import type { ReactNode } from 'react'
import SiteDocument from '../siteDocument'

export { metadata, viewport } from '../siteDocument'

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument language="en">{children}</SiteDocument>
}
