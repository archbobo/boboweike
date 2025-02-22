import type { Metadata } from 'next';
import { auth } from '~/server/auth';
import NotificationPage from './notification-page';

export const metadata: Metadata = {
  title: 'Notifications | 波波微课',
};

export default async function Page() {
  const session = await auth();

  if (!session) {
    throw new Error('not authed');
  }

  return <NotificationPage />;
}
