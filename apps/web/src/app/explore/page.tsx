import type { Metadata } from 'next';
import { buildMetaForDefault } from '~/app/metadata';

// CI fails without this
export const dynamic = 'force-dynamic';

export function generateMetadata(): Metadata {
  return buildMetaForDefault({
    title: 'Explore Challenges | 波波微课',
    description:
      'Explore all challenges by difficulty on 波波微课. These are interactive coding challenges to help you learn and improve your TypeScript skills.',
  });
}

export { Explore as default } from './_components';
