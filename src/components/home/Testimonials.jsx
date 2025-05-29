import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "David Lee",
      quote: "Found an amazing mentor who helped me master React. Now I'm teaching Python to others!",
      stars: 5
    },
    {
      id: 2,
      name: "Emma Wilson",
      quote: "The skill-swapping concept is brilliant. I've learned and taught more than I expected.",
      stars: 5
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">
        What Swappers Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-tech-dark-900 rounded-2xl shadow-red"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-tech-red-500 text-tech-red-500" />
              ))}
            </div>
            <p className="mb-4">"{testimonial.quote}"</p>
            <p className="font-medium text-white">{testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
