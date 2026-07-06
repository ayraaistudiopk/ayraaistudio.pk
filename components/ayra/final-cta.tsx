import { MagneticButton } from './magnetic-button'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-32 md:py-44">
      {/* dramatic volumetric light */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[120%] w-[70%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(127,166,224,0.22),transparent_60%)] blur-2xl"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            THIS ISN&apos;T MARKETING.
            <br />
            <span className="text-glow">THIS IS INTELLIGENT INFRASTRUCTURE.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg font-light text-muted-foreground">
            Build Smarter. Scale Faster. Lead The Future.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="mailto:ayraaistudio.pk@gmail.com" className="px-8 py-4 text-base">
              Book a Strategy Call
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
