const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ai', label: 'AI' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'devops', label: 'DevOps' }
];

export default function CategoryFilters({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                     ${active === category.id 
                       ? 'bg-tech-red-500 text-white shadow-[0_0_15px_rgba(255,60,56,0.3)]' 
                       : 'bg-tech-dark-900 text-gray-300 hover:bg-tech-dark-800'}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
