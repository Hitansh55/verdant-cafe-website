import { MapPin, Mail } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F4ED] pt-24 pb-12 px-6 md:px-16 border-t border-[#4a3629]/10 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-[#2d5a27] mb-4">
            VERDANT
          </h2>
          <p className="text-[#4a3629]/70 font-sans text-sm tracking-wide leading-relaxed max-w-xs">
            A sanctuary for specialty coffee, ceremonial matcha, and moments of calm.
          </p>
        </div>

        {/* Order Online */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#4a3629]/50 mb-6 font-bold">
            Order Delivery
          </h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="group flex items-center gap-3 text-[#4a3629] hover:text-[#2d5a27] transition-colors">
              <span className="w-8 h-8 rounded-full border border-[#4a3629]/20 flex items-center justify-center font-bold font-serif text-sm group-hover:border-[#2d5a27]">S</span>
              <span className="font-sans text-sm tracking-widest uppercase relative pb-1">
                Swiggy
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2d5a27] transition-all duration-500 ease-out group-hover:w-full"></span>
              </span>
            </a>
            <a href="#" className="group flex items-center gap-3 text-[#4a3629] hover:text-[#2d5a27] transition-colors">
              <span className="w-8 h-8 rounded-full border border-[#4a3629]/20 flex items-center justify-center font-bold font-serif text-sm group-hover:border-[#2d5a27]">Z</span>
              <span className="font-sans text-sm tracking-widest uppercase relative pb-1">
                Zomato
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2d5a27] transition-all duration-500 ease-out group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#4a3629]/50 mb-6 font-bold">
            Connect
          </h3>
          <div className="flex flex-col gap-4">
            <a href="#" className="group flex items-center gap-3 text-[#4a3629] hover:text-[#2d5a27] transition-colors">
              <InstagramIcon className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              <span className="font-sans text-sm tracking-widest uppercase relative pb-1">
                Instagram
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2d5a27] transition-all duration-500 ease-out group-hover:w-full"></span>
              </span>
            </a>
            <div className="flex items-center gap-3 text-[#4a3629]/70 mt-2">
              <MapPin className="w-4 h-4 opacity-50" />
              <span className="font-sans text-sm">123 Cafe Ave, City Center</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#4a3629]/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#4a3629]/40 font-sans text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Verdant Cafe. All rights reserved.
        </p>
        <div className="flex gap-6 text-[#4a3629]/40 font-sans text-xs tracking-widest uppercase">
          <a href="#" className="hover:text-[#4a3629] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#4a3629] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
