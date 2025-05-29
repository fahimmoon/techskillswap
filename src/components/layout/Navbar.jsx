import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { navbarAnimation, menuItemHover } from '../animations/variants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Skills', href: '/skills' },
    { title: 'Match', href: '/Match' },
    { title: 'Profile', href: '/Profile' },
  ];

  return (
    <motion.nav 
      variants={navbarAnimation}
      initial="initial"
      animate="animate"
      className="sticky top-0 z-50 bg-tech-dark-950/95 backdrop-blur-sm border-b border-tech-dark-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-heading font-bold">
            <Link to="/" className="font-heading font-bold text-2xl">
              Tech<span className="text-tech-red-500">SkillSwap</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.title}
                variants={menuItemHover}
                whileHover="hover"
                className="relative group"
              >
                <Link 
                  to={item.href}
                  className="text-tech-gray-100 hover:text-tech-red-500 px-1 py-2 text-sm font-medium"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tech-red-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/signup')}
              className="px-6 py-2 bg-tech-red-500 rounded-xl shadow-red"
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-tech-dark-900 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-tech-gray-100 hover:text-tech-red-500 hover:bg-tech-dark-800/50 rounded-lg"
                >
                  {item.title}
                </Link>
              ))}
              <button className="w-full px-6 py-2 bg-tech-red-500 rounded-xl mt-4">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
