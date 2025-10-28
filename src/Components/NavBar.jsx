import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Menu items for easy mapping
const navItems = [
    { name: "Home", href: "/" },
    { name: "Raw Gem Stones", href: "/RawGems" },
    { name: "Gems", href: "#" },
    { name: "Jewellery", href: "#" },
    { name: "Contact", href: "#" },
];

export default function NavBar() {
    // 1. State to manage the visibility of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Variants for the mobile menu animation
    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                type: "tween", 
                duration: 0.3 
            } 
        },
        exit: { 
            opacity: 0, 
            x: "100%", 
            transition: { 
                type: "tween", 
                duration: 0.2 
            } 
        },
    };

    return (
        // Added max-h-screen and overflow-hidden to prevent body scroll when menu is open
        <header className="h-24 flex items-center w-full z-30 border-b border-white/10 backdrop-blur-sm sticky top-0 bg-black/50">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <h1 className="uppercase font-black text-2xl tracking-wider text-[#D4AF37]">
                    Sieman Gems and Jewellers
                </h1>
                
                {/* 2. Desktop Navigation: Visible from large screens up */}
                <nav className="hidden lg:flex">
                    <ul className="flex gap-10 uppercase text-sm text-[#f5f5f5] tracking-wide font-medium">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="hover:text-[#FFD700] transition-colors">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. Mobile Menu Button: Hidden on large screens */}
                <button 
                    aria-label="Toggle navigation menu" 
                    className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)} // Toggle the state
                >
                    {/* Hamburger/Close Icon based on state */}
                    {isOpen ? (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* 4. Mobile Menu Panel (using AnimatePresence for exit animation) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 top-24 bg-black/95 backdrop-blur-md lg:hidden z-40 p-6"
                    >
                        <ul className="flex flex-col gap-6 uppercase text-lg text-white tracking-wider font-bold">
                            {navItems.map((item) => (
                                <li key={item.name} className="border-b border-white/10 pb-4">
                                    <a 
                                        href={item.href} 
                                        className="block hover:text-[#FFD700] transition-colors"
                                        onClick={() => setIsOpen(false)} // Close menu on click
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}