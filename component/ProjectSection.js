"use client";

import React from "react";

const projects = [
  {
    name: "Toothique",
    desc: "Redefining Dentistry as a Luxury Experience",
    image: "/images/p1.avif",
    href: "/project-lobby/toothique",
    tags: ["Product design", "Branding", "Ui/Ux Design", "Brand Strategy", "Performance Marketing"],
  },
  {
    name: "Grras",
    desc: "Global pioneer in training and consulting IT workforce, for big and mid size enterprises.",
    image: "/images/p2.avif",
    href: "/project-lobby/grras",
    tags: ["Product design", "Branding", "Ui/Ux Design", "Brand Strategy", "Performance Marketing"],
  },
  {
    name: "Rayrty",
    desc: "A Blend of classic, luxury and modern design",
    image: "/images/p3.avif",
    href: "/project-lobby/rayrty",
    tags: ["Branding", "Ui/Ux Design", "Brand Strategy"],
  },
  {
    name: "Starbodh",
    desc: "Short description of Starbodh project goes here.",
    image: "/images/p4.avif",
    href: "/project-lobby/starbodh",
    tags: ["Product design", "Branding", "Performance Marketing"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-[1400px] pt-20 pb-[100px] max-w-[1800px] mx-auto font-sans">
      <div className=" px-10 flex flex-col gap-12">

        {/* ── 2x2 Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.href} className="group flex flex-col gap-0 no-underline cursor-pointer">
              
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover block transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
                
                {/* Tags overlay on image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-row sm:flex-wrap gap-2">
                  {p.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="font-sans text-xs font-normal text-[#ffffff] bg-black/30 backdrop-blur-lg border border-[#e0e0e0]  px-2.5 py-1 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 pb-8 flex flex-col gap-2">
                <p className="text-[32px] font-normal text-[#111111] m-0 tracking-[-0.02em] leading-[1.1]">
                  {p.name}
                </p>
                <p className=" text-[15px] font-normal text-[#666666] m-0 leading-normal">
                  {p.desc}
                </p>
              </div>
              
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}