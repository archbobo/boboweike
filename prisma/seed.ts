import { type Difficulty, type Prisma, PrismaClient } from '@prisma/client';
import uuidByString from 'uuid-by-string';
import { CHALLENGE_MAP } from './challenges.mock';

const prisma = new PrismaClient();
const CHALLENGES_TO_CREATE = 20;
const DIFFICULTIES = ['BEGINNER', 'EASY', 'MEDIUM', 'HARD', 'EXTREME'];
const randomDifficulty = (): Difficulty => {
  return DIFFICULTIES[Math.floor(Math.random() * DIFFICULTIES.length)] as Difficulty;
};

// TODO: make this deterministic as the seed should always have the same difficulty
const challenges = (): Prisma.ChallengeCreateNestedManyWithoutUserInput => ({
  create: Array.from({ length: CHALLENGES_TO_CREATE }, (_, challengeIndex) =>
    CHALLENGE_MAP[randomDifficulty()](challengeIndex),
  ),
});

export const trashId = uuidByString('trash');
export const gId = uuidByString('g');

// NOTE: we can use top-level await because we are in a module
try {
  await prisma.user.upsert({
    where: { id: trashId },
    update: {},
    create: {
      id: trashId,
      email: 'chris@boboweike.cn',
      name: 'chris',
      Challenge: challenges(),
    },
  });

  await prisma.user.upsert({
    where: { id: gId },
    update: {},
    create: {
      id: gId,
      email: 'g@boboweike.cn',
      name: 'g',
      Challenge: challenges(),
    },
  });

  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}