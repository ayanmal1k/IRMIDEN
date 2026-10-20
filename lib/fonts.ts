import localFont from 'next/font/local'

export const leanFont = localFont({
  src: '../public/font/Lean 400.otf',
  variable: '--font-lean',
  display: 'swap',
})

export const masterVictoryFont = localFont({
  src: [
    {
      path: '../public/font/Master-Victory-Demo-BF6a4c6fb62cec5.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/Master-Victory-Italic-Demo-BF6a4c6fb63edbc.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-master-victory',
  display: 'swap',
})

export const pumpkinsBrushFont = localFont({
  src: '../public/font/Pumpkins Brush Slant Italic.ttf',
  variable: '--font-pumpkins-brush',
  display: 'swap',
})

export const gelatoSansFont = localFont({
  src: [
    {
      path: '../public/font/gelato sans/GelatoSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/gelato sans/GelatoSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/gelato sans/GelatoSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/font/gelato sans/GelatoSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/font/gelato sans/GelatoSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/font/gelato sans/GelatoSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/font/gelato sans/GelatoSans-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-gelato-sans',
  display: 'swap',
})
