import ContactSection from "@/component/ContactSection";
import ProjectsHeader2 from "@/component/ProjectHead2";
import TeamSection2 from "@/component/TeamSections";
import TestimonialSection from "@/component/Testimonial";

export default function Page(){
    return(
        <div className="mt-8">
            <ProjectsHeader2 title="About Us" subtitle1="About " subtitle2="Brand Hubble" description="Bold, refined, never boring, & we make sure you aren’t either."/>
        <section className="w-full bg-white py-[80px] md:py-[40px] px-[24px] md:px-[40px] font-['Apfel_Grotezk',sans-serif]">
      <div className=" flex flex-col gap-[40px] md:gap-[60px]">

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px]">
          
          {/* Image 1 - Left Office View */}
          <div className="group relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-[10/10] overflow-hidden rounded-[24px] md:rounded-[16px] bg-[#f0f0f0]">
            <img 
              // Replace this with your actual image path (e.g., "/images/office-left.jpg")
              src="https://framerusercontent.com/images/uDZXatmUWOeUOTP2Nijqeb3Zc.jpeg?scale-down-to=2048&width=2268&height=2988" 
              alt="Brand Hubble Office Display Room" 
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
            />
            {/* Optional subtle overlay for better contrast if needed */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
          </div>

          {/* Image 2 - Right Office View */}
          <div className="group relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-[10/10] overflow-hidden rounded-[24px] md:rounded-[16px] bg-[#f0f0f0]">
            <img 
              // Replace this with your actual image path (e.g., "/images/office-right.jpg")
              src="https://framerusercontent.com/images/I43G06sC1bqfivqEaCbk5GhF0w.jpeg?scale-down-to=2048&width=3024&height=3525" 
              alt="Brand Hubble Conference Table" 
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
          </div>

        </div>
      </div>
    </section>
<section className="w-full bg-[#f4f4f4] py-[80px] md:py-[120px] px-[24px] md:px-[40px] flex justify-center">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 sm:grid-cols-12 gap-[40px] sm:gap-[240px] items-start justify-between">
        
        {/* ── Left Column: Main Heading ── */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold leading-[1.25] text-[#111111] tracking-[-0.02em] m-0">
            We build brands, design websites, and write sharp, thoughtful copy — all with one goal: to help you stand out, connect with your audience, and look as good online as you do in your head.
          </h2>
        </div>

        {/* ── Right Column: Body Copy & Logo ── */}
        <div className="lg:col-span-4 flex flex-col gap-[32px] lg:pt-[8px]">
          
          <div className="flex flex-col gap-[24px]">
            <p className=" text-[14px] md:text-[16px] font-semibold text-[#656363] leading-[1.6] font-normal m-0 pr-0 md:pr-[20px]">
              We partner with founders and business teams to shape the way their brands show up in the world—visually and verbally. Whether it’s crafting a full identity, building a digital flagship, or orchestrating a marketing and growth strategy that actually sounds human.
            </p>
            <p className=" text-[14px] md:text-[16px] text-[#656363] font-semibold leading-[1.6] font-normal m-0 pr-0 md:pr-[20px]">
              Our work is designed to feel intentional, modern, and a little unexpected. From first impressions to the fine details, we obsess over clarity, consistency, and craft—because that’s what turns attention into trust.
            </p>
          </div>

          {/* Logo / Signature */}
          <div className="mt-[20px] md:mt-[20px]">
            <span className="font-[family-name:var(--font-wormbox)] text-[14px] md:text-[16px] font-bold uppercase tracking-[0.15em] text-[#111111] block">
              BRAND HUBBLE
            </span>
          </div>

        </div>

      </div>
    </section>
    <section className="h-screen">
<img 
              // Replace this with your actual image path (e.g., "/images/office-right.jpg")
              src="https://framerusercontent.com/images/I43G06sC1bqfivqEaCbk5GhF0w.jpeg?scale-down-to=2048&width=3024&height=3525" 
              alt="Brand Hubble Conference Table" 
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
            />
    </section>
    <section className="w-full bg-[#f4f4f4] py-[80px] md:py-[120px] px-[24px] md:px-[40px] flex justify-center">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 sm:grid-cols-12 gap-[40px] sm:gap-[240px] items-start justify-between">
        
        {/* ── Left Column: Main Heading ── */}
        <div className="lg:col-span-3">
          <h2 className="text-8xl font-bold leading-[1.25] text-[#111111] tracking-[-0.02em] m-0">
           Story
          </h2>
          <p className=" text-[14px] md:text-[16px] font-semibold text-[#656363] leading-[1.6] font-normal m-0 pr-0 md:pr-[20px]">
From our founders with a vision to a team shaping brands around the world.
            </p>
        </div>

        {/* ── Right Column: Body Copy & Logo ── */}
        <div className="lg:col-span-4 flex flex-col gap-[32px] lg:pt-[8px]">
          
          <div className="flex justify-between">
            <p className=" text-[14px] md:text-[18px] font-semibold text-[#070707] leading-[1.6] font-normal m-0 pr-0 md:pr-[20px]">
              Estd. 2025 -
            </p>
            <p className=" text-[14px] md:text-[18px] text-[#000000] font-semibold leading-[1.6] font-normal m-0 pr-0 md:pr-[20px]">
              01
            </p>
          </div>
          <p className="font-sans text-[#656363] font-semibold">What started as a solo venture grew into a small team of creatives, developers, and strategists who actually care. No ego. No fluff. Just thoughtful digital work that feels sharp, purposeful, and alive.</p>

       

        </div>

      </div>
    </section>
    <TeamSection2 />
    <div className="flex flex-col sm:flex-row max-w-[1600px] mx-auto">
        <div>
        <h3 className="text-8xl font-semibold">Clients</h3>
        <p className="mt-4 font-semibold text-[#414141]">Real words from the people we’ve partnered with — honest feedback, lasting impact.</p>
        </div>
    <TestimonialSection />
    </div>
    <ContactSection/>
        </div>
    )
}