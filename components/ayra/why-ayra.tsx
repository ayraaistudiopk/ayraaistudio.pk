import { Check, Minus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const traditional = [
  'Deliver isolated services',
  'Manual, repetitive execution',
  'Fragmented tools and hand-offs',
  'Scales with more headcount',
]

const ayra = [
  'Builds intelligent infrastructure',
  'Automation-first by default',
  'One connected, integrated system',
  'Scales with engineered systems',
]

export function WhyAyra() {
  return (
    <section id="why" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why AYRA"
          title="Two fundamentally different operating models."
          align="center"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl p-8">
              <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
                Traditional Agencies
              </p>
              <ul className="mt-6 space-y-4">
                {traditional.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground">
                    <Minus className="mt-0.5 h-5 w-5 shrink-0 opacity-50" />
                    <span className="font-light">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="metallic-border h-full rounded-2xl p-8 shadow-[0_30px_80px_-40px_rgba(127,166,224,0.5)]">
              <p className="text-xs font-light uppercase tracking-[0.25em] text-primary">
                AYRA AI Studio
              </p>
              <ul className="mt-6 space-y-4">
                {ayra.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-light">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-14 max-w-3xl text-balance text-center font-display text-2xl font-light leading-snug text-foreground sm:text-3xl">
            &ldquo;Automation is not an additional feature. It is the foundation of everything we
            build.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  )
}
