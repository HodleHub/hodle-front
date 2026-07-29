import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react'

export function Footer() {
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
              Infraestrutura cripto para empresas.
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
              title: 'Produtos',
              links: [
                { label: 'Compra e Venda', href: '#compra-venda' },
                { label: 'Wallets', href: '/wallet-auto-custodial' },
                { label: 'Conta PJ', href: '#conta-pj' },
                { label: 'Pagamentos QR', href: '#pagamentos' },
                { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
              ],
            },
            {
              title: 'Desenvolvedores',
              links: [
                { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
                { label: 'Documentação', href: 'https://docs.hodle.com.br' },
                { label: 'API Reference', href: 'https://docs.hodle.com.br' },
                {
                  label: 'Falar com vendas',
                  href: 'https://api.whatsapp.com/send?phone=5511960000445',
                },
              ],
            },
            {
              title: 'Recursos',
              links: [
                { label: 'Blog', href: '/articles' },
                { label: 'Real onchain', href: '/real-onchain' },
                { label: 'Preços', href: '/articles/precos' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Suporte', href: 'https://api.whatsapp.com/send?phone=5511960000445' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Termos de Serviço', href: '/termos' },
                { label: 'Privacidade', href: '/privacidade' },
                { label: 'Cookies', href: '/cookies' },
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
            A Hodle opera como plataforma, API e camada de infraestrutura
            fintech, oferecendo um painel e integrações que viabilizam a compra
            e venda de ativos digitais, pagamentos com stablecoins, wallets
            auto-custodiais e fluxos de emissão de cartão por meio de
            integrações de terceiros. A Hodle não é um banco, não é instituição
            financeira, não emite moeda eletrônica, não emite cartões
            diretamente e não custodia fundos ou ativos de clientes — nas
            wallets auto-custodiais, as chaves privadas permanecem sob controle
            exclusivo do usuário. O fluxo de fundos regulados e os serviços
            financeiros são conduzidos por parceiros licenciados e/ou regulados.
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hodle. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
