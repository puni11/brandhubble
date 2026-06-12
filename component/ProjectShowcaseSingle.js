'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectOverview from './ProjectOverview';

export default function ProjectShowcaseFullscreen({
  mainTitle = "Toothique",
  subTitle = "Redefining Dentistry as a Luxury Experience",
  tags = ["Web Development", "3D Assets"],
  image = "https://framerusercontent.com/images/dYWsXZCdrE00J5Zuwdtysw9fu8.png?scale-down-to=1024&width=3360&height=2062", // High-res image for full background
}) {
  return (
    <section className=" w-full min-h-[100vh] font-sans flex flex-col justify-end overflow-hidden bg-fixed">
      
      {/* 1. Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={image} 
          alt="Showcase Background" 
          className="w-full h-full object-cover" // Remove 'grayscale' if you want it in full color
        />
        
      </div>

      {/* 2. Text Content (Pinned to the bottom) */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 pb-12 md:pb-20 pointer-events-none">
        
        {/* Big Bold Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white font-bold text-7xl sm:text-9xl md:text-[130px] lg:text-[180px] tracking-tight leading-none select-none drop-shadow-lg"
        >
          {mainTitle}
        </motion.h1>

        {/* Bottom Metadata Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-4 md:mt-2 px-2">
          
          {/* Subtitle with small logo indicator */}
          <div className="flex items-start gap-3 max-w-sm">
          
            <p className="text-white text-xs sm:text-lg font-medium tracking-wide leading-relaxed drop-shadow-md">
              {subTitle}
            </p>
          </div>

          {/* Tags Block with the custom ⊹ divider */}
          <div className="flex items-center gap-3 font-medium text-white/90 text-sm sm:text-base md:text-lg lg:text-2xl shrink-0 tracking-tight drop-shadow-md">
            {tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {i < tags.length - 1 && <span className="text-white/50 text-lg px-1">⊹</span>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}