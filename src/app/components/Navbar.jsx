// Allows users to navigate through the site, and displays the site logo

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-red-600 py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white h-20">
        <Link href="/" className="flex items-center">
          <div className="relative w-14 h-14 sm:w-20 sm:h-20">
            <Image 
              src="/drsdata_logo_white.png"
              alt="Brady Cook Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="flex space-x-6 text-sm sm:text-base items-center font-bold">
          <Link href="/current-season-stats">{new Date().getFullYear()} Season Stats</Link>
          <Link href="/all-time-stats">All Time Stats</Link>
          <Link href="/drs-bot">DRSbot</Link>
        </div>
      </div>
    </nav>
  )
}