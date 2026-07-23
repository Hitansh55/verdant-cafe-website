export default function ArtworkLayout({ src, alt }) {
  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-16 flex items-center justify-center bg-[#F7F4ED]">
      <div className="w-full h-full relative shadow-xl rounded-sm overflow-hidden border-8 border-white/50">
        <img 
          src={src} 
          alt={alt || "Menu Artwork"} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
