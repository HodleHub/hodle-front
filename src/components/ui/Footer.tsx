'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Github } from 'lucide-react'

export function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en/')

  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center" aria-label="Hodle">
              <Image
                src="/new_logo_hodle.png"
                alt="Hodle"
                width={868}
                height={257}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              {isEnglish
                ? 'Crypto infrastructure for businesses.'
                : 'Infraestrutura cripto para empresas.'}
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/HodleHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {[
            {
              title: isEnglish ? 'Products' : 'Produtos',
              links: [
                {
                  label: isEnglish ? 'Buy & Sell' : 'Compra e Venda',
                  href: '/comprar-bitcoin-com-pix',
                },
                { label: 'Wallets', href: '/wallet-auto-custodial' },
                { label: isEnglish ? 'Business account' : 'Conta PJ', href: '#conta-pj' },
                { label: isEnglish ? 'QR payments' : 'Pagamentos QR', href: '#pagamentos' },
                {
                  label: isEnglish ? 'Pay Pix with USDT' : 'Pagar Pix com USDT',
                  href: '/pagar-pix-com-usdt',
                },
                {
                  label: isEnglish ? 'Lightning to Pix' : 'Lightning para Pix',
                  href: '/lightning-para-pix',
                },
                {
                  label: isEnglish ? 'Buy USDT with Pix' : 'Comprar USDT com Pix',
                  href: '/comprar-usdt-com-pix',
                },
                { label: isEnglish ? 'Real on-chain' : 'Real onchain', href: '/real-onchain' },
                {
                  label: isEnglish
                    ? 'Receive Pix in stablecoin'
                    : 'Receber Pix em stablecoin',
                  href: '/receber-pix-em-stablecoin',
                },
              ],
            },
            {
              title: isEnglish ? 'Developers' : 'Desenvolvedores',
              links: [
                {
                  label: isEnglish ? 'Stablecoin Pix API' : 'API Pix stablecoin',
                  href: '/api-pix-stablecoin',
                },
                {
                  label: isEnglish ? 'For AI agents' : 'Para agentes de IA',
                  href: '/para-agentes-de-ia',
                },
                {
                  label: isEnglish ? 'Documentation' : 'Documentação',
                  href: 'https://docs.hodle.com.br',
                },
                { label: 'API Reference', href: 'https://docs.hodle.com.br' },
                {
                  label: isEnglish ? 'Talk to sales' : 'Falar com vendas',
                  href: 'https://api.whatsapp.com/send?phone=5511960000445',
                },
              ],
            },
            {
              title: isEnglish ? 'Resources' : 'Recursos',
              links: [
                { label: isEnglish ? 'Glossary' : 'Glossário', href: '/glossario' },
                { label: isEnglish ? 'Pricing' : 'Preços', href: '/precos' },
                { label: 'FAQ', href: '/faq' },
                {
                  label: isEnglish ? 'Support' : 'Suporte',
                  href: 'https://api.whatsapp.com/send?phone=5511960000445',
                },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: isEnglish ? 'Legal Center' : 'Central Legal', href: '/legal' },
                {
                  label: isEnglish ? 'Terms of Service' : 'Termos de Serviço',
                  href: '/termos',
                },
                { label: isEnglish ? 'Privacy' : 'Privacidade', href: '/privacidade' },
                { label: 'Cookies', href: '/cookies' },
                { label: isEnglish ? 'AI usage' : 'Uso por IA', href: '/ai' },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold text-foreground mb-4 text-xs tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-gray-500 hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="mb-6 max-w-[900px] text-[11px] leading-[1.7] text-gray-500">
            {isEnglish
              ? "Hodle operates as a platform, API, and fintech infrastructure layer, providing a dashboard and integrations that enable the purchase and sale of digital assets, stablecoin payments, self-custodial wallets, and card issuance flows through third-party integrations. Hodle is not a bank or financial institution, does not issue electronic money, does not issue cards directly, and does not custody customer funds or assets — in self-custodial wallets, private keys remain under the user's exclusive control. Regulated funds flows and financial services are handled by licensed and/or regulated partners."
              : 'A Hodle opera como plataforma, API e camada de infraestrutura fintech, oferecendo um painel e integrações que viabilizam a compra e venda de ativos digitais, pagamentos com stablecoins, wallets auto-custodiais e fluxos de emissão de cartão por meio de integrações de terceiros. A Hodle não é um banco, não é instituição financeira, não emite moeda eletrônica, não emite cartões diretamente e não custodia fundos ou ativos de clientes — nas wallets auto-custodiais, as chaves privadas permanecem sob controle exclusivo do usuário. O fluxo de fundos regulados e os serviços financeiros são conduzidos por parceiros licenciados e/ou regulados.'}
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hodle.{' '}
            {isEnglish ? 'All rights reserved.' : 'Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
