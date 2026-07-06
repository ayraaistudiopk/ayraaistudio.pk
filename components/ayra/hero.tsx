'use client'

import { ArrowUpRight, Sparkles } from 'lucide-react'
import { MagneticButton } from './magnetic-button'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI Infrastructure Studio
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 text-balance font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Intelligence That <span className="text-glow italic">Builds Brands.</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-light text-muted-foreground sm:text-xl">
            We don&apos;t follow trends. We build the systems behind them.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground/80">
            AYRA AI Studio operates at the intersection of creativity, engineering, and artificial
            intelligence — building intelligent systems that help modern brands grow, automate, and
            dominate.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="#contact" className="px-7 py-3.5">
              Book a Strategy Call
            </MagneticButton>
            <MagneticButton href="#visual" variant="ghost" className="px-7 py-3.5">
              Explore Our Work
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={560}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            <span>Creative Systems</span>
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            <span>Automation-First</span>
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            <span>Engineered Scale</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
