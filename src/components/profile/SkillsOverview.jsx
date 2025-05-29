import { motion } from 'framer-motion';

const teachSkills = [
  { name: 'React', rating: 5, endorsements: 12 },
  { name: 'TypeScript', rating: 4, endorsements: 8 },
  { name: 'Next.js', rating: 4, endorsements: 6 }
];

const learnSkills = [
  { name: 'Python', rating: 2, endorsements: 0 },
  { name: 'AWS', rating: 1, endorsements: 0 },
  { name: 'Node.js', rating: 2, endorsements: 1 }
];

export default function SkillsOverview() {
  return (
    <div className="glass-panel p-6">
      <h2 className="font-heading font-medium mb-6">Skills Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-sm text-tech-gray-100/70 mb-4">Can Teach</h3>
          <div className="space-y-3">
            {teachSkills.map(skill => (
              <SkillTag key={skill.name} skill={skill} type="teach" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm text-tech-gray-100/70 mb-4">Wants to Learn</h3>
          <div className="space-y-3">
            {learnSkills.map(skill => (
              <SkillTag key={skill.name} skill={skill} type="learn" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillTag({ skill, type }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between bg-tech-dark-900/50 p-3 rounded-lg"
    >
      <div className="flex items-center gap-2">
        <span>{skill.name}</span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${
                i < skill.rating ? 'text-tech-red-500' : 'text-tech-gray-800'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <span className="text-sm text-tech-gray-100/50">
        {skill.endorsements} {skill.endorsements === 1 ? 'endorsement' : 'endorsements'}
      </span>
    </motion.div>
  );
}
