"use client";

import React from "react";
import Link from "next/link";

const project = {
  name: "clik.ai",
  desc: "Bold branding that represents advance ai-driven technological tools of the company.",
  image: "/images/p6.avif",
  href: "/project-lobby/clik.ai",
  tags: ["Web Design", "Branding", "Ui/Ux Design", "Brand Strategy", "Performance Marketing"],
};

export default function FeaturedProject({isShow=true}) {
  return (
    <section className="w-full pb-[100px] px-8">
      <div className="max-w-[1750px] mx-auto flex flex-col gap-6">

        {/* Full width image card */}
        <Link href={project.href} className="group flex flex-col gap-0 no-underline cursor-pointer">
          <div className="w-full aspect-[16/7] overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover block transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
            />
            
            {/* Tags row — bottom of image */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-row sm:flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="font-sanstext-xs font-normal text-[#ffffff] bg-black/30 backdrop-blur-lg border border-[#ffffff] px-2.5 py-1 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Text + button below */}
        <div className=" flex flex-col gap-3">
          <Link href={project.href} className="no-underline">
            <p className="font-sans text-[32px] font-normal text-[#111111] m-0 tracking-[-0.02em] leading-[1.1]">
              {project.name}
            </p>
          </Link>
          
          <p className="font-sans text-[15px] font-medium text-[#666666] m-0 leading-[1.5] max-w-[500px]">
            {project.desc}
          </p>
         {isShow &&  <Link 
  href="/project-lobby"
  className="group relative flex items-center bg-black text-white w-fit justify-center overflow-hidden border border-zinc-900 px-8 py-2 text-lg font-semibold transition-colors duration-500 hover:text-white hover:border-[#fc5000]"
>
  {/* Background Sweep: Starts Sky Blue off-screen, moves up AND turns Orange simultaneously */}
  <span className="absolute inset-0 bg-sky-400 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-[#fc5000]"></span>
  
  {/* Animated Text Wrapper */}
  <span className="relative z-10 flex w-full items-center justify-center overflow-hidden">
    
    {/* Layer 1: Original Text (Slides up and disappears) */}
    <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-[150%]">
      See All Projects
    </span>
    
    {/* Layer 2: Hover Text (Starts hidden below, slides up into view) */}
    <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
       See All Projects
    </span>
    
  </span>
</Link>}
          
        </div>

      </div>
    </section>
  );
}