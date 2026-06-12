'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function FAQSection({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {
    // If the clicked FAQ is already open, close it (set to null). Otherwise, open the clicked one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-20 md:py-32 font-sans text-gray-900">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Header Area */}
          <div className="lg:w-1/4 shrink-0">
            <h2 className="text-[80px] md:text-[100px] lg:text-[120px] font-medium leading-none tracking-tight mb-6 md:mb-8 text-[#111]">
              FAQ
            </h2>
            <p className="text-gray-600 text-lg md:text-[20px] leading-relaxed max-w-xs mb-10 md:mb-16">
              Get quick answers about working with us and our approach to digital solutions.
            </p>
            <Link 
              href="/contact" 
              className="group flex items-center gap-3 text-xl md:text-2xl font-medium text-black hover:text-[#ea580c] transition-colors w-fit"
            >
              <ArrowUpRight 
                className="text-[#ea580c] w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" 
                strokeWidth={2.5}
              />
              Ask a question
            </Link>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:w-2/3 border-t border-gray-300/70 mt-4 lg:mt-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={faq.id} 
                  className="border-b border-gray-300/70"
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <h3 className={`text-lg md:text-[20px] font-medium transition-colors duration-300 ${isOpen ? 'text-black' : 'text-[#111] group-hover:text-gray-600'}`}>
                      {faq.question}
                    </h3>
                    <span className={`font-bold text-lg md:text-xl font-mono shrink-0 transition-colors duration-300 ${isOpen ? 'text-[#000000]' : 'text-gray-300 group-hover:text-gray-400'}`}>
                      {faq.id}
                    </span>
                  </button>

                  {/* Expandable Content (Animated) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-gray-800 font-semibold text-base md:text-lg leading-relaxed max-w-2xl pr-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}