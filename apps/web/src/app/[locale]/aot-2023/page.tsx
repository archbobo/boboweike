import type { Metadata } from 'next';
import { buildMetaForEventPage } from '~/app/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetaForEventPage({
    title: 'Advent of Typescript 2023 | 波波微课',
    description: 'Advent of Typescript 2023',
  });
}

export { AotLandingPage as default } from './_components';
