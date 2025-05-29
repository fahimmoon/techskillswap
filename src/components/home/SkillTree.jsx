import { motion } from 'framer-motion';

export default function SkillTree() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-heading font-bold text-white mb-8">
        Visualize Your Growth Path
      </h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="h-96 relative bg-tech-dark-900 rounded-2xl p-8"
      >
        {/* Placeholder for actual skill tree visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-tech-red-500">Interactive Skill Tree Coming Soon</p>
        </div>
      </motion.div>
    </section>
  );
}
