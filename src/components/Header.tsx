'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { ButtonShadow } from './ui/ButtonShadow'

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511960000445'

const navLinks = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'API', href: '#api' },
  { label: 'Pagamentos', href: '#pagamentos' },
  { label: 'Conta PJ', href: '#conta-pj' },
  { label: 'Parceiros', href: '#parceiros' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" aria-label="Hodle">
            <Image
              width={36}
              height={36}
              src="/h-logo.svg"
              alt="Hodle logo"
              className="w-9 h-9 -mr-3"
            />
            <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em] text-foreground">
              odle
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-foreground text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com vendas
            </Link>
            <Link href="https://app.hodle.com.br" target="_blank">
              <ButtonShadow size="sm">Abrir App</ButtonShadow>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-foreground hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-foreground hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com vendas
            </Link>
            <div className="pt-3">
              <Link href="https://app.hodle.com.br" target="_blank">
                <ButtonShadow size="sm" className="w-full">
                  Abrir App
                </ButtonShadow>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
