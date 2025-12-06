import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import HowItWorks from '@/components/sections/HowItWorks';
import Organizations from '@/components/sections/Organizations';
import Governance from '@/components/sections/Governance';
import Tokenomics from '@/components/sections/Tokenomics';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Organizations />
      <Governance />
      <Tokenomics />
      <CTA />
    </>
  );
}
