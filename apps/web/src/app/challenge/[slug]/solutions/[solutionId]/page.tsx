import { prisma } from '@repo/db';
import { SolutionDetails } from '../_components/solution-detail';
import { auth } from '~/server/auth';
import { Comments } from '~/app/challenge/_components/comments';
import { getSolutionIdRouteData } from './getSolutionIdRouteData';

interface ChallengeSolutionProps {
  params: {
    slug: string;
    solutionId: string;
  };
}

export type ChallengeSolution = NonNullable<Awaited<ReturnType<typeof getSolutionIdRouteData>>>;
export default async function SolutionPage({
  params: { solutionId, slug },
}: ChallengeSolutionProps) {
  const session = await auth();

  const solution = await getSolutionIdRouteData(slug, solutionId, session);

  return (
    <div className="relative h-full">
      <SolutionDetails solution={solution} />
      <Comments root={solution} type="SOLUTION" />
    </div>
  );
}

export async function generateMetadata({ params: { solutionId } }: ChallengeSolutionProps) {
  const solution = await prisma.sharedSolution.findFirstOrThrow({
    where: {
      id: Number(solutionId),
    },
    include: {
      challenge: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    title: `${solution.title}, solution to ${solution.challenge?.name} | 波波微课`,
    description: `View this solution to ${solution.challenge?.name} on 波波微课.`,
  };
}
