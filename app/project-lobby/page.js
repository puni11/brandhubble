import ContactSection from "@/component/ContactSection";
import FeaturedProject from "@/component/FeaturedProject";
import ProjectsHeader2 from "@/component/ProjectHead2";
import ProjectsSection from "@/component/ProjectSection";
import TestimonialSection from "@/component/Testimonial";

const archiveData = [
    { name: "AP2V.com", type: "Branding & Website", year: "2023", id: "01" },
    { name: "Astro Shyamsa", type: "Social Media & Marketing", year: "2024", id: "02" },
    { name: "Clay Beauty", type: "Branding, Marketing & Website", year: "2025", id: "03" },
  ];
export default function Page(){
    return(
        <div className="mt-8">
            <ProjectsHeader2 title="About Us" subtitle2="Projects" description="Take a closer look at the work behind the results." />
            <ProjectsSection />
            <FeaturedProject isShow={false}/>
            <TestimonialSection isWidth={true} />
            <section className="bg-[#f4f4f4] py-24 font-sans text-gray-900 selection:bg-orange-200">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header Area */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center mb-24 ">
          <div className="text-sm font-bold tracking-tight">
            2023—2025
          </div>
          
          <div className=" text-left sm:text-center mt-4 sm:mt-0">
            <h1 className="text-6xl md:text-[100px] font-semibold tracking-tighter text-black leading-none">
              Archive
            </h1>
          </div>
          
        </div>

        {/* List Header */}
        <div className="grid grid-cols-12 gap-4 text-xs text-gray-400 mb-6 px-4 md:px-6 uppercase tracking-wider">
          <div className="col-span-5 md:col-span-4">Project name</div>
          <div className="col-span-4 md:col-span-5 ">Type</div>
          <div className="col-span-4 md:col-span-2 text-left md:text-left">Year</div>
          <div className="col-span-3 md:col-span-1 text-right">...</div>
        </div>

        {/* Archive List */}
       <div className="border-t border-gray-200">
  {archiveData.map((item, index) => (
    <div 
      key={index} 
      className={`group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start md:items-center py-6 md:py-8 px-4 md:px-6 border-b border-gray-200 transition-all duration-300 ease-out ${index === 0 ? "hover:bg-white" : "hover:bg-[#ff9d80]/80"} cursor-pointer`}
    >
      {/* Project Name */}
      <div className="md:col-span-4 text-lg md:text-xl font-medium text-black transition-colors duration-300 group-hover:text-[#292929]">
        {item.name}
      </div>
      
      {/* Type */}
      <div className="md:col-span-5 text-gray-500 text-sm md:text-lg transition-colors duration-300 group-hover:text-[#292929]">
        {item.type}
      </div>
      
      {/* Year */}
      <div className="md:col-span-2 text-gray-500 text-sm md:text-lg transition-colors duration-300 group-hover:text-[#292929]">
        {item.year}
      </div>
      
      {/* Index Number */}
      <div className="md:col-span-1 text-left md:text-right text-gray-300 font-bold font-mono text-sm md:text-lg transition-colors duration-300 group-hover:text-[#292929]/50">
        {item.id}
      </div>
    </div>
  ))}
</div>

        {/* Footer Text */}
        <div className="mt-20 text-center text-gray-600 text-sm md:text-base">
          we have transformed 50+ businesses
        </div>

      </div>
    </section>
    <ContactSection />
        </div>
    )
}