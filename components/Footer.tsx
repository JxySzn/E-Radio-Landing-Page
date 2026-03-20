import { Radio, Twitter, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#', hideMd: true },
      { label: 'Roadmap', href: '#', hideMd: true },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#', hideMd: true },
      { label: 'Press', href: '#', hideMd: true },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#', hideMd: true },
    ]
  }

  return (
    <footer className="bg-[#080812] pt-24 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 md:mb-24">
          {/* Logo and Description */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-9 w-9 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20">
                <Radio className="h-5 w-5 text-white" />
              </div>
              <span className="text-[22px] font-bold text-white tracking-tight">RadioWave</span>
            </div>
            
            <p className="text-[15px] md:text-[16px] text-white/40 font-medium leading-relaxed mb-8">
              <span className="hidden lg:inline">The world's most loved radio app. Stream 50,000+ stations for free.</span>
              <span className="hidden md:inline lg:hidden">The world's most loved radio app. Stream free forever.</span>
              <span className="inline md:hidden">Stream 50,000+ stations free, forever.</span>
            </p>

            {/* Social Icons (Desktop only) */}
            <div className="hidden md:flex items-center gap-3">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all"
                >
                  <Icon className="h-4 w-4 fill-current" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 lg:gap-x-24 gap-y-10 md:gap-y-0">
            {/* Desktop/Tablet Columns */}
            <div className="hidden md:block space-y-6">
              <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link, i) => (
                  <li key={i} className={link.hideMd ? 'hidden lg:block' : ''}>
                    <a href={link.href} className="text-[15px] font-medium text-white/40 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block space-y-6">
              <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, i) => (
                  <li key={i} className={link.hideMd ? 'hidden lg:block' : ''}>
                    <a href={link.href} className="text-[15px] font-medium text-white/40 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block space-y-6">
              <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-[15px] font-medium text-white/40 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile View Links Line */}
            <div className="md:hidden col-span-2 flex flex-wrap gap-x-6 gap-y-4">
              <a href="#" className="text-[15px] font-medium text-white/40">Features</a>
              <a href="#" className="text-[15px] font-medium text-white/40">Pricing</a>
              <a href="#" className="text-[15px] font-medium text-white/40">About</a>
              <a href="#" className="text-[15px] font-medium text-white/40">Privacy</a>
              <a href="#" className="text-[15px] font-medium text-white/40">Terms</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] md:text-[14px] font-medium text-white/20">
            <span className="hidden md:inline">© {currentYear} RadioWave Inc. All rights reserved.</span>
            <span className="inline md:hidden">© {currentYear} RadioWave Inc. Made with ♥</span>
          </p>
          
          <p className="text-[13px] md:text-[14px] font-medium text-white/20 flex items-center gap-1.5">
            <span className="hidden lg:inline">Made with ♥ for music lovers everywhere</span>
            <span className="hidden md:inline lg:hidden">Made with ♥ for music lovers</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
