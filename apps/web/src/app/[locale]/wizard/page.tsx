import { auth } from '@repo/auth/server';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { buildMetaForDefault } from '~/app/metadata';
import { isBetaUser } from '~/utils/server/is-beta-user';
import { Wizard } from './_components';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetaForDefault({
    title: 'Create a Challenge | 波波微课',
    description: 'Create a challenge on 波波微课 and share it with the world!',
  });
}

export default async function Page() {
  const session = await auth();
  const isBeta = await isBetaUser(session);

  if (!isBeta) {
    return redirect('/claim');
  }

  return <Wizard />;
}
