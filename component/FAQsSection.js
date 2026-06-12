"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "What's included in a monthly retainer?",
    answer: "Our monthly retainer includes dedicated design hours, campaign management, strategy calls, and priority support.",
  },
  {
    id: "02",
    question: "How do you measure success for marketing campaigns?",
    answer: "We define KPIs with you at the start — reach, engagement, conversions, or ROI — and report on them monthly.",
  },
  {
    id: "03",
    question: "Why should we choose Hubble over other design and marketing companies?",
    answer: "Hubble combines design thinking with marketing strategy under one roof — no disconnect between how your brand looks and how it performs.",
  },
  {
    id: "04",
    question: "How does Hubble ensure designs and campaigns align with our brand?",
    answer: "Every engagement starts with a brand immersion. Every asset is reviewed against your brand guidelines before delivery.",
  },
  {
    id: "05",
    question: "Do you work with international clients?",
    answer: "Yes — we work across time zones and have served clients in the US, UK, Middle East, and Southeast Asia.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white mx-auto py-[80px] px-[40px] ">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={faq.id} 
            className="border-t-[0.5px] border-[#d4d4ce] last:border-b-[0.5px]"
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full bg-transparent border-none py-[28px] pr-[60px] flex items-center cursor-pointer text-left relative focus:outline-none"
            >
              <span className="text-[17px] font-normal text-[#111111] flex-1 leading-[1.5]">
                {faq.question}
              </span>

              <span 
                className={`absolute right-0 top-1/2 -translate-y-1/2 text-[24px] transition-colors duration-300 ease-out ${
                  isOpen ? "text-[#111111] font-semibold" : "text-[#c0c0ba] font-light"
                }`}
              >
                {faq.id}
              </span>
            </button>

            {/* Framer Motion for smooth height animation */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pb-[28px]">
                    <p className="text-[15px] leading-[1.8] text-[#232323] m-0 pr-[60px] font-semibold max-w-sm">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        );
      })}
    </section>
  );
}