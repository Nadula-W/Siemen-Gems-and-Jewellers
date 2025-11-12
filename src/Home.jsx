import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { motion } from 'framer-motion';
import "./Home.css"; // Ensure global styles are imported

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
              href="/RawGems"
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
    <div className="overflow-hidden bg-gradient-to-br from-[#D4AF37]/40 to-transparent"> 
        <img
            src="/images/Headerimg2.png"
            alt="Fine gold jewellery with Ceylon sapphire and emeralds"
            // Set fixed width and height attributes
            width={450} 
            height={450} 
            loading="eager"
            // Update className to use fixed height and fixed max-width for the square size
            className="relative w-full h-[450px] max-w-[450px] rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.35)] object-cover transform transition-all duration-1000 ease-in-out lg:max-w-[450px]"
        />
    </div>
</motion.div>
      </section>

    
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
            <motion.a href="/RawGems" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="/images/rawimg.jpg"
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
            <motion.a href="/CutandPolished" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://wallpapercave.com/wp/wp1859872.jpg"
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
            <motion.a href="/Jewellery" className="group relative overflow-hidden rounded-xl h-[480px]" variants={gridItemVariants}>
              <img
                src="https://images.jdmagicbox.com/quickquotes/images_main/traditional-temple-jewellery-with-neck-piece-and-earrings-2222963667-uzpiinpc.jpg"
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



      {/* Explore Our Masterpieces Section  - TITLES MOVED UNDER CARDS */}
      <section 
        className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white"
      >
        <div className="container mx-auto px-6">
          {/* Header - RETAINS TAILWIND STYLES */}
          <h2 
            className="text-4xl font-extrabold text-center mb-7 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent tracking-wide"
          >
            Explore Our Masterpieces
          </h2>
          <p class="text-lg font-normal text-gray-300 max-w-3xl mx-auto mb-5">
    Discover the brilliance of our curated collection, from raw gems to exquisite finished jewelry.
  </p>
          
          {/* AUTO-SCROLL Container */}
          <div 
            className="flex space-x-8 overflow-x-auto scrollbar-hide pb-6 auto-scroll-container" 
          >
 
            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/cutandpolished" 
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/Amethyst polished.jpg"  alt="Amethyst polished" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Amethyst
                </h3>
              </div>
            </div>

            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/Jewellery"
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/jewellery/Blue Sapphire ring.jpg" alt="Blue Sapphire Ring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Blue Sapphire Ring
                </h3>
              </div>
            </div>

            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/cutandpolished"
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/Rose garnets polished.jpg" alt="Rose Garnet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Rose Garnet
                </h3>
              </div>
            </div>

            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/cutandpolished" 
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/Moonstone polished.jpg" alt="Moonstone" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Moonstone
                </h3>
              </div>
            </div>
            
            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/cutandpolished"
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/Blue Sapphire Polished.jpg" alt="Blue Sapphire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Blue Sapphire
                </h3>
              </div>
            </div>

            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/Jewellery"
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/jewellery/Geuda Gem ring.jpg" alt="Geuda Gem Ring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Geuda Gem Ring
                </h3>
              </div>
            </div>

            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/Collections"
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/Pink Sapphire polished.jpg" alt="Pink Sapphire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Pink Sapphire
                </h3>
              </div>
            </div>

            <div className="inline-block flex-shrink-0 w-[300px] sm:w-[360px]">
              <a 
                href="/cutandpolished"
                className="group relative overflow-hidden rounded-xl h-[420px] block"
              >
                <img src="/images/Amethyst polished.jpg" alt="Amethyst polished duplicate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"/>
              </a>
              <div className="mt-3">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-serif tracking-wide text-center bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Amethyst
                </h3>
              </div>
            </div> 
          </div >
        </div>
      </section>


      <section className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] ">
          <div class="container px-6 py-0 mx-auto text-center lg:text-left">
            
              <div>
                    <h1 className="text-5xl sm:text-5xl font-extrabold text-[#FFD700]">Contact Us</h1> 
                    <h2 className="mt-2 text-2xl font-semibold text-gray-300 md:text-3xl">Get in touch</h2>
                </div>

              <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                  <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                      <div>
                          <img
                              src="/images/icons/email.png"
                              alt="email"
                              className="w-10 h-10 object-cover rounded-full mx-auto sm:mx-0"
                              />

                          <h2 class="mt-4 text-base font-medium text-[#FFD700]">Email</h2>
                          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                          <p class="mt-2 text-sm text-white-500 dark:text-white-400">hello@damsith.com</p>
                      </div>

                      <div>
                          <img
                              src="/images/icons/phone.png"
                              alt="email"
                              className="w-10 h-10 object-cover rounded-full mx-auto sm:mx-0"
                              />
                          <h2 class="mt-4 text-base font-medium text-[#FFD700]">Phone No</h2>
                          <p class="mt-2 text-sm text-white-500 dark:text-white-400">Mon-Fri from 8am to 5pm</p>
                          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">+94 773847294.</p>
                          
                      </div>

                      <div>
                          <img
                              src="/images/icons/address.png"
                              alt="email"
                              className="w-10 h-10 object-cover rounded-full mx-auto sm:mx-0"
                              />

                          <h2 class="mt-4 text-base font-medium text-[#FFD700]">Address</h2>
                          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                          <p class="mt-2 text-sm text-white-500 dark:text-white-400">Come say hello at our office HQ</p>
                      </div>
                  </div>

                  <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                      <iframe 
                          width="100%" 
                          height="100%" 
                          frameborder="0" 
                          title="Office Location Map" 
                          scrolling="no" 
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7920.504680295925!2d79.91460438981062!3d6.979523371455704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257f8b2eacd4b%3A0x2f0945cfc64b4176!2sEgoda%20Eriyawetiya!5e0!3m2!1sen!2slk!4v1762968393216!5m2!1sen!2slk" 
                           
                          allowfullscreen="" 
                          loading="lazy" 
                          referrerpolicy="no-referrer-when-downgrade">
                      </iframe>
                  </div>
              </div>
          </div>
      </section>

      <Footer/>
      
    </main>
  );
}
