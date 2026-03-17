import { Play, Apple, Smartphone, Star, Radio, History, Share2, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-crimson/5 blur-[140px] rounded-full -z-10" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          
          {/* Text Content Area */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/10 border border-crimson/20 mb-8">
              <div className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-crimson">
                50,000+ stations live now
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[44px] leading-[1.05] sm:text-[56px] md:text-[72px] font-extrabold tracking-[-0.03em] text-white transition-all">
              The World's <br className="hidden sm:block" />
              Radio, <span className="text-transparent bg-clip-text bg-linear-to-r from-crimson to-amber">In Your Pocket</span>
            </h1>

            {/* Subline */}
            <p className="mt-8 text-base md:text-[18px] text-white/50 leading-[1.6] max-w-xl font-medium">
              Stream thousands of live radio stations from every genre and country — free, forever. HD audio. Zero buffering.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary Button with Glow */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute inset-x-0 bottom-0 h-full w-full bg-crimson/40 blur-[24px] rounded-2xl opacity-100 group-hover:bg-crimson/60 transition-all" />
                <button type="button" className="relative flex items-center justify-center gap-3 bg-crimson hover:bg-crimson/90 text-white px-8 py-4.5 rounded-2xl font-bold text-[16px] transition-all w-full sm:w-auto active:scale-[0.98]">
                  <Play className="fill-current h-4.5 w-4.5" />
                  Listen Now — Free
                </button>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button type="button" className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4.5 rounded-2xl font-bold text-white text-[15px] transition-all">
                  <Apple className="h-4.5 w-4.5" />
                  App Store
                </button>
                <button type="button" className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4.5 rounded-2xl font-bold text-white text-[15px] transition-all">
                  <Play className="h-4.5 w-4.5 fill-white" />
                  Play Store
                </button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['bg-crimson', 'bg-mint', 'bg-amber', 'bg-purple'].map((color, i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-[#080812] ${color}`} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                  ))}
                </div>
                <p className="text-[13px] font-medium text-white/50">
                  12M+ listeners
                </p>
              </div>
            </div>
          </div>

          {/* Visuals Area (Mockups) */}
          <div className="relative w-full lg:w-auto flex flex-col items-center justify-center mt-12 lg:mt-0">
            {/* Desktop/Large Layout: Two Phones side-by-side (hidden on medium/small) */}
            <div className="hidden xl:flex items-end gap-0">
               {/* Browser Mockup */}
               <div className="relative z-10 w-[260px] h-[520px] rounded-[42px] border-[8px] border-[#10101e] bg-[#0a0a14] shadow-2xl overflow-hidden translate-y-12">
                   <div className="p-6 space-y-5">
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em]">Browse Stations</p>
                      {[
                        { name: 'Jazz Vibes FM', color: 'bg-crimson', active: true },
                        { name: 'Chill Beats Radio', color: 'bg-mint' },
                        { name: 'Classic Rock 101', color: 'bg-amber' },
                        { name: 'Global Pop Hits', color: 'bg-purple' },
                        { name: 'Deep Space FM', color: 'bg-blue-500' },
                      ].map((station, i) => (
                        <div key={i} className="flex items-center justify-between group cursor-pointer">
                          <div className="flex items-center gap-3">
                             <div className={`h-8 w-8 rounded-xl ${station.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                <Radio className="h-4 w-4 text-white" />
                             </div>
                             <span className="text-[12px] font-bold text-white/80">{station.name}</span>
                          </div>
                          {station.active && <div className="h-1.5 w-1.5 rounded-full bg-crimson" />}
                        </div>
                      ))}
                   </div>
                   <div className="absolute top-4 right-6 flex items-center gap-2 px-2 py-1 rounded-full bg-mint/10 border border-mint/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-mint" />
                      <span className="text-[9px] font-bold text-mint">HD Active</span>
                   </div>
               </div>
               
               {/* Player Mockup */}
               <div className="relative z-20 w-[300px] h-[600px] rounded-[48px] border-[10px] border-[#10101e] bg-[#080812] shadow-[0_0_80px_rgba(233,69,96,0.1)] overflow-hidden -ml-16">
                  <PhoneUI />
               </div>
            </div>

            {/* Medium Layout: 3 Phones (visible on md and lg, hidden on xl and sm) */}
            <div className="hidden md:flex xl:hidden items-end justify-center w-full max-w-4xl gap-4 h-[550px]">
               {/* Back Left */}
               <div className="w-[200px] h-[400px] rounded-[32px] border-[6px] border-[#10101e] bg-[#0a0a14] opacity-40 overflow-hidden translate-y-4">
                  <PhoneUI isMini />
               </div>
               {/* Center Foreground */}
               <div className="relative z-20 w-[260px] h-[520px] rounded-[40px] border-[8px] border-[#10101e] bg-[#080812] shadow-[0_0_60px_rgba(233,69,96,0.1)] overflow-hidden">
                  <PhoneUI />
               </div>
               {/* Back Right */}
               <div className="w-[200px] h-[400px] rounded-[32px] border-[6px] border-[#10101e] bg-[#0a0a14] opacity-40 overflow-hidden translate-y-4">
                  <PhoneUI isMini />
               </div>
            </div>

            {/* Small Layout: 1 Phone (visible on sm, hidden on md+) */}
            <div className="md:hidden flex flex-col items-center w-full mt-4">
               {/* HD Active Badge above phone */}
               <div className="mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10101e] border border-white/5 shadow-xl">
                  <div className="h-1.5 w-1.5 rounded-full bg-mint" />
                  <span className="text-[11px] font-bold text-white/80">HD Active</span>
               </div>
               
               <div className="relative z-20 w-[280px] h-[560px] rounded-[44px] border-[10px] border-[#10101e] bg-[#080812] shadow-[0_0_50px_rgba(233,69,96,0.15)] overflow-hidden">
                  <PhoneUI />
               </div>
               
               {/* Floating Listener Badge for Mobile */}
               <div className="mt-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/10 border border-crimson/20">
                  <Radio className="h-3 w-3 text-crimson" />
                  <span className="text-[11px] font-bold text-crimson uppercase tracking-wide">12.4K live</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneUI({ isMini = false }: { isMini?: boolean }) {
  return (
    <div className={`h-full w-full flex flex-col items-center justify-between ${isMini ? 'p-4 pt-10' : 'p-8 pt-16'} text-center`}>
      {/* Player Art Area */}
      <div className="relative flex flex-col items-center w-full">
        <div className={`absolute inset-0 bg-crimson/20 blur-[40px] rounded-full transition-opacity ${isMini ? 'opacity-50' : ''}`} />
        <div className={`relative ${isMini ? 'h-24 w-24' : 'h-36 w-36'} rounded-full bg-[#0a0a14] border border-white/5 flex items-center justify-center shadow-2xl`}>
           <div className={`${isMini ? 'h-20 w-20' : 'h-28 w-28'} rounded-full border-2 border-crimson/20 flex items-center justify-center bg-linear-to-br from-crimson/5 to-transparent`}>
              <Radio className={`${isMini ? 'h-8 w-8' : 'h-12 w-12'} text-crimson drop-shadow-[0_0_8px_rgba(233,69,96,0.4)]`} />
           </div>
        </div>
        
        <div className={`mt-6 ${isMini ? 'space-y-0' : 'space-y-1'}`}>
          <h3 className={`${isMini ? 'text-[14px]' : 'text-[18px]'} font-bold text-white tracking-tight`}>Jazz Vibes FM</h3>
          <p className={`${isMini ? 'text-[9px]' : 'text-[10px]'} font-bold text-white/40 uppercase tracking-[0.2em]`}>Jazz • 88.3 FM</p>
        </div>
      </div>

      {/* Waveform Visualization (Hidden in mini) */}
      {!isMini && (
        <div className="flex items-end gap-1 h-6">
          {[3, 5, 2, 6, 4, 7, 5, 3, 6, 4].map((h, i) => (
            <div key={i} className="w-0.5 bg-crimson/60 rounded-full animate-bounce" style={{ height: `${h * 15}%`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      )}

      {/* Controls */}
      <div className={`flex items-center ${isMini ? 'gap-4' : 'gap-8'}`}>
         {!isMini && <button className="text-white/30 hover:text-white"><History className="h-4 w-4" /></button>}
         <button className="text-white/30 hover:text-white">
            <svg className={isMini ? 'h-4 w-4' : 'h-5 w-5'} fill="currentColor" viewBox="0 0 24 24"><path d="M6 18V6l8.5 6L6 18zM16 6v12h2V6h-2z"/></svg>
         </button>
         <button className={`${isMini ? 'h-10 w-10' : 'h-14 w-14'} rounded-full bg-crimson flex items-center justify-center shadow-lg shadow-crimson/40 hover:scale-105 active:scale-95 transition-all`}>
            <div className="flex gap-1">
               <div className={`${isMini ? 'h-3' : 'h-4'} w-1 bg-white rounded-full`} />
               <div className={`${isMini ? 'h-3' : 'h-4'} w-1 bg-white rounded-full`} />
            </div>
         </button>
         <button className="text-white/30 hover:text-white">
            <svg className={isMini ? 'h-4 w-4' : 'h-5 w-5'} fill="currentColor" viewBox="0 0 24 24"><path d="M15 12l-8.5 6V6l8.5 6zM4 6v12h2V6H4z"/></svg>
         </button>
         {!isMini && <button className="text-white/30 hover:text-white"><Share2 className="h-4 w-4" /></button>}
      </div>

      {/* Recently Played / List (Detailed in medium/large) */}
      <div className={`w-full ${isMini ? 'mt-4 space-y-2' : 'mt-6 space-y-2 text-left'}`}>
         {!isMini && <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest pl-2 mb-3">Recently Played</p>}
         {[
           { name: 'Autumn Leaves', active: false },
           { name: 'Take Five', active: false },
           { name: 'So What', active: false },
         ].map((song, i) => (
           <div key={i} className={`flex items-center justify-between px-2 py-1.5 rounded-lg ${isMini ? 'opacity-50' : 'hover:bg-white/5 cursor-pointer transition-colors'}`}>
              <span className={`${isMini ? 'text-[9px]' : 'text-[11px]'} font-bold text-white/70`}>{song.name}</span>
              <div className="h-1 w-1 rounded-full bg-crimson/50" />
           </div>
         ))}
      </div>

      {/* Footer Nav for Mockup (Small Icons) */}
      <div className={`flex items-center justify-around w-full mt-4 ${isMini ? 'opacity-30' : 'border-t border-white/5 pt-4 opacity-60'}`}>
         <Radio className="h-4 w-4 text-crimson" />
         <History className="h-4 w-4 text-white" />
         <Play className="h-4 w-4 text-white" />
         <Heart className="h-4 w-4 text-white" />
      </div>
    </div>
  )
}
