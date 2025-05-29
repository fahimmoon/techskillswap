import Layout from './components/layout/Layout';
import HeroSection from './components/home/HeroSection';
import HowItWorks from './components/home/HowItWorks';
import SkillsGrid from './components/skills/SkillsGrid';

function App() {
  return (
    <div className="min-h-screen bg-tech-dark-950 text-tech-gray-100 font-body">
      <main className="pt-16">
        <Layout>
          <HeroSection />
          <HowItWorks />
          <SkillsGrid />
          {/* Additional sections will be added here */}
        </Layout>
      </main>
    </div>
  );
}

export default App;
