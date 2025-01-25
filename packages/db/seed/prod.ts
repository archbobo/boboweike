// if you want a similar db to what prod looks like.
// this should never be run on prod directly
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import uuidByString from 'uuid-by-string';
import { prisma } from '../src';
import { ingestChallenges } from './data/challenge-ingest';
import { loadChallengesFromTypeChallenge } from '../mocks/challenges.mock';
import { tracks } from './data/tracks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const challengePath = path.join(__dirname, '../../../challenges');

const slugify = (str: string) => str.toLowerCase().replace(/\s/g, '-');
const TYPE_CHALLENGE_ID = uuidByString('type-challenges');
const BOBOWEIKE_ID = uuidByString('boboweike');

try {
  const boboWeikeUser = await prisma.user.upsert({
    where: { id: BOBOWEIKE_ID },
    update: {},
    create: {
      id: BOBOWEIKE_ID,
      email: 'boboweikeapp@gmail.com',
      name: '波波微课',
      userLinks: {
        create: {
          url: 'https://boboweike.cn',
        },
      },
    },
  });
  const typeChallengeUser = await prisma.user.upsert({
    where: { id: TYPE_CHALLENGE_ID },
    update: {},
    create: {
      id: TYPE_CHALLENGE_ID,
      email: 'fake@email.com',
      name: 'Type Challenges',
      userLinks: {
        create: {
          url: 'https://tsch.js.org/',
        },
      },
    },
  });

  const challengesFromTypeChallenges = await loadChallengesFromTypeChallenge(true);
  const challengesToCreate = await ingestChallenges(challengePath);
  await prisma.challenge.createMany({
    data: challengesFromTypeChallenges.map((challenge) => ({
      ...challenge,
      userId: typeChallengeUser.id,
    })),
  });
  await prisma.challenge.createMany({
    data: challengesToCreate.map(({ author, ...challenge }) => ({
      ...challenge,
      userId: boboWeikeUser.id,
    })),
  });

  for (const track of tracks) {
    const createdTrack = await prisma.track.create({
      data: {
        name: track.name,
        slug: slugify(track.name),
        description: track.description,
        visible: true,
        isComingSoon: track.name !== 'TypeScript Foundations',
      },
    });

    if (track.name === 'TypeScript Foundations') {
      const challengesForTrack = await prisma.challenge.findMany({
        where: {
          slug: {
            in: [
              'generic-type-constraints',
              'index-signatures',
              'indexed-types',
              'keyof',
              'literal-types',
              'mapped-object-types',
              'primitive-data-types',
              'type-aliases',
              'type-unions',
              'typeof',
            ],
          },
        },
      });
      await prisma.trackChallenge.createMany({
        data: challengesForTrack.map((challenge, index) => ({
          challengeId: challenge.id,
          trackId: createdTrack.id,
          orderId: index,
        })),
      });
    }
  }

  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
