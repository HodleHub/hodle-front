import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { Button } from './ui/Button'
import { Check } from 'lucide-react'

export default function QRCodePaymentsSection() {
  return (
    <AnimatedSection delay={0.15}>
      <section className="w-full max-w-6xl mb-24 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <div className="mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                API PAYMENTS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                QR Payments
              </h2>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  PIX, QR 3.0, Plin, Yape, QR Bolivia and Colombia with Bre-b
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Support for multiple settlement methods to meet your specific business needs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Access every QR payment system through one seamless integration
                </span>
              </li>
            </ul>
            <Button className="bg-orange-100 hover:bg-orange-200 text-gray-900 px-6 py-3 rounded-lg transition-colors">
              More info
            </Button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
                <Image
                  src="/qr-code.svg"
                  alt="QR Code"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}



