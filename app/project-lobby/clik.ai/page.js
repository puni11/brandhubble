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
const projectData = {
  overviewTitle: "OVERVIEW",
  overviewText: "Our approach was to create a modern, minimal, and professional identity system that resonates with financial institutions while maintaining the innovative edge of a cutting-edge AI company. By combining data-driven precision with approachable design, the brand builds confidence while differentiating itself from traditional CRE tech platforms.",
  
  team: [
    { role: "Social media & Marketing", name: "Dev Sharma", image: "/images/dev.avif" },
    { role: "Branding & Strategy", name: "Shobhit Rohilla", image: "/images/shobit.avif" },
    { role: "visual design", name: "Bhavika Jain", image: "/images/bhavika.avif" } // Assuming similar naming convention
  ],
  
  deliverables: [
    "Website Revamp",
    "Social Media & marketing",
    "SEO Optimizations",
    "Brand Design"
  ],
  
  testimonial: {
    rating: 5,
    quote: "“Super sharp, fast, and collaborative. They asked smart questions and nailed the vibe from day one. Our team loved working with them.”",
    name: "Prerit Gautam",
    company: "CEO - CLIK.ai",
    image: "https://framerusercontent.com/images/wXDNTug6pbpU7QycSPJjUREo5xE.jpeg?scale-down-to=512&width=568&height=467" // Keeping consistent with the previous placeholder image style
  }
};
const data={
  index: "01",
  title: "Campaign",
  description: "We started by identifying the core message and audience insights, then developed a creative concept, produced compelling assets, and launched a multi-channel campaign designed to drive engagement and measurable growth.",
  bgColor: "bg-[#f7f7f7]"
}
export default function Page(){
    return(
        <>
        <ProjectShowcaseSingle mainTitle="clik.ai" subTitle="Bold branding that represents advance ai-driven technological tools of the company." tags={["Brand Identity", "Product Experience"]} image="https://framerusercontent.com/images/dEOmkdqex1B2AynMq0F3DMKM8.png?scale-down-to=2048&width=4000&height=3000"/>
        <ProjectOverview overviewTitle={projectData.overviewTitle} overviewText={projectData.overviewText} team={projectData.team} deliverables={projectData.deliverables} testimonial={projectData.testimonial} />
        <SectionHeader index={data.index} title={data.title} description={data.description} bgColor={data.bgColor} />
        <div className="bg-[#f7f7f7] w-full">
      <div className="max-w-[1400px] mx-auto">
      <img 
        src="https://framerusercontent.com/images/wp515JJWDZCW631Htk08pJG9kmw.png?scale-down-to=2048&width=3726&height=2306" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/X6ydhdpIbQWGM4NyGrFhXy5LMws.png?scale-down-to=2048&width=3840&height=1744" 
        alt="image" 
        className="w-full h-[80vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/xEedXv9zO6gkyx9dJfuqUQ3Eko.png?scale-down-to=2048&width=3840&height=1910" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/eYXM4Rq0txZJLUBJpaZtOcPW4lA.png?scale-down-to=2048&width=3840&height=1972" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/PQ6b05YxQ5uo2477GC8gpW4ePw.png?scale-down-to=2048&width=3830&height=2368" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/15I0f7S4nADGptrtzyFBT8EaQd0.png?scale-down-to=2048&width=3840&height=2378" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/ptXPmOLUlGmprbRIsfMjGuX4eWU.png?scale-down-to=2048&width=3840&height=1938" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/1A478esdA2PIstNlYCYKid4LNM.png?scale-down-to=2048&width=3840&height=2162" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/5Y3XfF0GiMTqs8tYvGLuGVZjw.png?scale-down-to=2048&width=3840&height=2160" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/hJ9noEGyNmt6y08kxAxN862CLf0.png?scale-down-to=2048&width=3840&height=2629" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
       <img 
        src="https://framerusercontent.com/images/F65B8v3mO42D0A42Ube5wgZHrxs.png?scale-down-to=2048&width=3798&height=2014" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
     
      </div>
      </div>
      <div className='w-full mt-20 mx-auto '>
              <h4 className='text-7xl font-semibold text-center'>More</h4>
              <h4 className='text-7xl font-semibold text-center'>Projects</h4>
      
              <ProjectsSection/>
            </div>
        <div className="mt-12">
        <TestimonialSection/>
        <FAQSection faqs={faqs} />
        <ContactSection />
        </div>
        </>
    )
}