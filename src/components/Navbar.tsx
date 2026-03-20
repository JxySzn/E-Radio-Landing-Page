'use client'
import * as React from 'react'
import { Radio, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Stations', href: '#stations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-navy-deep/80 backdrop-blur-xl border-white/5 py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex items-center justify-between">
          {/* Logo - Stays left */}
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="h-9 w-9 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20 transition-transform group-hover:scale-105">
              <Radio className="h-5 w-5 text-white" />
            </div>
            <span className="text-[20px] md:text-[22px] font-bold text-white tracking-tight">RadioWave</span>
          </a>

          {/* LG Centered Links - Only visible on LG+ */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-[15px] font-bold text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 md:gap-5 lg:gap-8">
            {/* MD only Links (Hidden on LG and SM) */}
            <div className="hidden md:flex lg:hidden items-center gap-6 mr-2 transition-all">
              {['Features', 'Pricing', 'Blog'].map((label) => (
                <a 
                  key={label} 
                  href={`#${label.toLowerCase()}`}
                  className="text-[14px] font-bold text-white/50 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Sign In - LG only */}
            <a 
              href="#signin" 
              className="hidden lg:block text-[15px] font-bold text-white/50 hover:text-white transition-colors"
            >
              Sign In
            </a>

            {/* CTA Button */}
            <Button 
              className="h-9 md:h-11 px-5 md:px-8 rounded-[14px] md:rounded-[16px] bg-linear-to-r from-crimson to-[#c62828] text-white font-bold text-[13px] md:text-[15px] shadow-lg shadow-crimson/20 border-0 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <span className="lg:hidden">Download</span>
              <span className="hidden lg:inline">Download Free</span>
            </Button>

            {/* Menu Toggle - Hidden on LG */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-white lg:hidden transition-opacity active:opacity-60"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Unchanged transition logic */}
      <div 
        className={cn(
          "fixed inset-0 top-[73px] bg-navy-deep z-40 lg:hidden transition-all duration-300 transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col p-8 gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[20px] font-bold text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-white/5 w-full my-4" />
          <div className="flex flex-col gap-6">
             <p className="text-[14px] font-bold text-white/20 uppercase tracking-widest">Connect</p>
             <div className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">FB</div>
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">TW</div>
                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">LN</div>
             </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
