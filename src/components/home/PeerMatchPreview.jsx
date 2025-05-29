import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function PeerMatchPreview() {
  const matches = [
    { id: 1, name: "Alex Chen", skills: ["React", "TypeScript"], match: 95 },
    { id: 2, name: "Sarah Kim", skills: ["Python", "ML"], match: 88 },
    { id: 3, name: "Mike Ross", skills: ["AWS", "Docker"], match: 85 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-heading font-bold text-white mb-8">Find Your Tech Match</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {matches.map((match) => (
          <motion.div
            key={match.id}
            whileHover={{ scale: 1.02 }}
            className="flex-none w-72 p-6 bg-tech-dark-900 rounded-2xl shadow-red"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-tech-dark-800 rounded-full">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-medium">{match.name}</h3>
                <span className="text-tech-red-500">{match.match}% Match</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {match.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-tech-dark-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <button className="w-full py-2 bg-tech-red-500 rounded-xl hover:bg-tech-red-600 transition-colors">
              Swap Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
