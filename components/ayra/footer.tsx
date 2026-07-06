import { Mail } from 'lucide-react'
import { Wordmark } from './wordmark'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.75h4V21H3V9.75ZM9.5 9.75h3.83v1.54h.05c.53-.95 1.83-1.95 3.77-1.95C21 9.34 21 11.9 21 14.9V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9.75Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h2.5l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.7 0 14.6 0 12.2 0 10.5 1.5 10.5 4.2V6H8v3h2.5v9H14V9Z" />
    </svg>
  )
}

const socials = [
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/ayraaistudio' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/ayraaistudio.pk/' },
  { label: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61579535757423' },
]

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M17.5 3h3l-7.1 8.1L22 21h-6.4l-4.5-5.9L5.8 21H2.8l7.6-8.7L2 3h6.6l4.1 5.4L17.5 3Zm-1.1 16.2h1.7L7.7 4.7H5.9l10.5 14.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 pb-12 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/favicon-ayra.png"
                alt=""
                className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10"
              />
              <Wordmark className="text-2xl text-foreground" showStudio />
            </div>
            <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
              Intelligence That Builds Brands.
            </p>
            <a
              href="mailto:ayraaistudio.pk@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-light text-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              ayraaistudio.pk@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-xs font-light uppercase tracking-[0.28em] text-muted-foreground">
              Connect
            </span>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://x.com/ayraaistudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-light text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} AYRA AI Studio. All rights reserved.</p>
          <p className="tracking-[0.2em]">BUILD SMARTER · SCALE FASTER · LEAD THE FUTURE</p>
        </div>
      </div>
    </footer>
  )
}
