import type { Metadata } from 'next';

export const tagline = 'Level up and learn TypeScript with interactive exercises';
export const baseMetadata: Metadata = {
  title: {
    default: '波波微课',
    template: '%s',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: tagline,
  icons: {
    shortcut: '/favicon.ico',
  },
};

// TODO: infer from ZOD
interface MetaParamsForChallenge {
  title: string;
  description: string;
  username: string;
  difficulty: 'BEGINNER' | 'EASY' | 'EVENT' | 'EXTREME' | 'HARD' | 'MEDIUM';
  date: string;
}

interface MetaParamsForUser {
  title: string;
  description: string;
  username: string;
  avatar: string;
  dateSince: string;
}
/** Helper to build opengraph metadata for a user, you should call this in generateMetadata() next function */
export const buildMetaForUser = ({ title, description }: MetaParamsForUser): Metadata => {
  return buildMeta({
    title,
    description,
  });
};

/** Helper to build opengraph metadata for a challenge, you should call this in generateMetadata() next function */
export const buildMetaForChallenge = ({ title, description }: MetaParamsForChallenge): Metadata => {
  return buildMeta({
    title,
    description,
  });
};

/** Helper to build opengraph metadata with defaults, you should call this in generateMetadata() next function */
export const buildMetaForDefault = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}): Metadata => {
  return buildMeta({
    title,
    description,
  });
};

export const buildMetaForEventPage = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}): Metadata => {
  return buildMeta({
    title,
    description,
  });
};

/** update the metadata for og */
const buildMeta = ({ description, title }: { description?: string; title?: string }): Metadata => {
  if (description) {
    baseMetadata.description = description;
  }

  if (title) {
    baseMetadata.title = title;
  }

  return baseMetadata;
};

export default baseMetadata;
