// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import { Toaster } from "@/components/ui/sonner"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Yamo - Solution Restaurant Complète | Menu Digital, Commande & Paiement',
  description: 'Transformez votre restaurant avec la suite Yamo : Menu digital intelligent, commandes autonomes, paiements intégrés. Essai gratuit 30 jours.',
  keywords: 'restaurant, menu digital, commande en ligne, paiement restaurant, QR code, POS, caisse',
  authors: [{ name: 'Yamo Team' }],
  creator: 'Yamo',
  publisher: 'Yamo',
  openGraph: {
    title: 'Yamo - Solution Restaurant Complète',
    description: 'Menu digital, commandes autonomes, paiements intégrés. +2000 restaurants nous font confiance.',
    url: 'https://yamapp.io',
    siteName: 'Yamo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yamo - Solution Restaurant Complète',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yamo - Solution Restaurant Complète',
    description: 'Menu digital, commandes autonomes, paiements intégrés',
    creator: '@yamoapp',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className="bg-white text-gray-900 scroll-smooth"
      style={{
        fontFamily: '"Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", Arial, sans-serif',
        fontOpticalSizing: 'auto',
        fontFeatureSettings: '"kern" 1'
      }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          {children}
          <Toaster />
          <Script src="/script.js" />
        </Suspense>
      </body>
    </html>
  );
}