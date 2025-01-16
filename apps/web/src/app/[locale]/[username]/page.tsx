import { buildMetaForDefault, buildMetaForUser } from '~/app/metadata';
import { Profile } from './_components/profile';

interface Props {
  params: {
    username: string;
  };
}

export default function Page({ params }: Props) {
  return <Profile username={params.username} />;
}

export async function generateMetadata({ params: { username } }: Props) {
  const name = decodeURIComponent(username).substring(1);
  if (name)
    return buildMetaForUser({
      username: name,
      title: `${name}'s profile | 波波微课`,
      description: `View the profile of ${name} on 波波微课.`,
    });
  return buildMetaForDefault({
    title: 'Profile | 波波微课',
    description: 'View the profile of a user on 波波微课.',
  });
}
