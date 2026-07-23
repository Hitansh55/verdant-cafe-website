export default function MenuCategoryLayout({ pageData }) {
  return (
    <div className="w-full h-full p-8 md:p-12 lg:p-16 flex flex-col font-sans overflow-hidden bg-[#F7F4ED]">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-dark/80 pb-6 mb-8 shrink-0">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-[#4a3629]">
          {pageData.title}
        </h2>
      </div>

      {/* Categories Columns */}
      <div className="flex-1 flex gap-8 md:gap-12 overflow-y-auto pr-4 custom-scrollbar">
        {/* We split categories into two columns if there are more than 2, else one column or let flex handle it */}
        <div className="flex-1 flex flex-col gap-10">
          {pageData.categories.map((category, idx) => (
            <div key={category.name} className="flex flex-col">
              <div className="inline-block bg-[#684b39] text-[#F7F4ED] px-4 py-2 rounded-lg font-bold tracking-widest text-sm md:text-base w-fit mb-6">
                {category.name}
              </div>
              
              <div className="flex flex-col gap-5">
                {category.items.map(item => (
                  <div key={item.name} className="flex flex-col group cursor-pointer">
                    <div className="flex justify-between items-end gap-4">
                      <span className="font-bold text-sm md:text-base text-[#4a3629] tracking-wide group-hover:text-[#2d5a27] transition-colors">
                        {item.name}
                      </span>
                      <div className="flex-1 border-b border-dashed border-[#4a3629]/30 mb-1 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <span className="font-bold text-[#4a3629] text-sm md:text-base">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <span className="text-xs md:text-sm text-[#4a3629]/70 mt-1 italic font-serif">
                        {item.desc}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
