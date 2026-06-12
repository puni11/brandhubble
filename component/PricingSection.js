import Link from 'next/link';
import React from 'react';

const pricingData = [
  {
    id: 'blueprint',
    title: 'THE BLUEPRINT',
    badge: 'LAUNCHPAD',
    theme: 'light',
    promise: 'The Promise: We don\'t just design a logo; we engineer a visual foundation that makes you look investor-ready from Day 1. Stop competing on price and start competing on perception.',
    features: [
      'Strategic Positioning: Defining your "Blue Ocean" and brand enemy.',
      'Visual Identity System: Logo, Color Psychology, Typography & Usage Guidelines.',
      'High-Performance Website: A conversion-focused 5-page site (Webflow/Framer) designed for the "0.5 Second" trust test.',
      'Mobile Optimization: Speed-engineered for Indian 5G networks.'
    ],
    target: 'Best For: Startups, First-Time Founders, & Rebrands.',
    pricePrefix: 'Starts From:',
    price: '₹1,00,000',
    priceSuffix: 'One time project fee',
    buttonText: 'START THE BUILD',
  },
  {
    id: 'engine',
    title: 'THE ENGINE',
    badge: 'GROWTH',
    theme: 'dark',
    promise: 'The Promise: A monthly performance machine. We stop guessing and start engineering "Traffic" into "Cash." This isn\'t maintenance; it\'s aggressive expansion using Content and AI Search Architecture.',
    features: [
      'Social Architecture: 12x High-Fidelity "Bento Grid" posts & captions per month.',
      'Performance Ads: Management of Meta (FB/IG) & Google Ad campaigns.',
      'Funnel Optimization: Monthly tweaks to landing pages to fix conversion "leaks."',
      'AEO (AI Search) Strategy: Optimizing your content to rank in Google SGE summaries.'
    ],
    target: 'Visionary Founders aiming for an Exit, Funding, or Monopoly status.',
    pricePrefix: 'Starts From:',
    price: '₹60,000',
    priceSuffix: 'Monthly Retainer',
    buttonText: 'IGNITE THE ENGINE',
  },
  {
    id: 'incubator',
    title: 'THE INCUBATOR',
    badge: 'THE INCUBATOR',
    theme: 'light',
    promise: 'The Promise: We stop being an agency. We become your partners. We invest our senior talent, tech resources, and network in exchange for long-term upside. You get a Fractional CMO and a full Tech Team without the hiring headache.',
    features: [
      'Fractional CMO: We join your leadership Slack/Weekly calls.',
      'Full Tech Injection: Access to senior developers (Node.js/React) for custom tools/apps.',
      'The "Alpha" Network: Direct introductions to our investor & PR network.',
      'Omnichannel Reputation: Podcast, PR, and Founder Branding management.'
    ],
    target: 'Best for Visionary Founders aiming for an Exit, Funding, or Monopoly status.',
    pricePrefix: '',
    price: 'Application Only',
    priceSuffix: 'Custom Retainer + Equity',
    buttonText: 'APPLY FOR INCUBATION',
  }
];

export default function PricingSection() {
  return (
    <section className="w-full bg-gray-50 flex items-center justify-center py-16 px-4 sm:px-8 font-sans">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pricingData.map((tier) => {
          const isDark = tier.theme === 'dark';
          
          return (
            <div 
              key={tier.id}
              className={`flex flex-col p-8 md:p-10 transition-transform duration-300 ease-out hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#0f0f0f] text-white border-none' 
                  : 'bg-white text-gray-900 border border-gray-600'
              }`}
            >
              {/* Header & Badge */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {tier.title}
                </h3>
                <span className="bg-[#ffe8e0] text-[#ff5a36] text-[10px] sm:text-xs font-bold px-2 py-1 uppercase tracking-wider">
                  {tier.badge}
                </span>
              </div>

              {/* Promise */}
              <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {tier.promise}
              </p>

              {/* Features List */}
              <ul className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/* Square Bullet point */}
                    <div className={`w-2 h-2 mt-1.5 shrink-0 ${isDark ? 'bg-white' : 'bg-black'}`} />
                    <span className={`text-sm leading-snug ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Target Audience */}
              <p className={`text-sm mb-12 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                {tier.target}
              </p>

              {/* Pricing */}
              <div className="mb-6 flex flex-wrap items-baseline gap-2">
                {tier.pricePrefix && (
                  <span className="text-lg md:text-xl font-medium tracking-tight">
                    {tier.pricePrefix}
                  </span>
                )}
                <span className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {tier.price}
                </span>
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.priceSuffix}
                </span>
              </div>

              {/* CTA Button */}
                <Link 
  href="/contact"
  className={`group relative flex items-center ${isDark?"bg-white text-black": "bg-black text-white"}  w-full justify-center overflow-hidden border border-zinc-900 px-8 py-2 text-lg font-semibold transition-colors duration-500 hover:text-white hover:border-[#fc5000]`}
>
  {/* Background Sweep: Starts Sky Blue off-screen, moves up AND turns Orange simultaneously */}
  <span className="absolute inset-0 bg-sky-400 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-[#fc5000]"></span>
  
  {/* Animated Text Wrapper */}
  <span className="relative z-10 flex w-full items-center justify-center overflow-hidden">
    
    {/* Layer 1: Original Text (Slides up and disappears) */}
    <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-[150%]">
     {tier.buttonText}
    </span>
    
    {/* Layer 2: Hover Text (Starts hidden below, slides up into view) */}
    <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
       {tier.buttonText}
    </span>
    
  </span>
</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}