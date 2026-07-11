'use client'

import { useState, useEffect } from 'react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const posters = [
  { title: 'Watch Posters', caption: 'Sleek layout · precise spec typography', src: '/commercial/poster-watch.png' },
  { title: 'Perfume Posters', caption: 'Atmospheric · elegant serif text', src: '/commercial/poster-perfume.png' },
  { title: 'Shirt & Hoodie Posters', caption: 'High-fashion text · raw textures', src: '/commercial/poster-hoodie.png' },
]

// Aap ke 4 naye banners ka data
const sliderBanners = [
  { id: 1, src: '/banner-1.png', alt: 'AYRA AI Studio Commercial Banner 1' },
  { id: 2, src: '/banner-2.png', alt: 'AYRA AI Studio Commercial Banner 2' },
  { id: 3, src: '/banner-3.png', alt: 'AYRA AI Studio Commercial Banner 3' },
  { id: 4, src: '/banner-4.png', alt: 'AYRA AI Studio Commercial Banner 4' },
]

export function CommercialShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatic slide change every 3 seconds
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

        {/* Premium product posters (Yeh bilkul pehle jaisa hi hai) */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posters.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
                <img
                  src={p.src || '/placeholder.svg'}
                  alt={`${p.title} — ${p.caption}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-light text-foreground">{p.title}</p>
                  <p className="mt-1 text-xs font-light text-muted-foreground">{p.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* New 16:9 Premium Carousel Slider */}
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

              {/* Gradient Overlay for Sleek Premium Look */}
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
