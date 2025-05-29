import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

import MatchRadar from '../components/match/MatchRadar';
import MatchList from '../components/match/MatchList';
import SkillFilters from '../components/match/SkillFilters';
import MatchModal from '../components/match/MatchModal';
import SafetyBanner from '../components/match/SafetyBanner';
import { pageVariants, staggerContainer, fadeInUp } from '../utils/animations';

export default function Match() {
  const [isSearching, setIsSearching] = useState(false);
  const [isMatchFound, setIsMatchFound] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [timeZone, setTimeZone] = useState('UTC');

  const handleQuickMatch = () => {
    setIsSearching(true);
    // Simulate finding a match after 3 seconds
    setTimeout(() => {
      setIsSearching(false);
      setIsMatchFound(true);
    }, 3000);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-tech-dark-950 pt-16 sm:pt-20"
    >
      <motion.div
        variants={staggerContainer}
        className="container mx-auto px-4 sm:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8"
      >
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Find Your Tech Match
          </motion.h1>
          <p className="text-tech-gray-100/70 text-base sm:text-lg">
            Connect with peers who want to learn your skills and teach you theirs
          </p>
        </motion.div>

        {/* Enhanced Quick Match Button */}
        <div className="flex justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuickMatch}
            className="bg-tech-red-500 px-8 py-4 rounded-2xl font-medium text-xl
                     shadow-red hover:shadow-red transition-all duration-300
                     flex items-center gap-3"
          >
            <Zap className="w-6 h-6" />
            Quick Match
          </motion.button>
        </div>

        {/* Safety Banner */}
        <SafetyBanner />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-4 sm:gap-8">
          {/* Sidebar - Full width on mobile, side on desktop */}
          <aside className="order-2 lg:order-1">
            <SkillFilters 
              selectedSkills={selectedSkills}
              onSkillsChange={setSelectedSkills}
              timeZone={timeZone}
              onTimeZoneChange={setTimeZone}
            />
          </aside>

          {/* Main Content - Full width on mobile */}
          <main className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {isSearching ? (
              <MatchRadar />
            ) : (
              <MatchList selectedSkills={selectedSkills} timeZone={timeZone} />
            )}
          </main>
        </div>

        {/* Match Found Modal */}
        <MatchModal 
          isOpen={isMatchFound} 
          onClose={() => setIsMatchFound(false)}
        />
      </motion.div>
    </motion.div>
  );
}
