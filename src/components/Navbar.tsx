import { Link } from '@tanstack/react-router'
import { Radio } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-crimson/0 via-crimson/50 to-crimson/0" />
      
      {/* Main Navbar */}
      <div className="border-b border-white/5 bg-[#080812]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-crimson shadow-lg shadow-crimson/20">
              <Radio className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Radio<span className="text-white/90">Wave</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-9 md:flex">
            {['Features', 'Stations', 'Pricing', 'Blog'].map((item) => (
              <Link
                key={item}
                to="/"
                className="text-[14px] font-medium text-white/60 transition-all duration-200 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-7">
            <Link
              to="/"
              className="text-[14px] font-medium text-white/60 transition-colors hover:text-white"
            >
              Sign In
            </Link>
            <button className="relative group overflow-hidden rounded-xl bg-crimson px-6 py-2 text-[14px] font-bold text-white shadow-xl shadow-crimson/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-crimson/30 active:scale-[0.98]">
              <span className="relative z-10">Download Free</span>
              <div className="absolute inset-0 z-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
