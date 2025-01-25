import type { Metadata } from 'next';
import { buildMetaForDefault } from '~/app/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetaForDefault({
    title: 'Newsletter | 波波微课',
    description: 'Subscribe to the 波波微课 newsletter and stay informed about our latest updates!',
  });
}
export { Newsletter as default } from './_components';
