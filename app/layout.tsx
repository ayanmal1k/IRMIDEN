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
    'Official IRMIDEN ($IMD) token on TRON (TRC20). First launched on August 15, 2020 (TRC10 ID: 1003154), the original developer has officially brought $IMD back on SunPump with 100% organic community growth. Contract: TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
  applicationName: 'IRMIDEN ($IMD)',
  keywords: [
    'IRMIDEN',
    '$IMD',
    'IMD token',
    'TRON',
    'TRX',
    'SunPump',
    'SunSwap',
    'Justin Sun',
    'TRC20',
    'TRC10',
    'OG TRON Token',
    '2020 TRON Token',
    'TRON Meme Coin',
    'Meme Coin',
    'Crypto',
    'Cryptocurrency',
    'DeFi',
    'Fair Launch',
    'Bonding Curve',
    'Web3',
    'TronLink',
    'Bitget Wallet',
    'TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
    'Stronger Together',
    'Buy IMD',
    'IMD Price',
    'Crypto Twitter',
    'TRON Ecosystem',
  ],
  authors: [{ name: 'IRMIDEN Team', url: 'https://x.com/Irmiden_TRON' }],
  creator: 'IRMIDEN',
  publisher: 'IRMIDEN',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://irmiden.xyz'),
  alternates: {
    canonical: '/',
  },
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
      'The legendary August 15, 2020 TRON token is officially BACK as TRC20 on SunPump! Original 2020 developer, zero team dumps, 100% organic community. Contract: TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
    url: '/',
    siteName: 'IRMIDEN ($IMD)',
    images: [
      {
        url: '/hero-bg.png',
        width: 1920,
        height: 1080,
        alt: 'IRMIDEN ($IMD) - Legendary 2020 TRON Token is Back',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Irmiden_TRON',
    creator: '@Irmiden_TRON',
    title: 'IRMIDEN ($IMD) | Legendary 2020 TRON Token is Back',
    description:
      'The legendary August 15, 2020 TRON token is officially BACK as TRC20 on SunPump! Original dev, zero team dumps, 100% organic growth. Contract: TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
    images: ['/hero-bg.png'],
  },
  category: 'cryptocurrency',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://irmiden.xyz/#organization',
      name: 'IRMIDEN',
      url: 'https://irmiden.xyz',
      logo: 'https://irmiden.xyz/icon.png',
      sameAs: [
        'https://x.com/Irmiden_TRON',
        'https://t.me/+W1i-pq2b7fE1NTVk',
        'https://sunpump.meme/token/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://irmiden.xyz/#website',
      url: 'https://irmiden.xyz',
      name: 'IRMIDEN ($IMD)',
      description:
        'Official IRMIDEN ($IMD) token on TRON network (TRC20) - The legendary 2020 OG TRON token from the original developer.',
      publisher: {
        '@id': 'https://irmiden.xyz/#organization',
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
