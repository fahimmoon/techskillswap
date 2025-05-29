import { motion } from 'framer-motion';

const availableDates = [1, 5, 8, 12, 15, 19, 22, 26];

export default function AvailabilityCalendar() {
  return (
    <div className="glass-panel p-6">
      <h2 className="font-heading font-medium mb-6">Availability</h2>
      <div className="grid grid-cols-7 gap-2 mb-6">
        {[...Array(31)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className={`aspect-square rounded-lg flex items-center justify-center ${
              availableDates.includes(i + 1)
                ? 'bg-tech-red-500/20 text-tech-red-500 cursor-pointer'
                : 'bg-tech-dark-900/50'
            }`}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        className="w-full bg-tech-red-500/20 text-tech-red-500 py-2 rounded-lg"
      >
        Propose Swap Time
      </motion.button>
    </div>
  );
}
