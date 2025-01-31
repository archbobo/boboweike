import type { Metadata } from 'next';
import { buildMetaForDefault } from '~/app/metadata';

export function generateMetadata(): Metadata {
  return buildMetaForDefault({
    title: 'Explore Tracks | 波波微课',
    description:
      'Explore the tracks available on 波波微课. These tracks are designed to help you learn and improve your TypeScript skills.',
  });
}

export { Tracks as default } from './_components';
