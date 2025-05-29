import { motion } from 'framer-motion';

const skills = [
  {
    id: 1,
    title: 'HTML & CSS',
    icon: '🎨',
    completed: true,
    level: 1,
  },
  {
    id: 2,
    title: 'JavaScript',
    icon: '⚡',
    completed: true,
    level: 1,
  },
  {
    id: 3,
    title: 'React',
    icon: '⚛️',
    completed: true,
    level: 2,
  },
  {
    id: 4,
    title: 'Node.js',
    icon: '🚀',
    completed: false,
    level: 2,
  },
  {
    id: 5,
    title: 'GraphQL',
    icon: '🔮',
    completed: false,
    level: 3,
  },
  {
    id: 6,
    title: 'TypeScript',
    icon: '📘',
    completed: false,
    level: 2,
  },
  {
    id: 7,
    title: 'Next.js',
    icon: '▲',
    completed: false,
    level: 3,
  },
  {
    id: 8,
    title: 'Docker',
    icon: '🐳',
    completed: false,
    level: 3,
  }
];

function SkillNode({ skill, isCompleted, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      <motion.div
        animate={isCompleted ? {
          boxShadow: [
            '0 0 15px rgba(255, 60, 56, 0.3)',
            '0 0 25px rgba(255, 60, 56, 0.5)',
            '0 0 15px rgba(255, 60, 56, 0.3)'
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className={`w-16 h-16 rounded-full flex items-center justify-center ${
          isCompleted ? 'bg-tech-red-500' : 'bg-tech-dark-800 hover:bg-tech-dark-700'
        } relative z-10 transition-colors`}
      >
        <span className="text-2xl">{skill.icon}</span>
      </motion.div>
      <div className="absolute -inset-2 bg-tech-red-500/20 rounded-full blur-md z-0" 
           style={{ opacity: isCompleted ? 0.5 : 0 }} />
      <p className="mt-2 text-center font-medium">{skill.title}</p>
    </motion.div>
  );
}

export default function SkillTree() {
  const handleSkillClick = (skillId) => {
    console.log(`Skill clicked: ${skillId}`);
    // Add your skill completion logic here
  };

  return (
    <section className="py-20 bg-tech-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-16"
        >
          My Skill Tree
        </motion.h2>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-tech-red-500 to-transparent" />

          {/* Skill Nodes */}
          <div className="relative space-y-20">
            {[1, 2, 3].map((level) => (
              <div key={level} className="flex justify-center gap-32">
                {skills
                  .filter(skill => skill.level === level)
                  .map(skill => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <SkillNode 
                        skill={skill} 
                        isCompleted={skill.completed}
                        onClick={() => handleSkillClick(skill.id)}
                      />
                    </motion.div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
