'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-white font-sans text-gray-900 border-t border-gray-200 relative">
      {/* Optional Top Accents (Matching your screenshot's header area) */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 pointer-events-none">
        <span className="font-[family-name:var(--font-wormbox)] text-xl font-bold tracking-widest uppercase">Brand Hubble</span>
        <span className="text-gray-400 font-light text-xl leading-none">+</span>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-32 pb-16 md:pb-24 flex flex-col min-h-[500px]">
        
        {/* Left Aligned Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-medium tracking-tight text-black mb-8 leading-[1.1]">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xs font-semibold">
            If you're unsure where to start, book a free discovery call and we'll recommend the right strategy for your business.
          </p>
        </motion.div>

        {/* Bottom Right Aligned Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-auto self-start md:self-end pt-16 md:pt-0"
        >
          <a 
            href="#strategy-call" 
            className="group flex items-center gap-3 text-lg md:text-xl font-medium text-black transition-colors hover:text-[#ea580c]"
          >
            <ArrowUpRight 
              className="text-[#ea580c] w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" 
              strokeWidth={2}
            />
            Get a Free Strategy Call
          </a>
        </motion.div>

      </div>
    </section>
  );
}