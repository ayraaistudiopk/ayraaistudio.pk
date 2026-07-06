import { Camera, ShoppingBag, LayoutTemplate, Globe, Bot } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const capabilities = [
  {
    icon: Camera,
    title: 'AI Visual Production',
    body: 'Elite AI-powered photoshoots and luxury advertising videos engineered for high-fashion brands.',
    span: 'md:col-span-2',
  },
  {
    icon: ShoppingBag,
    title: 'Amazon Brand Creatives',
    body: 'Conversion-focused listing images, A+ content, and full storefront assets built to sell.',
    span: '',
  },
  {
    icon: LayoutTemplate,
    title: 'Product Posters & Commercial Creatives',
    body: 'Premium marketing posters, flyers, and web banners with grid-perfect composition.',
    span: '',
  },
  {
    icon: Globe,
    title: 'Premium Websites',
    body: 'High-performance, fast, modern layouts with exceptional UI/UX and refined motion.',
    span: '',
  },
  {
    icon: Bot,
    title: 'AI Agents & Intelligent Automation',
    body: 'Custom AI agents that automate business operations and orchestrate entire workflows.',
    span: 'md:col-span-2',
  },
]

export function WhatWeBuild() {
  return (
    <section id="build" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Build"
          title="Five surfaces. One intelligent system."
          align="center"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 120} className={c.span}>
              <div className="metallic-border group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(127,166,224,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-light text-foreground">{c.title}</h3>
                <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
