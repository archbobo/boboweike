import type { Metadata } from 'next';
import { buildMetaForDefault } from '~/app/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetaForDefault({
    title: 'Explore Tracks | 波波微课',
    description: 'Explore the tracks available on 波波微课.',
  });
}

export { Tracks as default } from './_components';
