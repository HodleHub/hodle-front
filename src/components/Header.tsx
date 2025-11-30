'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, User, ChevronsDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/Button'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-white border-b border-yellow-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              width={40}
              height={40}
              src="/h-logo.svg"
              alt="Hodle logo"
              className="w-10 h-10 mr-[-6px]"
            />
            <span className={`${poppins.className} text-2xl font-bold tracking-tight text-gray-900`}>
              ODLE
            </span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-orange-600 hover:text-orange-700 px-3 py-2 text-xl font-bold font-[var(--font-archivo-black)]">
              Início
            </Link>
            <Link href="/articles/precos" className="text-orange-600 hover:text-orange-700 px-3 py-2 text-xl font-bold font-[var(--font-archivo-black)]">
              Preços e Taxas
            </Link>
            <Link href="/articles" className="text-orange-600 hover:text-orange-700 px-3 py-2 text-xl font-bold font-[var(--font-archivo-black)]">
              Blog
            </Link>
          </nav>
          
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-yellow-100">
            <Link href="/" className="block px-3 py-2 rounded-md text-xl font-bold text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-[var(--font-archivo-black)]">
              Início
            </Link>
            <Link href="/articles/precos" className="block px-3 py-2 rounded-md text-xl font-bold text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-[var(--font-archivo-black)]">
              Preços e Taxas
            </Link>
            <Link href="/articles" className="block px-3 py-2 rounded-md text-xl font-bold text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-[var(--font-archivo-black)]">
              Blog
            </Link>
          
          </div>
        </div>
      )}
    </header>
  )
} 