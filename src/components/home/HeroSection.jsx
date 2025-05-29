import { motion } from 'framer-motion';
import { slideIn, scaleIn } from '../../utils/animations';

export default function HeroSection() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="relative min-h-[80vh] flex items-center"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <motion.div variants={slideIn} className="space-y-6">
          <motion.h1 
            variants={scaleIn}
            className="text-5xl md:text-6xl font-heading font-bold"
          >
            Swap Skills. 
            <span className="text-tech-red-500">Grow Together.</span>
          </motion.h1>
          
          <motion.p 
            variants={slideIn}
            className="text-xl text-gray-400"
          >
            A peer-powered platform to learn, teach, and connect through tech.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-tech-red-500 px-8 py-4 rounded-xl shadow-red"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          variants={scaleIn}
          className="relative"
        >
          {/* Add your hero image/illustration here */}
        </motion.div>
      </div>
    </motion.section>
  );
}
