export default function Stats() {
  const stats = [
    { 
      value: '50K+', 
      labelLarge: 'Live Stations', 
      labelMedium: 'Live Stations', 
      labelSmall: 'Live Stations' 
    },
    { 
      value: '190+', 
      labelLarge: 'Countries', 
      labelMedium: 'Countries', 
      labelSmall: 'Countries' 
    },
    { 
      value: '12M+', 
      labelLarge: 'Active Listeners', 
      labelMedium: 'Listeners', 
      labelSmall: 'Listeners' 
    },
    { 
      value: '4.9★', 
      labelLarge: 'App Store Rating', 
      labelMedium: 'Rating', 
      labelSmall: 'App Store' 
    },
  ]

  return (
    <section className="relative py-12 md:py-16 bg-navy border-y border-white/5 overflow-hidden">
      {/* Grid Pattern - Very subtle */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.25]" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Desktop/Medium Layout: Horizontal Row */}
        <div className="hidden sm:flex items-center justify-between lg:justify-center lg:gap-32">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-[40px] md:text-[48px] font-extrabold tracking-[-0.03em] text-white leading-tight">
                {stat.value}
              </span>
              <span className="text-[12px] md:text-[13px] font-bold text-white/40 uppercase tracking-[0.15em] mt-1.5">
                <span className="hidden lg:inline">{stat.labelLarge}</span>
                <span className="inline lg:hidden">{stat.labelMedium}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Small Screen Layout: 2x2 Grid with Cards */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-surface border border-white/10 rounded-[28px] py-10 flex flex-col items-center justify-center text-center shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            >
              <span className="text-[34px] font-extrabold tracking-tight text-white leading-none">
                {stat.value}
              </span>
              <span className="text-[12px] font-bold text-white/30 uppercase tracking-[0.12em] mt-2.5">
                {stat.labelSmall}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
