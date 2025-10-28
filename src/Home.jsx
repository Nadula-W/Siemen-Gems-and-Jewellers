import React from "react";
import NavBar from "./Components/NavBar";
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child item appearing
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};


export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111] to-[#000] text-white">
      <NavBar/>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)]">
        
        <motion.div 
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial="hidden"
          animate="visible" // Run immediately on load for the Hero section
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.15 }}
          variants={staggerContainer}
        >
          <motion.span variants={gridItemVariants} className="block w-16 h-1 bg-[#D4AF37] mb-8 rounded-full"></motion.span>

          {/* Header */}
          <motion.h2 variants={gridItemVariants} className="text-4xl sm:text-6xl font-extrabold leading-tight">
            <span className="block bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent">
              Crafted in Gold,
            </span>
            <span className="block bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-transparent">
              Inspired by Heritage
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p variants={gridItemVariants} className="mt-6 text-[#e0e0e0] leading-relaxed max-w-lg text-lg">
            Experience the artistry of Sri Lanka’s gem heritage — where Ceylon sapphires
            and intricate Kandyan craftsmanship unite to create timeless masterpieces.
          </motion.p>

          {/* Button */}
          <motion.div variants={gridItemVariants} className="mt-10 flex gap-5">
            <a
              href="#"
              role="button"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-wider px-8 py-3 rounded-full transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
            className="relative lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="absolute w-80 h-80 bg-gradient-to-br from-[#D4AF37]/40 to-transparent blur-3xl rounded-full top-10 animate-pulse-slow"></div>
          
          <img
            src="/images/Headerimg.png"
            alt="Fine gold jewellery with Ceylon sapphire and emeralds"
            width={450} 
            height={450}
            loading="eager"
            className="relative max-w-sm rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.35)] object-cover w-full h-auto transform transition-all duration-1000 ease-in-out lg:max-w-md"
          />
        </motion.div>
      </section>

    {/* ----------Oir Product------------------------------- */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer} // Uses staggerContainer to animate children
      >
        <div className="container mx-auto px-6">
          {/* Header - ANIMATED */}
          <motion.h2 
            variants={fadeInVariants} 
            className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent tracking-wide"
          >
            Our Products
          </motion.h2>

          {/* Grid Container */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Raw stones - ANIMATED */}
            <motion.a href="RawGems" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://wallpapercave.com/wp/wp1859872.jpg"
                alt="Ceylon Gems"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">Raw Gem Stones</h3>
                </div>
              </div>
            </motion.a>

            {/* GEMS - ANIMATED */}
            <motion.a href="#" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://gem-a.com/images/Blog/FromtheArchives/Luxury_Jewellery_Brands_/Cartier_Tutti_Frutti_Necklace.png"
                alt="Luxury Collections"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">Gems</h3>
                </div>
              </div>
            </motion.a>

            {/* JEWELLERY - ANIMATED */}
            <motion.a href="#" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchKBab99DVstDnpzAVJD4-Wstlzui790HIw&s"
                alt="Fine Jewellery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">Jewelleries</h3>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Explore Our Masterpieces Section 2 (4 items) */}
      {/* -------------------------------------------------------------------------------------------------- */}

      <motion.section 
        className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer} // Uses staggerContainer to animate children
      >
        <div className="container mx-auto px-6">
          {/* Header - ANIMATED */}
          <motion.h2 
            variants={fadeInVariants} // Use fade-up for the header
            className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent tracking-wide"
          >
            Explore Our Masterpieces
          </motion.h2>

          {/* Grid Container */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* GEMS - ANIMATED */}
            <motion.a href="#" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://wallpapercave.com/wp/wp1859872.jpg"
                alt="Ceylon Gems"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">Ceylon Gems</h3>
                  <p className="text-white/80 text-sm">Precious stones of Sri Lanka</p>
                </div>
              </div>
            </motion.a>

            {/* JEWELLERY - ANIMATED */}
            <motion.a href="#" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchKBab99DVstDnpzAVJD4-Wstlzui790HIw&s"
                alt="Fine Jewellery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">Fine Jewellery</h3>
                  <p className="text-white/80 text-sm">Gold, Silver & Platinum designs</p>
                </div>
              </div>
            </motion.a>

            {/* COLLECTIONS - ANIMATED */}
            <motion.a href="#" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://gem-a.com/images/Blog/FromtheArchives/Luxury_Jewellery_Brands_/Cartier_Tutti_Frutti_Necklace.png"
                alt="Luxury Collections"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">Luxury Collections</h3>
                  <p className="text-white/80 text-sm">Timeless beauty for every occasion</p>
                </div>
              </div>
            </motion.a>

            {/* CRAFTSMANSHIP - ANIMATED */}
            <motion.a href="#" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=800"
                alt="Craftsmanship"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-1">Craftsmanship</h3>
                  <p className="text-white/80 text-sm">Kandyan artistry in modern form</p>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}