import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { useEffect, useState } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anubhav.Codes - Content Creator & Developer',
  description: 'Content creator sharing daily programming tips, tutorials, and development content on Instagram. Full-stack developer available for freelance projects.',
  keywords: ['programming', 'tutorials', 'web development', 'content creator', 'instagram', 'coding'],
  authors: [{ name: 'Anubhav Chaudhary' }],
  openGraph: {
    title: 'Anubhav.Codes - Content Creator & Developer',
    description: 'Content creator sharing daily programming tips, tutorials, and development content on Instagram.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
