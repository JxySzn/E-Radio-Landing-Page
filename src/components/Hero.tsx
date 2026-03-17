import { Play, Apple, Smartphone, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-crimson/5 blur-[120px] rounded-full -z-10" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20">
              <div className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-crimson">
                50,000+ stations live now
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
              The World's <br />
              Radio, <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-[#f5a623]">In Your Pocket</span>
            </h1>

            {/* Subline */}
            <p className="max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-medium">
              Stream thousands of live radio stations from every genre and country — free, forever. HD audio. Zero buffering.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <button type="button" className="flex items-center gap-3 bg-crimson hover:bg-crimson/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-crimson/30 hover:scale-[1.02] active:scale-[0.98]">
                <Play className="fill-current h-5 w-5" />
                Listen Now — Free
              </button>
              
              <div className="flex items-center gap-3">
                <button type="button" className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold text-white transition-all">
                  <Apple className="h-5 w-5" />
                  App Store
                </button>
                <button type="button" className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold text-white transition-all">
                  <Smartphone className="h-5 w-5" />
                  Google Play
                </button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  { color: 'bg-crimson', text: 'AK' },
                  { color: 'bg-mint', text: 'SM' },
                  { color: 'bg-amber', text: 'JR' },
                  { color: 'bg-purple', text: 'PL' },
                  { color: 'bg-blue-500', text: 'OT' },
                ].map((user, i) => (
                  <div key={i} className={`h-10 w-10 rounded-full border-2 border-[#080812] flex items-center justify-center text-[10px] font-bold text-white ${user.color}`}>
                    {user.text}
                  </div>
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                  ))}
                </div>
                <p className="text-[12px] font-medium text-white/40">
                  Loved by 12M+ listeners
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end pr-8">
            {/* HD Audio Active Badge */}
            <div className="absolute top-4 left-0 md:left-20 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10101e] border border-white/5 shadow-2xl">
              <div className="h-1.5 w-1.5 rounded-full bg-mint" />
              <span className="text-[11px] font-bold text-white/80">HD Audio Active</span>
            </div>

            {/* Sidebar/Browser Phone */}
            <div className="relative z-10 w-[240px] h-[480px] rounded-[40px] border-[8px] border-[#10101e] bg-[#0a0a14] shadow-2xl overflow-hidden hidden md:block translate-y-12">
               <div className="p-5 space-y-4">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Browse Stations</p>
                  {[
                    { name: 'Jazz Vibes FM', color: 'bg-crimson', active: true },
                    { name: 'Chill Beats Radio', color: 'bg-mint' },
                    { name: 'Classic Rock 101', color: 'bg-amber' },
                    { name: 'Global Pop Hits', color: 'bg-purple' },
                    { name: 'Deep Space FM', color: 'bg-blue-500' },
                  ].map((station, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                         <div className={`h-6 w-6 rounded-lg ${station.color} flex items-center justify-center`}>
                            <Radio className="h-3 w-3 text-white" />
                         </div>
                         <span className="text-[11px] font-bold text-white/80">{station.name}</span>
                      </div>
                      {station.active && <div className="h-1.5 w-1.5 rounded-full bg-crimson" />}
                    </div>
                  ))}
               </div>
            </div>

            {/* Main Player Phone */}
            <div className="relative z-20 w-[280px] h-[580px] rounded-[48px] border-[10px] border-[#10101e] bg-[#080812] shadow-[0_0_100px_rgba(233,69,96,0.15)] overflow-hidden lg:-ml-12">
               {/* Player UI */}
               <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-10">
                  {/* Spinning Disk / Art */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-crimson/20 blur-[50px] rounded-full animate-pulse" />
                    <div className="relative h-40 w-40 rounded-full bg-[#0a0a14] border-2 border-white/5 flex items-center justify-center">
                       <div className="h-32 w-32 rounded-full border-4 border-crimson/30 flex items-center justify-center bg-gradient-to-br from-crimson/10 to-transparent">
                          <Radio className="h-12 w-12 text-crimson drop-shadow-[0_0_10px_rgba(233,69,96,0.5)]" />
                       </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Jazz Vibes FM</h3>
                    <p className="text-[12px] font-medium text-white/40 uppercase tracking-widest">Jazz • 88.3 FM</p>
                  </div>

                  {/* Waveform Visualization */}
                  <div className="flex items-end gap-1.5 h-6">
                    {[3, 5, 2, 6, 4, 7, 5, 3, 6, 4].map((h, i) => (
                      <div key={i} className="w-1 bg-crimson/60 rounded-full animate-bounce" style={{ height: `${h * 15}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>

                  {/* Player Controls */}
                  <div className="flex items-center gap-8">
                     <button type="button" className="text-white/40 hover:text-white transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18V6l8.5 6L6 18zM16 6v12h2V6h-2z"/></svg>
                     </button>
                     <button type="button" className="h-14 w-14 rounded-full bg-crimson flex items-center justify-center shadow-lg shadow-crimson/40 hover:scale-110 transition-transform">
                        <div className="h-6 w-1 whitespace-nowrap bg-white rounded-full mx-0.5" />
                        <div className="h-6 w-1 whitespace-nowrap bg-white rounded-full mx-0.5" />
                     </button>
                     <button type="button" className="text-white/40 hover:text-white transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M15 12l-8.5 6V6l8.5 6zM4 6v12h2V6H4z"/></svg>
                     </button>
                  </div>

                  {/* Listener Count */}
                  <div className="absolute bottom-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/10 border border-crimson/20">
                    <div className="flex items-center gap-1.5">
                       <div className="h-1.5 w-3 bg-crimson/40 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-crimson" />
                       </div>
                       <span className="text-[10px] font-bold text-crimson">12,400 listening</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Radio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
    </svg>
  )
}
