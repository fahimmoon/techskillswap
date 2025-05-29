import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import SkillsGrid from '../components/skills/SkillsGrid';
import PeerMatchPreview from '../components/home/PeerMatchPreview';
import Testimonials from '../components/home/Testimonials';
import SkillTree from '../components/home/SkillTree';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <main className="space-y-24 pb-24">
      <HeroSection />
      <HowItWorks />
      <SkillsGrid />
      <PeerMatchPreview />
      <Testimonials />
      <SkillTree />
      <CtaBanner />
    </main>
  );
}
