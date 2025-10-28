import React from 'react'

export default function NavBar() {
  return (
    <header className="h-24 flex items-center w-full z-30 border-b border-white/10 backdrop-blur-sm sticky top-0 bg-black/50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h1 className="uppercase font-black text-2xl tracking-wider text-[#D4AF37]">
            Sieman Gems and Jewellers
          </h1>
          
          <nav className="hidden lg:flex">
            <ul className="flex gap-10 uppercase text-sm text-[#f5f5f5] tracking-wide font-medium">
              <li><a href="/" className="hover:text-[#FFD700] transition-colors">Home</a></li>
              <li><a href="/RawGems" className="hover:text-[#FFD700] transition-colors">Raw Gem Stones</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Gems</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Jewellery</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button (Placeholder for functionality) */}
          <button 
            aria-label="Toggle navigation menu" 
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </header>
  )
}
