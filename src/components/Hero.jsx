import { motion } from 'framer-motion';
import FloatingProductCard from './FloatingProductCard';
const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-cream flex items-center justify-center py-24">
      {/* Background Image with Cinematic Zoom */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hero_matcha.png" 
          alt="Luxury Iced Matcha Latte" 
          className="w-full h-full object-cover object-[70%_30%] scale-110 opacity-90"
        />
        {/* Darker gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Floating Statistics */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-[25%] left-[10%] text-white"
        >
          <div className="font-serif text-5xl font-light mb-1">25</div>
          <div className="text-sm tracking-widest uppercase opacity-80">Signature Drinks</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-[30%] right-[15%] text-white text-right"
        >
          <div className="font-serif text-5xl font-light mb-1">100%</div>
          <div className="text-sm tracking-widest uppercase opacity-80">Organic Ingredients</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-[20%] left-[15%] text-white"
        >
          <div className="font-serif text-5xl font-light mb-1">10+</div>
          <div className="text-sm tracking-widest uppercase opacity-80">Years of Craft</div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 mt-20">
        {/* Oversized Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-bold text-7xl sm:text-9xl md:text-[14rem] text-white tracking-tighter leading-none mb-4 drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          Verdant
        </motion.h1>

        {/* Subheading & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide mb-4 uppercase drop-shadow-lg">
            Crafted One Cup At A Time
          </h2>
          <p className="text-white/90 text-base md:text-xl mb-10 font-medium leading-relaxed drop-shadow-md">
            Experience ceremonial-grade matcha and handcrafted beverages made with precision, passion, and locally sourced ingredients.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-green text-white rounded-full font-medium tracking-wide shadow-xl shadow-primary-green/20 hover:bg-secondary-green transition-colors"
          >
            Reserve a Table
          </motion.button>
          
          <motion.button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold tracking-wide hover:bg-white/20 transition-colors shadow-lg"
          >
            Explore Menu
          </motion.button>
        </motion.div>

        {/* Delivery & Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-10 md:mt-12 pt-6 border-t border-white/20 w-full max-w-xl"
        >
          <a href="#" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium relative pb-1">
              Swiggy
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </span>
          </a>
          
          <a href="#" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium relative pb-1">
              Zomato
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </span>
          </a>

          <a href="#" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <InstagramIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium relative pb-1">
              Instagram
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Featured Signature Item (Only visible on Hero section) */}
      <FloatingProductCard />
    </div>
  );
};

export default Hero;
