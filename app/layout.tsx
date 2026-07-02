import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import { Geist } from 'next/font/google'

const geist = Geist({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const clashDisplay = localFont({
  src: [
    {
      path: '../public/font/ClashDisplay-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/font/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/font/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/font/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-clash',
})

export const metadata: Metadata = {
  title: {
    default: 'TEKPACK | Industrial Packaging Machine Manufacturer',
    template: '%s | TEKPACK',
  },
  icons :{
    icon : "/logo.png"
  },
  description:
    'With over 15 years of expertise, TEKPACK manufactures high-efficiency, custom automatic packaging machines, servo systems, and filling machinery in Salem, Tamil Nadu.',
  metadataBase: new URL('https://www.tekpack.in'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Automatic Filling Machines',
    'Packaging Machinery Manufacturer India',
    'Automatic Packing Machines',
    'Servo Based Packing System',
    'Pouch Packing Machinery Salem',
    'Industrial Filling Equipment',
  ],
  openGraph: {
    title: 'TEKPACK | High-Performance Packaging Automation',
    description: 'Custom-engineered automatic packing, filling, and conveying machinery built for industrial scaling.',
    url: 'https://www.tekpack.in',
    siteName: 'TEKPACK',
    images: [
      {
        url: 'https://www.tekpack.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TEKPACK | High-Performance Packaging Automation',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Salem',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={cn('h-full antialiased', geist.className, geist.variable ,clashDisplay.variable)}>
      <body className='flex min-h-full flex-col'>{children}</body>
    </html>
  )
}
