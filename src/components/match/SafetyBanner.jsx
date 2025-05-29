
import { motion } from 'framer-motion';

export default function SafetyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-tech-dark-900/50 border border-tech-red-500/10 rounded-xl p-4 mb-8"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-tech-red-500/10 flex items-center justify-center text-tech-red-500">
          🔒
        </div>
        <div>
          <h3 className="font-heading font-medium mb-1">Verified Users Only</h3>
          <p className="text-sm text-tech-gray-100/70">
            All swaps are peer-reviewed and monitored for quality assurance
          </p>
        </div>
      </div>
    </motion.div>
  );
}
