import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Learn a Skill',
    description: 'Choose what you want to learn and what you can teach others.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Find a Match',
    description: 'Get matched with peers who want to learn your skills and teach you theirs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Swap & Grow',
    description: 'Exchange knowledge in live sessions and track your progress together.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-tech-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-tech-red-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-tech-gray-100/70 text-lg max-w-2xl mx-auto">
            Three simple steps to start your peer-to-peer learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-tech-red-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-tech-dark-800 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-tech-red-500/20 blur-xl rounded-full" />
                    <div className="relative w-12 h-12 rounded-full bg-tech-dark-950 flex items-center justify-center text-tech-red-500">
                      {step.icon}
                    </div>
                  </div>
                  <span className="font-heading text-4xl font-bold text-tech-gray-100/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-tech-gray-100/70 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
