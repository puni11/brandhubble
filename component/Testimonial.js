'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// We mock the data based on your image. 
// You can easily swap the image URLs with your actual local assets (e.g., '/images/prerit.jpg').
const testimonialData = [
  {
    id: 1,
    companyLogo: 'https://framerusercontent.com/images/Ko388iApCorGHrqvLpQviMy7E.png?scale-down-to=512&width=787&height=200', 
    rating: 5,
    heading: 'Feedback',
    quote: 'From strategy to execution, they integrated seamlessly into our workflow and brought clarity to every step of the process.',
    name: 'Prerit Gautam',
    role: 'CEO - Clik.ai',
    // Using placeholder images for demonstration
    mainImage: 'https://framerusercontent.com/images/cdU33EvDCI8fdGKABOKxrzJL4U.png?width=554&height=456',
    thumbImage: 'https://framerusercontent.com/images/H12Lfbm2uhVRhWVBEfXhe18g79Q.png?width=885&height=887',
  },
  {
    id: 2,
    companyLogo: 'https://framerusercontent.com/images/Ko388iApCorGHrqvLpQviMy7E.png?scale-down-to=512&width=787&height=200',
    rating: 5,
    heading: 'Feedback',
    quote: 'The team delivered beyond our expectations. The new platform is incredibly fast and user-friendly. Highly recommended.',
    name: 'Gaurav Saluja',
    role: 'Grras Solutions',
    mainImage: 'https://framerusercontent.com/images/yFe3HuJRhor7EXlFBJatzQzHvM.jpeg?scale-down-to=1024&width=1280&height=853',
    thumbImage: 'https://framerusercontent.com/images/yFe3HuJRhor7EXlFBJatzQzHvM.jpeg?scale-down-to=1024&width=1280&height=853',
  },
  {
    id: 3,
    companyLogo: 'https://framerusercontent.com/images/Ko388iApCorGHrqvLpQviMy7E.png?scale-down-to=512&width=787&height=200',
    rating: 4,
    heading: 'Feedback',
    quote: 'Every request handled with care, insight, and a clear sense of design purpose. It was never just about speed-it was about doing it right',
    name: 'Dr. Deepa Sadhnani',
    role: 'Toothique',
    mainImage: 'https://framerusercontent.com/images/cdaDBiUeEFoUcek6ZAvpqCfmCg.jpg?scale-down-to=1024&width=8192&height=5464',
    thumbImage: 'https://framerusercontent.com/images/cdaDBiUeEFoUcek6ZAvpqCfmCg.jpg?scale-down-to=1024&width=8192&height=5464',
  }
];

export default function TestimonialSection({isWidth=false}) {
  // State to track which testimonial is currently active
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonialData[activeIndex];

  // Helper to render stars
  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={`w-4 h-4 ${index < count ? 'text-orange-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full bg-[##fcfcfc] flex items-center justify-center p-8 font-sans">
      <div className={`${isWidth ?'max-w-[1800px]':' max-w-[1400px]'} w-full flex flex-col md:flex-row gap-12 lg:gap-24 items-start`}>
        
        {/* Left Column: Images */}
        <div className="w-full md:w-[55%] flex flex-col items-center gap-6">
          {/* Main Large Image */}
          <div className="relative w-full aspect-[5/4] overflow-hidden bg-gray-100 shadow-sm transition-opacity duration-300">
            {/* If using Next.js <Image />, ensure domains are configured in next.config.js */}
            <img
              src={activeTestimonial.mainImage}
              alt={activeTestimonial.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Thumbnail Selectors */}
          <div className="flex gap-4">
            {testimonialData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden w-20 h-16 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'ring-2 ring-black grayscale-0 opacity-100' 
                    : 'grayscale opacity-60 hover:opacity-100'
                }`}
                aria-label={`View feedback from ${item.name}`}
              >
                <img
                  src={item.thumbImage}
                  alt={`Thumbnail of ${item.name}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-[55%] flex flex-col pt-4 md:pt-12">
          
          {/* Top Row: Logo & Rating */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
            <div className="flex items-center gap-2 font-bold text-lg text-gray-900">
              {/* Fake logo icon for visual match */}
              <div className="w-4 h-4 bg-black flex items-center justify-center rounded-sm">
                 <div className="w-2 h-0.5 bg-white"></div>
              </div>
              <img
                  src={activeTestimonial.companyLogo}
                  alt={`Thumbnail of ${activeTestimonial.name}`}
                  className="object-cover w-32 h-8"
                />
            </div>
            <div className="flex gap-1">
              {renderStars(activeTestimonial.rating)}
            </div>
          </div>

          {/* Animated Content Wrapper */}
          <div 
            key={activeIndex} // This key forces re-render for basic CSS animation if needed
            className="flex flex-col animate-fadeIn"
          >
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">
              {activeTestimonial.heading}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              {activeTestimonial.quote}
            </p>
            
            <div>
              <h3 className="text-2xl font-normal text-gray-900 mb-1">
                {activeTestimonial.name}
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                {activeTestimonial.role}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}