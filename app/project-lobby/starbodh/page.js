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
  overviewText: "StarBodh is a next-gen astrology and spiritual wellness platform that connects users with verified astrologers for personalized insights via chat, audio, and video calls. With a sleek mobile app and responsive website, StarBodh aims to democratize ancient wisdom for a modern audience craving clarity around career, love, and life events.",
  
  team: [
    { role: "SEO & Marketing", name: "Dev Sharma", image: "/images/dev.avif" },
    { role: "Design & Strategy", name: "Shobhit Rohilla", image: "/images/shobit.avif" }
  ],
  
  deliverables: [
    "Brand Guidelines",
    "Mobile & Web application",
    "UI/UX",
    "SEO",
    "Paid ads",
    "Lead Generation"
  ],
  
  testimonial: {
    rating: 5,
    quote: "“Smooth handoff, clean design, and the team truly understood our users, and carefully craft it's deliverables which results in assured growth numbers..”",
    name: "Dr Shyam Singh Rajpurohit",
    company: "Director",
    image: "https://framerusercontent.com/images/XS06MdRGsNFmcHR3dFIwyv2sUJU.jpeg?scale-down-to=1024&width=1066&height=1600"
  }
};
const data={
  index: "01",
  title: "Identified Growth Gap",
  description: "Despite strong word‑of‑mouth, StarBodh’s digital touchpoints suffered from low user trust and high drop‑off rates. First‑time visitors struggled to find credible astrologers, and user onboarding completion hovered below 20%. The lack of visible “verification” cues, plus an overloaded UI, created friction that prevented users from booking consultations.",
  bgColor: "bg-[#f7f7f7]"
}
export default function Page(){
    return(
        <>
        <ProjectShowcaseSingle mainTitle="Starbodh" subTitle="StarBodh is a next‑gen astrology and spiritual wellness platform." tags={["SEO & Paid ads", "UI/UX & Web developmentD"]} image="https://framerusercontent.com/images/mEiVmylNajxdWsF2IjJoAG9GGqk.png?scale-down-to=1024&width=2880&height=2048"/>
        <ProjectOverview overviewTitle={projectData.overviewTitle} overviewText={projectData.overviewText} team={projectData.team} deliverables={projectData.deliverables} testimonial={projectData.testimonial} />
        <SectionHeader index={data.index} title={data.title} description={data.description} bgColor={data.bgColor} />
        <div className="bg-[#f7f7f7] w-full">
      <div className="max-w-[1400px] mx-auto">
      <img 
        src="https://framerusercontent.com/images/XXzXL7uvfiyZm4u2GPWWMmKPf8.png?scale-down-to=2048&width=2880&height=2048" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/q78oTbbksuV6yQXSkaDDs6y91M.png?scale-down-to=2048&width=4000&height=2667" 
        alt="image" 
        className="w-full h-[80vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/qUf0s4ytB5B1RwM7A3AoL4sGgI.png?scale-down-to=2048&width=4500&height=3000" 
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