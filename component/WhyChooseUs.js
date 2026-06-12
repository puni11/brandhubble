'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Menu, Building, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  // Shared animation settings for card entries
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="max-w-[1800px] py-20 font-sans text-gray-900 px-4">
      {/* Header Section */}
 
      {/* Grid Layout (Bento Box Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. Strategy Before Execution (Spans 2 columns) */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#fcfcfc] border border-gray-100 rounded-lg p-8 md:p-12 col-span-1 md:col-span-2 relative overflow-hidden"
        >
          <div className="absolute top-6 left-6 w-6 h-6 border-2 border-black rounded-full flex items-center justify-center font-bold text-xl leading-none pt-1">
            *
          </div>
          <div className="pl-8">
            <h3 className="text-xl font-medium mb-2">Strategy Before execution</h3>
            <p className="text-gray-500 text-sm max-w-sm mb-16">
              We don't run ads first.<br />
              We decode your brand, customers, competitors, and market psychology to build a plan that actually works.
            </p>
            
            {/* Animated Lines */}
            <div className="space-y-10 pl-12 max-w-md">
              <div className="relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-[2px] bg-black"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 }}
                  viewport={{ once: true }}
                  className="absolute right-[20%] top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center"
                >
                  <Menu size={14} />
                </motion.div>
              </div>
              <div className="relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-[2px] bg-black"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 }}
                  viewport={{ once: true }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center"
                >
                  <Building size={14} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. ROI & Performance Driven (Spans 2 rows) */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#fcfcfc] border border-gray-100 rounded-lg p-8 md:p-12 col-span-1 md:row-span-2 flex flex-col"
        >
          <h3 className="text-xl font-medium mb-2">ROI & Performance Driven</h3>
          <p className="text-gray-500 text-sm mb-12">
            Not vanity metrics.<br />
            We track leads, revenue, repeat purchase, CAC, ROAS, retention, etc.
          </p>
          
          {/* Animated Hand/Stylus (Using standard framer motion to slide it in) */}
          <div className="mt-auto relative w-full overflow-hidden flex justify-end items-end">
             <motion.img 
               initial={{ x: 50, y: 50, opacity: 0 }}
               whileInView={{ x: 0, y: 0, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               viewport={{ once: true }}
               src="https://framerusercontent.com/images/AUZubrtC0m4Jw99WDa3bs2uCM.png?scale-down-to=512&width=2090&height=1206" 
               alt="Stylus hand placeholder"
               className=""
               // Note: Replace the src above with your transparent PNG of the hand holding the pen
             />
          </div>
        </motion.div>

        {/* 3. Dedicated Growth Partner */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#fcfcfc] border border-gray-100 rounded-lg p-8 md:p-12 col-span-1 md:col-span-2 flex flex-col justify-center"
        >
          <h3 className="text-2xl md:text-3xl font-medium mb-4 flex items-center flex-wrap gap-2">
            Dedicated Growth 
            <span className="flex -space-x-3 mx-2">
              {[1, 2, 3].map((i) => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`Avatar ${i}`} />
              ))}
            </span> 
            partner, not a Vendor
          </h3>
          <p className="text-gray-500 text-sm">
            We work like your internal team.<br />
            One strategist + one performance expert dedicated to your brand.
          </p>
        </motion.div>

        {/* 4. Transparent Work */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#fcfcfc] border border-gray-100 rounded-lg p-8 flex flex-col items-center justify-between text-center overflow-hidden"
        >
          <div>
            <h3 className="text-lg font-medium mb-2">Transparent work and live reporting</h3>
            <p className="text-gray-500 text-xs mb-8">Live dashboards + weekly updates.</p>
          </div>
          
          {/* Animated Gauge */}
          <div className="relative w-32 h-16 mt-auto">
             <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
               <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#ff8a4c" strokeWidth="16" strokeLinecap="butt" />
               <motion.line 
                 initial={{ rotate: -90 }}
                 whileInView={{ rotate: 15 }}
                 transition={{ duration: 1.5, type: "spring" }}
                 viewport={{ once: true }}
                 style={{ originX: '50px', originY: '50px' }}
                 x1="50" y1="50" x2="30" y2="15" 
                 stroke="black" strokeWidth="3" strokeLinecap="round" 
               />
             </svg>
          </div>
        </motion.div>

        {/* 5. 50+ Clients */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#fcfcfc] border border-gray-100 rounded-lg p-8 flex flex-col items-center justify-center text-center"
        >
          <div className="flex gap-1 text-[#ff5722] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-5xl font-light mb-2 text-gray-800">50+</h2>
          <h3 className="text-lg font-medium">We filter clients</h3>
          <p className="text-gray-500 text-xs">Quality over Quantity</p>
        </motion.div>

   {/* 6. Branding + Marketing + Tech (Breathing Dotted SVG) */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#fcfcfc] border border-gray-100 rounded-lg p-8 flex flex-col items-center text-center overflow-hidden"
        >
          <div className="mb-8 relative z-10">
            <h3 className="text-lg font-medium mb-2">Branding + Marketing + Tech <br/> under one roof</h3>
            <p className="text-gray-500 text-xs">Strategy, Execution, and tech in one place.</p>
          </div>
          
          {/* Breathing Concentric Dots */}
          <div className="mt-auto w-56 h-28 relative flex items-end justify-center">
            <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
              
              {/* Concentric rings mapped from center (r=10) to outer (r=50) */}
              {[
                { r: 10, strokeWidth: 1.5, gap: 5, opacity: 0.2 },
                { r: 20, strokeWidth: 2.5, gap: 7, opacity: 0.4 },
                { r: 30, strokeWidth: 3.5, gap: 9, opacity: 0.6 },
                { r: 40, strokeWidth: 4.5, gap: 11, opacity: 0.8 },
                { r: 50, strokeWidth: 5.5, gap: 13, opacity: 1.0 },
              ].map((ring, i) => (
                <motion.circle 
                  key={i} 
                  cx="50" cy="50" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth={ring.strokeWidth} 
                  strokeDasharray={`0 ${ring.gap}`} 
                  strokeLinecap="round" 
                  style={{ opacity: ring.opacity }}
                  animate={{ 
                    // [Normal, Shrink (Breathe In), Normal (Breathe Out)]
                    r: [ring.r, ring.r * 0.55, ring.r] 
                  }}
                  transition={{ 
                    duration: 2.5, // Slower, relaxed breathing pace
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1], 
                    repeatDelay: 1.5 // The "space/pause" after exhaling
                  }}
                />
              ))}

              {/* Asterisk Badge (Rides exactly on the 3rd ring: r=30) */}
              <motion.g
                animate={{
                  // Moves the badge inward in perfect sync with the shrinking 3rd ring
                  x: [0, 9.54, 0],
                  y: [0, 9.54, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeatDelay: 1.5
                }}
              >
                {/* Badge Background */}
                <circle cx="28.8" cy="28.8" r="4.5" fill="#fcfcfc" stroke="#ea580c" strokeWidth="1" />
                
                {/* Asterisk Drawing */}
                <path 
                  d="M 28.8 26 L 28.8 31.6 M 26 28.8 L 31.6 28.8 M 26.8 26.8 L 30.8 30.8 M 26.8 30.8 L 30.8 26.8" 
                  stroke="#ea580c" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                />
              </motion.g>

            </svg>
          </div>
        </motion.div>

      </div>

      {/* Footer Button */}
      <div className="mt-12">
         <Link 
  href="/contact"
  className={`group relative flex items-center bg-black text-white w-full justify-center overflow-hidden border border-zinc-900 px-8 py-2 text-lg font-semibold transition-colors duration-500 hover:text-white hover:border-[#fc5000]`}
>
  {/* Background Sweep: Starts Sky Blue off-screen, moves up AND turns Orange simultaneously */}
  <span className="absolute inset-0 bg-sky-400 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-[#fc5000]"></span>
  
  {/* Animated Text Wrapper */}
  <span className="relative z-10 flex w-full items-center justify-center overflow-hidden">
    
    {/* Layer 1: Original Text (Slides up and disappears) */}
    <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-[150%]">
     Become A Client
    </span>
    
    {/* Layer 2: Hover Text (Starts hidden below, slides up into view) */}
    <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
       Become A Client
    </span>
    
  </span>
</Link>
      </div>
    </section>
  );
}