'use client'

import { useState } from 'react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

// Category Type Definition
type CategoryKey = 'APPAREL' | 'FOOTWEAR' | 'JEWELLERY_WATCH' | 'PERFUMES_SCENTS'

interface Shot {
  title: string
  caption: string
  src: string
  gender: 'Male' | 'Female'
}

// Organised Data Structure according to your requested folder layout
const productionData: Record<CategoryKey, Shot[]> = {
  APPAREL: [
    { title: 'Saree', caption: 'Luxury silk drape · cinematic editorial', src: '/campaigns/apparel/female-1.png', gender: 'Female' },
    { title: 'Shalwar Kameez', caption: 'Tailored suit · draped dupatta', src: '/campaigns/apparel/female-2.png', gender: 'Female' },
    { title: 'Sportswear', caption: 'Performance athletic campaign', src: '/campaigns/apparel/female-3.png', gender: 'Female' },
    { title: 'Streetwear', caption: 'Oversized luxury · high fashion', src: '/campaigns/apparel/female-4.png', gender: 'Female' },
    { title: 'Sherwani', caption: 'Royal-grade · monochrome tones', src: '/campaigns/apparel/male-1.png', gender: 'Male' },
    { title: 'Kurta', caption: 'Fine-thread · modern cut', src: '/campaigns/apparel/male-2.png', gender: 'Male' },
    { title: 'Formal Shirts', caption: 'Executive tailored · structured', src: '/campaigns/apparel/male-3.png', gender: 'Male' },
    { title: 'Hoodies & Streetwear', caption: 'Heavy-knit · technical layers', src: '/campaigns/apparel/male-4.png', gender: 'Male' },
  ],
  FOOTWEAR: [
    { title: 'Heels Collection', caption: 'Luxury heels · high fashion preset', src: '/campaigns/footwear/female-1.png', gender: 'Female' },
    { title: 'Athletic Footwear', caption: 'Performance trainers · dynamic focus', src: '/campaigns/footwear/female-2.png', gender: 'Female' },
    { title: 'Minimalist Sandals', caption: 'Clean aesthetics · premium leather', src: '/campaigns/footwear/female-3.png', gender: 'Female' },
    { title: 'Designer Sneakers', caption: 'Street luxury · structural design', src: '/campaigns/footwear/female-4.png', gender: 'Female' },
    { title: 'Leather Formal', caption: 'Executive oxford · premium craft', src: '/campaigns/footwear/male-1.png', gender: 'Male' },
    { title: 'Custom Sneakers', caption: 'Streetwear culture · bold silhouette', src: '/campaigns/footwear/male-2.png', gender: 'Male' },
    { title: 'Suede Loafers', caption: 'Classic luxury · soft textures', src: '/campaigns/footwear/male-3.png', gender: 'Male' },
    { title: 'Chelsea Boots', caption: 'Sleek profile · raw textured studio', src: '/campaigns/footwear/male-4.png', gender: 'Male' },
  ],
  JEWELLERY_WATCH: [
    { title: 'Diamond Necklace', caption: 'Refraction focus · luxury sheen', src: '/campaigns/jewellery-watch/female-1.png', gender: 'Female' },
    { title: 'Premium Rings', caption: 'Macro gold detailing · studio lighting', src: '/campaigns/jewellery-watch/female-2.png', gender: 'Female' },
    { title: 'Luxury Bangles', caption: 'Traditional craft · editorial drape', src: '/campaigns/jewellery-watch/female-3.png', gender: 'Female' },
    { title: 'Statement Earrings', caption: 'High-fashion composition · elegant', src: '/campaigns/jewellery-watch/female-4.png', gender: 'Female' },
    { title: 'Chrono Watch', caption: 'Craftsmanship · metallic reflections', src: '/campaigns/jewellery-watch/male-1.png', gender: 'Male' },
    { title: 'Minimalist Timepiece', caption: 'Sleek layout · precise spec typography', src: '/campaigns/jewellery-watch/male-2.png', gender: 'Male' },
    { title: 'Classic Leather Watch', caption: 'Executive style · moody environment', src: '/campaigns/jewellery-watch/male-3.png', gender: 'Male' },
    { title: 'Tactical Watch', caption: 'Rugged composition · metallic spec', src: '/campaigns/jewellery-watch/male-4.png', gender: 'Male' },
  ],
  PERFUMES_SCENTS: [
    { title: 'Floral Mist', caption: 'Mist & ripple · lifestyle campaign', src: '/campaigns/perfumes-scents/female-1.png', gender: 'Female' },
    { title: 'Luxury Rose', caption: 'Atmospheric · elegant serif text', src: '/campaigns/perfumes-scents/female-2.png', gender: 'Female' },
    { title: 'Citrus Fresh', caption: 'Bright volumetric light · clean composition', src: '/campaigns/perfumes-scents/female-3.png', gender: 'Female' },
    { title: 'Oud Premium', caption: 'Deep tones · rich textures', src: '/campaigns/perfumes-scents/female-4.png', gender: 'Female' },
    { title: 'Dark Masculine', caption: 'Volumetric light · heavy shadows', src: '/campaigns/perfumes-scents/male-1.png', gender: 'Male' },
    { title: 'Ocean Fresh', caption: 'Crisp aquatic layout · bold hierarchy', src: '/campaigns/perfumes-scents/male-2.png', gender: 'Male' },
    { title: 'Spiced Wood', caption: 'Warm tones · premium bottle rendering', src: '/campaigns/perfumes-scents/male-3.png', gender: 'Male' },
    { title: 'Midnight Scent', caption: 'Intense contrast · luxury art direction', src: '/campaigns/perfumes-scents/male-4.png', gender: 'Male' },
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

        {/* Premium Uppercase Tabs Grid */}
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

        {/* Combined Studio Display Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productionData[activeTab].map((shot, index) => (
            <Reveal key={`${activeTab}-${shot.title}-${index}`} delay={index * 60}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10 bg-neutral-900">
                <img
                  src={shot.src}
                  alt={`${shot.title} — ${shot.caption}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gender Tag for Professional Studio Look */}
                <span className="absolute top-4 left-4 z-10 px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase bg-background/60 backdrop-blur-md text-foreground rounded-full border border-white/5">
                  {shot.gender}
                </span>

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-base font-light text-foreground">{shot.title}</p>
                  <p className="mt-1 text-[11px] font-light text-muted-foreground leading-relaxed">{shot.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
