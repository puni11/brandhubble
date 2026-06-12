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
  overviewText: "Grras Solutions is a B2B powerhouse offering corporate training and consulting in data analytics, cloud computing, and DevOps. They serve Fortune 500 firms and mid-size enterprises seeking to upskill workforces for the digital economy",
  
  team: [
    { role: "SEO", name: "Dev Sharma", image: "/images/dev.avif" },
    { role: "Designer", name: "Shobhit Rohilla", image: "/images/shobit.avif" },
    { role: "Social Media", name: "Makbool Ahemad", image: "/images/makbool.avif" }
  ],
  
  deliverables: [
    "Full product redesign",
    "Website",
    "Marketing",
    "UX research summary",
    "Brand guidelines",
    "SEO Optimization"
  ],
  
  testimonial: {
    rating: 5,
    quote: "“Super sharp, fast, and collaborative. Nailed the vibe from day one.”",
    name: "Gaurav",
    company: "CEO",
    image: "https://framerusercontent.com/images/CXn5e13lKUNXSZ5LRipPWzzqVwA.jpeg?width=400&height=400"
  }
};

const data={
  index: "01",
  title: "Branding",
  description: "We started with deep market research and competitor analysis, then defined a clear positioning strategy, crafted a visual identity system, and built a brand that feels authentic, premium, and ready to scale.",
  bgColor: "bg-[#f7f7f7]"
}
export default function Page(){
    return(
        <>
        <ProjectShowcaseSingle mainTitle="Grras" subTitle="Global pioneer in training and consulting IT workforce, for big and mid size enterprises." tags={["Web Design", "UI/UX Design"]} image="https://framerusercontent.com/images/2ZFQtG4p105Yd0wuoeHsQsa9MU.png?scale-down-to=1024&width=3500&height=2324"/>
        <ProjectOverview overviewTitle={projectData.overviewTitle} overviewText={projectData.overviewText} team={projectData.team} deliverables={projectData.deliverables} testimonial={projectData.testimonial} />
        <SectionHeader index={data.index} title={data.title} description={data.description} bgColor={data.bgColor} />
        <div className="bg-[#f7f7f7] w-full">
      <div className="max-w-[1400px] mx-auto">
      <img 
        src="https://framerusercontent.com/images/4HE2CKMZ2OfKNLbZNwzHj0kbWc.png?scale-down-to=2048&width=3076&height=1726" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/VzgIpcbZmE7R7V2p6REA9xiZWw.png?width=1980&height=1368" 
        alt="image" 
        className="w-full h-[80vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/fgFopwOgiqfBZqFWWZNd65G03eE.png?scale-down-to=2048&width=6720&height=4480" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/rV4rqKKCTcEBAnh7mQZYsh49EU.png?width=1522&height=848" 
        alt="image" 
        className="w-full h-[100vh] object-cover rounded-2xl mt-12"
      />
      <img 
        src="https://framerusercontent.com/images/BeIwNpRzcqLJUcPjLIGJeXYtvgs.png?scale-down-to=2048&width=3002&height=1739" 
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