'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Sample data populated with links
const services = [
  {
    id: '01',
    title: 'Performance Marketing',
    subtitle: 'Paid Advertising for Scalable Revenue Growth',
    description:
      'ROI-focused campaigns across Google Ads, Meta Ads, and other platforms to drive leads, sales, and conversions.',
    btnText: 'Explore Performance Marketing',
    link: '/services/performance-marketing'
  },
  {
    id: '02',
    title: 'Social Media Marketing',
    subtitle: 'Building Communities and Brand Loyalty',
    description:
      'Engaging content and strategic community management to grow your audience and build lasting relationships.',
    btnText: 'Explore Social Media',
    link: '/services/social-media'
  },
  {
    id: '03',
    title: 'Advanced SEO Services',
    subtitle: 'Data-Driven Organic Growth',
    description:
      'Comprehensive on-page and off-page optimization strategies to dominate search engine results.',
    btnText: 'Explore SEO Services',
    link: '/services/seo'
  },
  {
    id: '04',
    title: 'Brand Strategy & Identity',
    subtitle: 'Crafting Memorable Brand Experiences',
    description:
      'Strategic positioning, visual identity, and brand messaging that resonates with your target market.',
    btnText: 'Explore Brand Strategy',
    link: '/services/brand-strategy'
  },
  {
    id: '05',
    title: 'Packaging Design',
    subtitle: 'Physical Touchpoints that Convert',
    description:
      'Innovative and sustainable packaging solutions that stand out on the shelf and delight customers.',
    btnText: 'Explore Packaging Design',
    link: '/services/packaging'
  },
  {
    id: '06',
    title: 'Website Design & Development',
    subtitle: 'High-Performance Digital Experiences',
    description:
      'Custom, responsive websites built for speed, accessibility, and conversion rate optimization.',
    btnText: 'Explore Web Design',
    link: '/services/web-design'
  },
];

export default function ServicesSection({isShow = true}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1800px] mx-auto px-6 py-16 md:py-12 font-sans text-black">
      {/* Header Section */}
      {isShow && (
        <div className="flex flex-col md:flex-row justify-between max-w-7xl items-start mb-24 gap-12">
          <div className="flex items-center gap-2 font-semibold tracking-wide text-sm">
            <div className="w-4 h-4 bg-[#FA5A2A]" />
            SERVICES
          </div>

          <p className="max-w-xl text-[#686666] text-md md:text-2xl leading-snug font-medium">
            Empowering your brand with innovative design solutions that captivate
            your audience, enhance user experience, and drive measurable growth
            across every digital and physical touchpoint.
          </p>
        </div>
      )}

      {/* Accordion List */}
      <div className="flex flex-col gap-6">
        {services.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={service.id} className="flex flex-col">
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center gap-4 md:gap-8 relative">
                  <span
                    className={`text-xl md:text-3xl font-bold transition-all duration-300 ${
                      isOpen ? 'text-[#FA5A2A] text-xs md:text-xs' : 'text-black '
                    }`}
                  >
                    {service.id}.
                  </span>
                  
                  <h2
                    className={`text-xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-[#FA5A2A]' : 'text-black'
                    }`}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* Toggle Button */}
                <div
                  className={`flex items-center justify-center w-8 h-8 border transition-colors duration-300 ${
                    isOpen
                      ? 'border-[#FA5A2A] text-[#FA5A2A]'
                      : 'border-gray-400 text-black'
                  }`}
                >
                  {isOpen ? (
                    <X strokeWidth={1.5} size={20} />
                  ) : (
                    <Plus strokeWidth={1.5} size={20} />
                  )}
                </div>
              </div>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className={`pt-6 pb-12 ${isOpen ? "pl-0 md:pl-0" : ' pl-[3.5rem] md:pl-[5.5rem]'} pr-4 max-w-3xl transition-all`}>
                      <h3 className="text-sm md:text-base font-bold text-gray-800 mb-2">
                        {service.subtitle}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Converted to a Next.js Link */}
                      <Link 
                        href={service.link}
                        className="inline-flex items-center w-fit gap-2 bg-[#FA5A2A] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#E04D22] transition-colors"
                      >
                        {service.btnText}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}