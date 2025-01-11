import type { Metadata } from 'next';

// CI fails without this
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Explore Challenges | 波波微课',
  description: 'Explore all challenges by difficulty or tags on 波波微课.',
};

export { Explore as default } from './_components';
