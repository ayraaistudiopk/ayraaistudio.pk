'use client'

import { useState, useEffect } from 'react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

// Data ko clean kar diya hai, titles aur captions hata diye hain
const posters = [
  { id: 1, src: '/commercial/poster-watch.png' },
  { id: 2, src: '/commercial/poster-perfume.png' },
  { id: 3, src: '/commercial/poster-hoodie.png' },
]

const sliderBanners = [
  { id: 1, src: '/commercial/banner-1.png', alt: 'AYRA AI Studio Commercial Banner 1' },
  { id: 2, src: '/commercial/banner-2.png', alt: 'AYRA AI Studio Commercial Banner 2' },
  { id: 3, src: '/commercial/banner-3.png', alt: 'AYRA AI Studio Commercial Banner 3' },
  { id: 4, src: '/commercial/banner-4.png', alt: 'AYRA AI Studio Commercial Banner 4' },
]

export function CommercialShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderBanners.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="commercial" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Commercial Creative Suite"
          title="Grid-perfect advertising. Flawless composition."
          description="A hyper-clean studio suite built on heavy typography integration, crisp product layouts, and bold visual hierarchy."
        />

        {/* Clean & Premium product posters without text overlay */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posters.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10 bg-neutral-900">
                <img
                  src={p.src || '/placeholder.svg'}
                  alt={`AYRA AI Studio Commercial Poster ${p.id}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual smooth dim overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </figure>
            </Reveal>
          ))}
        </div>

        {/* 16:9 Premium Carousel Slider */}
        <div className="mt-5">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
              
              {/* Slides */}
              <div 
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {sliderBanners.map((banner) => (
                  <div key={banner.id} className="h-full w-full flex-shrink-0">
                    <img
                      src={banner.src}
                      alt={banner.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
                {sliderBanners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 transition-all rounded-full ${
                      currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
