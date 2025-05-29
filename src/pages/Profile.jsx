import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from 'lucide-react';
import SkillTree from '../components/progress/SkillTree';
import UserHeader from '../components/profile/UserHeader';
import SkillsOverview from '../components/profile/SkillsOverview';
import BadgesSection from '../components/profile/BadgesSection';
import FeedbackPanel from '../components/profile/FeedbackPanel';
import AvailabilityCalendar from '../components/profile/AvailabilityCalendar';
import { pageVariants, fadeInUp } from '../utils/animations';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'tree', label: 'Skill Tree' },
    { id: 'swaps', label: 'Swaps' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16 sm:pt-20 min-h-screen bg-tech-dark-950"
    >
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-10">
        <motion.div variants={fadeInUp}>
          <UserHeader />
        </motion.div>
        
        {/* Scrollable Tabs on Mobile */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 mb-6 sm:mb-10">
          <div className="flex gap-4 sm:gap-6 border-b border-tech-gray-800 px-4 sm:px-0 min-w-max sm:min-w-0">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                whileHover={{ y: -2 }}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-3 sm:px-4 relative whitespace-nowrap text-sm sm:text-base ${
                  activeTab === tab.id ? 'text-tech-red-500' : 'text-tech-gray-100/70'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-tech-red-500"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Responsive Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 sm:space-y-8"
          >
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
              >
                <div className="space-y-6 sm:space-y-8">
                  <SkillsOverview />
                  <BadgesSection />
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <FeedbackPanel />
                  <AvailabilityCalendar />
                </div>
              </motion.div>
            )}
            {activeTab === 'tree' && <SkillTree />}
            {/* Add other tab contents as needed */}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
