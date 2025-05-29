import { useState } from 'react';

export default function AddSkillModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'frontend',
    level: 'beginner',
    tags: ''
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center 
                    justify-center p-4 z-50">
      <div className="bg-tech-dark-900 rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-heading font-semibold text-gray-100">Add New Skill</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200 text-2xl leading-none">
            ×
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Skill Title"
            className="w-full p-3 bg-tech-dark-950 rounded-lg border border-gray-700 
                     text-gray-100 focus:border-tech-red-500"
          />
          <select className="w-full p-3 bg-tech-dark-950 rounded-lg border border-gray-700 
                          text-gray-100 focus:border-tech-red-500">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="mobile">Mobile</option>
            <option value="devops">DevOps</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-tech-red-500 hover:bg-tech-red-600 rounded-lg 
                     text-white font-medium transition-all duration-300"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
}
