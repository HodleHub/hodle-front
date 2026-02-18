import Link from 'next/link'
import Image from 'next/image'
import { Github, Zap } from 'lucide-react'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/hodlelogo.png"
                alt="Hodle Logo"
                width={56}
                height={56}
                className="mr-2"
              />
            </Link>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Infraestrutura cripto para empresas.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/HodleHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-foreground transition-colors"
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
                { label: 'Wallets', href: '#wallets' },
                { label: 'Conta PJ', href: '#conta-pj' },
                { label: 'Pagamentos QR', href: '#pagamentos' },
              ],
            },
            {
              title: 'Desenvolvedores',
              links: [
                { label: 'API Reference', href: '#api' },
                { label: 'Documentação', href: '#api' },
                { label: 'SDKs', href: '#api' },
                { label: 'Webhooks', href: '#api' },
              ],
            },
            {
              title: 'Recursos',
              links: [
                { label: 'Blog', href: '/articles' },
                { label: 'Preços', href: '/articles/precos' },
                { label: 'FAQ', href: '#' },
                { label: 'Suporte', href: 'https://t.me/hodle_suporte' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Termos de Serviço', href: '/' },
                { label: 'Privacidade', href: '/' },
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
                      className="text-xs text-gray-400 hover:text-foreground transition-colors"
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Hodle. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-400">Powered by</span>
              <Zap size={12} className="text-yellow-500" />
              <span className="text-xs font-medium text-gray-500">
                Lightning Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
