import Head from 'next/head';

export default function Profile() {
  return (
    <div>
      <Head>
        <title>波波微课 - Profile</title>
      </Head>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-white">Profile</p>
      </div>
    </div>
  );
}
