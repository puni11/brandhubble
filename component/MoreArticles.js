import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "Behind the Brand: Crafting the Visual Identity for iii Studio",
    date: "Sep 26, 2025",
    // Replace with your actual image paths in the public folder
    imageSrc: "https://framerusercontent.com/images/afKzo7Ldi0rhj01vS7hJydFr1YE.png?scale-down-to=2048&width=2652&height=1492", 
    imageAlt: "iii studio visual identity"
  },
  {
    id: 2,
    title: "Who's Afraid of ChatGPT-5? Here's Why It's Your Creative Co-Pilot, Not the Competition",
    date: "May 30, 2025",
    imageSrc: "https://framerusercontent.com/images/ImwKPy7zpu3M6noL344I9kmIVRc.png?scale-down-to=2048&width=2084&height=1168",
    imageAlt: "Creative Co-Pilot illustration"
  },
  {
    id: 3,
    title: "Future-Proof Your Creative Edge: 5 Skills That Keep You Ahead of the Algorithm",
    date: "Aug 26, 2025",
    imageSrc: "https://framerusercontent.com/images/IIcUfk4p3RXlIgqL2ld5K1r3yI.png?scale-down-to=2048&width=2256&height=1256",
    imageAlt: "Future-Proof Creative Edge illustration"
  },
  {
    id: 4,
    title: "Designing for Tomorrow: 8 Graphic Design Trends Shaping 2025",
    date: "Jun 27, 2025",
    imageSrc: "https://framerusercontent.com/images/LrOzD28IWYNC7JptU7lQvKtsh6Q.png?scale-down-to=2048&width=2380&height=1318",
    imageAlt: "Graphic Design Trends illustration"
  }
];

export default function MoreArticles() {
  return (
    <section className="w-full mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-sans">
      
      {/* Left Sidebar / Category Marker */}
      <div className="w-32 shrink-0 flex items-start gap-3 pt-2">
        <div className="w-3 h-3 bg-[#f35325] mt-1 shrink-0"></div>
        <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
          Blog
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        
        {/* Header */}
        <div className="max-w-[1600px] mx-auto mb-12">
          <h2 className="text-5xl md:text-6xl font-normal text-gray-600 leading-tight">
            More
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Articles
          </h2>
        </div>

        {/* Article List */}
        <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200 max-w-[1600px] mx-auto">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="py-8 flex flex-col md:flex-row gap-8 items-start group cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full md:w-[45%] relative aspect-[3/1] bg-gray-100 overflow-hidden">
               
               <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                /> 
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[55%] flex flex-col pt-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-snug decoration-2 underline-offset-4">
                  {article.title}
                </h3>
                <time className="text-sm font-medium text-gray-500">
                  {article.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8">
          <Link href="/blogs" className="bg-black text-white text-xs font-bold px-6 py-3 uppercase tracking-wide hover:bg-gray-800 transition-colors">
            Load More
          </Link>
        </div>

      </div>
    </section>
  );
}