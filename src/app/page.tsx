import type { Metadata } from 'next'
import './landingV2.css'
import { Hero } from '../components/landingV2/Hero'
import { NetworkGrid } from '../components/landingV2/NetworkGrid'
import { Stats } from '../components/landingV2/Stats'
import { MiddleLayer } from '../components/landingV2/MiddleLayer'
import { Products } from '../components/landingV2/Products'
import { FlowBuilder } from '../components/landingV2/FlowBuilder'
import { Supported } from '../components/landingV2/Supported'
import { Steps } from '../components/landingV2/Steps'
import { Faq } from '../components/landingV2/Faq'
import { ClosingCta } from '../components/landingV2/ClosingCta'

export const metadata: Metadata = {
  title: {
    absolute: 'Receba em Pix, guarde em dólar, pague em stablecoin | Hodle',
  },
  description:
    'A infraestrutura que conecta Pix, dólar e stablecoins, via API ou plataforma. Flow Builder com as chamadas exatas da API Hodle.',
  alternates: {
    canonical: 'https://hodle.com.br',
  },
}

export default function HomePage() {
  return (
    <div className="lv2 bg-white">
      <Hero />
      <NetworkGrid />
      <Stats />
      <MiddleLayer />
      <Products />
      <FlowBuilder />
      <Supported />
      <Steps />
      <Faq />
      <ClosingCta />
    </div>
  )
}
