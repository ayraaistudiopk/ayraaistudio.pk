import { SectionHeading } from './section-heading'
import { Carousel, type Shot } from './carousel'

const female: Shot[] = [
  { title: 'Saree', caption: 'Luxury silk drape · cinematic editorial', src: '/campaigns/female-saree.png' },
  { title: 'Shalwar Kameez', caption: 'Tailored suit · draped dupatta', src: '/campaigns/female-shalwar.png' },
  { title: 'Sportswear', caption: 'Performance athletic campaign', src: '/campaigns/female-sportswear.png' },
  { title: 'Streetwear', caption: 'Oversized luxury · high fashion', src: '/campaigns/female-streetwear.png' },
  { title: 'Footwear', caption: 'Heels & sneakers · macro detail', src: '/campaigns/female-footwear.png' },
  { title: 'Watch', caption: 'Craftsmanship · metallic reflections', src: '/campaigns/female-watch.png' },
  { title: 'Perfume', caption: 'Mist & ripple · lifestyle campaign', src: '/campaigns/female-perfume.png' },
]

const male: Shot[] = [
  { title: 'Sherwani', caption: 'Royal-grade · monochrome tones', src: '/campaigns/male-sherwani.png' },
  { title: 'Kurta', caption: 'Fine-thread · modern cut', src: '/campaigns/male-kurta.png' },
  { title: 'Formal Shirts', caption: 'Executive tailored · structured', src: '/campaigns/male-formal.png' },
  { title: 'Hoodies & Streetwear', caption: 'Heavy-knit · technical layers', src: '/campaigns/male-hoodie.png' },
  { title: 'Footwear', caption: 'Leather formal · custom sneakers', src: '/campaigns/male-footwear.png' },
  { title: 'Perfume', caption: 'Dark masculine · volumetric light', src: '/campaigns/male-perfume.png' },
]

export function VisualProduction() {
  return (
    <section id="visual" className="relative px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Flagship — AI Visual Production"
          title="Editorial campaigns, engineered by intelligence."
          description="Elite AI-powered photoshoots produced at scale — flawless fabrics, cinematic lighting, and luxury art direction across every category."
        />

        <div className="mt-14">
          <Carousel label="Female Campaigns" shots={female} />
        </div>
        <div className="mt-16">
          <Carousel label="Male Campaigns" shots={male} />
        </div>
      </div>
    </section>
  )
}
