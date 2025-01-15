import type { Metadata } from 'next';
import { buildMetaForDefault } from '~/app/metadata';

// CI fails without this
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetaForDefault({
    title: 'Explore Challenges | 波波微课',
    description: 'Explore all challenges by difficulty or tags on 波波微课.',
  });
}

export { Explore as default } from './_components';
