import { setStaticParamsLocale } from 'next-international/server';
import { Footsies } from '~/components/footsies';
import { Features } from './_components/features';
import { Hero } from './_components/hero';
import { NewsletterBanner } from './_components/newsletter-banner';
import { getStaticParams } from '~/locales/server';

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Index({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale);

  return (
    <>
      <Hero />
      <Features />
      {/* <Community /> */}
      <NewsletterBanner />
      <Footsies />
    </>
  );
}
