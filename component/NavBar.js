"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling on the background when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "PROJECTS", href: "/project-lobby" },
    { name: "SERVICES", href: "/services" },
    { name: "BLOG", href: "/blogs" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

const BrandLogo = () => (
  <Image
    src="https://framerusercontent.com/images/Pu8Cz2DkKtl3cDA4PyT7PPJaMTw.png?scale-down-to=1024&width=2788&height=2814"
    alt="Brand Logo"
    width={40}
    height={50}
    className="cursor-pointer transition-transform duration-2000 ease-in-out hover:rotate-[270deg]"
  />
);

  // --- Framer Motion Animation Variants ---
  
  const menuVariants = {
    initial: { y: "-100%" },
    animate: {
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1], 
        staggerChildren: 0.1,     
        delayChildren: 0.2        
      },
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linkVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <>
      {/* ---------------- Main Navbar (Closed State) ---------------- */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#111111] text-white px-6 py-2.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1">
          <BrandLogo />
          <Image 
          src={'https://framerusercontent.com/images/8dBKZXJPllHUOBDfvALU4YwkK0.png?scale-down-to=512&width=6938&height=882'}
            alt="Brand Logo"
            width={240}
            height={100}
            className="hidden sm:block"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col gap-2 p-2 focus:outline-none"
          aria-label="Open Menu"
        >
          <div className="w-8 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white ml-auto"></div>
        </button>
      </nav>

      {/* ---------------- Dropdown Menu Overlay ---------------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 w-full h-[85vh] z-50 bg-[#4A4A4A]/90 text-white flex flex-col shadow-2xl rounded-b-lg overflow-hidden"
          >
            {/* Overlay Header */}
            <div className="px-6 py-4 flex justify-between items-center">
              <BrandLogo />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 focus:outline-none"
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white font-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Overlay Navigation Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-4 pb-10">
              {navLinks.map((link) => (
                // Entrance animation wrapper
                <motion.div variants={linkVariants} key={link.name}>
                  
                  {/* Link wrapper with overflow-hidden to clip the rolling text */}
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative block overflow-hidden"
                  >
                    {/* Hover animation wrapper */}
                    <motion.div
                      whileHover={{ y: "-100%" }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    >
                      {/* Primary Text (Visible by default) */}
                      <span className="block text-5xl md:text-7xl font-bold tracking-tight uppercase pb-1">
                        {link.name}
                      </span>
                      
                      {/* Secondary Text (Hidden below, rolls up on hover) */}
                      <span className="absolute top-full left-0 block text-5xl md:text-7xl font-bold tracking-tight uppercase text-gray-50 pb-1">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>

                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}