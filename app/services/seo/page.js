import ContactSection from "@/component/ContactSection";
import FAQSection from "@/component/FAQSection2";
import ProcessList from "@/component/ProcessList";
import ProjectsHeader2 from "@/component/ProjectHead2";
import ProjectsSection from "@/component/ProjectSection";
import ProjectsHeader from "@/component/ProjectsHeader";
import { ServiceOverview } from "@/component/ServiceOverview";
import ServicesSection from "@/component/ServicesSection";
import TestimonialSection from "@/component/Testimonial";
const ChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
); const processes = [
    {
      id: "01",
      title: "Audience Discovery",
      description: "We begin by researching your target audience, platforms, and funnel stages. This phase helps us understand where your users live online, what drives their behavior, and what motivates them to click or convert."
    },
    {
      id: "02",
      title: "Strategy & Funnel Mapping",
      description: "We map a performance strategy tailored to your goals—from awareness to acquisition. Whether you're looking to drive traffic, generate leads, or increase sales, we align KPIs with platform capabilities for optimal outcomes."
    },
    {
      id: "03",
      title: "Creative Development & Testing",
      description: "Our creative team crafts and tests visuals, copy, and offers that speak directly to your audience. A/B testing ensures we refine every asset for maximum impact and performance across channels."
    },
    {
      id: "04",
      title: "Execution & Optimization",
      description: "We launch campaigns with precision and continuously monitor performance. Using data insights, we tweak budgets, bids, creatives, and placements in real time—keeping you ahead of the curve and your ROI consistently strong."
    }
  ];
 const performanceMarketingData = {
    hero: {
      title: "Performance Marketing",
      subtitle: "Driving measurable growth through strategy, data, and creativity",
      // Passing JSX allows you to style specific words like "social" exactly as in your image
      description1: (
        <>
          At Brand Hubble, we combine data intelligence, platform expertise, and conversion-led creative to engineer marketing campaigns that scale. From paid search and <span className="text-[#e85c2c]">social</span> to retargeting and funnel optimization, we turn ad spend into impact.
        </>
      ),
      description2: "By building campaigns on insight and performance metrics, we ensure every dollar works harder. Our approach is agile, result-focused, and transparent—partnering with you to unlock ROI at every touchpoint and accelerate long-term brand growth."
    },
    grid: {
      title: "Performance Marketing services that we offer",
      subtitle: "Discover the wide range of feature packed services",
      services: [
        {
          icon: <ChartIcon />,
          title: "Campaign Strategy & Planning",
          description: "We create tailored performance marketing roadmaps aligned with your business goals—covering funnel design, platform mix, targeting, and KPIs. Every campaign starts with strategy, not guesswork."
        },
        {
          icon: <CheckIcon />,
          title: "Paid Media Management",
          description: "Our team expertly manages ad campaigns across Google Ads, Meta, LinkedIn, and more. From budgeting and bidding to copy, creatives, and segmentation, we ensure your spend delivers real returns."
        },
        {
          icon: <ChartIcon />,
          title: "Conversion Rate Optimization (CRO)",
          description: "We analyze user behavior, optimize landing pages, and fine-tune conversion journeys. From A/B testing to UX improvements, we remove friction and boost performance at every touchpoint."
        },
        {
          icon: <ChartIcon />,
          title: "Retargeting & Remarketing",
          description: "We re-engage warm audiences through retargeting strategies that bring visitors back and turn interest into action. Smart sequencing, frequency caps, and creatives are optimized for results."
        },
        {
          icon: <CheckIcon />,
          title: "Funnel Automation & Lead Nurturing",
          description: "We build automated flows that convert. From lead capture to nurturing emails and audience segmentation, our funnel automation drives sustained engagement and higher LTV."
        },
        {
          icon: <ChartIcon />,
          title: "Performance Analytics & Reporting",
          description: "Stay informed with actionable insights. Our real-time dashboards and monthly reports highlight performance metrics, campaign efficiency, and areas of improvement."
        }
      ]
    }
  };


   const faqs = [
    {
      id: '01',
      question: "What budget do i need?",
      answer: "We Recommend starting with 30000-50000/month. This gives Meta & Google enough data to optimize and deliver a good ROAS."
    },
    {
      id: '02',
      question: "When will I see results?",
      answer: "Traffic starts immediately, but opitmized conversion usually stablilize within 2-3 weeks after the learning phase."
    },
    {
      id: '03',
      question: "Do you make ad creatives?",
      answer: "Yes, we design high performing static and video ads-strong creatives are essential for results"
    },
    {
      id: '04',
      question: "Facebook Ads vs Google Ads?",
      answer: "Google =  Intent (people searching for you) Facebook/Instagran =  Demand (people who may like your product) A mix of both works best for most brands"
    },
  ];
export default function Page(){
    return(
        <div className="mt-12">
            <ProjectsHeader2 title="Service" subtitle2="Performance Marketing & Paid Advertising " description="Data-Driven Marketing for Measurable Results" />
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-24 max-w-[1800px] mx-auto">
          
          {/* Label */}
          <div className="lg:w-1/4 shrink-0 flex items-start gap-3 pt-2">
            <span className="w-3.5 h-3.5 bg-[#ea580c] block mt-0.5"></span>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black">
              Overview
            </h3>
          </div>
          
          {/* Main Paragraph */}
          <div className="lg:w-3/4">
            <p className="text-xl font-normal text-gray-800 leading-snug tracking-tight">
              
At Brand Hubble, we take a data-first approach to performance marketing—designed to drive measurable growth. From identifying your market to crafting and optimizing campaigns, every step is rooted in real-time analytics, creative testing, and conversion-focused strategy. Our framework ensures your brand not only gets seen, but performs—turning impressions into action and action into results.
            </p>
          </div>
        </div>
        <ProcessList processes={processes}/>
        <ServiceOverview data={performanceMarketingData} />
        <ProjectsHeader/>
        <ProjectsSection />
        <ServicesSection />
        <TestimonialSection isWidth={true} />
        <FAQSection faqs={faqs} />
        <ContactSection />
        </div>
    )
}