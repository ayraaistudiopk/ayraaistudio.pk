import { cn } from '@/lib/utils'

export function Wordmark({
  className,
  showStudio = false,
}: {
  className?: string
  showStudio?: boolean
}) {
  return (
    <span className={cn('inline-flex flex-col leading-none', className)}>
      <span className="font-display font-light tracking-[0.42em] pl-[0.42em]">AYRA</span>
      {showStudio && (
        <span className="mt-1 font-display text-[0.5em] font-light tracking-[0.55em] pl-[0.55em] text-muted-foreground">
          AI STUDIO
        </span>
      )}
    </span>
  )
}
