import Link from 'next/link'
import Image from 'next/image'
import { Bitcoin, Github, Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/hodlelogo.png"
                alt="Hodle Logo"
                width={84}
                height={84}
                className="mr-2"
              />
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Plataforma brasileira de compra e venda de Bitcoin via Lightning
              Network, Liquid Network e On-chain.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/HodleHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Comprar Bitcoin
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/precos"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Preços e Taxas
                </Link>
              </li>
              <li>
                <a
                  href="https://lightning.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Lightning Network
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/articles"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Hodle. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-1">Powered by</span>
              <Zap size={16} className="text-yellow-500 mr-1" />
              <span className="text-sm font-medium text-gray-700">
                Lightning Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
