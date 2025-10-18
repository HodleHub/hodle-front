"use client";

import dynamic from 'next/dynamic';

const HowItWorks = dynamic(() => import('./HowItWorks'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse" />,
});

export default HowItWorks;
