"use client";

import React from "react";

const featuredBlog = {
  title: "Behind the Brand: Crafting the Visual Identity for iii Studio",
  date: "Sep 26, 2025",
  image: "/images/b5.avif",
  href: "/blogs/case-study-iii-studio-visual-identity",
};

export default function FeaturedBlog() {
  return (
    <section className="w-full bg-white pb-[60px]">
      <a 
        href={featuredBlog.href} 
        className="group flex flex-col gap-[20px] cursor-pointer no-underline"
      >
        {/* Full width image */}
        <div className="w-full overflow-hidden aspect-[16/9]">
          <img 
            src={featuredBlog.image} 
            alt={featuredBlog.title} 
            className="block w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
          />
        </div>

        {/* Title + date */}
        <div className="flex flex-col gap-[8px] px-[40px]">
          <p className="m-0  text-[22px] font-normal leading-[135%] tracking-[-0.01em] text-[#111111]">
            {featuredBlog.title}
          </p>
          <p className="m-0  text-[15px] font-normal text-[#888888]">
            {featuredBlog.date}
          </p>
        </div>
      </a>
    </section>
  );
}