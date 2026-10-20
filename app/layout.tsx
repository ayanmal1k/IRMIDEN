import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Kanit, Permanent_Marker } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { Toaster } from '@/components/ui/sonner'
import { gelatoSansFont, leanFont, masterVictoryFont, pumpkinsBrushFont } from '@/lib/fonts'
import './globals.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const permanentMarker = Permanent_Marker({
  variable: '--font-permanent-marker',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})


export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: '$IMD | IRMIDEN',
    template: '%s | $IMD',
  },
  description: '$IMD (IRMIDEN) - Simple, bold, and powerful crypto meme ecosystem built with modern web standards and smooth interactions.',
  metadataBase: new URL('https://irmiden.local'),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: '$IMD | IRMIDEN',
    description: '$IMD (IRMIDEN) - Simple, bold, and powerful crypto meme ecosystem built with modern web standards and smooth interactions.',
    url: 'https://irmiden.local',
    siteName: 'IRMIDEN ($IMD)',
    images: [
      {
        url: '/icon.png',
        width: 323,
        height: 377,
        alt: '$IMD Icon',
      },
      {
        url: '/hero-bg.png',
        width: 1717,
        height: 916,
        alt: '$IMD Hero Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$IMD | IRMIDEN',
    description: '$IMD (IRMIDEN) - Simple, bold, and powerful crypto meme ecosystem.',
    images: ['/icon.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${gelatoSansFont.variable} ${leanFont.variable} ${masterVictoryFont.variable} ${pumpkinsBrushFont.variable} ${kanit.variable} ${permanentMarker.variable}`}
    >

      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
