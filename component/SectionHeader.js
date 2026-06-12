'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectsSection from './ProjectSection';

export default function SectionHeader({
  index = "01",
  title = "Commercial",
  description = "We analyzed the local market and found a gap: a lack of dental brands that speak the language of luxury. Acting as a specialized brand identity design agency, we developed a visual concept centered on ”The Smile Architect.” We produced assets that feel more editorial than medical—using refined typography, gold accents, and lifestyle photography. This approach allowed us to launch a brand that immediately established trust and exclusivity in a crowded market.",
  bgColor = "bg-[#f7f7f7]" // Allows you to easily swap the background color per section
}) {
  return (
    <section className={`${bgColor} py-20 md:pt-32 font-sans w-full border-b border-gray-200/50`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start">
          
          {/* Index Number (Left Aligned) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-3 lg:col-span-5"
          >
            <span className="text-sm md:text-base font-bold text-black tracking-tight">
              {index}
            </span>
          </motion.div>

          {/* Text Content (Pushed to the right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="md:col-span-9 lg:col-span-7 max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-medium text-black tracking-tight mb-8 md:mb-10 leading-none">
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-[17px] leading-[1.4] font-normal max-w-xl font-semibold">
              {description}
            </p>
          </motion.div>

        </div>
       
      </div>
     
     
    </section>
  );
}