import { Radio, History, Play, Heart, Share2, Check } from 'lucide-react'

export default function Experience() {
  const points = [
    'Dark mode that\'s easy on the eyes',
    'Lock screen controls',
    'Car mode for driving',
    'Wear OS & Apple Watch support'
  ]

  return (
    <section className="relative py-24 md:py-32 bg-navy-deep overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-crimson/5 blur-[120px] rounded-full -z-10" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Visuals Area (Mockups) */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center w-full lg:w-1/2 h-[500px] md:h-[600px]">
            {/* Center Background Glow for Phones */}
            <div className="absolute w-[400px] h-[400px] bg-crimson/10 blur-[80px] rounded-full" />
            
            {/* Left Phone (List) */}
            <div className="absolute left-0 xl:left-4 z-10 hidden md:block w-[200px] lg:w-[220px] h-[400px] lg:h-[450px] rounded-[38px] border-8 border-surface bg-navy shadow-2xl overflow-hidden opacity-40 translate-x-4 lg:translate-x-8">
               <div className="p-6 space-y-4 opacity-50">
                  <div className="h-2 w-20 bg-white/10 rounded-full mb-6" />
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-white/5" />
                      <div className="h-2 w-24 bg-white/5 rounded-full" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Phone (List) */}
            <div className="absolute right-0 xl:right-4 z-10 hidden md:block w-[200px] lg:w-[220px] h-[400px] lg:h-[450px] rounded-[38px] border-8 border-surface bg-navy shadow-2xl overflow-hidden opacity-40 -translate-x-4 lg:-translate-x-8">
               <div className="p-6 space-y-4 opacity-50 text-right flex flex-col items-end">
                  <div className="h-2 w-20 bg-white/10 rounded-full mb-6" />
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 flex-row-reverse">
                      <div className="h-8 w-8 rounded-lg bg-white/5" />
                      <div className="h-2 w-24 bg-white/5 rounded-full" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Center Phone (Player) - Focus */}
            <div className="relative z-20 w-[260px] md:w-[280px] lg:w-[300px] h-[520px] md:h-[560px] lg:h-[600px] rounded-[48px] border-[10px] border-surface bg-[#080812] shadow-[0_0_60px_rgba(233,69,96,0.15)] overflow-hidden">
               <div className="h-full w-full flex flex-col items-center justify-between p-8 pt-16 text-center">
                  <div className="relative flex flex-col items-center w-full">
                    <div className="absolute inset-0 bg-crimson/20 blur-[40px] rounded-full" />
                    <div className="relative h-32 w-32 lg:h-36 lg:w-36 rounded-full bg-navy border border-white/5 flex items-center justify-center shadow-2xl">
                      <div className="h-24 w-24 lg:h-28 lg:w-28 rounded-full border-2 border-crimson/20 flex items-center justify-center bg-linear-to-br from-crimson/5 to-transparent">
                          <Radio className="h-10 w-10 lg:h-12 lg:w-12 text-crimson drop-shadow-[0_0_8px_rgba(233,69,96,0.4)]" />
                      </div>
                    </div>
                    <div className="mt-8 space-y-1">
                      <h3 className="text-[18px] lg:text-[20px] font-bold text-white tracking-tight">Jazz Vibes FM</h3>
                      <p className="text-[10px] lg:text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">Live • 98.3 FM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <button className="text-white/30"><History className="h-4 w-4" /></button>
                    <button className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-crimson flex items-center justify-center shadow-lg shadow-crimson/30">
                        <div className="flex gap-1.5">
                          <div className="h-4 w-1 bg-white rounded-full" />
                          <div className="h-4 w-1 bg-white rounded-full" />
                        </div>
                    </button>
                    <button className="text-white/30"><Share2 className="h-4 w-4" /></button>
                  </div>

                  <div className="flex items-center justify-around w-full border-t border-white/5 pt-4 opacity-60">
                    <Radio className="h-4 w-4 text-crimson" />
                    <History className="h-4 w-4 text-white" />
                    <Play className="h-4 w-4 text-white" />
                    <Heart className="h-4 w-4 text-white" />
                  </div>
               </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-[12px] font-bold text-crimson uppercase tracking-[0.3em] mb-4">
              The Experience
            </p>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-8">
              Designed for <br className="hidden md:block" /> How You Listen
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/50 font-medium leading-[1.6] max-w-xl mb-12">
              Whether you're commuting, cooking, or winding down — RadioWave adapts to your moment with a beautiful, distraction-free interface.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-5 gap-x-12 w-full max-w-lg lg:max-w-none">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center transition-all group-hover:bg-crimson">
                    <Check className="h-3.5 w-3.5 text-crimson transition-colors group-hover:text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] md:text-[16px] font-semibold text-white/80 group-hover:text-white transition-colors">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
