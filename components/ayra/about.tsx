import { Boxes, Cpu, Workflow } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const pillars = [
  {
    icon: Boxes,
    title: 'Integrated Ecosystems',
    body: 'Creativity, websites, and marketing engineered to scale together as one connected system — not isolated deliverables.',
  },
  {
    icon: Cpu,
    title: 'Infrastructure, Not Services',
    body: 'AYRA is built like an AI infrastructure company. We architect the machinery that produces growth on repeat.',
  },
  {
    icon: Workflow,
    title: 'Automated by Design',
    body: 'Every system we deploy is automation-first, removing friction so brands compound their output over time.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About AYRA"
          title="An AI infrastructure company — not another agency."
          description="AYRA builds integrated, automated ecosystems where creativity, websites, and marketing scale together as one intelligent system. We engineer the foundation modern brands stand on."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="metallic-border group h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1">
                <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-light text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
