import { motion } from 'framer-motion';

const feedback = [
  {
    id: 1,
    author: 'Alex Kim',
    rating: 5,
    text: 'Great React mentor! Clear explanations and patient teaching style.',
    verified: true,
    date: '2 days ago'
  },
  {
    id: 2,
    author: 'Maria Garcia',
    rating: 5,
    text: 'Helped me understand TypeScript generics. Very knowledgeable!',
    verified: true,
    date: '1 week ago'
  }
];

export default function FeedbackPanel() {
  return (
    <div className="glass-panel p-6">
      <h2 className="font-heading font-medium mb-6">Recent Feedback</h2>
      <div className="space-y-4">
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 rounded-lg bg-tech-dark-900/50"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.author}</span>
                {item.verified && (
                  <span className="text-xs bg-tech-red-500/20 text-tech-red-500 px-2 py-1 rounded">
                    Verified
                  </span>
                )}
              </div>
              <span className="text-tech-gray-100/50 text-sm">{item.date}</span>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < item.rating ? 'text-tech-red-500' : 'text-tech-gray-800'}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-tech-gray-100/70">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
