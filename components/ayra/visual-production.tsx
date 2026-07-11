'use client'

import { useState } from 'react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type CategoryKey = 'APPAREL' | 'FOOTWEAR' | 'JEWELLERY_WATCH' | 'PERFUMES_SCENTS'

interface Shot {
  src: string
}

// Data array ko clean aur simple kar diya hai
const productionData: Record<CategoryKey, Shot[]> = {
  APPAREL: [
    { src: '/campaigns/apparel/female-1.png' },
    { src: '/campaigns/apparel/female-2.png' },
    { src: '/campaigns/apparel/female-3.png' },
    { src: '/campaigns/apparel/female-4.png' },
    { src: '/campaigns/apparel/male-1.png' },
    { src: '/campaigns/apparel/male-2.png' },
    { src: '/campaigns/apparel/male-3.png' },
    { src: '/campaigns/apparel/male-4.png' },
  ],
  FOOTWEAR: [
    { src: '/campaigns/footwear/female-1.png' },
    { src: '/campaigns/footwear/female-2.png' },
    { src: '/campaigns/footwear/female-3.png' },
    { src: '/campaigns/footwear/female-4.png' },
    { src: '/campaigns/footwear/male-1.png' },
    { src: '/campaigns/footwear/male-2.png' },
    { src: '/campaigns/footwear/male-3.png' },
    { src: '/campaigns/footwear/male-4.png' },
  ],
  JEWELLERY_WATCH: [
    { src: '/campaigns/jewellery-watch/female-1.png' },
    { src: '/campaigns/jewellery-watch/female-2.png' },
    { src: '/campaigns/jewellery-watch/female-3.png' },
    { src: '/campaigns/jewellery-watch/female-4.png' },
    { src: '/campaigns/jewellery-watch/male-1.png' },
    { src: '/campaigns/jewellery-watch/male-2.png' },
    { src: '/campaigns/jewellery-watch/male-3.png' },
    { src: '/campaigns/jewellery-watch/male-4.png' },
  ],
  PERFUMES_SCENTS: [
    { src: '/campaigns/perfumes-scents/female-1.png' },
    { src: '/campaigns/perfumes-scents/female-2.png' },
    { src: '/campaigns/perfumes-scents/female-3.png' },
    { src: '/campaigns/perfumes-scents/female-4.png' },
    { src: '/campaigns/perfumes-scents/male-1.png' },
    { src: '/campaigns/perfumes-scents/male-2.png' },
    { src: '/campaigns/perfumes-scents/male-3.png' },
    { src: '/campaigns/perfumes-scents/male-4.png' },
  ]
}

const tabs = [
  { key: 'APPAREL', label: 'APPAREL' },
  { key: 'FOOTWEAR', label: 'FOOTWEAR' },
  { key: 'JEWELLERY_WATCH', label: 'JEWELLERY & WATCH' },
  { key: 'PERFUMES_SCENTS', label: 'PERFUMES & SCENTS' },
] as const

export function VisualProduction() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('APPAREL')

  return (
    <section id="visual" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Flagship — AI Visual Production"
          title="Editorial campaigns, engineered by intelligence."
          description="Elite AI-powered photoshoots produced at scale — flawless fabrics, cinematic lighting, and luxury art direction across every category."
        />

        {/* Premium Uppercase Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 border-b border-white/5 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 text-xs font-medium tracking-wider transition-all duration-300 rounded-full border ${
                activeTab === tab.key
                  ? 'bg-white text-background border-white'
                  : 'bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pure Clean Visual Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productionData[activeTab].map((shot, index) => (
            <Reveal key={`${activeTab}-${index}`} delay={index * 50}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10 bg-neutral-900">
                <img
                  src={shot.src}
                  alt={`AYRA AI Studio Campaign Showcase ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual smooth dim overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
