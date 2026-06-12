'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const processData = [
  {
    id: '01',
    title: 'Discovery',
    bgColor: 'bg-[#fcf0ed]',
    details: [
      {
        subtitle: 'Stakeholder interviews & briefing',
        desc: 'We kick things off by talking with key stakeholders to understand the business, the product, and what success looks like. We gather context, listen to pain points, and align on expectations and outcomes.',
        time: '3-5 Days'
      },
      {
        subtitle: 'User & market research',
        desc: 'From audience behaviors to competitive landscapes, we dig deep. This can include user interviews, heuristic reviews, and trend analysis to uncover insights that will inform both the design and strategy moving forward.',
        time: '1 Week'
      },
      {
        subtitle: 'Defining the challenge',
        desc: 'With everything on the table, we define a clear problem statement, map out user journeys, and outline key objectives. This becomes the north star for everything that follows.',
        time: '2 Days'
      }
    ]
  },
  {
    id: '02',
    title: 'Concept',
    bgColor: 'bg-[#ffd9cc]',
    details: [
      { subtitle: 'Ideation & Brainstorming', desc: 'We explore multiple directions, looking for the most effective way to solve the challenge. No idea is too wild at this stage.', time: '3 Days' },
      { subtitle: 'Wireframing', desc: 'We strip away the visuals and focus purely on layout, flow, and user experience. This acts as the structural blueprint.', time: '1 Week' },
      { subtitle: 'Prototyping', desc: 'We build clickable prototypes to test flows and ensure the logic works before committing to high-fidelity designs.', time: '4 Days' }
    ]
  },
  {
    id: '03',
    title: 'Execution',
    bgColor: 'bg-[#ffb399]',
    details: [
      { subtitle: 'UI Design', desc: 'Applying color, typography, and visual flair to the wireframes. We create a cohesive design system that matches your brand.', time: '2 Weeks' },
      { subtitle: 'Development', desc: 'Our engineers bring the designs to life, building clean, scalable, and performant code across all required platforms.', time: '3-4 Weeks' },
      { subtitle: 'QA & Testing', desc: 'Rigorous testing to squash bugs, ensure cross-browser compatibility, and guarantee a smooth user experience.', time: '1 Week' }
    ]
  },
  {
    id: '04',
    title: 'Launch',
    bgColor: 'bg-[#ff8c66]',
    details: [
      { subtitle: 'Deployment', desc: 'Pushing the final code to the live server. We handle all the technical configurations to ensure a smooth transition.', time: '1 Day' },
      { subtitle: 'Monitoring', desc: 'Keeping a close eye on the live product to catch any unforeseen issues and ensure stability under real-world traffic.', time: 'Ongoing' },
      { subtitle: 'Handoff & Documentation', desc: 'Delivering all source files, design assets, and technical documentation so your team has everything they need.', time: '1 Day' }
    ]
  }
];

export default function ProcessAccordion() {
  const [openSection, setOpenSection] = useState('01');
const [isMobile, setIsMobile] = useState(false);
  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };
  useEffect(() => {
    // Check if the screen is mobile (e.g., under 768px for standard md breakpoint)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans pb-24 overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-center pt-24 pb-16 px-8 md:px-16 lg:px-32 max-w-[1600px] mx-auto space-y-4 md:space-y-0 md:space-x-60">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-[#ff5a36]" />
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-800">
            Process
          </span>
        </div>
        <p className="text-lg md:text-xl font-medium text-gray-800 max-w-4xl">
          Let’s dive into the process. From first idea to final launch, every step is clear and intentional.
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="w-full flex flex-col">
        {processData.map((item) => {
          const isOpen = openSection === item.id;

          return (
            <div key={item.id} className="w-full flex flex-col">
              
              {/* Clickable Header Row */}
              <div 
                className="relative w-full cursor-pointer bg-white"
                onClick={() => toggleSection(item.id)}
              >
                {/* The Magic Background Block: 
                  When closed, it's 100% width. When open, it animates down to a fixed width on the right.
                */}
                <motion.div
                  className={`absolute top-0 right-0 h-full ${item.bgColor}`}
                  initial={false}
                  animate={{
                    width: isOpen ? '180px' : '100%',
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Content Layer (Stays relative and above the background) */}
                <div className={`relative z-10 flex items-center justify-between w-full transition-all duration-500 ${
                  isOpen ? 'pt-6 mb-0 sm:-mb-4' : 'py-2'
                }`}>
                  {/* Title */}
                  <div className="pl-8 md:pl-16 lg:pl-32">
                    <motion.h2 
                      layout 
                      className={`text-4xl md:text-4xl font-medium text-gray-900 ${isOpen && 'text-white'}`}
                    >
                      {item.title}
                    </motion.h2>
                  </div>

                  {/* Number (Sits inside the background block area) */}
                  <div className="pr-12 md:pr-16 w-[280px] flex justify-end">
                    <motion.span 
                      layout 
                      className="text-7xl md:text-6xl font-bold text-white leading-none font-sans tracking-tighter opacity-90"
                    >
                      {item.id}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Expandable Content Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden bg-white origin-top"
                  >
                    <div className="pl-8 md:pl-16 lg:pl-32 pr-8 md:pr-16 lg:pr-[300px] pb-24 pt-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                      {item.details.map((detail, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                          className="flex flex-col"
                        >
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 pr-4">
                            {detail.subtitle}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                            {detail.desc}
                          </p>
                          <p className="text-sm font-bold text-gray-900">
                            {detail.time}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}