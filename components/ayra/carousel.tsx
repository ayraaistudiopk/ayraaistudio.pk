'use client'

import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export type Shot = {
  title: string
  caption: string
  src: string
}

export function Carousel({ label, shots }: { label: string; shots: Shot[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div className="mt-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-lg font-light uppercase tracking-[0.3em] text-foreground">
          {label}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label={`Scroll ${label} left`}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label={`Scroll ${label} right`}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {shots.map((shot) => (
          <figure
            key={shot.title}
            className="group relative aspect-[3/4] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[46%] lg:w-[30%]"
          >
            <img
              src={shot.src || '/placeholder.svg'}
              alt={`${shot.title} — ${shot.caption}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-lg font-light text-foreground">{shot.title}</p>
              <p className="mt-1 text-xs font-light text-muted-foreground">{shot.caption}</p>
            </figcaption>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </figure>
        ))}
      </div>
    </div>
  )
}
