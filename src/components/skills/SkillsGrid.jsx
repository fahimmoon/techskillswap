import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import { staggerChildren, scaleIn } from '../../utils/animations';

export default function SkillsGrid() {
  const skills = [
    {
      title: 'React Development',
      tags: ['React', 'JavaScript', 'Frontend'],
      description: 'Master modern React including hooks, context, and Redux'
    },
    {
      title: 'Machine Learning',
      tags: ['Python', 'AI', 'Data Science'],
      description: 'Learn ML fundamentals and practical applications'
    },
    // Add more skills as needed
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-tech-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          Popular Skills
        </h2>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-tech-dark-900 p-6 rounded-xl"
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
