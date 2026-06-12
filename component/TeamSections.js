"use client";

import React from "react";

const teamMembers = [
  {
    name: "Dev Sharma",
    role: "Co-Founder & Growth Expert",
    // Replace with your actual image path (e.g., "/images/dev.jpg")
    image: "/images/dev.avif",
  },
  {
    name: "Shobhit Rohilla",
    role: "Co-Founder & Brand Strategist",
    // Replace with your actual image path
    image: "/images/shobit.avif",
  },
  {
    name: "Makbool Ahemad",
    role: "SEO Executive",
    // Replace with your actual image path
    image: "/images/makbool.avif",
  },
];

export default function TeamSection2() {
  return (
    <section className="w-full bg-white pt-[100px] pb-[120px] px-[24px] md:px-[40px] ">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-[80px] md:gap-[100px]">
        
        {/* ── Header Area ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] md:gap-[40px] items-start">
          
          {/* Section Number */}
          <div className="md:col-span-5 lg:col-span-6">
            <span className="font-semibold text-[14px] text-[#111] tracking-wide">
              02
            </span>
          </div>

          {/* Heading & Subtext */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-[20px] md:gap-[24px]">
            <h2 className="text-[clamp(64px,8vw,110px)] font-bold text-[#111] leading-[0.9] tracking-[-0.04em] m-0">
              Team
            </h2>
            <p className="text-[16px] md:text-[18px] font-semibold text-[#6a6a6a] leading-[1.4] m-0 max-w-5xl">
              A group of thinkers, builders, and makers<br className="hidden md:block"/> shaping what BrandHubble stands for.
            </p>
          </div>

        </div>

        {/* ── Team Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] md:gap-[32px]">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Wrapper */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#f4f4f4] mb-[20px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06] group-hover:grayscale-0"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-[4px]">
                <h3 className="text-[20px] font-medium text-[#111] m-0 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[14px] font-normal text-[#666] m-0">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
<section className="w-full bg-white flex items-center justify-start">
      {/* ── Main Card Container ── */}
      <div className="relative w-full max-w-[480px] h-[640px] bg-[#f6f6f6] rounded-[24px] p-[32px] md:p-[48px] flex flex-col">
        
        {/* ── Top Row: Logo & Crosshair ── */}
        <div className="flex justify-between items-start w-full">
          <span className="font-[family-name:var(--font-wormbox)] font-bold uppercase tracking-[0.15em] text-[#111111]">
            BRAND HUBBLE
          </span>
          
          {/* Custom Crosshair SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V10M12 14V20M4 12H10M14 12H20" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* ── Middle Section: Icon, Heading, Text ── */}
        <div className="mt-[120px] flex flex-col">
     

          <h2 className=" text-[48px] md:text-[56px] font-medium text-[#111111] leading-none tracking-[-0.03em] mb-[20px]">
            Join us
          </h2>
          
          <p className=" text-[18px] md:text-[20px] font-medium text-[#494949] leading-[1.4] max-w-[440px]">
            We’re always on the lookout for curious minds, bold creatives, and people who give a damn. If that sounds like you
          </p>
        </div>

        {/* ── Bottom Section: CTA ── */}
        <a 
          href="mailto:hello@brandhubble.com" 
          className="mt-auto group flex items-center justify-center gap-[12px] no-underline w-fit mx-auto cursor-pointer"
        >
          {/* Orange upward-right arrow */}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="text-[#ff5a36] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <span className=" text-[28px] font-medium text-[#111111] tracking-[-0.02em]">
            Send us a mail
          </span>
        </a>

      </div>
    </section>
      </div>
    </section>
  );
}