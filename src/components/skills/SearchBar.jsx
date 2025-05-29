export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search skills..."
        className="w-full pl-12 pr-4 py-3 bg-tech-dark-900 border-2 border-tech-red-500/50 
                   rounded-xl text-gray-100 placeholder-gray-400
                   focus:border-tech-red-500 focus:ring-2 focus:ring-tech-red-500/20 
                   transition-all duration-300"
      />
    </div>
  );
}
