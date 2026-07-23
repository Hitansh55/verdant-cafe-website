import { forwardRef } from 'react';

const BookPage = forwardRef(({ frontContent, backContent, zIndex = 1 }, ref) => {
  return (
    <div 
      className="absolute inset-y-0 right-0 w-1/2"
      style={{ 
        zIndex,
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d'
      }}
      ref={ref}
    >
      {/* FRONT FACE (Right side of a spread before flipping) */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#F7F4ED] paper-grain shadow-[0_0_15px_rgba(0,0,0,0.1)] border-l border-dark/10 overflow-hidden"
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none shadow-right"></div>
        {frontContent}
      </div>

      {/* BACK FACE (Left side of a spread after flipping) */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#F7F4ED] paper-grain shadow-[0_0_15px_rgba(0,0,0,0.1)] border-r border-dark/10 overflow-hidden"
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none shadow-left"></div>
        {backContent}
      </div>
    </div>
  );
});

BookPage.displayName = 'BookPage';
export default BookPage;
