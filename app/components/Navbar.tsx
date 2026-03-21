"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1a1a2e] border-b border-[#2a2a3e]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-gradient-to-br from-[#ff4d4d] to-[#cc0000] rounded-lg flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C12.5523 2 13 2.44772 13 3V5.10067C15.8939 5.53905 18.2828 7.56212 19.3492 10.2931L20.8284 8.81391C21.219 8.42339 21.8521 8.42339 22.2426 8.81391C22.6332 9.20444 22.6332 9.8376 22.2426 10.2281L19.8995 12.5712C19.509 12.9618 18.8758 12.9618 18.4853 12.5712L16.1421 10.2281C15.7516 9.8376 15.7516 9.20444 16.1421 8.81391C16.5327 8.42339 17.1658 8.42339 17.5564 8.81391L18.7071 9.96463C17.6896 8.28438 15.9772 7.08708 14 6.69591V17.3041C16.2209 16.8646 18.0832 15.3856 18.9443 13.3931C19.3426 12.4698 20.4146 12.0223 21.3379 12.4206C22.2612 12.8189 22.7087 13.8909 22.3104 14.8142C20.9826 17.8931 18.0633 20.1156 14.6142 20.8647V21C14.6142 21.5523 14.1665 22 13.6142 22C13.0619 22 12.6142 21.5523 12.6142 21V19.9999C12.5915 21.1023 11.6892 21.9999 10.5867 21.9999C9.48417 21.9999 8.58192 21.1023 8.55917 20V17.3041C5.11009 18.0532 2.19076 15.8307 0.862976 12.7518C0.464648 11.8285 0.912128 10.7565 1.83544 10.3582C2.75876 9.95988 3.83076 10.4074 4.22909 11.3307C5.09015 13.3232 6.95247 14.8022 9.17333 15.2417V6.69591C7.19612 7.08708 5.48372 8.28438 4.46622 9.96463L5.61694 8.81391C6.00747 8.42339 6.64063 8.42339 7.03116 8.81391C7.42168 9.20444 7.42168 9.8376 7.03116 10.2281L4.68802 12.5712C4.29749 12.9618 3.66433 12.9618 3.2738 12.5712L0.930662 10.2281C0.540138 9.8376 0.540138 9.20444 0.930662 8.81391C1.32119 8.42339 1.95435 8.42339 2.34487 8.81391L3.82409 10.2931C4.89053 7.56212 7.27939 5.53905 10.1733 5.10067V3C10.1733 2.44772 10.621 2 11.1733 2H12Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">RadioWave</span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/features"
            className="text-[#a1a1aa] hover:text-white transition-colors text-sm"
          >
            Features
          </Link>
          <Link
            href="/stations"
            className="text-[#a1a1aa] hover:text-white transition-colors text-sm"
          >
            Stations
          </Link>
          <Link
            href="/pricing"
            className="text-[#a1a1aa] hover:text-white transition-colors text-sm"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-[#a1a1aa] hover:text-white transition-colors text-sm"
          >
            Blog
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="text-[#a1a1aa] hover:text-white transition-colors text-sm"
          >
            Sign In
          </Link>
          <Link
            href="/download"
            className="bg-gradient-to-r from-[#ff4d4d] to-[#cc0000] hover:from-[#ff6666] hover:to-[#e60000] text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all shadow-lg shadow-red-500/25"
          >
            Download Free
          </Link>
        </div>
      </div>
    </nav>
  );
}
