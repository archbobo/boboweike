import { Button } from '@repo/ui/components/button';
import { Github } from '@repo/ui/icons';
import { notFound } from 'next/navigation';
import { getAllFlags } from '~/utils/feature-flags';
import { CountdownTimer } from '../../_components/countdown-timer';
import { About } from './about';
import { CardGrid } from './card-grid';

export async function AotLandingPage() {
  const featureFlags = await getAllFlags();
  if (!featureFlags.enableHolidayEvent) return notFound();

  return (
    <div className="flex flex-col gap-5 pb-8 md:gap-10 md:py-5">
      <div className="container">
        <div className="relative mx-auto w-fit text-center">
          <div className="absolute left-0 top-0 -z-10 h-full w-full transform-gpu bg-gradient-to-r from-red-500 via-red-600 to-green-500 opacity-70 blur-3xl sm:opacity-40" />
          <h1 className="mb-10 mt-16 text-4xl font-bold tracking-tighter text-black sm:text-8xl dark:text-white">
            <span>Advent</span> of <span className="text-red-600">TypeScript</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-center text-xl font-semibold">
            The first type challenge will unlock at{' '}
            <span className="text-primary">midnight(est)</span> on December 1st
          </p>
          <CountdownTimer />
          <div className="flex w-full flex-col items-center justify-center gap-2 md:w-auto md:flex-row md:gap-5">
            <About className="w-full md:w-auto" />
            <Button
              asChild
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 px-4 py-2 md:w-auto dark:text-white"
              variant="outline"
            >
              <a
                target="_blank"
                rel="noreferrer"
                className="gap-1 md:inline-flex"
                href="https://github.com/boboweike/boboweike"
              >
                <Github className="h-4 w-4" />
                Star us on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      <CardGrid />
    </div>
  );
}
