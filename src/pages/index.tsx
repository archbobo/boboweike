import { type NextPage } from 'next';
import Head from 'next/head';
import { TypographyH1 } from '~/components/h1';
import { Navigation } from '~/components/navigation';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>波波微课</title>
        <meta name="description" content="通过互动练习提升你的编程和开发技能" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <header>
        <TypographyH1>波波微课</TypographyH1>
      </header>
    </>
  );
};

export default Home;
