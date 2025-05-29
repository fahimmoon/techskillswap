import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'swaps', label: 'My Swaps' },
  { id: 'tree', label: 'My Tree' },
  { id: 'messages', label: 'Messages' }
];

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('swaps');

  return (
    <div className="min-h-screen bg-tech-dark-950 pt-20">
      <div className="container mx-auto px-4">
        <div className="bg-tech-dark-800 rounded-xl p-6">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-tech-dark-700 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 ${
                  activeTab === tab.id
                    ? 'text-tech-red-500'
                    : 'text-tech-gray-100/70 hover:text-tech-gray-100'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-tech-red-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="min-h-[500px]">
            {/* Add your tab content components here */}
          </div>
        </div>
      </div>
    </div>
  );
}
