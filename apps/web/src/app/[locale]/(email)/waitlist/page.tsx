import type { Metadata } from 'next';
import { buildMetaForDefault } from '~/app/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetaForDefault({
    title: 'Waitlist | 波波微课',
    description: 'Join the waitlist for 波波微课 and be the first to know when we launch!',
  });
}
export { Waitlist as default } from './_components';
