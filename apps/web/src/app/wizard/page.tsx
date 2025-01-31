import type { Metadata } from 'next';
import { buildMetaForDefault } from '~/app/metadata';
import { Wizard } from './_components';

export function generateMetadata(): Metadata {
  return buildMetaForDefault({
    title: 'Create a Challenge | 波波微课',
    description: 'Create a challenge on 波波微课 and share it with the world!',
  });
}

export default function Page() {
  return <Wizard />;
}
