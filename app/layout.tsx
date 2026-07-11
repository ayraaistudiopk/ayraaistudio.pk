import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Jost } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AYRA AI Studio — Intelligence That Builds Brands',
  description:
    'AYRA AI Studio operates at the intersection of creativity, engineering, and artificial intelligence — building intelligent systems that help modern brands grow, automate, and dominate.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/ayra-logo-original.png', type: 'image/png' }],
    apple: '/ayra-logo-original.png',
  },
  openGraph: {
    title: 'AYRA AI Studio — Intelligence That Builds Brands',
    description: 'We don’t follow trends. We build the systems behind them.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#181A1F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
