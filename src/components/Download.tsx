import { Apple, Play, Radio } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Download() {
  return (
    <section className="py-24 md:py-32 bg-[#080812]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[64px] bg-linear-to-br from-[#121226] to-[#0a0a1a] border border-white/5 py-12 md:py-20 px-6 md:px-12 text-center shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
          {/* Subtle Inner Glows */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-crimson/5 blur-[80px] rounded-full -z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple/5 blur-[100px] rounded-full -z-0" />

          {/* Icon */}
          <div className="relative z-10 flex justify-center mb-8">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-crimson/10 border border-crimson/20 flex items-center justify-center">
              <Radio className="h-6 w-6 md:h-7 md:w-7 text-crimson" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-[32px] md:text-[44px] lg:text-[48px] font-extrabold text-white tracking-tight mb-4 md:mb-6">
            Start Listening Today
          </h2>

          {/* Subtext */}
          <p className="relative z-10 text-[14px] md:text-[16px] lg:text-[18px] text-white/50 font-medium max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            <span className="hidden lg:inline">Join 12 million listeners worldwide. No credit card required. Cancel anytime.</span>
            <span className="hidden md:inline lg:hidden">Join 12M listeners. Free forever. No card needed.</span>
            <span className="inline md:hidden">Join 12M listeners. Free forever.</span>
          </p>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Button 
              className="h-12 md:h-13 px-8 rounded-2xl bg-crimson text-white font-bold text-[14px] md:text-[15px] shadow-xl shadow-crimson/20 transition-all hover:scale-[1.02] hover:bg-crimson/90 active:scale-[0.98] w-full sm:w-auto"
            >
              <Apple className="mr-2.5 h-4 w-4 md:h-5 md:w-5 fill-current" />
              <span className="hidden md:inline lg:hidden">App Store</span>
              <span className="inline md:hidden lg:inline">Download on App Store</span>
            </Button>
            
            <Button 
              className="h-12 md:h-13 px-8 rounded-2xl bg-[#1a1a2e] text-white font-bold text-[14px] md:text-[15px] border border-white/5 transition-all hover:scale-[1.02] hover:bg-[#252545] active:scale-[0.98] w-full sm:w-auto"
            >
              <Play className="mr-2.5 h-4 w-4 md:h-5 md:w-5 fill-current" />
              <span className="hidden md:inline lg:hidden">Google Play</span>
              <span className="inline md:hidden lg:inline">Get on Google Play</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
