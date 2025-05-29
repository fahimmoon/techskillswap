import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/150?img=1',
    quote: 'Found an amazing mentor who helped me master React. The peer learning approach works brilliantly.',
    rating: 5
  },
  // ...Add more testimonials
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className={`w-5 h-5 ${i < rating ? 'text-tech-red-500' : 'text-tech-dark-800'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-tech-dark-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-16"
        >
          What Our Learners Say
        </motion.h2>

        <div className="flex overflow-x-auto gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-hidden">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-0 bg-tech-dark-800 p-6 rounded-xl hover:shadow-glow transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-tech-gray-100/70">{testimonial.role}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-tech-gray-100/80 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
