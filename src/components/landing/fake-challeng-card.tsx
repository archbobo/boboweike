const FakeChallengeCard = () => (
  <>
    <div className="absolute right-0 top-0 flex h-3/4 w-96 flex-col rounded-3xl border border-neutral-300 bg-background p-8 shadow-[0_0_1rem_#8884,1rem_-1rem_3rem_-0.5rem_#0004] dark:border-zinc-600 dark:bg-zinc-900">
      <h2 className="text-xl font-bold">Implement a JSON parser type</h2>
      <div className="flex gap-3">
        <div className="rounded-full bg-zinc-700 px-3 py-1 font-bold">@you</div>
      </div>
      <div className="-mx-2 mt-28 flex-grow rounded-xl bg-neutral-200 dark:bg-zinc-800"></div>
    </div>
    <div
      className="absolute right-12 top-36 flex h-4/5 w-96 flex-col rounded-3xl border border-neutral-300 bg-background p-8 shadow-[0_0_1rem_#8884,1rem_-1rem_3rem_-0.5rem_#0004] dark:border-zinc-600 
    dark:bg-zinc-900"
    >
      <h2 className="text-xl font-bold">Implement a generic type</h2>
      <div className="-mx-2 mt-28 flex-grow rounded-xl bg-neutral-200 dark:bg-zinc-800"></div>
    </div>
  </>
);
export default FakeChallengeCard;
