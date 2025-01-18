import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    template: '波波微课',
    default: 'Home',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
