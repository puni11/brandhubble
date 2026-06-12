import React from 'react';

export default function ArticleLayout({ data }) {
  if (!data) return null;

  const { metadata, title, contentBlocks } = data;

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans text-gray-900">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        
        {/* Sticky Left Sidebar for Metadata */}
        <aside className="md:w-1/4 lg:w-1/7 flex-shrink-0">
          <div className="sticky top-12">
            {/* Top Icon */}
         
            
            {/* Date and Time */}
            <div className="text-gray-500 text-sm font-medium space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{metadata?.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{metadata?.readTime}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Article Content */}
        <article className="md:w-3/4 lg:w-6/7 ">
          {/* Main Title */}
          <h1 className="text-2xl md:text-3xl lg:text-2xl font-bold tracking-tight leading-snug mb-12">
            {title}
          </h1>

          {/* Dynamic Content Blocks */}
          <div className="space-y-6 text-[15px] leading-relaxed text-gray-800">
            {contentBlocks?.map((block, index) => {
              
              // Handle Headings
              if (block.type === 'heading') {
                return (
                  <h3 key={index} className="text-lg font-bold mt-10 mb-2">
                    {block.content}
                  </h3>
                );
              }

              // Handle Paragraphs
              if (block.type === 'paragraph') {
                // Using dangerouslySetInnerHTML to allow embedded link tags styled globally
                return (
                  <p 
                    key={index} 
                    className="[&>a]:text-blue-500 [&>a]:font-bold [&>a]:hover:underline font-semibold"
                    dangerouslySetInnerHTML={{ __html: block.content }} 
                  />
                );
              }

              // Handle Bullet Lists
              if (block.type === 'list') {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1 my-4">
                    {block.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="[&>strong]:font-bold"
                        dangerouslySetInnerHTML={{ __html: item }} 
                      />
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </article>
      </div>
    </div>
  );
}