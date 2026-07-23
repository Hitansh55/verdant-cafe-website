import { motion } from 'framer-motion';

const images = [
  '/gallery_1.png',
  '/gallery_2.png',
  '/gallery_3.png',
  '/gallery_4.png',
  '/gallery_1.png', // Duplicate for seamless looping
  '/gallery_2.png',
  '/gallery_3.png',
  '/gallery_4.png',
];

export default function Gallery() {
  return (
    <section className="w-full py-24 bg-[#F7F4ED] overflow-hidden relative z-20">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2d5a27] mb-4 tracking-tight">
          The Verdant Experience
        </h2>
        <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#4a3629]/60">
          A Glimpse Into Our Sanctuary
        </p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full flex overflow-hidden">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {images.map((src, index) => (
            <div 
              key={index}
              className="relative w-[300px] md:w-[450px] aspect-[4/5] md:aspect-video shrink-0 rounded-xl overflow-hidden shadow-2xl shadow-[#4a3629]/10 group"
            >
              <img 
                src={src} 
                alt="Cafe Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
