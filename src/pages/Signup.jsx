import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageVariants } from '../utils/animations';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-tech-dark-950 pt-16 sm:pt-20 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">Create Account</h1>
            <p className="text-tech-gray-100/70">Join the skill-swapping community</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 bg-tech-dark-900 rounded-lg border border-tech-dark-700 focus:border-tech-red-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-tech-dark-900 rounded-lg border border-tech-dark-700 focus:border-tech-red-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  required
                  className="w-full p-3 bg-tech-dark-900 rounded-lg border border-tech-dark-700 focus:border-tech-red-500"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-tech-red-500 rounded-lg font-medium"
                type="submit"
              >
                Create Account
              </motion.button>
            </form>
          </motion.div>

          <p className="text-center mt-6 text-tech-gray-100/70">
            Already have an account?{' '}
            <Link to="/login" className="text-tech-red-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
