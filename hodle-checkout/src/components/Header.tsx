'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, User, ChevronsDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-white border-b border-yellow-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/hodlelogo.png" alt="Hodle Logo" width={124} height={124} className="mr-2" />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-yellow-500 px-3 py-2 text-sm font-medium">
              Início
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-yellow-500 px-3 py-2 text-sm font-medium">
              Sobre
            </Link>
            <Link href="/articles" className="text-gray-600 hover:text-yellow-500 px-3 py-2 text-sm font-medium">
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
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-yellow-50">
              Início
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-yellow-50">
              Sobre
            </Link>
            <Link href="/articles" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-yellow-50">
              Blog
            </Link>
          
          </div>
        </div>
      )}
    </header>
  )
} 