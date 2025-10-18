"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ExchangeAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex h-96 w-full items-center justify-center overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-30" />
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-orange-200/20 to-transparent" />
      </div>

      {/* USDT tokens moving left to right */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="animate-[slideRight_4s_ease-in-out_infinite]">
          <div className="flex items-center gap-8">
            <USDTIcon />
            <USDTIcon className="opacity-70" />
            <USDTIcon className="opacity-40" />
          </div>
        </div>
      </div>

      {/* PIX tokens moving right to left */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="animate-[slideLeft_4s_ease-in-out_infinite]">
          <div className="flex items-center gap-8">
            <PIXIcon className="opacity-40" />
            <PIXIcon className="opacity-70" />
            <PIXIcon />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <div className="absolute inset-0 animate-pulse rounded-3xl bg-orange-200/30 blur-3xl" />
        <div className="relative rounded-2xl bg-white/60 backdrop-blur-sm p-4 shadow-xl ring-2 ring-orange-200">
          <Image
            src="/h-logo.png"
            alt="H Logo"
            width={120}
            height={120}
            className="h-28 w-28"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-orange-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function USDTIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`h-16 w-16 ${className}`}>
      <Image src="/usdt.svg" alt="USDT" width={64} height={64} className="h-full w-full drop-shadow-lg" />
    </div>
  );
}

function PIXIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`h-16 w-16 ${className}`}>
      <Image src="/pix.svg" alt="PIX" width={64} height={64} className="h-full w-full drop-shadow-lg rounded-lg" />
    </div>
  );
}
