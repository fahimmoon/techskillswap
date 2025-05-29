import { motion } from 'framer-motion';

export default function UserHeader() {
  return (
    <div className="flex items-start gap-8 mb-12">
      {/* Avatar */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-4 border-tech-red-500/50 overflow-hidden">
          <img
            src="/placeholder-avatar.jpg"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-tech-dark-950" />
      </div>

      {/* User Info */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Sarah Chen</h1>
            <p className="text-tech-gray-100/70">Frontend Developer</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-tech-red-500 px-6 py-2 rounded-lg shadow-glow hover:shadow-glow-hover ml-auto"
          >
            Request Swap
          </motion.button>
        </div>
        
        <p className="text-tech-gray-100/70 mb-4 max-w-2xl">
          Passionate about React and UI/UX. Looking to learn Python and backend development.
          Available for pair programming and knowledge sharing.
        </p>

        {/* Level Progress */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">Level 5 Mentor</span>
            <span className="text-tech-gray-100/50 text-sm">2,450 XP</span>
          </div>
          <div className="h-2 bg-tech-dark-900 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-tech-red-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
