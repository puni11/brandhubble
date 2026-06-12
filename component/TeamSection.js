"use client";

import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Shobhit Rohillia",
    role: "Co-founder & Creative Director",
    image: "images/shobit.avif",
  },
  {
    name: "Devendra Sharma",
    role: "Co-founder, Growth Expert",
    image: "images/dev.avif",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Keeping the font import here so the component remains standalone */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap');
      `}</style>

      <section 
        ref={sectionRef} 
        className=" px-[24px] w-full pt-[64px] md:pt-[60px] pb-[56px] md:pb-[80px] font-['Syne',sans-serif] overflow-hidden"
      >
 

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[4px]">
          {teamMembers.map((member, i) => (
            <div 
              key={i}
              className={`animate-on-scroll group opacity-0 translate-y-[40px] transition-all duration-[800ms] ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0 relative overflow-hidden cursor-pointer ${
                i === 1 ? 'delay-[150ms]' : ''
              }`} 
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale scale-[1.03] transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08] block"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center text-[#444] text-[48px] font-bold tracking-[-0.02em]">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
              </div>
              <div className="pt-[20px]">
                <p className="text-[22px] font-semibold text-[#111] m-0 mb-[6px] tracking-[-0.01em]">
                  {member.name}
                </p>
                <p className="text-[14px] text-[#888] font-normal tracking-[0.02em] m-0">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="animate-on-scroll opacity-0 translate-y-[20px] transition-all duration-[600ms] delay-300 ease-out [&.in-view]:opacity-100 [&.in-view]:translate-y-0 mt-[64px]">
          <a 
            href="/team" 
            className="group/btn inline-flex items-center gap-[12px] bg-[#111] text-white font-['Syne',sans-serif] text-[14px] font-semibold tracking-[0.04em] px-[28px] py-[16px] border-none cursor-pointer no-underline transition-all duration-300 ease-out hover:bg-[#e85c2c] hover:gap-[18px]"
          >
            Explore Team
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 ease-out group-hover/btn:translate-x-[4px]"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}