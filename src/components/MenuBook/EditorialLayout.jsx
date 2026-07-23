export default function EditorialLayout({ coffee }) {
  return (
    <div className="w-full h-full p-10 md:p-14 lg:p-20 flex flex-col justify-between font-serif">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-dark/20 pb-8 mb-8">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-none tracking-tight">
          Perfiles <span className="italic font-light">de</span><br />
          <span className="italic font-light">Cafe</span>
        </h2>
        <div className="text-right text-sm uppercase tracking-widest text-dark/60 max-w-[120px]">
          Cafe del Tolima
        </div>
      </div>

      {/* Coffee Data */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Title */}
        <div className="flex items-center gap-4 mb-4 group cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[var(--color-secondary-green)] group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider relative">
            {coffee.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-dark transition-all duration-300 group-hover:w-full"></span>
          </h3>
          <div className="flex-1 border-b border-dashed border-dark/30 ml-4 hidden md:block"></div>
          <span className="text-sm font-sans tracking-widest uppercase ml-auto opacity-70">
            {coffee.category}
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-sm md:text-base font-sans mt-6">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Caficultor</span>
            <span className="font-medium text-dark">{coffee.farmer}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Depto.</span>
            <span className="font-medium text-dark">{coffee.department}</span>
          </div>
          <div className="flex flex-col row-span-2 hidden md:flex items-end justify-start text-right">
             <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Packaging</span>
             <span className="font-medium text-dark text-sm max-w-[100px]">{coffee.packaging}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Municipio</span>
            <span className="font-medium text-dark">{coffee.municipality}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Altura</span>
            <span className="font-medium text-dark">{coffee.altitude}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Variedad</span>
            <span className="font-medium text-dark">{coffee.variety}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest opacity-50 mb-1">Proceso</span>
            <span className="font-medium text-dark">{coffee.process}</span>
          </div>
        </div>

        {/* Tasting Notes */}
        <div className="mt-8 flex gap-4 md:gap-8 items-start">
          <span className="text-xs uppercase tracking-widest font-sans opacity-50 mt-1">Taza</span>
          <p className="font-serif text-lg md:text-xl leading-relaxed text-dark/90 italic max-w-sm">
            {coffee.notes}
          </p>
        </div>
      </div>

      {/* Footer Price */}
      <div className="mt-8 pt-8 flex justify-end">
        <span className="text-3xl md:text-4xl font-serif italic text-[var(--color-primary-green)] tracking-tighter">
          ${coffee.price}
        </span>
      </div>
    </div>
  );
}
