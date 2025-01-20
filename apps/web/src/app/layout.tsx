import { tagline } from './metadata';

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
  return children;
}
