import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/h-logo.png" alt="Hodle" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Hodle</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://twitter.com/hodle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          &copy; 2025 Hodle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}