import { motion, AnimatePresence } from 'framer-motion';

export default function MatchModal({ isOpen, onClose }) {
  const pulseVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: [0.8, 1.5, 0.8],
      opacity: [0.6, 0, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-tech-dark-950/80 backdrop-blur-lg" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-tech-dark-900/50 p-8 rounded-2xl border border-tech-red-500/10 backdrop-blur-xl max-w-md w-full"
          >
            {/* Radar Animation */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 rounded-full bg-tech-red-500/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="h-full w-1 bg-gradient-to-b from-tech-red-500 to-transparent origin-bottom" 
                     style={{ marginLeft: '50%' }} />
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl font-heading text-center mb-4"
            >
              Finding your tech match...
            </motion.h3>

            {/* Tips */}
            <div className="bg-tech-dark-950/50 rounded-lg p-4 mb-6">
              <p className="text-tech-gray-100/70 text-sm">
                Tip: Add more skills to find faster matches
              </p>
            </div>

            {/* Cancel Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="w-full py-3 px-4 rounded-lg bg-tech-dark-800 hover:bg-tech-dark-700 transition-colors text-tech-gray-100/80"
            >
              Cancel Search
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
