import { motion } from 'framer-motion';
import { Code2, Clock } from 'lucide-react';

const availableSkills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Machine Learning',
  'AWS', 'Docker', 'GraphQL', 'Vue.js', 'Angular'
];

const timeZones = [
  'UTC-8', 'UTC-5', 'UTC+0', 'UTC+1', 'UTC+8'
];

export default function SkillFilters({ selectedSkills, onSkillsChange, timeZone, onTimeZoneChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-panel p-8 space-y-8 rounded-2xl shadow-lg"
    >
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="w-5 h-5 text-tech-red-500" />
          <h3 className="font-heading font-medium">Skills</h3>
        </div>
        <div className="space-y-2">
          {availableSkills.map((skill) => (
            <motion.button
              key={skill}
              whileHover={{ x: 4, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
              initial={false}
              animate={{
                backgroundColor: selectedSkills.includes(skill) 
                  ? "rgba(239, 68, 68, 1)" 
                  : "transparent"
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-colors
                         ${selectedSkills.includes(skill)
                           ? 'text-white shadow-red'
                           : 'hover:text-tech-red-500'}`}
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-medium mb-4">Time Zone</h3>
        <select
          value={timeZone}
          onChange={(e) => onTimeZoneChange(e.target.value)}
          className="w-full bg-tech-dark-800 px-3 py-2 rounded-lg"
        >
          {timeZones.map((tz) => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </select>
      </div>
    </motion.div>
  );
}
