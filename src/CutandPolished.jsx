import React from 'react'
import NavBar from './Components/NavBar'
import { motion } from 'framer-motion' 

// Define the variants for the entire product grid (fade-up animation)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8, // Duration of the animation
      ease: "easeOut" // Makes the animation smooth
    }
  },
};

export default function CutandPolished() {
  return (
     <section className="bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white ">
      <NavBar/>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pb-20">
        
        
        <div className="max-w-6xl mx-auto text-center pt-10 pb-0">
          <h2 className="text-2xl font-bold text-[#D4AF37] sm:text-4xl font-serif tracking-wide">
           Discover Our Cut & Polished Gemstones
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-300">
            Explore the brilliance and fire unleashed by expert craftsmanship. These finished gemstones are ready to be set, reflecting the ultimate union of nature's perfection and human artistry.
          </p>
        </div>

        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          
          {/* APPLY THE ANIMATION TO THE GRID CONTAINER */}
          <motion.div 
            className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-6 lg:grid-cols-3"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Triggers when element scrolls into view
            viewport={{ once: true, amount: 0.1 }} // Run once, when 10% of the element is visible
          >
            
            {/* The individual product cards no longer need motion.div wrappers */}
            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-md">
                <img className="object-cover w-[400px] h-[400px] transition-all duration-300 group-hover:scale-105" 
                  src="/images/Blue Sapphire Polished.jpg" 
                  alt="Raw Quartz Geode" />
              </div>
              <div className="flex flex-col items-start justify-between mt-3 space-y-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide">
                  Blue Sapphire
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                 Symbol of wisdom and royalty, radiating deep oceanic brilliance.
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-md">
                <img className="object-cover w-[400px] h-[400px] transition-all duration-300 group-hover:scale-105" 
                  src="/images/Amethyst polished.jpg" 
                  alt="Amethyst polished" />
              </div>
              <div className="flex flex-col items-start justify-between mt-3 space-y-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide">
                   Amethyst 
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                A gem of tranquility and focus, displaying rich shades of captivating violet.
                </p>
              </div>
            </div>

            
            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-md">
                <img className="object-cover w-[400px] h-[400px] transition-all duration-300 group-hover:scale-105" 
                  src="/images/Rose garnets polished.jpg" 
                  alt="Rose garnets polished" />
              </div>
              <div className="flex flex-col items-start justify-between mt-3 space-y-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide">
                   Rose Garnets 
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Fires the spirit with warm, earthy tones, signifying passion and vitality.
                </p>
              </div>
            </div>

            
            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-md">
                <img className="object-cover w-[400px] h-[400px] transition-all duration-300 group-hover:scale-105" 
                  src="/images/Moonstone polished.jpg" 
                  alt="Moonstone polished" />
              </div>
              <div className="flex flex-col items-start justify-between mt-3 space-y-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide">
                   Moonstone 
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                 Captures the ethereal glow of the moonlight, promoting emotional healing and intuition.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-md">
                <img className="object-cover w-[400px] h-[400px] transition-all duration-300 group-hover:scale-105" 
                  src="/images/Pink Sapphire polished.jpg" 
                  alt="Pink Sapphire polished" />
              </div>
              <div className="flex flex-col items-start justify-between mt-3 space-y-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide">
                   Pink Sapphire 
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Embodies grace and gentle affection, sparkling with delicate, romantic hues.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
