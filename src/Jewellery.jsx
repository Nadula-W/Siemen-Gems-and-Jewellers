import React, { useMemo, useState } from "react";
import NavBar from "./Components/NavBar";
import { motion } from "framer-motion";

// Fade-up for the grid
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Jewellery() {
  const categories = ["Necklaces", "Rings", "Pendants"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Keep items INSIDE the component
  const ITEMS = {
    Necklaces: [
      { id: 1, name: "Celestial Pendant Necklace", img: "/images/jewels/necklace-1.jpg", desc: "14k gold chain with sapphire accent." },
      { id: 2, name: "Pearl Strand", img: "/images/jewels/necklace-2.jpg", desc: "Lustrous freshwater pearls." },
      { id: 3, name: "Diamond Solitaire", img: "/images/jewels/necklace-3.jpg", desc: "Classic solitaire on platinum chain." },
    ],
    Rings: [
      { id: 4, name: "Emerald Eternity Band", img: "/images/jewels/ring-1.jpg", desc: "White gold band with full-circle emeralds." },
      { id: 5, name: "Rose Gold Stack", img: "/images/jewels/ring-2.jpg", desc: "Minimal, perfect for stacking." },
      { id: 6, name: "Garnet Signet", img: "/images/jewels/ring-3.jpg", desc: "Sterling silver with deep red garnet." },
    ],
    Pendants: [
      { id: 7, name: "Moonstone Glow Pendant", img: "/images/jewels/pendant-1.jpg", desc: "Ethereal iridescence, bezel set." },
      { id: 8, name: "Pink Sapphire Heart", img: "/images/jewels/pendant-2.jpg", desc: "Romantic hues, fine finish." },
      { id: 9, name: "Blue Sapphire Teardrop", img: "/images/jewels/pendant-3.jpg", desc: "Oceanic brilliance in teardrop cut." },
    ],
  };

  const list = useMemo(() => ITEMS[activeCategory] ?? [], [activeCategory]);

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111] to-[#000] text-white">
        <NavBar />
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pb-20">
        

        {/* Title */}
        <div className="max-w-6xl mx-auto text-center pt-10 pb-0">
          <h2 className="text-2xl font-bold text-[#D4AF37] sm:text-4xl font-serif tracking-wide">
            Explore Our Jewellery
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-300">
            Choose a category to view beautifully crafted pieces that celebrate Sri Lankan elegance.
          </p>
        </div>

        {/* Tabs */}
        <nav className="mt-4 border-b border-white/10">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 -mb-px">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-3 px-4 text-base font-medium whitespace-nowrap transition-all duration-200
                  ${activeCategory === cat
                    ? "border-b-2 border-[#D4AF37] text-[#D4AF37]"
                    : "text-gray-300 hover:text-[#D4AF37] border-b-2 border-transparent"}`}
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* Grid */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            key={activeCategory} 
            className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-6 lg:grid-cols-3"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {list.length ? (
              list.map((item) => (
                <div key={item.id} className="relative group">
                  <div className="overflow-hidden rounded-md">
                    <img
                      className="object-cover w-[400px] h-[400px] transition-all duration-300 group-hover:scale-105"
                      src={item.img}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400/1a1a1a/777?text=Image+Not+Found";
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between mt-3 space-y-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-base text-white/60 py-10">
                No items in {activeCategory}.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
