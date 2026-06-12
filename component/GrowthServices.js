import React from 'react';
import Link from 'next/link';

export default function GrowthServices() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-6 bg-[##fcfcfc text-zinc-900 font-[family-name:var(--font-apfel)] w-full">
      
     

      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        
        {/* Heading */}
       <h2 className="text-[28px] md:text-5xl font-semibold tracking-tight mb-6 [font-family:var(--font-apfel)]">
  Growth Services That Drive Results
</h2>
        
        {/* Subtitle */}
        <p className="text-[15px] md:text-2xl text-zinc-800 sm:text-zinc-600 mb-10 max-w-7xl font-light tracking-wide">
          Advanced SEO, high-performance websites, paid marketing, branding, and design built for real business growth.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          {/* Button 1: Outline */}
      <Link 
  href="/contact"
  className="group relative flex items-center justify-center overflow-hidden border border-zinc-900 px-8 py-3 text-sm sm:text-lg font-semibold transition-colors duration-500 hover:text-white hover:border-[#fc5000] sm:w-auto w-fit mx-auto"
>
  {/* Background Sweep: Starts Sky Blue off-screen, moves up AND turns Orange simultaneously */}
  <span className="absolute inset-0 bg-sky-400 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-[#fc5000]"></span>
  
  {/* Animated Text Wrapper */}
  <span className="relative z-10 flex w-full items-center justify-center overflow-hidden">
    
    {/* Layer 1: Original Text (Slides up and disappears) */}
    <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-[150%]">
      Book a free Strategy Call/ Audit
    </span>
    
    {/* Layer 2: Hover Text (Starts hidden below, slides up into view) */}
    <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
      Book a free Strategy Call/ Audit
    </span>
    
  </span>
</Link>
<Link 
  href="/services"
  className="group relative flex items-center bg-zinc-950 text-white justify-center overflow-hidden border border-zinc-900 px-8 py-3 text-sm sm:text-lg font-semibold transition-colors duration-500 hover:text-white hover:border-[#fc5000] sm:w-auto w-fit mx-auto"
>
  {/* Background Sweep: Starts Sky Blue off-screen, moves up AND turns Orange simultaneously */}
  <span className="absolute inset-0 bg-sky-400 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-[#fc5000]"></span>
  
  {/* Animated Text Wrapper */}
  <span className="relative z-10 flex w-full items-center justify-center overflow-hidden">
    
    {/* Layer 1: Original Text (Slides up and disappears) */}
    <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-[150%]">
      Explore Our Servicest
    </span>
    
    {/* Layer 2: Hover Text (Starts hidden below, slides up into view) */}
    <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
      Explore Our Services
    </span>
    
  </span>
</Link>
        </div>
      </div>
    </section>
  );
}