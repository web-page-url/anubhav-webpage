import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { useEffect, useState } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anubhav.Codes - Senior Software Engineer & Tech Educator',
  description: 'Senior Software Engineer passionate about building scalable solutions and sharing knowledge. Daily programming tips, tutorials, and behind-the-scenes development content on Instagram. Available for freelance projects, mentorship, and technical collaborations.',
  keywords: [
    'Anubhav Chaudhary',
    'Senior Software Engineer',
    'Full Stack Developer',
    'Content Creator',
    'Tech Educator',
    'Programming Tutorials',
    'Web Development',
    'JavaScript',
    'React',
    'Node.js',
    'Instagram Tech Content',
    'Freelance Developer',
    'Mentorship',
    'Technical Content Creator',
    'Coding Education'
  ],
  authors: [{ name: 'Anubhav Chaudhary', url: 'https://anubhav.codes' }],
  creator: 'Anubhav Chaudhary',
  publisher: 'Anubhav.Codes',

  // Basic SEO
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A0A12',

  // Open Graph for social media sharing
  openGraph: {
    title: 'Anubhav.Codes - Senior Software Engineer & Tech Educator',
    description: 'Senior Software Engineer passionate about building scalable solutions and sharing knowledge. Daily programming tips, tutorials, and behind-the-scenes development content on Instagram.',
    url: 'https://anubhav.codes',
    siteName: 'Anubhav.Codes',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/Anubhav-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Anubhav Chaudhary - Senior Software Engineer & Tech Educator',
        type: 'image/jpeg',
      },
      {
        url: '/Anubhav-img.jpg',
        width: 600,
        height: 315,
        alt: 'Anubhav Chaudhary - Senior Software Engineer & Tech Educator',
        type: 'image/jpeg',
      }
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Anubhav.Codes - Senior Software Engineer & Tech Educator',
    description: 'Senior Software Engineer passionate about building scalable solutions and sharing knowledge. Daily programming tips, tutorials, and behind-the-scenes development content on Instagram.',
    creator: '@anubhav_codes',
    site: '@anubhav_codes',
    images: [
      {
        url: '/Anubhav-img.jpg',
        alt: 'Anubhav Chaudhary - Senior Software Engineer & Tech Educator',
      }
    ],
  },

  // Additional metadata
  alternates: {
    canonical: 'https://anubhav.codes',
  },

  // App metadata for mobile
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Anubhav.Codes',
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Safari Pinned Tab Icon */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00ffff" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#0A0A12" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#0A0A12" />
        <meta name="msapplication-navbutton-color" content="#0A0A12" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Additional SEO and Performance Meta Tags */}
        <meta name="google-site-verification" content="" />
        <meta name="yandex-verification" content="" />
        <meta name="bing-site-verification" content="" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//instagram.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//twitter.com" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anubhav Chaudhary",
              "jobTitle": "Senior Software Engineer & Tech Educator",
              "description": "Senior Software Engineer passionate about building scalable solutions and sharing knowledge through daily programming content on Instagram",
              "url": "https://anubhav.codes",
              "sameAs": [
                "https://instagram.com/anubhav_codes",
                "https://linkedin.com/in/anubhav-chaudhary",
                "https://twitter.com/anubhav_codes"
              ],
              "image": "https://anubhav.codes/Anubhav-img.jpg",
              "knowsAbout": [
                "JavaScript",
                "React",
                "Node.js",
                "Full Stack Development",
                "Software Engineering",
                "Technical Education",
                "Content Creation"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
