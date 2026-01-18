import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReplyPro - AI Review Response Generator',
  description: 'Generate professional, personalized responses to customer reviews in seconds. Save hours of time with AI-powered review management.',
  keywords: ['review response', 'customer reviews', 'AI', 'business', 'reputation management'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
