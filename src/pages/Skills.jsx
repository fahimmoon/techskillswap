import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/skills/SearchBar';
import CategoryFilters from '../components/skills/CategoryFilters';
import SkillsGrid from '../components/skills/SkillsGrid';
import RecommendedSkills from '../components/skills/RecommendedSkills';
import AddSkillModal from '../components/skills/AddSkillModal';
import { pageVariants, staggerContainer, fadeInUp } from '../utils/animations';

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16 sm:pt-20 min-h-screen bg-tech-dark-950"
    >
      <motion.div
        variants={staggerContainer}
        className="container mx-auto px-4 space-y-6 sm:space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-gray-100">
            Available Skills
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-2 bg-tech-red-500 hover:bg-tech-red-600 
                     rounded-lg text-white font-medium transition-all duration-300"
          >
            Add New Skill
          </button>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
        </div>

        <motion.section variants={fadeInUp} className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-gray-100 mb-4 sm:mb-6">
            🔥 Trending Skills
          </h2>
          <RecommendedSkills />
        </motion.section>

        <section>
          <h2 className="text-2xl font-heading font-semibold text-gray-100 mb-6">
            All Skills
          </h2>
          <SkillsGrid 
            searchQuery={searchQuery}
            category={activeCategory}
          />
        </section>

        <AddSkillModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </motion.div>
    </motion.div>
  );
}
