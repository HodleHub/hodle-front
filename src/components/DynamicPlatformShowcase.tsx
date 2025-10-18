"use client"

import dynamic from 'next/dynamic'

const DynamicPlatformShowcase = dynamic(() => import('./PlatformShowcase'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full" />, 
})

export default DynamicPlatformShowcase
