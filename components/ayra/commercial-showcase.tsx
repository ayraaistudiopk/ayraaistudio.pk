import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const posters = [
  { title: 'Watch Posters', caption: 'Sleek layout · precise spec typography', src: '/commercial/poster-watch.png' },
  { title: 'Perfume Posters', caption: 'Atmospheric · elegant serif text', src: '/commercial/poster-perfume.png' },
  { title: 'Shirt & Hoodie Posters', caption: 'High-fashion text · raw textures', src: '/commercial/poster-hoodie.png' },
]

export function CommercialShowcase() {
  return (
    <section id="commercial" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Commercial Creative Suite"
          title="Grid-perfect advertising. Flawless composition."
          description="A hyper-clean studio suite built on heavy typography integration, crisp product layouts, and bold visual hierarchy."
        />

        {/* Premium product posters */}
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

        {/* Web banner + Amazon creative */}
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <figure className="group relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
              <img
                src="/commercial/banner-watch.png"
                alt="High-end web banner — watch, perfume and sportswear digital layouts"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg font-light text-foreground">High-End Web Banners</p>
                <p className="mt-1 text-xs font-light text-muted-foreground">
                  Watch · Perfume · Sportswear & Footwear — modern typography, bold hierarchy
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <figure className="group relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10 lg:aspect-auto lg:h-full">
              <img
                src="/commercial/amazon-creative.png"
                alt="Amazon brand creatives — trust-engineered infographics and lifestyle breakdowns"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg font-light text-foreground">Amazon Brand Creatives</p>
                <p className="mt-1 text-xs font-light text-muted-foreground">
                  Trust-engineered infographics & lifestyle breakdowns
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
