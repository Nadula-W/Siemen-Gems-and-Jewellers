import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
        {/* Top Section: Logo and Navigation Links */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-start">

          {/* 1. Logo/Heading Block */}
          <h1 className="uppercase font-black text-2xl tracking-wider text-[#D4AF37] mt-0 pt-2">
            Sieman Gems and Jewellers
          </h1>
          
          {/* 2. Navigation Links Block */}
          <div className="flex flex-row flex-wrap justify-center gap-4 md:flex-row md:space-x-8 p-4 text-white mt-0 ">
            
            <a href="/home" className="text-[14px] md:text-[18px] font-semibold uppercase whitespace-nowrap transition duration-300 hover:text-[#FFD700] transition-colors">
              Home
            </a>
            
            <a href="/rawgems" className="text-[14px] md:text-[18px] font-semibold uppercase whitespace-nowrap hover:text-[#FFD700] transition-colors transition duration-300">
              Raw Gem Stones
            </a>
            
            <a href="/cutandpolished" className="text-[14px] md:text-[18px] font-semibold uppercase whitespace-nowrap hover:text-[#FFD700] transition-colors transition duration-300">
              Gems
            </a>
            
            <a href="/jewellery" className="text-[14px] md:text-[18px] font-semibold uppercase whitespace-nowrap hover:text-[#FFD700] transition-colors transition duration-300">
              Jewellery
            </a>
            
            <a href="/contact-us" className="text-[14px] md:text-[18px] font-semibold uppercase whitespace-nowrap hover:text-[#FFD700] transition-colors transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
        
        {/* Separator Line */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        {/* Bottom Section: Copyright and Social Icons */}
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 Nadua Wathurakumbura. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
            <a
                href="https://facebook.com/YOUR_FACEBOOK_PAGE" // **FIXED LINE 51**
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
            >
                <img
                src="/images/icons/facebook.png"
                alt="Facebook page"
                className="w-10 h-10 object-cover rounded-full"
                />
                <span className="sr-only">Facebook page</span>
            </a>

            <a
                href="https://instagram.com/YOUR_INSTAGRAM_PAGE" // **FIXED LINE 63**
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
            >
                <img
                src="/images/icons/instagram.png"
                alt="Instagram page"
                className="w-10 h-10 object-cover rounded-full"
                />
                <span className="sr-only">Instagram page</span>
            </a>

            <a
                href="https://tiktok.com/@YOUR_TIKTOK_ACCOUNT" // **FIXED LINE 75**
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
            >
                <img
                src="/images/icons/tiktok.png"
                alt="Tiktok page"
                className="w-10 h-10 object-cover rounded-full"
                />
                <span className="sr-only">Tiktok page</span>
            </a>

            <a
                href="https://wa.me/YOUR_PHONE_NUMBER" // **FIXED LINE 87**
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
            >
                <img
                src="/images/icons/whatsapp.png"
                alt="Whatsapp page"
                className="w-10 h-10 object-cover rounded-full"
                />
                <span className="sr-only">Whatsapp page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}