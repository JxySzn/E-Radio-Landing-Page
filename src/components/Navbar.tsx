import { Link } from '@tanstack/react-router'
import { Radio } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600/0 via-blue-500/80 to-blue-600/0 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      
      {/* Main Navbar */}
      <div className="border-b border-white/5 bg-[#08080a]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/20">
              <Radio className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Radio<span className="text-white/90">Wave</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-10 md:flex">
            {['Features', 'Stations', 'Pricing', 'Blog'].map((item) => (
              <Link
                key={item}
                to="/"
                className="text-[15px] font-medium text-gray-400 transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-[15px] font-medium text-gray-400 transition-colors hover:text-white"
            >
              Sign In
            </Link>
            <button className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-7 py-2.5 text-[15px] font-bold text-white shadow-xl shadow-rose-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-rose-500/40 active:scale-[0.98]">
              <span className="relative z-10">Download Free</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-rose-600 to-rose-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
