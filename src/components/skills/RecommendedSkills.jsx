const dummyTrending = [
  { id: 1, title: 'React Native', level: 'Intermediate', swapCount: 156 },
  { id: 2, title: 'Next.js', level: 'Beginner', swapCount: 234 },
  { id: 3, title: 'Machine Learning', level: 'Advanced', swapCount: 89 },
  { id: 4, title: 'Docker', level: 'Intermediate', swapCount: 167 },
];

export default function RecommendedSkills() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
      {dummyTrending.map(skill => (
        <div
          key={skill.id}
          className="flex-shrink-0 w-72 p-4 bg-tech-dark-900 rounded-xl border-t-2 
                   border-tech-red-500 hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-100">{skill.title}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-tech-red-500/20 
                         text-tech-red-500">{skill.level}</span>
          </div>
          <p className="text-sm text-gray-400">{skill.swapCount} active swaps</p>
        </div>
      ))}
    </div>
  );
}
