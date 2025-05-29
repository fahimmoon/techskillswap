import { motion } from 'framer-motion';

export default function ProgressNode({ isActive }) {
  return (
    <motion.div
      animate={isActive ? {
        scale: [1, 1.2, 1],
        boxShadow: [
          "0 0 0 rgba(255, 60, 56, 0.4)",
          "0 0 20px rgba(255, 60, 56, 0.6)",
          "0 0 0 rgba(255, 60, 56, 0.4)"
        ]
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`w-4 h-4 rounded-full ${
        isActive ? 'bg-tech-red-500' : 'bg-tech-dark-800'
      }`}
    />
  );
}
