'use client'

import { useEffect, useState } from 'react'
import { Wordmark } from './wordmark'

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'in' | 'out'>('in')

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase('out'), 2800)
    const doneTimer = setTimeout(() => onComplete(), 3900)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === 'out' ? 'pointer-events-none opacity-0 blur-xl' : 'opacity-100'
      }`}
    >
      {/* micro-flicker graphite texture */}
      <div className="animate-flicker absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(127,166,224,0.12),transparent_55%)]" />
        <div className="animate-beam absolute -left-1/4 top-0 h-[140%] w-1/2 bg-[linear-gradient(105deg,transparent,rgba(255,255,255,0.06),transparent)] blur-2xl" />
      </div>

      {/* volumetric light wipe on exit */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(100deg,transparent_20%,rgba(255,255,255,0.12)_50%,transparent_80%)] transition-transform duration-[1100ms] ease-in-out ${
          phase === 'out' ? 'translate-x-[120%]' : '-translate-x-[120%]'
        }`}
      />

      <div className="relative flex flex-col items-center">
        <div className="animate-reveal">
          <Wordmark className="text-glow text-5xl text-foreground sm:text-6xl md:text-7xl" showStudio />
        </div>
        <p
          className="mt-8 text-xs font-light uppercase tracking-[0.3em] text-muted-foreground opacity-0 sm:text-sm"
          style={{ animation: 'reveal-up 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards' }}
        >
          Intelligence That Builds Brands
        </p>
      </div>
    </div>
  )
}
