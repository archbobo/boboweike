import { Toaster } from '@repo/ui/components/toaster';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { Navigation } from '~/components/Navigation';
import { getStaticParams } from '~/locales/server';
import '../styles/globals.css';
import { Providers } from './[locale]/providers';
import { tagline } from './metadata';
import { ContextProviders } from './[locale]/context-providers';

export function generateStaticParams() {
  return getStaticParams();
}

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '波波微课',
  robots: {
    index: true,
    follow: true,
  },
  description: tagline,
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} flex flex-col`}>
        <Providers>
          <ContextProviders>
            <Navigation />
            {children}
            <Toaster />
          </ContextProviders>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
