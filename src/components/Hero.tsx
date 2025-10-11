import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Hodle
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Securely hold, manage, and grow your stablecoins with effortless global access.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Get Started
          </a>
          <a
            href="#demo"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            View Demo
          </a>
        </div>
        {/* Logo */}
        <div className="mt-12 mx-auto max-w-xs">
          <Image
            src="/h-logo.png"
            alt="Hodle Logo"
            width={200}
            height={100}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}