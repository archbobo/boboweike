import type { Metadata } from 'next';

export const tagline = 'Level up your TypeScript skills with interactive exercises';
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
  difficulty: 'BEGINNER' | 'EASY' | 'EXTREME' | 'HARD' | 'MEDIUM';
  date: string;
}

interface MetaParamsForUser {
  title: string;
  description: string;
  username: string;
  bio: string;
  avatar: string;
}

/** Helper to build opengraph metadata for a user, you should call this in generateMetadata() next function */
export const buildMetaForUser = async ({
  title,
  description,
  username,
  bio,
  avatar,
}: MetaParamsForUser): Promise<Metadata> => {
  return buildMeta({
    title,
    description,
  });
};

/** Helper to build opengraph metadata for a challenge, you should call this in generateMetadata() next function */
export const buildMetaForChallenge = async ({
  title,
  description,
  username,
  difficulty,
  date,
}: MetaParamsForChallenge): Promise<Metadata> => {
  return buildMeta({
    title,
    description,
  });
};

/** Helper to build opengraph metadata with defaults, you should call this in generateMetadata() next function */
export const buildMetaForDefault = async ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}): Promise<Metadata> => {
  return buildMeta({
    title,
    description,
  });
};

/** update the metadata for og */
const buildMeta = async ({
  description,
  title,
}: {
  description?: string;
  title?: string;
}): Promise<Metadata> => {
  if (description) {
    baseMetadata.description = description;
  }

  if (title) {
    baseMetadata.title = title;
  }

  return baseMetadata;
};

export default baseMetadata;
