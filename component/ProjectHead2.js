import React from 'react';

export default function ProjectsHeader2({title, subtitle1, subtitle2, description=""}) {
  return (
    <section className=" bg-[##fcfcfc] relative w-full py-0 md:py-16 font-[family-name:var(--font-apfel)]">
      <div className=" px-6 md:px-24 relative flex items-center justify-center">
        
        {/* Top Left Label Area */}
        {/* Positioned absolutely to the top-left of the max-w container */}
        <div className="absolute top-0 left-6 md:left-20 flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 bg-[#fc5000]"></div>
          <span className="text-[11px] md:text-lg font-medium tracking-tight text-zinc-900 uppercase">
            {title}
          </span>
        </div>

        {/* Main Typography Area */}
        {/* The block itself is centered, but the text inside remains left-aligned */}
        <div className="mt-12 md:mt-8 flex flex-col items-start w-full md:pl-20">
          <h2 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-semibold tracking-tight sm:tracking-tighter leading-[1.0] sm:leading-[0.95]">
            <span className="text-[#0d0d0db3]">{subtitle1} {subtitle1 && ","}</span>
            <span className="text-zinc-950 font-semibold">{subtitle2}</span>
          </h2>
          <p className='mt-6 font-bold text-lg text-[#191919b3]'>{description}</p>
        </div>
        
      </div>
    </section>
  );
}