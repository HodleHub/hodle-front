"use client";

import dynamic from 'next/dynamic';

const PlatformShowcase = dynamic(() => import('./PlatformShowcase'), {
  ssr: false,
  loading: () => <div className="h-[700px] w-full bg-gray-100 animate-pulse" />,
});

export default PlatformShowcase;
