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
  overviewText: "Rayrty is a premium men’s jewellery label that fuses modern minimalism with artisanal craftsmanship—offering bracelets, rings, and necklaces designed for today’s style-conscious male. Their mission: make timeless elegance accessible through D2C channels.",
  
  team: [
    { role: "Visual Identity", name: "Shobhit Rohilla", image: "/images/shobit.avif" },
    { role: "Marketing", name: "Dev Sharma", image: "/images/dev.avif" }
  ],
  
  deliverables: [
    "Logo suite",
    "Brand guidelines",
    "Website concept",
    "Social templates",
    "Launch deck",
    "Print collateral"
  ],
  
  testimonial: {
    rating: 5,
    quote: "“Working with them was the best call we made for our rebrand.”",
    name: "Fiyanshu Tambi",
    company: "",
    image: "https://framerusercontent.com/images/1eCXOwJeBNSmUvE3PsvRzp2rRQ.jpeg?scale-down-to=512&width=1079&height=1044"
  }
};

const data={
  index: "01",
  title: "Social Media Campaigns",
  description: "We started with deep market research and competitor analysis, then defined a clear positioning strategy, crafted a visual identity system, and built a brand that feels authentic, premium, and ready to scale.",
  bgColor: "bg-[#f7f7f7]"
}
export default function Page(){
    return(
        <>
        <ProjectShowcaseSingle mainTitle="Rayrty" subTitle="A blend of classic, luxury and modern design." tags={["Visual Indentity", "Website"]} image="https://framerusercontent.com/images/77IIs93AhIV1S7Ce8Kkh8KrVNE8.jpg?scale-down-to=1024&width=1963&height=1104"/>
        <ProjectOverview overviewTitle={projectData.overviewTitle} overviewText={projectData.overviewText} team={projectData.team} deliverables={projectData.deliverables} testimonial={projectData.testimonial} />
        <SectionHeader index={data.index} title={data.title} description={data.description} bgColor={data.bgColor} />
        <div className="bg-[#f7f7f7] w-full">
      <div className="max-w-[1400px] mx-auto">
      <img 
        src="https://framerusercontent.com/images/O3v9ClY0bND3XaiHtJ8v49AqXGk.png?scale-down-to=2048&width=2656&height=2656" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/OQ7I4ozkN63I1RLOD0g4me5zY.png?scale-down-to=2048&width=4000&height=3000" 
        alt="image" 
        className="w-full h-[80vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/bLaKSP4vHKk1HWGrTGqqfk3Sng.png?scale-down-to=2048&width=2656&height=2656" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/hiu3PlLGVSs3MZt5V3MiO8WKCY.png?scale-down-to=2048&width=4000&height=3000" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/NJzC0qWSFnL7fdMQu5R2ICgUMA4.png?scale-down-to=2048&width=2656&height=2656" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/9DMuMJuNUDm4XZw9xPoY5rwAuA.png?scale-down-to=2048&width=4000&height=3000" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/s6fX30zyIgzXBEQJR5hLZx4sQ0I.png?scale-down-to=2048&width=2656&height=2656" 
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