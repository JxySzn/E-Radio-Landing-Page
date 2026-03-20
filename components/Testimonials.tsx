import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Music Producer',
    initials: 'SK',
    avatarColor: 'bg-[#e94560]',
    textLg: '"RadioWave completely changed how I discover new music. The audio quality is unmatched."',
    textMd: '"RadioWave completely changed how I discover new music. The audio quality is unmatched."',
    textSm: '"RadioWave completely changed how I discover music."',
  },
  {
    name: 'Marcus T.',
    roleLg: 'Late-night Commuter',
    roleMd: 'Night Commuter',
    roleSm: '',
    initials: 'MT',
    avatarColor: 'bg-[#53c28b]',
    textLg: '"Jazz Vibes FM has been my commute companion for 6 months. The sleep timer is a game changer."',
    textMd: '"Jazz Vibes FM has been my commute companion for 6 months. The sleep timer is a game changer."',
    textSm: '"The sleep timer and HD audio are absolutely perfect."',
  },
  {
    name: 'Priya M.',
    role: 'Designer',
    initials: 'PM',
    avatarColor: 'bg-[#7c5cbf]',
    textLg: '"I use it all day while working. Lo-Fi stations + HD audio = perfect focus mode."',
    textMd: '"I use it all day while working. Lo-Fi stations + HD audio = perfect focus mode."',
    textSm: '"I use it all day while working. Perfect focus mode."',
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#080812]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[12px] font-bold text-crimson uppercase tracking-[0.3em] mb-4">
            <span className="hidden md:inline lg:hidden">Reviews</span>
            <span className="hidden lg:inline">Listener Stories</span>
          </p>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-white tracking-tight">
            People Love RadioWave
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`bg-[#0c0c1a] border border-white/[0.05] rounded-[24px] p-8 md:p-10 flex flex-col justify-between transition-all hover:border-white/10 ${i === 2 ? 'md:hidden lg:flex' : ''}`}
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6 md:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed font-medium mb-10">
                  <span className="hidden lg:inline">{t.textLg}</span>
                  <span className="hidden md:inline lg:hidden">{t.textMd}</span>
                  <span className="inline md:hidden">{t.textSm}</span>
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 md:h-12 md:w-12 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-[13px] md:text-[14px] font-bold shadow-lg shadow-black/20`}>
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] md:text-[16px] font-bold text-white tracking-tight">
                    {t.name}
                  </span>
                  <span className="text-[12px] md:text-[13px] font-medium text-white/30 uppercase tracking-wide">
                    <span className="hidden lg:inline">{t.role || t.roleLg}</span>
                    <span className="hidden md:inline lg:hidden">{t.role || t.roleMd}</span>
                    <span className="inline md:hidden">{t.role || t.roleSm}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
