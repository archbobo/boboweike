import { auth } from '~/server/auth';

import { TrackDetail } from '../_components/track-details';
import { getTrackDetails } from '../_components/track.action';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  await auth();

  return <TrackDetail slug={params.slug} />;
}

export async function generateMetadata({ params: { slug } }: PageProps) {
  const track = await getTrackDetails(slug);

  if (!track) {
    return {
      title: 'Track | 波波微课',
      description: 'View the details of this track on 波波微课.',
    };
  }

  return {
    title: `${track.name} Track | 波波微课`,
    description: `View the details of the ${track.name} track on 波波微课. ${track.description}`,
  };
}
