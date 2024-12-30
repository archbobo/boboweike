'use client';
import { Binary } from 'lucide-react';

export function Footsies() {
  return (
    <footer className="flex flex-col items-center text-sm font-light sm:px-16 md:px-0">
      <div className="container my-4 flex flex-col justify-between gap-6 px-10 pb-2 md:my-12 lg:flex-row">
        <div className="space-x-2">
          Built with <Binary className="inline-block h-5 w-5 text-[#31bdc6]" /> by 架构师杨波.
        </div>
        <div className="text-neutral-500">© {new Date().getFullYear()} 波波微课</div>
      </div>
    </footer>
  );
}
