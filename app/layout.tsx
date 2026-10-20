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
    default: 'IRMIDEN ($IMD) | Legendary 2020 TRON Token is Back',
    template: '%s | IRMIDEN ($IMD)',
  },
  description:
    'Official IRMIDEN ($IMD) token on TRON (TRC20). The legendary 2020 TRON token from the original developer is officially back with 100% organic community growth. Contract: TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
  applicationName: 'IRMIDEN ($IMD)',
  keywords: [
    'IRMIDEN',
    '$IMD',
    'IMD token',
    'TRON',
    'TRC20',
    'SunPump',
    'TRX',
    'Meme Coin',
    'Crypto',
    'The OG is Back',
    'Original TRON Token 2020',
    'TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
  ],
  authors: [{ name: 'IRMIDEN Team' }],
  creator: 'IRMIDEN',
  publisher: 'IRMIDEN',
  metadataBase: new URL('https://irmiden.local'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    title: 'IRMIDEN ($IMD) | Legendary 2020 TRON Token is Back',
    description:
      'Original developer of IRMIDEN ($IMD). The legendary 2020 TRON token is officially BACK as TRC20! Organic community growth. Contract: TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
    url: 'https://irmiden.local',
    siteName: 'IRMIDEN ($IMD)',
    images: [
      {
        url: '/hero-design.png',
        width: 1200,
        height: 630,
        alt: 'IRMIDEN ($IMD) - The OG is Back',
      },
      {
        url: '/about-bg.png',
        width: 2171,
        height: 724,
        alt: 'About IRMIDEN ($IMD)',
      },
      {
        url: '/icon.png',
        width: 323,
        height: 377,
        alt: '$IMD Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRMIDEN ($IMD) | Legendary 2020 TRON Token is Back',
    description:
      'Original developer of IRMIDEN ($IMD). Legendary 2020 TRON token is officially BACK as TRC20! Organic growth. Contract: TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
    images: ['/hero-design.png'],
  },
  category: 'cryptocurrency',
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
