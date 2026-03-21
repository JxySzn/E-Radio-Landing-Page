"use client";

export default function Hero() {
  return (
    <section className="w-full bg-[#0a0a0f] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e]/50 via-[#0a0a0f] to-[#0a0a0f]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="bg-[#1a1a2e] border border-[#ff4d4d]/30 text-[#ff6b6b] text-xs font-medium px-3 py-1.5 rounded-full">
                50,000+ stations live now
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">The World&apos;s</span>
              <br />
              <span className="text-white">Radio,</span>{" "}
              <span className="bg-gradient-to-r from-[#ff4d4d] to-[#ff8c42] bg-clip-text text-transparent">
                In Your Pocket
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-md">
              Stream thousands of live radio stations from every genre and country — free, forever. HD audio. Zero buffering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] hover:from-[#ff6666] hover:to-[#e60000] text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all shadow-lg shadow-red-500/25 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Listen Now — Free
              </button>
              
              <button className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all flex items-center gap-2 border border-[#2a2a3e]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.69 7.13-.58 1.53-1.42 3.04-2.74 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </button>
              
              <button className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all flex items-center gap-2 border border-[#2a2a3e]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.423-.185c-.56-.382-.898-1.035-.898-1.758V3.758c0-.723.338-1.376.898-1.758a.996.996 0 01.423-.186zm10.885 10.893l2.74 2.739-6.127 6.127-2.74-2.74 6.127-6.126zm.707-.707l6.127-6.127 2.74 2.74-6.127 6.126-2.74-2.739z" />
                </svg>
                Google Play
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff4d4d] to-[#ff8c42] flex items-center justify-center text-white text-xs font-bold border-2 border-[#0a0a0f]">
                  AK
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4d79ff] to-[#4d96ff] flex items-center justify-center text-white text-xs font-bold border-2 border-[#0a0a0f]">
                  MK
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff4dff] to-[#ff4da6] flex items-center justify-center text-white text-xs font-bold border-2 border-[#0a0a0f]">
                  SL
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4dff8c] to-[#4dffa6] flex items-center justify-center text-white text-xs font-bold border-2 border-[#0a0a0f]">
                  PL
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4ddfff] to-[#4da6ff] flex items-center justify-center text-white text-xs font-bold border-2 border-[#0a0a0f]">
                  OT
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#a1a1aa] text-xs">Loved by 12M+ listeners</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative flex gap-4">
              {/* Left Phone - Station List */}
              <div className="relative bg-[#1a1a2e] rounded-[2.5rem] border-4 border-[#2a2a3e] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2a3e] rounded-b-2xl" />
                <div className="bg-[#0f0f1a] rounded-[2rem] overflow-hidden w-[200px] h-[400px]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a2e]">
                    <span className="text-[#4ade80] text-xs flex items-center gap-1">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full" />
                      HD Audio Active
                    </span>
                  </div>
                  
                  {/* Station List */}
                  <div className="p-3 flex flex-col gap-2">
                    <span className="text-[#a1a1aa] text-xs px-2 py-1">Browse Stations</span>
                    
                    {[
                      { name: "Jazz Vibes FM", color: "from-[#ff4d4d] to-[#ff8c42]" },
                      { name: "Chill Beats Radio", color: "from-[#4d79ff] to-[#4d96ff]" },
                      { name: "Classic Rock 101", color: "from-[#ff4dff] to-[#ff4da6]" },
                      { name: "Global Pop Hits", color: "from-[#4dff8c] to-[#4dffa6]" },
                      { name: "Deep Space FM", color: "from-[#4ddfff] to-[#4da6ff]" },
                    ].map((station, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-2 rounded-lg ${i === 0 ? "bg-[#1a1a2e]" : ""}`}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${station.color} flex items-center justify-center`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                          </svg>
                        </div>
                        <span className={`text-xs ${i === 0 ? "text-white font-medium" : "text-[#a1a1aa]"}`}>
                          {station.name}
                        </span>
                        {i === 0 && (
                          <div className="ml-auto w-2 h-2 bg-[#ff4d4d] rounded-full" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Phone - Now Playing */}
              <div className="relative bg-[#1a1a2e] rounded-[2.5rem] border-4 border-[#2a2a3e] p-3 shadow-2xl -mt-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2a3e] rounded-b-2xl" />
                <div className="bg-[#0f0f1a] rounded-[2rem] overflow-hidden w-[200px] h-[400px] flex flex-col">
                  {/* Album Art */}
                  <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0f] p-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff4d4d] to-[#cc0000] flex items-center justify-center shadow-2xl shadow-red-500/30 animate-pulse">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Track Info */}
                  <div className="p-4 flex flex-col gap-3">
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-sm">Jazz Vibes FM</h3>
                      <p className="text-[#a1a1aa] text-xs">Jazz • 95.5 FM</p>
                    </div>
                    
                    {/* Waveform */}
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-gradient-to-t from-[#ff4d4d] to-[#ff8c42] rounded-full"
                          style={{
                            height: `${12 + Math.random() * 16}px`,
                            animation: `pulse 0.5s ease-in-out infinite ${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center justify-center gap-6">
                      <button className="text-[#a1a1aa] hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                        </svg>
                      </button>
                      <button className="w-12 h-12 bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      </button>
                      <button className="text-[#a1a1aa] hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Listener Count Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a2e] border border-[#2a2a3e] rounded-2xl px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">12,400 listening</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.5);
          }
        }
      `}</style>
    </section>
  );
}
