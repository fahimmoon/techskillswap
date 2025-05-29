import { motion } from 'framer-motion';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function IntroLoader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-tech-dark-950 flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              filter: ['drop-shadow(0 0 0px #FF3C38)', 'drop-shadow(0 0 10px #FF3C38)', 'drop-shadow(0 0 0px #FF3C38)']
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-16 h-16 text-tech-red-500"
          >
            <Logo className="w-full h-full" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-heading font-bold"
          >
            <span className="text-white">Tech</span><span className="text-tech-red-500">SkillSwap</span>
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-tech-red-500 to-rose-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
