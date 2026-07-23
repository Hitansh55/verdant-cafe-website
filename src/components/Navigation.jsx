import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl mx-auto flex items-center justify-between px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-dark font-medium hover:opacity-70 transition-opacity cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="text-sm tracking-wide hidden md:block">Menu</span>
          </button>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-primary-green transition-colors">Our Story</a>
            <a href="#" className="hover:text-primary-green transition-colors">Shop</a>
            <a href="#" className="hover:text-primary-green transition-colors">Contact</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="#" className="text-2xl font-serif font-bold tracking-widest text-dark">
            VERDANT
          </a>
        </div>

        <div className="hidden md:block">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-green text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-lg shadow-primary-green/20"
          >
            Reserve Table
          </motion.button>
        </div>
      </motion.nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-cream/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-4 text-dark hover:rotate-90 transition-transform duration-300 cursor-pointer"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-8 font-serif text-4xl md:text-6xl tracking-tight"
            >
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-primary-green transition-colors relative group">
                Menu Book
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-primary-green transition-colors relative group">
                Our Story
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-primary-green transition-colors relative group">
                Shop Merch
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-primary-green transition-colors relative group">
                Contact
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
