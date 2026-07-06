import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const steps = [
  { n: '01', title: 'Strategy', body: 'Define the growth thesis and system requirements.' },
  { n: '02', title: 'System Design', body: 'Architect the connected infrastructure end to end.' },
  { n: '03', title: 'Creative Production', body: 'Generate elite visual and commercial assets.' },
  { n: '04', title: 'Automation', body: 'Wire intelligent agents and automated pipelines.' },
  { n: '05', title: 'Deployment', body: 'Ship fast, high-performance surfaces to production.' },
  { n: '06', title: 'Growth', body: 'Compound output and scale the system over time.' },
]

export function Process() {
  return (
    <section id="process" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Process Timeline"
          title="A pipeline that runs itself."
          align="center"
        />

        <div className="relative mt-16">
          {/* glowing spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-1/2" />

          <div className="space-y-4 md:space-y-0">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 100}>
                <div
                  className={`relative flex items-stretch gap-6 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="relative flex flex-col items-center">
                    <span className="animate-flicker mt-6 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-primary shadow-[0_0_16px_4px_rgba(127,166,224,0.6)] md:hidden" />
                  </div>
                  <div className="metallic-border my-2 flex-1 rounded-2xl p-6">
                    <span className="font-display text-sm font-light tracking-[0.3em] text-primary">
                      {s.n}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-light text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
