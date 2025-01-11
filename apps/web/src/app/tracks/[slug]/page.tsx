import { TrackDetail } from '../_components/track-details';
import { getTrackDetails } from '../_components/track.action';

export const dynamic = 'force-dynamic';

interface Props {
  params: {
    slug: string;
  };
}

// todo: write a suspense skeleton...
export default function Page({ params }: Props) {
  return <TrackDetail slug={params.slug} />;
}

export async function generateMetadata({ params: { slug } }: Props) {
  const track = await getTrackDetails(parseInt(slug));
  if (!track) {
    return {
      title: 'Track | 波波微课',
      description: 'View the details of this track on 波波微课.',
    };
  }
  return {
    title: `${track.title} Track | 波波微课`,
    description: `View the details of the ${track.title} track on 波波微课. ${track.description}`,
  };
}
