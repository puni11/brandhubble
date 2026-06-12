'use client';

import React from 'react';

export default function ProjectOverview({
  overviewTitle = "OVERVIEW",
  overviewText = "We analyzed the local market and found a gap: a lack of dental brands that speak the language of luxury. Acting as a specialized brand identity design agency, we developed a visual concept centered on ”The Smile Architect.” We produced assets that feel more editorial than medical—using refined typography, gold accents, and lifestyle photography. This approach allowed us to launch a brand that immediately established trust and exclusivity in a crowded market.",
  
  team = [
    { role: "Marketing & SEO Expert", name: "Dev Sharma", image: "/images/dev.avif" },
    { role: "Visual Designer", name: "Shobhit Rohilla", image: "/images/shobit.avif" },
    { role: "Motion Designer", name: "Makbool Ahemad", image: "/images/makbool.avif" }
  ],
  
  deliverables = [
    "Brand Identity & Logo",
    "UI/UX Design",
    "Custom Web Development",
    "Local SEO Strategy",
    "Social Media Assets",
    "Copywriting",
    "3D assets"
  ],
  
  testimonial = {
    rating: 5,
    quote: "”Brand Hubble didn’t just build a website; they captured the soul of my practice. They made us look ten times more polished than we were. A huge win for our digital presence.”",
    name: "Dr. Deepa Saddhnani",
    company: "Toothique",
    image: "https://framerusercontent.com/images/6v8gLpUN5pCVabLZdFY5oCZqF1M.webp?scale-down-to=1024&width=832&height=1248"
  }
}) {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-gray-900 border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* --- TOP SECTION: Overview --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-24">
          
          {/* Label */}
          <div className="lg:w-1/4 shrink-0 flex items-start gap-3 pt-2">
            <span className="w-3.5 h-3.5 bg-[#ea580c] block mt-0.5"></span>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black">
              {overviewTitle}
            </h3>
          </div>
          
          {/* Main Paragraph */}
          <div className="lg:w-3/4">
            <p className="text-2xl md:text-3xl lg:text-3xl font-normal text-gray-800 leading-snug tracking-tight">
              {overviewText}
            </p>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Grid Data --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Team */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-8">Team</h4>
            <div className="flex flex-col gap-6">
              {team.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-12 h-12 rounded-full object-cover grayscale"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-[15px] text-black leading-tight">
                      {member.role}
                    </span>
                    <span className="text-sm text-gray-500">
                      {member.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Deliverables */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-8">Deliverables</h4>
            <ul className="flex flex-col gap-3">
              {deliverables.map((item, index) => (
                <li key={index} className="font-bold text-[15px] text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Testimonial */}
          <div className="flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-6 text-[#ff8a5b]">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            
            {/* Quote */}
            <p className="text-[19px] lg:text-[21px] font-medium text-gray-900 leading-relaxed mb-8">
              {testimonial.quote}
            </p>
            
            {/* Reviewer Info */}
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[15px] text-black leading-tight">
                  {testimonial.name}
                </span>
                <span className="text-sm text-gray-500">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}