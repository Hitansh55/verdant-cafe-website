import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Eleanor Vance",
    role: "Local Guide",
    text: "The ceremonial matcha here is unlike anything else in the city. A true sanctuary of calm and unparalleled craftsmanship. The attention to detail is simply breathtaking.",
  },
  {
    name: "James Harrington",
    role: "Coffee Connoisseur",
    text: "Verdant sets a new standard for specialty coffee. The pour-over Ethiopian roast was bright, complex, and flawlessly executed. The interior design alone is worth the visit.",
  },
  {
    name: "Sophie Chen",
    role: "Food Critic",
    text: "Every element at Verdant feels intentionally curated. From the minimalist ceramics to the perfectly balanced house blend, it is a masterclass in modern cafe culture.",
  }
];

export default function Reviews() {
  return (
    <section className="w-full py-24 bg-[#F7F4ED] relative z-20 border-t border-[#4a3629]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-2 mb-6"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-[#2d5a27] text-[#2d5a27]" />
            ))}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-[#2d5a27] mb-6 tracking-tight max-w-2xl leading-tight"
          >
            Words From Our Patrons
          </motion.h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + (idx * 0.2) }}
              className="flex flex-col items-center text-center p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-[#4a3629]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="font-serif text-xl md:text-2xl text-[#4a3629]/90 italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <h4 className="font-sans font-medium text-sm tracking-widest uppercase text-[#2d5a27] mb-1">
                  {review.name}
                </h4>
                <p className="font-sans text-xs text-[#4a3629]/50 tracking-wider">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
