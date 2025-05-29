import { motion } from 'framer-motion';

export default function Button({ children, className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-tech-red-500 hover:shadow-glow-hover transition-all px-6 py-2 rounded-lg font-semibold ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
