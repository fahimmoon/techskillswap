import { motion } from 'framer-motion';

const matches = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=1',
    matchScore: 95,
    online: true,
    canTeach: ['React', 'TypeScript', 'Node.js'],
    wantsToLearn: ['Python', 'Machine Learning'],
  },
  // Add more matches...
];

export default function MatchList({ selectedSkills, timeZone }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {matches.map((match) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-4 sm:p-6 hover:shadow-glow transition-shadow duration-300"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={match.avatar} alt={match.name} className="w-full h-full object-cover" />
              </div>
              {match.online && (
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 ring-2 ring-tech-dark-900" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-heading font-semibold">{match.name}</h3>
                <span className="px-2 py-1 rounded-full bg-tech-red-500/20 text-tech-red-500 text-sm">
                  {match.matchScore}% Match
                </span>
              </div>

              {/* Skills */}
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-sm text-tech-gray-100/70 mb-1">Can teach:</p>
                  <div className="flex flex-wrap gap-2">
                    {match.canTeach.map((skill) => (
                      <span key={skill} className="px-2 py-1 rounded-full bg-tech-dark-950 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-tech-gray-100/70 mb-1">Wants to learn:</p>
                  <div className="flex flex-wrap gap-2">
                    {match.wantsToLearn.map((skill) => (
                      <span key={skill} className="px-2 py-1 rounded-full bg-tech-dark-950 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 rounded-lg bg-tech-red-500 hover:shadow-glow transition-all duration-300"
              >
                Start Swap
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
