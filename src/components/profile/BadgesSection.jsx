import { motion } from 'framer-motion';

const badges = [
  { id: 1, name: '10 Swaps', icon: '🔄', description: 'Completed 10 successful skill swaps' },
  { id: 2, name: 'Top Mentor', icon: '⭐', description: 'Consistently high-rated mentor' },
  { id: 3, name: 'Quick Responder', icon: '⚡', description: 'Responds within 24 hours' }
];

export default function BadgesSection() {
  return (
    <div className="glass-panel p-6">
      <h2 className="font-heading font-medium mb-6">Badges & Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {badges.map(badge => (
          <motion.div
            key={badge.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-4 rounded-lg bg-tech-dark-900/50 border border-tech-red-500/10"
          >
            <span className="text-2xl mb-2">{badge.icon}</span>
            <h3 className="font-medium text-sm mb-1">{badge.name}</h3>
            <p className="text-xs text-tech-gray-100/50 text-center">
              {badge.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
