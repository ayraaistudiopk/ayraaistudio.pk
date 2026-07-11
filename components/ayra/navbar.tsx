'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Wordmark } from './wordmark'
import { MagneticButton } from './magnetic-button'

const links = [
  { label: 'About', href: '#about' },
  { label: 'What We Build', href: '#build' },
  { label: 'Visual Production', href: '#visual' },
  { label: 'Why AYRA', href: '#why' },
  { label: 'Process', href: '#process' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`glass flex w-full max-w-6xl items-center justify-between rounded-full py-2.5 pl-5 pr-2.5 transition-all duration-500 ${
          scrolled ? 'shadow-[0_16px_50px_-20px_rgba(0,0,0,0.7)]' : ''
        }`}
      >
        <a href="#top" className="flex items-center gap-2" aria-label="AYRA AI Studio home">
          <img
            src="/ayra-logo-original.png"
            alt="AYRA AI Studio Logo"
            className="h-7 w-7 rounded-md object-cover ring-1 ring-white/10"
          />
          <Wordmark className="text-lg text-foreground" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <MagneticButton href="#contact" className="px-5 py-2.5 text-sm">
            Book a Strategy Call
          </MagneticButton>
        </div>

        <button
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-6xl rounded-3xl p-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-light text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <MagneticButton href="#contact" className="mt-2 justify-center py-3">
              Book a Strategy Call
            </MagneticButton>
          </div>
        </div>
      )}
    </header>
  )
}
