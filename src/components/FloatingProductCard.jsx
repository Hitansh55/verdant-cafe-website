import { motion } from 'framer-motion';

const FloatingProductCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-8 right-8 z-40 hidden lg:flex"
    >
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-[28px] p-3 flex items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.1)] w-80 cursor-pointer group"
      >
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shrink-0">
          <img 
            src="/featured_matcha.png" 
            alt="Featured Iced Matcha" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
        <div className="flex flex-col pr-2 text-dark">
          <span className="text-xs font-semibold tracking-wider text-primary-green uppercase mb-1">Featured Signature</span>
          <h4 className="font-serif font-bold text-lg leading-tight mb-1">Ceremonial Iced Matcha</h4>
          <div className="flex justify-between items-center w-full">
            <span className="text-sm opacity-70">Organic stone-ground</span>
            <span className="font-medium">$8.50</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingProductCard;
