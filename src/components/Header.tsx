"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-orange-200 py-4 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
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
              className="text-orange-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="text-xl font-bold text-gray-800">Hodle</span>
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
            className={`${
              isOpen ? "block" : "hidden"
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
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-700 hover:text-orange-600 font-medium">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-700 hover:text-orange-600 font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}