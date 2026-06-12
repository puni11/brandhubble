import ContactSection from "@/component/ContactSection";
import FAQSection from "@/component/FAQSection2";
import ProjectOverview from "@/component/ProjectOverview";
import ProjectsSection from "@/component/ProjectSection";
import ProjectShowcaseSingle from "@/component/ProjectShowcaseSingle";
import SectionHeader from "@/component/SectionHeader";
import TestimonialSection from "@/component/Testimonial";

const faqs = [
  {
    id: '01',
    question: "What's included in a monthly retainer?",
    answer: "Our monthly retainers are fully customized based on your goals. They typically include a mix of strategic planning, continuous SEO, ongoing design support, content creation, and monthly performance reporting."
  },
  {
    id: '02',
    question: "How do you measure success for marketing campaigns?",
    answer: "We track KPIs that directly impact your bottom line, such as cost per acquisition (CPA), return on ad spend (ROAS), conversion rates, and overall revenue growth, rather than just vanity metrics like clicks and impressions."
  },
  {
    id: '03',
    question: "Why should we choose Hubble over other design and marketing companies?",
    answer: "We combine high-end aesthetic design with data-driven marketing strategies. We act as a dedicated growth partner rather than just an agency, focusing on long-term business impact and transparent execution."
  },
  {
    id: '04',
    question: "How does Hubble ensure designs and campaigns align with our brand?",
    answer: "We start every engagement with a deep dive into your brand architecture, voice, and market positioning. This strategy-first approach ensures every visual and campaign feels authentic to your core identity."
  },
  {
    id: '05',
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally. We have streamlined asynchronous communication processes and utilize tools that make remote collaboration seamless, regardless of time zones."
  }
];

export default function Page() {
  return (
    <>
      <ProjectShowcaseSingle />
      <ProjectOverview />
      <SectionHeader />
      <div className="bg-[#f7f7f7] w-full">
      <div className="max-w-[1400px] mx-auto">
      <img 
        src="https://framerusercontent.com/images/vz4a3ZhnJgz7fhRtCpbSEh8knSw.png?scale-down-to=2048&width=3602&height=2702" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/3zMoZrBJGLivSBwfuv29Q4lY60.png?scale-down-to=2048&width=3850&height=1706" 
        alt="image" 
        className="w-full h-[80vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/XpAOLychFB9ycyGZgjDBdJiRdFY.png?scale-down-to=2048&width=3564&height=2138" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/97ujNSGJdmCjrQgtY63EH1kPNo.png?scale-down-to=2048&width=3632&height=2724" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/Ywuju7GmiAyLq9ei5LjZbwWWI.png?scale-down-to=2048&width=3838&height=2268" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/39bfItWZUO29ij098DV41YYQdw.png?scale-down-to=2048&width=3850&height=2002" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      </div>
      </div>
      <div className="max-w-[1600px] mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start">
          
          {/* Index Number (Left Aligned) */}
          <div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-3 lg:col-span-5"
          >
            <span className="text-sm md:text-base font-bold text-black tracking-tight">
              02
            </span>
          </div>

          {/* Text Content (Pushed to the right) */}
          <div className="md:col-span-9 lg:col-span-7 max-w-3xl">
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-medium text-black tracking-tight mb-8 md:mb-10 leading-none">
              Campaign
            </h2>
            <p className="text-gray-600 text-base md:text-[17px] leading-[1.4] font-normal max-w-xl font-semibold">
              We mapped a patient journey that prioritized comfort from the first click. As a leading UI/UX design agency in Jaipur, we designed a site that is visually soothing yet highly functional. We built a custom booking flow that reduces friction, turning visitors into patients. The result is a high-performing digital platform that ranks for competitive keywords while maintaining the elegance of a fashion brand.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto">
  <img 
        src="https://framerusercontent.com/images/97ujNSGJdmCjrQgtY63EH1kPNo.png?scale-down-to=2048&width=3632&height=2724" 
        alt="image" 
        className="w-full h-[120vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/dYWsXZCdrE00J5Zuwdtysw9fu8.png?scale-down-to=2048&width=3360&height=2062" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      </div>
    
      
      <div className="mt-12 bg-gray-100">
         <div className='w-full mt-20 mx-auto '>
        <h4 className='text-7xl font-semibold text-center'>More</h4>
        <h4 className='text-7xl font-semibold text-center'>Projects</h4>

        <ProjectsSection/>
      </div>
        <TestimonialSection/>
        <FAQSection faqs={faqs} />
        <ContactSection />
      </div>
    </>
  );
}