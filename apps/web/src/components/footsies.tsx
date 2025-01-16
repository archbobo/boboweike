import { Binary } from '@repo/ui/icons';
import Link from 'next/link';

export function Footsies() {
  return (
    <footer className="flex flex-col items-center text-sm font-light sm:px-16 md:px-0">
      <div className="container my-4 flex flex-col justify-between gap-2 px-10 pb-2 md:my-12 lg:flex-row lg:items-end">
        <div>
          Built with <Binary className="inline-block h-5 w-5 text-[#31bdc6]" /> by 架构师杨波.
          <div className="mt-2 text-neutral-500 dark:text-neutral-400">
            <Link
              href="/privacy"
              className="dark:hover:text-primary-foreground transition-colors duration-300 hover:text-neutral-900 hover:underline"
            >
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link
              href="/tos"
              className="dark:hover:text-primary-foreground transition-colors duration-300 hover:text-neutral-900 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="text-neutral-500 lg:text-right dark:text-neutral-400">
          <div className="inline-block rotate-180">©</div>
          {new Date().getFullYear()} 波波微课
        </div>
      </div>
    </footer>
  );
}
