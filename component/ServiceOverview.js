"use client";

import React from "react";

// ==========================================
// REUSABLE COMPONENT
// ==========================================
export function ServiceOverview({ data }) {
  if (!data) return null;

  const { hero, grid } = data;

  return (
    <section className="w-full min-h-screen bg-[#050505] text-white py-20 px-6 md:px-12 lg:px-20 font-sans rounded-3xl">
      <div className="max-w-[1800px] mx-auto">
        
        {/* ── Top Hero Section ── */}
        <div className="flex flex-col max-w-7xl mb-24">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            {hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium leading-snug mb-10 max-w-2xl">
            {hero.subtitle}
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-[17px] leading-relaxed text-gray-200 font-medium">
              {hero.description1}
            </p>
            <p className="text-[14px] leading-relaxed text-gray-400 max-w-5xl">
              {hero.description2}
            </p>
          </div>
        </div>

        {/* ── Services Grid Section ── */}
        <div>
          {/* Grid Header */}
          <div className="mb-10 flex flex-col gap-2">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              {grid.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {grid.subtitle}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#222] bg-[#0c0c0c] p-8 transition-all duration-300 hover:border-[#444]"
              >
                {/* Subtle Ambient Glow */}
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#e85c2c] opacity-[0.06] blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.12] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Icon Box */}
                  <div className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-gray-400">
                    {service.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// EXAMPLE USAGE & MOCK DATA
// ==========================================

// Simple SVG Icons for the mock data

