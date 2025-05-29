import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CtaBanner() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-tech-red-500 rounded-2xl p-12 text-center relative overflow-hidden"
      >
        <h2 className="text-4xl font-heading font-bold text-white mb-4">
          Start swapping tech skills today.
        </h2>
        <p className="text-white/90 mb-8">
          Join our community of developers helping each other grow.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/signup')}
          className="px-8 py-3 bg-white text-tech-red-500 rounded-xl font-medium shadow-lg"
        >
          Join Free Now
        </motion.button>
      </motion.div>
    </section>
  );
}
