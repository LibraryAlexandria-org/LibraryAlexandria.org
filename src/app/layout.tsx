import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Library of Alexandria | Decentralized Archive Protocol',
  description:
    'A decentralized protocol for the permanent preservation of humanity\'s written heritage. Historical records, literature, scientific papers—stored forever, verified by mathematics, governed by community.',
  keywords: [
    'decentralized archive',
    'digital preservation',
    'blockchain',
    'ALEX token',
    'library',
    'document storage',
    'permanent archive',
  ],
  authors: [{ name: 'Library of Alexandria Protocol' }],
  openGraph: {
    title: 'Library of Alexandria | Decentralized Archive Protocol',
    description:
      'A decentralized protocol for the permanent preservation of humanity\'s written heritage.',
    url: 'https://libraryalexandria.org',
    siteName: 'Library of Alexandria',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Library of Alexandria | Decentralized Archive Protocol',
    description:
      'A decentralized protocol for the permanent preservation of humanity\'s written heritage.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-serif antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
