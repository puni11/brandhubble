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
    <section className="w-full  pt-[40px] pb-[100px]">
      <div className="w-full mx-auto px-[40px] flex flex-col gap-[40px]">
        
 

        {/* ── Uniform Cards Grid ── */}
        {/* Change to lg:grid-cols-4 if you want them all in a single row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-y-[48px] items-start">
          {blogs.map((blog, index) => (
            <a 
              key={index}
              href={blog.href} 
              className="group flex flex-col gap-[14px] no-underline cursor-pointer transition-transform duration-[350ms] ease-out hover:-translate-y-[6px] w-full"
            >
              <div className="overflow-hidden rounded-[4px] w-full aspect-[16/9]">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover block transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                />
              </div>
              <p className="font-['Apfel_Grotezk','Apfel_Grotezk_Placeholder',sans-serif] text-[18px] font-normal text-[#111111] leading-[135%] tracking-[-0.01em] m-0 pr-[20px]">
                {blog.title}
              </p>
              <p className="font-['Apfel_Grotezk','Apfel_Grotezk_Placeholder',sans-serif] text-[14px] font-normal text-[#888888] m-0">
                {blog.date}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}