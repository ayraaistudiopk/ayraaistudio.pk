import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-8 bg-primary/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 text-balance font-display text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="mt-5 text-pretty text-base font-light leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
