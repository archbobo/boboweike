import { Footsies } from '~/components/footsies';
import { Features } from './_components/features';
import { Hero } from './_components/hero';
import { NewsletterBanner } from './_components/newsletter-banner';

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <NewsletterBanner />
      <Footsies />
    </>
  );
}
