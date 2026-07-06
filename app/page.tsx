'use client'

import { useState } from 'react'
import { Preloader } from '@/components/ayra/preloader'
import { Ambient } from '@/components/ayra/ambient'
import { Navbar } from '@/components/ayra/navbar'
import { Hero } from '@/components/ayra/hero'
import { About } from '@/components/ayra/about'
import { WhatWeBuild } from '@/components/ayra/what-we-build'
import { VisualProduction } from '@/components/ayra/visual-production'
import { CommercialShowcase } from '@/components/ayra/commercial-showcase'
import { WhyAyra } from '@/components/ayra/why-ayra'
import { Process } from '@/components/ayra/process'
import { FinalCta } from '@/components/ayra/final-cta'
import { Footer } from '@/components/ayra/footer'

export default function Page() {
  const [ready, setReady] = useState(false)

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      <Ambient />
      <div
        className={`relative transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhatWeBuild />
          <VisualProduction />
          <CommercialShowcase />
          <WhyAyra />
          <Process />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  )
}
