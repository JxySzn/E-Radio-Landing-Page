import { Globe, Headphones, Zap, Mic2, Music, ShieldCheck } from 'lucide-react'

const features = [
  {
    titleLg: '50,000+ Stations Worldwide',
    descLg: 'Tune in to radio from every corner of the globe — jazz from NYC, pop from London, beats from Tokyo.',
    titleMd: '50K+ Stations',
    descMd: 'Every genre, every country.',
    titleSm: '50K+ Live Stations',
    descSm: 'Every genre, every country.',
    icon: Globe,
    color: 'text-crimson',
    bgColor: 'bg-crimson/10',
  },
  {
    titleLg: 'Crystal-Clear HD Audio',
    descLg: 'Stream at up to 320kbps for studio-quality sound. Every note, every beat, as the artist intended.',
    titleMd: 'HD Audio',
    descMd: 'Stream up to 320kbps.',
    titleSm: 'HD Audio Quality',
    descSm: 'Up to 320kbps streaming.',
    icon: Headphones,
    color: 'text-mint',
    bgColor: 'bg-mint/10',
  },
  {
    titleLg: 'Instant Station Switching',
    descLg: 'Zero buffering. Switch between stations instantly without losing a beat. Smooth as silk.',
    titleMd: 'Instant Switch',
    descMd: 'Zero buffering between stations.',
    titleSm: 'Zero Buffering',
    descSm: 'Instant station switching.',
    icon: Zap,
    color: 'text-amber',
    bgColor: 'bg-amber/10',
  },
  {
    titleLg: 'Live Shows & Events',
    descLg: 'Never miss a live broadcast. Get notified when your favorite stations or DJs go live.',
    titleMd: 'Live Shows',
    descMd: 'Get notified for live broadcasts.',
    titleSm: 'Live Shows & Events',
    descSm: 'Get notified for live broadcasts.',
    icon: Mic2,
    color: 'text-purple',
    bgColor: 'bg-purple/10',
  },
  {
    titleLg: 'Smart Recommendations',
    descLg: 'Discover new stations powered by AI that learns your taste over time. Better with every play.',
    titleMd: 'Smart Picks',
    descMd: 'AI-powered recommendations.',
    titleSm: 'Smart Recommendations',
    descSm: 'AI learns your taste.',
    icon: Music,
    color: 'text-teal-400',
    bgColor: 'bg-teal-400/10',
  },
  {
    titleLg: 'Offline & Background Play',
    descLg: 'Keep listening when your screen is off. No interruptions, ever. Reliable and efficient.',
    titleMd: 'Background Play',
    descMd: 'Keeps playing when screen is off.',
    titleSm: 'Offline & Background Play',
    descSm: 'Keeps playing when screen is off.',
    icon: ShieldCheck,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  }
]

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[11px] md:text-[12px] font-bold text-crimson uppercase tracking-[0.3em] mb-4">
            <span className="hidden lg:inline">Everything You Need</span>
            <span className="inline lg:hidden">Features</span>
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-white tracking-[-0.02em] mb-6">
            Built for True Listeners
          </h2>
          <p className="text-[15px] md:text-[17px] lg:text-[18px] text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Every feature crafted with audio quality and ease of use at its core.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative bg-surface border border-white/5 rounded-[28px] p-6 sm:p-8 flex items-center md:items-start flex-row md:flex-col gap-6 md:gap-0 transition-all hover:bg-surface/80 hover:border-white/10 hover:-translate-y-1 shadow-2xl"
            >
              <div className={`shrink-0 h-11 w-11 md:h-12 md:w-12 rounded-2xl ${feature.bgColor} flex items-center justify-center md:mb-8 transition-transform group-hover:scale-110`}>
                <feature.icon className={`h-5 w-5 md:h-6 md:w-6 ${feature.color}`} />
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-[17px] sm:text-[18px] lg:text-[20px] font-bold text-white mb-1.5 md:mb-4 tracking-tight">
                  <span className="hidden lg:inline">{feature.titleLg}</span>
                  <span className="hidden md:inline lg:hidden">{feature.titleMd}</span>
                  <span className="inline md:hidden">{feature.titleSm}</span>
                </h3>
                
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-white/40 leading-relaxed font-medium">
                  <span className="hidden lg:inline">{feature.descLg}</span>
                  <span className="hidden md:inline lg:hidden">{feature.descMd}</span>
                  <span className="inline md:hidden">{feature.descSm}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
