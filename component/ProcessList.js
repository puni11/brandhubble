'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProcessList({processes}) {
 

  return (
    <section className="bg-[#fcfcfc] py-20 md:py-20 font-sans text-gray-900">
      <div className="max-w-[1800px] mx-auto px-6 md:px-0">
        
        {/* Process List */}
        <div className="flex flex-col gap-16 md:gap-10">
          {processes.map((process, index) => (
            <motion.div 
              key={process.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="w-full"
            >
              {/* Title Header */}
              <div className="flex items-baseline gap-4 md:gap-6 mb-4 md:mb-2">
                <span className="text-xl md:text-[28px] font-normal text-black shrink-0">
                  {process.id}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[28px] font-normal tracking-tight text-black leading-tight">
                  {process.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-500 text-base md:text-[17px] leading-relaxed font-semibold">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <Link 
  href="/contact"
  className="group relative flex items-center bg-zinc-950 text-white justify-center overflow-hidden border border-zinc-900 px-8 py-3 text-sm sm:text-lg font-semibold transition-colors duration-500 hover:text-white hover:border-[#fc5000] sm:w-fit w-fit mt-8"
>
  {/* Background Sweep: Starts Sky Blue off-screen, moves up AND turns Orange simultaneously */}
  <span className="absolute inset-0 bg-sky-400 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-[#fc5000]"></span>
  
  {/* Animated Text Wrapper */}
  <span className="relative z-10 flex w-full items-center justify-center overflow-hidden">
    
    {/* Layer 1: Original Text (Slides up and disappears) */}
    <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-[150%]">
      Become a Client
    </span>
    
    {/* Layer 2: Hover Text (Starts hidden below, slides up into view) */}
    <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
      Become a Client
    </span>
    
  </span>
</Link>

      </div>
    </section>
  );
}