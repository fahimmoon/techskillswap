import { motion } from 'framer-motion';

export default function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: '0 0 25px rgba(255, 60, 56, 0.2)',
      }}
      className="bg-tech-dark-800 rounded-lg overflow-hidden transition-all duration-300"
    >
      <div className="h-1 bg-tech-red-500" />
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-3">
          {skill.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {skill.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-tech-dark-950 text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-tech-gray-100/70">{skill.description}</p>
      </div>
    </motion.div>
  );
}
