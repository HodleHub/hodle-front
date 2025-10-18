"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-orange-200 py-4 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              width={40}
              height={40}
              src="/h-logo.png"
              alt="Hodle logo"
              className="w-10 h-10 mr-[-6px]"
            />
            <span className={`${poppins.className} text-2xl font-bold tracking-tight text-gray-900`}>
              ODLE
            </span>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <nav
            className={`${isOpen ? "block" : "hidden"
              } md:block absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 z-50 shadow-lg md:shadow-none`}
          >
            <button
              className="md:hidden absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <li>
                <Link href="#features" className="text-gray-700 hover:text-orange-600 font-medium">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-700 hover:text-orange-600 font-medium">
                  Como funciona?
                </Link>
              </li>
              <li>
                <Link
                  href="https://hodle.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30"
                >
                  Comece agora
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}