"use client";

import React from "react";

const navigation = [
  { label: "About us",  href: "/about" },
  { label: "Projects",  href: "/project-lobby" },
  { label: "Blogs",     href: "/blogs" },
];

const services = [
  { label: "SEO",                  href: "/services/seo" },
  { label: "Social media",         href: "/services/social-media" },
  { label: "Packaging",            href: "/services/packaging" },
  { label: "Website Design",       href: "/services/website-design" },
  { label: "Branding & Launch",    href: "/services/branding-and-launch-campaign" },
  { label: "Performance Marketing", href: "/services/performance-marketing" }, // Fixed typo here
];

const social = [
  { label: "Instagram", href: "https://www.instagram.com/brandhubble?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/brand-hubble/?originalSubdomain=in" },
  { label: "Behance",   href: "https://www.behance.net/brandhubble" },
  { label: "Whatsapp",  href: "http://wa.me/918005792646" },
];

const legals = [
  { label: "Privacy Policy",   href: "/privacy-policy" },
  { label: "Term of Service",  href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <div className="min-h-screen pt-20">
    <footer className="w-full h-[140vh] sm:h-[90vh] rounded-[20px] md:rounded-t-[40px] pt-[60px] px-[24px] md:px-[40px] overflow-hidden relative bg-[#111111] bg-[url('/bg.avif')] bg-cover bg-no-repeat ">
      
      {/* ── 4 column links ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px] mb-[80px] max-w-[1400px]">
        
        {/* Navigation */}
        <div>
          <p className=" text-[12px] font-semibold text-white/45 tracking-[0.06em] uppercase mb-[24px]">
            Navigation
          </p>
          <div className="flex flex-col gap-[16px]">
            {navigation.map((l) => (
             <a 
  key={l.label} 
  href={l.href} 
  className="relative w-fit text-[18px] font-normal text-white no-underline transition-all duration-200 ease-out hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full"
>
  {l.label}
</a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className=" text-[12px] font-semibold text-white/45 tracking-[0.06em] uppercase mb-[24px]">
            SERVICES
          </p>
          <div className="flex flex-col gap-[16px]">
            {services.map((l) => (
             <a 
  key={l.label} 
  href={l.href} 
  className="relative w-fit text-[18px] font-normal text-white no-underline transition-all duration-200 ease-out hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full"
>
  {l.label}
</a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <p className=" text-[12px] font-semibold text-white/45 tracking-[0.06em] uppercase mb-[24px]">
            Social
          </p>
          <div className="flex flex-col gap-[16px]">
            {social.map((l) => (
              <a 
  key={l.label} 
  href={l.href} 
  target="_blank"
  rel="noreffer noopener"
  className="relative w-fit text-[18px] font-normal text-white no-underline transition-all duration-200 ease-out hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full"
>
  {l.label}
</a>
            ))}
          </div>
        </div>

        {/* Legals */}
        <div>
          <p className=" text-[12px] font-semibold text-white/45 tracking-[0.06em] uppercase mb-[24px]">
            Legals
          </p>
          <div className="flex flex-col gap-[16px]">
            {legals.map((l) => (
             <a 
  key={l.label} 
  href={l.href} 
  className="relative w-fit text-[18px] font-normal text-white no-underline transition-all duration-200 ease-out hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full"
>
  {l.label}
</a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="absolute max-w-[1600px] mx-auto left-0 sm:left-50 bottom-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center pb-[24px] gap-[20px]">
        <p className=" text-[13px] font-normal text-white/50 m-0 text-center md:text-left">
          © 2025-2026 Brand Hubble. All rights reserved.
        </p>
        <a href="/" className="relative w-fit text-[18px] font-normal text-white no-underline transition-all duration-200 ease-out hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
          <span className="text-[18px] transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
          Back to home
        </a>
      </div>

      {/* ── Big BRAND HUBBLE text ── */}
      <div className="w-full overflow-hidden mt-[8px]" aria-hidden="true">
        <span className="font-[family-name:var(--font-wormbox)] text-[clamp(80px,14vw,880px)] font-bold text-white tracking-[-0.02em] leading-[0.85] block whitespace-nowrap text-center md:text-left">
          BRAND HUBBLE
        </span>
      </div>
</div>
<div className="absolute h-[70px] sm:h-[150px] w-full backdrop-blur-xs bottom-0 left-0"></div>
    </footer>
    </div>
  );
}