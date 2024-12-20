import { Providers } from './providers';

import '../styles/globals.css';

import { Inter } from 'next/font/google';
import { Navigation } from '~/components/ui/navigation';
import { Toaster } from '~/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: '波波微课',
  description: 'Level up your programming skills with interactive exercises',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>波波微课</title>
        <meta
          name="description"
          content="Level up your typescript skills with interactive exercises"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} flex flex-col`}>
        <Providers>
          <Navigation />
          <main className="flex-1">
            <div className="h-full">{children}</div>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
