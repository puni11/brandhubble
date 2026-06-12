import CallToAction from "@/component/CallToAction";
import ContactSection from "@/component/ContactSection";
import ProjectsHeader2 from "@/component/ProjectHead2";
import ServicesSection from "@/component/ServicesSection";
import TestimonialSection from "@/component/Testimonial";
const testimonials = [
    {
      text: "We build strategies that actually work, helping brands grow with clarity, focus, and results you can trust.",
      name: "Dev",
      title: "Co-Founder",
      image: "/images/dev.avif" // Replace with actual image path
    },
    {
      text: "We turn ideas into strong brands, crafting strategies that deliver real impact and long-term market presence.",
      name: "Shobhit Rohilla",
      title: "Co-Founder",
      image: "/images/shobit.avif" // Replace with actual image path
    }
  ];
  const listItems = [
    {
      title: "Strategy-first execution",
      desc: "We start with strategy, not scattered tasks. Every action is tied to a clear business goal.",
      id: "01"
    },
    {
      title: "AI-driven SEO & modern growth",
      desc: "AI-driven SEO and modern growth techniques",
      id: "02"
    },
    {
      title: "Results over vanity metrics",
      desc: "Likes don't pay bills. Revenue does. We optimize for impact, not applause.",
      id: "03"
    },
    {
      title: "Long-term partnerships",
      desc: "We work like an extension of your team. Built for founders who think long term.",
      id: "04"
    },
    {
      title: "Clear, transparent execution",
      desc: "You always know what's being done and why. Clear deliverables. No black boxes.",
      id: "05"
    }
  ];
export default function Page(){
    return(
        <div className="mt-8">
             <section className=" max-w-[1400px] mx-auto bg-[##fcfcfc] relative w-full py-0 md:py-16 font-[family-name:var(--font-apfel)]">
      <div className=" px-6 md:px-24 relative flex items-center justify-center">
        
        {/* Top Left Label Area */}
        {/* Positioned absolutely to the top-left of the max-w container */}
        <div className="absolute top-0 left-6 md:left-20 flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 bg-[#fc5000]"></div>
          <span className="text-[11px] md:text-lg font-medium tracking-tight text-zinc-900 uppercase">
            Services
          </span>
        </div>

        {/* Main Typography Area */}
        {/* The block itself is centered, but the text inside remains left-aligned */}
        <div className="mt-12 md:mt-8 flex flex-col items-start w-full max-w-3xl md:pl-20">
          <h2 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-semibold tracking-tight sm:tracking-tighter leading-[1.0] sm:leading-[0.95]">
      
            <span className="text-zinc-950 font-semibold">Services</span>
          </h2>
          <p className='mt-6 font-bold text-lg text-[#191919b3]'>Services Built to Help Brands Become Category Leaders</p>
        </div>
        
      </div>
    </section>
<section className="w-full py-16 md:py-24 bg-white font-sans text-gray-900">
      <div className=" mx-auto px-6 md:px-12">
        
        {/* Flex container: stacks on mobile, side-by-side spread on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-20">
          
          {/* Left Side: Title & Orange Box */}
          <div 
            className="flex items-center gap-3 shrink-0 pt-1"
          >
            <span className="w-3.5 h-3.5 bg-[#ea580c] block"></span>
            <h2 className="text-sm md:text-base font-semibold tracking-wider uppercase text-black">
              WHAT WE TO OFFER
            </h2>
          </div>

          {/* Right Side: Description */}
          <div 
            className="max-w-4xl"
          >
            <p className="text-base md:text-[20px] text-gray-600 leading-relaxed font-normal">
              We help businesses grow through a complete ecosystem of digital services, from visibility and traffic to branding, design, and performance. Whether you're launching a new brand or scaling an existing one, our strategies are designed to deliver measurable, long-term growth.
            </p>
          </div>

        </div>
      </div>
    </section>
            <ServicesSection isShow={false}/>
<section className="bg-[#f5f5f5] py-20 font-sans text-gray-900 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Top Section: Title & Cards */}
        <div className="flex flex-col xl:flex-row justify-between gap-12 mb-20">
          
          {/* Title Area */}
          <div className="xl:w-1/3 shrink-0 pt-4">
            <h2 className="text-3xl md:text-4xl text-gray-800 leading-tight">
              Why work with <br />
              <span className="font-semibold text-black">BrandHubble?</span>
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="xl:w-2/3 flex flex-col md:flex-row gap-6">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex-1 shadow-sm"
              >
                {/* Giant Background Quotation Mark */}
                <div className="absolute -right-6 -bottom-16 text-[280px] leading-none font-sans font-bold text-[#e5e5e5] select-none pointer-events-none">
                  ”
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <p className="text-[#333] text-[15px] md:text-[16px] leading-relaxed font-medium mb-12 max-w-[90%]">
                    {t.text}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-full object-cover grayscale"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-black">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Features List */}
        <div className="border-t border-gray-200">
          {listItems.map((item, index) => (
            <div 
              key={item.id} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center py-8 border-b border-gray-200 transition-colors hover:bg-white/50 cursor-pointer px-4 md:px-6"
            >
              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-[36px] font-normal text-[#1a1a1a] tracking-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-[#555] text-sm md:text-[18px] leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
              
              {/* Index Number */}
              <div className="md:col-span-1 text-left md:text-right">
                <span className="font-bold text-lg text-black">
                  {item.id}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <CallToAction />
    <TestimonialSection isWidth={true}/>
    <ContactSection />
        </div>
    )
}