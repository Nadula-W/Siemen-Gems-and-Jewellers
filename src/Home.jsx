import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { motion } from 'framer-motion';
import "./Home.css"; 

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

      {/* HERO SECTION */}
      <section className="w-full flex items-center justify-center px-0 py-0
        h-auto lg:min-h-[calc(100vh-6rem)]">

        {/* Left side (EMPTY — all hero text commented out) */}
        {/*
        <motion.div 
          className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-center px-6"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.15 }}
          variants={staggerContainer}
        >
          <motion.span variants={gridItemVariants} className="block w-16 h-1 bg-[#D4AF37] mb-8 rounded-full"></motion.span>

          <motion.h2 variants={gridItemVariants} className="text-[4rem] font-bold">
            Crafted in Gold
          </motion.h2>

          <motion.p variants={gridItemVariants} className="mt-6 text-gray-300 text-lg max-w-lg">
            This is sub text
          </motion.p>

          <motion.div variants={gridItemVariants} className="mt-10">
            <a className="border p-3">Button</a>
          </motion.div>
        </motion.div>
        */}

        {/* Right side - FULL IMAGE */}
        <motion.div
          className="
            relative w-full
            h-auto lg:h-[calc(100vh-6rem)]
            flex items-center justify-center
          "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >

          {/* glow */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#D4AF37]/30 to-transparent blur-3xl"></div>

          <img
            src="/images/header1.JPG"
            alt="Header image"
            loading="eager"
            className="
              relative w-full
              /* FULL IMAGE on small & medium */
              object-contain 
              /* DESKTOP: cover and align right */
              lg:object-cover lg:object-right
              
              /* height rules */
              h-auto
              lg:h-full

              transition-all duration-700 ease-in-out
            "
          />
        </motion.div>

</section>






      {/* ============= OUR PRODUCTS SECTION (UNCHANGED) ============= */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeInVariants} 
            className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent tracking-wide"
          >
            Our Products
          </motion.h2>

          <p className="text-lg font-normal text-gray-300 max-w-3xl mx-auto mb-5 mt-0 text-center">
           A carefully selected range of natural stones and artisanal gold pieces, created to elevate every occasion.
          </p>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <motion.a href="/RawGems" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img src="/images/rawimg.jpg" className="w-full h-full object-cover group-hover:scale-110 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 p-6 flex items-end">
                <h3 className="text-2xl font-bold text-[#FFD700]">Raw Gem Stones</h3>
              </div>
            </motion.a>

            <motion.a href="/CutandPolished" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img src="https://wallpapercave.com/wp/wp1859872.jpg" className="w-full h-full object-cover group-hover:scale-110 duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 p-6 flex items-end">
                <h3 className="text-2xl font-bold text-[#FFD700]">Gems</h3>
              </div>
            </motion.a>

            <motion.a href="/Jewellery" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img src="https://images.jdmagicbox.com/quickquotes/images_main/traditional-temple-jewellery-with-neck-piece-and-earrings-2222963667-uzpiinpc.jpg" className="w-full h-full object-cover group-hover:scale-110 duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 p-6 flex items-end">
                <h3 className="text-2xl font-bold text-[#FFD700]">Jewelleries</h3>
              </div>
            </motion.a>

          </motion.div>
        </div>
      </motion.section>


      {/* MASTERPIECES SECTION (unchanged) */}
      <section className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white">
          <div className="container mx-auto px-6">

            {/* Header */}
            <h2
              className="text-4xl font-extrabold text-center mb-7 
                        bg-gradient-to-r from-[#FFD700] to-[#D4AF37] 
                        bg-clip-text text-transparent tracking-wide"
            >
              Explore Our Masterpieces
            </h2>

            <p className="text-lg font-normal text-gray-300 max-w-3xl mx-auto mb-5">
              Discover the brilliance of our curated collection, from raw gems to exquisite finished jewelry.
            </p>

            {/* Scrolling Collection */}
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide pb-6 auto-scroll-container">

              {/* Item 1 */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/cutandpolished" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/Amethyst polished.jpg"
                    alt="Amethyst polished"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Amethyst
                  </h3>
                </div>
              </div>

              {/* Item 2 */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/Jewellery" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/jewellery/Blue Sapphire ring.jpg"
                    alt="Blue Sapphire Ring"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Blue Sapphire Ring
                  </h3>
                </div>
              </div>

              {/* Item 3 */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/cutandpolished" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/Rose garnets polished.jpg"
                    alt="Rose Garnet"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Rose Garnet
                  </h3>
                </div>
              </div>

              {/* Item 4 */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/cutandpolished" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/Moonstone polished.jpg"
                    alt="Moonstone"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Moonstone
                  </h3>
                </div>
              </div>

              {/* Item 5 */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/cutandpolished" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/Blue Sapphire Polished.jpg"
                    alt="Blue Sapphire"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Blue Sapphire
                  </h3>
                </div>
              </div>

              {/* Item 6 */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/Jewellery" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/jewellery/Geuda Gem ring.jpg"
                    alt="Geuda Gem Ring"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Geuda Gem Ring
                  </h3>
                </div>
              </div>

              {/* Item 7 */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/Collections" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/Pink Sapphire polished.jpg"
                    alt="Pink Sapphire"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Pink Sapphire
                  </h3>
                </div>
              </div>

              {/* Item 8 (Duplicate Amethyst) */}
              <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
                <a href="/cutandpolished" className="group relative overflow-hidden rounded-xl h-[420px] block">
                  <img
                    src="/images/Amethyst polished.jpg"
                    alt="Amethyst polished duplicate"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                  />
                </a>
                <div className="mt-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center 
                                bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                    Amethyst
                  </h3>
                </div>
              </div>

            </div>
          </div>
        </section>




      {/* CONTACT SECTION (unchanged) */}
      <section className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a]">
        <div className="container px-6 py-0 mx-auto text-center lg:text-left">
          {/* Heading */}
          <div>
            <h1 className="text-5xl sm:text-5xl font-extrabold text-[#FFD700]">
              Contact Us
            </h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-300 md:text-3xl">
              Get in touch
            </h2>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">

              {/* Email */}
              <div className="text-center sm:text-left">
                <img
                  src="/images/icons/email.png"
                  alt="email"
                  className="w-10 h-10 object-cover rounded-full mx-auto sm:mx-0"
                />
                <h2 className="mt-4 text-base font-medium text-[#FFD700]">Email</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-white">hello@damsith.com</p>
              </div>

              {/* Phone */}
              <div className="text-center sm:text-left">
                <img
                  src="/images/icons/phone.png"
                  alt="phone"
                  className="w-10 h-10 object-cover rounded-full mx-auto sm:mx-0"
                />
                <h2 className="mt-4 text-base font-medium text-[#FFD700]">Phone No</h2>
                <p className="mt-2 text-sm text-white">Mon-Fri from 8am to 5pm</p>
                <p className="mt-2 text-sm text-gray-500">+94 773847294</p>
              </div>

              {/* Address */}
              <div className="text-center sm:text-left">
                <img
                  src="/images/icons/address.png"
                  alt="address"
                  className="w-10 h-10 object-cover rounded-full mx-auto sm:mx-0"
                />
                <h2 className="mt-4 text-base font-medium text-[#FFD700]">Address</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-white">
                  Come say hello at our office HQ
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="Office Location Map"
                scrolling="no"
                marginHeight="0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.287148703034!2d79.91297847462633!3d6.975408517747671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597c8dde7e47%3A0x341e7e820c46d3ed!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1762974827693!5m2!1sen!2slk"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <Footer/>

    </main>
  );
}
