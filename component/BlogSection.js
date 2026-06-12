"use client";

import React from "react";

const blogs = [
  {
    title: "Behind the Brand: Crafting the Visual Identity for iii Studio",
    date: "Sep 26, 2025",
    image: "/images/b1.avif",
    href: "/blogs/case-study-iii-studio-visual-identity",
  },
  {
    title: "Who's Afraid of ChatGPT-5? Here's Why It's Your Creative Co-Pilot, Not the Competition",
    date: "May 30, 2025",
    image: "/images/b2.avif",
    href: "/blogs/chatgpt-5-creative-co-pilot",
  },
  {
    title: "Designing for Tomorrow: 8 Graphic Design Trends Shaping 2025",
    date: "Sep 26, 2025",
    image: "/images/b3.avif",
    href: "/blogs/8-graphic-design-trends-shaping-2025",
  },
  {
    title: "Future-Proof Your Creative Edge: 5 Skills That Keep You Ahead of the Algorithm",
    date: "Aug 26, 2025",
    image: "/images/b4.avif",
    href: "/blogs/future-proof-creative-skills-ai-era",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white pt-[80px] pb-[100px]">
      <div className="w-full mx-auto px-[40px] flex flex-col gap-[40px]">
    
        {/* ── Row 1: small + large ── */}
        <div className="flex flex-col md:flex-row gap-[24px] items-start">
          {/* Small card */}
          <a 
            href={blogs[0].href} 
            className="group flex flex-col gap-[14px] no-underline cursor-pointer transition-transform duration-[350ms] ease-out hover:-translate-y-[6px] flex-none w-full md:w-[33%]"
          >
            <div className="overflow-hidden rounded-[4px] w-full aspect-[4/3]">
              <img 
                src={blogs[0].image} 
                alt={blogs[0].title} 
                className="w-full h-full object-cover block transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
              />
            </div>
            <p className=" text-[18px] font-normal text-[#111111] leading-[135%] tracking-[-0.01em] m-0">
              {blogs[0].title}
            </p>
            <p className=" text-[14px] font-normal text-[#888888] m-0">
              {blogs[0].date}
            </p>
          </a>

          {/* Large card */}
          <a 
            href={blogs[1].href} 
            className="group flex flex-col gap-[14px] no-underline cursor-pointer transition-transform duration-[350ms] ease-out hover:-translate-y-[6px] flex-1 w-full"
          >
            <div className="overflow-hidden rounded-[4px] w-full aspect-[16/9]">
              <img 
                src={blogs[1].image} 
                alt={blogs[1].title} 
                className="w-full h-full object-cover block transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
              />
            </div>
            <p className=" text-[18px] font-normal text-[#111111] leading-[135%] tracking-[-0.01em] m-0">
              {blogs[1].title}
            </p>
            <p className=" text-[14px] font-normal text-[#888888] m-0">
              {blogs[1].date}
            </p>
          </a>
        </div>

        {/* ── Row 2: wide + small ── */}
        <div className="flex flex-col md:flex-row gap-[24px] items-start">
          {/* Wide card */}
          <a 
            href={blogs[2].href} 
            className="group flex flex-col gap-[14px] no-underline cursor-pointer transition-transform duration-[350ms] ease-out hover:-translate-y-[6px] flex-1 w-full"
          >
            <div className="overflow-hidden rounded-[4px] w-full aspect-[16/9]">
              <img 
                src={blogs[2].image} 
                alt={blogs[2].title} 
                className="w-full h-full object-cover block transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
              />
            </div>
            <p className=" text-[18px] font-normal text-[#111111] leading-[135%] tracking-[-0.01em] m-0">
              {blogs[2].title}
            </p>
            <p className=" text-[14px] font-normal text-[#888888] m-0">
              {blogs[2].date}
            </p>
          </a>

          {/* Small card */}
          <a 
            href={blogs[3].href} 
            className="group flex flex-col gap-[14px] no-underline cursor-pointer transition-transform duration-[350ms] ease-out hover:-translate-y-[6px] flex-none w-full md:w-[33%]"
          >
            <div className="overflow-hidden rounded-[4px] w-full aspect-[4/3]">
              <img 
                src={blogs[3].image} 
                alt={blogs[3].title} 
                className="w-full h-full object-cover block transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
              />
            </div>
            <p className=" text-[18px] font-normal text-[#111111] leading-[135%] tracking-[-0.01em] m-0">
              {blogs[3].title}
            </p>
            <p className=" text-[14px] font-normal text-[#888888] m-0">
              {blogs[3].date}
            </p>
          </a>
        </div>

      </div>
    </section>
  );
}