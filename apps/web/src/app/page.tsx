import Head from 'next/head';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import Hero from '~/components/landing/hero';
import Features from '~/components/landing/features';
import Community from '~/components/landing/community/community';
import Waitlist from '~/components/landing/waitlist/banner';
import { Footsies } from '~/components/ui/footsies';

export default async function Index() {
  return (
    <>
      <Head>
        <title>波波微课</title>
        <meta
          content="Level up your typescript skills with interactive exercises"
          name="description"
        />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </Head>
      <BalancerProvider>
        <Hero />
        <Features />
        {/* <Community /> */}
        <Waitlist />
        <Footsies />
      </BalancerProvider>
    </>
  );
}