const FakeChallengeCard = () => (
  <>
    <div
      className="absolute right-0 top-0 flex h-3/4 w-4/5 flex-col rounded-3xl border bg-zinc-900 p-8 shadow-[0_0_1rem_#4448] dark:border-zinc-600"
      style={{ boxShadow: 'inset 1rem 1rem 3rem -0.5rem #fff1' }}
    >
      <h2 className="text-xl font-bold">Implement a JSON parser type</h2>
      <div className="-mx-2 mt-20 flex-grow rounded-xl bg-zinc-800"></div>
    </div>
    <div
      className="absolute bottom-0 left-0 flex h-4/5 w-4/5 flex-col rounded-3xl border bg-zinc-900 p-8 shadow-[0_0_1rem_#4448] dark:border-zinc-600"
      style={{ boxShadow: 'inset 1rem 1rem 3rem -0.5rem #fff1, 1rem -1rem 3rem #0008' }}
    >
      <h2 className="text-xl font-bold">Implement a generic type</h2>
      <div className="-mx-2 mt-20 flex-grow rounded-xl bg-zinc-800"></div>
    </div>
  </>
);
export default FakeChallengeCard;
