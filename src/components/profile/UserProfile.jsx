import { motion } from 'framer-motion';

export default function UserProfile({ user }) {
  return (
    <div className="bg-tech-dark-800 rounded-xl p-6">
      <div className="flex items-center gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-tech-red-500">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </div>
          {user.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full" />
          )}
        </motion.div>
        <div>
          <h3 className="font-heading font-semibold text-xl">{user.name}</h3>
          <p className="text-tech-gray-100/70">{user.title}</p>
        </div>
      </div>
    </div>
  );
}
