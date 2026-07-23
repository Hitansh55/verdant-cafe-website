import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookPage from './BookPage';
import ArtworkLayout from './ArtworkLayout';
import MenuCategoryLayout from './MenuCategoryLayout';
import { menuData } from './menuData';

gsap.registerPlugin(ScrollTrigger);

export default function MenuBook() {
  const containerRef = useRef(null);
  const bookRef = useRef(null);
  const pagesRef = useRef([]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalSpreads = menuData.length;

  useEffect(() => {
    // Media Query for mobile (disable 3D flip for narrow screens)
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Fallback handled by CSS/render

    const ctx = gsap.context(() => {
      // Timeline for scroll-based flipping
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalSpreads * 35}%`,
          scrub: 1, // Smooth interpolation (lerp)
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update page progress indicator
            const progress = self.progress;
            // Roughly calculate which page we are on
            const newPage = Math.min(
              Math.floor(progress * totalSpreads),
              totalSpreads - 1
            );
            setCurrentPage(newPage);
          }
        }
      });

      // Entry sequence: Book zooms in slightly and opens cover
      tl.fromTo(bookRef.current, 
        { scale: 0.9, y: 50, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      // Animate pages sequentially
      // For N items, we have N pages.
      pagesRef.current.forEach((page, index) => {
        if (!page) return;

        // Shadow adjustments during rotation
        const rightShadow = page.querySelector('.shadow-right');
        const leftShadow = page.querySelector('.shadow-left');

        const pageTl = gsap.timeline();
        
        // At start of flip, increase right shadow
        pageTl.to(rightShadow, { opacity: 0.6, duration: 0.3 }, 0)
              // Rotate page with physical Z-separation to prevent Safari 3D intersection bugs
              .fromTo(page, 
                { rotateY: 0, z: (totalSpreads - index) * 5 }, 
                { rotateY: -180, z: (index + 1) * 5, duration: 1, ease: "power1.inOut" }, 
                0
              )
              // Mid-flip: transition shadow to left side
              .to(rightShadow, { opacity: 0, duration: 0.2 }, 0.5)
              .fromTo(leftShadow, { opacity: 0.6 }, { opacity: 0, duration: 0.3 }, 0.5);

        tl.add(pageTl, `+=${0.1}`); // add slight delay between scrolls
      });

      // Exit sequence: Zoom out gently
      tl.to(bookRef.current, { scale: 0.95, opacity: 0.8, duration: 0.5, ease: "power2.inOut" });
    }, containerRef);

    return () => ctx.revert();
  }, [totalSpreads]);

  // Handle manual navigation by injecting scroll position
  const handleNav = (dir) => {
    const scrollAmount = window.innerHeight * 0.35;
    if (dir === 'next') {
      window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    } else if (dir === 'prev') {
      window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-cream overflow-hidden pt-24 pb-8 flex flex-col items-center">
      
      {/* 3D Book Container */}
      <div 
        className="absolute inset-0 flex items-center justify-center hidden md:flex"
        style={{ perspective: '2000px' }}
      >
        <div 
          ref={bookRef}
          className="relative w-[90vw] max-w-[1200px] h-[75vh] max-h-[800px] shadow-2xl rounded-sm"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Static Back Cover (left side) */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[var(--color-cream)] border-r border-dark/10 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.05)] paper-grain z-0 flex items-center justify-center">
          </div>

          {/* Dynamic Pages */}
          {menuData.map((pageData, idx) => {
            // zIndex decreases so first page is on top
            const zIndex = totalSpreads - idx;
            
            return (
              <BookPage 
                key={pageData.title + idx}
                ref={el => pagesRef.current[idx] = el}
                zIndex={zIndex}
                // Front is the text (right side of spread N)
                frontContent={<MenuCategoryLayout pageData={pageData} />}
                // Back is the art (left side of spread N+1)
                backContent={
                  idx < totalSpreads - 1 
                  ? <ArtworkLayout src={menuData[idx+1].image} alt={menuData[idx+1].title} />
                  : <div className="w-full h-full bg-[#F7F4ED]"></div>
                }
              />
            );
          })}

          {/* Static First Left Page (visible before any flips) */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-[var(--color-cream)] border-r border-dark/10 paper-grain z-10 pointer-events-none">
            <ArtworkLayout src={menuData[0].image} alt={menuData[0].title} />
          </div>

          {/* Book Center Fold Shadow */}
          <div className="absolute inset-y-0 left-1/2 w-8 -ml-4 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-50"></div>
        </div>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-8 right-12 font-serif text-lg tracking-widest text-dark/70">
          PAGE {String(currentPage + 1).padStart(2, '0')} / {String(totalSpreads).padStart(2, '0')}
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
          <span className="text-xs uppercase tracking-widest font-sans mb-2">
            {currentPage === 0 ? 'Scroll to Explore' : 'Continue Turning Pages'}
          </span>
          <div className="w-[1px] h-12 bg-dark"></div>
        </div>

        {/* Manual Navigation */}
        <div className="absolute inset-y-0 left-8 flex items-center">
          <button 
            onClick={() => handleNav('prev')}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all cursor-pointer pointer-events-auto"
          >
            <ChevronLeft className="text-dark/70" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-8 flex items-center">
          <button 
            onClick={() => handleNav('next')}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-white/40 hover:scale-110 transition-all cursor-pointer pointer-events-auto"
          >
            <ChevronRight className="text-dark/70" />
          </button>
        </div>
      </div>

      {/* Mobile Fallback: Horizontal Swipe Stack */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory h-full w-full pb-8 px-4 gap-4 no-scrollbar bg-[var(--color-cream)] paper-grain">
        {menuData.map((pageData, idx) => (
          <div key={idx} className="shrink-0 w-[90vw] h-full snap-center rounded-lg shadow-xl overflow-hidden bg-cream flex flex-col">
             <div className="h-2/5 w-full p-4 pb-0">
               <img src={pageData.image} alt={pageData.title} className="w-full h-full object-cover rounded-md" />
             </div>
             <div className="h-3/5 w-full overflow-y-auto">
               <MenuCategoryLayout pageData={pageData} />
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
