import type { Metadata } from 'next';

const OG_URL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:4200' : 'https://og.boboweike.cn';

const tagline = 'Level up your typescript skills with interactive exercises';
const baseMetadata: Metadata = {
  metadataBase: new URL(OG_URL),
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

interface MetaParamsForChallenge {
  title: string;
  description: string;
  username: string;
}

/** Helper to build opengraph metadata for a challenge, you should call this in generateMetadata() next function */
export const buildMetaForChallenge = async ({
  title,
  description,
  username,
}: MetaParamsForChallenge): Promise<Metadata> => {
  return buildMeta({
    title,
    description,
  });
};

/** Helper to build opengraph metadata with defaults, you should call this in generateMetadata() next function */
export const buildMetaForDefault = async (): Promise<Metadata> => {
  return buildMeta({});
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
