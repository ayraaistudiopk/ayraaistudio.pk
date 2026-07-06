'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  className,
}: {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.3}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0,0)'
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-full text-sm font-normal transition-[transform,box-shadow] duration-300 ease-out will-change-transform',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_18px_45px_-18px_rgba(127,166,224,0.8)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_22px_60px_-16px_rgba(127,166,224,0.95)]'
          : 'glass text-foreground hover:border-white/25',
        'px-6 py-3',
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
      )}
    </a>
  )
}
