import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/data/siteConfig'
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/seo'
import { faqData } from '@/data/faqData'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Home/Footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const organizationSchema = generateOrganizationSchema()
const faqSchema = generateFAQSchema(
  faqData.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))
)

export const metadata = {
  title: 'EIT Faridabad | Echelon Institute of Technology - Engineering Excellence',
  description: siteConfig.description,
  keywords: [
    'engineering college',
    'B.Tech',
    'placements',
    'Faridabad',
    'CSE',
    'ECE',
    'Mechanical',
    'Civil',
    'Electrical',
    'NAAC accredited',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'EIT Faridabad | Echelon Institute of Technology',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'EIT Faridabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EIT Faridabad | Echelon Institute of Technology',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@EIT_Faridabad',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Footer />
      </body>
    </html>
  )
}
