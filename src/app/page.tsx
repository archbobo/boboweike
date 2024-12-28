import Head from 'next/head';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import Features from '~/components/landing/features';
import Hero from '~/components/landing/hero';
import { Footsies } from '~/components/ui/footsies';

export default async function Index() {
  return (
    <>
      <Head>
        <title>波波微课</title>
        <meta
          name="description"
          content="Level up your typescript skills with interactive exercises"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <BalancerProvider>
        <Hero />
        <Features />
        {/* <Community /> */}
        <Footsies />
      </BalancerProvider>
    </>
  );
}
