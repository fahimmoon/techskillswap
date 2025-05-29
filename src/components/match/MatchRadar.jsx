import { motion } from 'framer-motion';

export default function MatchRadar() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative w-64 h-64">
        {/* Radar Circles */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-tech-red-500/30"
            animate={{
              scale: [1, 2],
              opacity: [0.3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear"
            }}
          />
        ))}

        {/* Scanning Line */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="h-32 w-[1px] bg-gradient-to-b from-tech-red-500 to-transparent mx-auto origin-bottom" />
        </motion.div>

        {/* Center Point */}
        <div className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-tech-red-500 shadow-glow" />
      </div>

      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8 text-xl font-heading text-center"
      >
        Finding your perfect match...
      </motion.p>

      <div className="relative h-80">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 border-2 border-tech-red-500 rounded-full"
        />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute h-1 w-1/2 bg-tech-red-500/50 origin-left top-1/2 left-1/2"
        />
      </div>
    </div>
  );
}
