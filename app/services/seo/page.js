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
);
const processes = [
  {
    id: "01",
    title: "Keyword Strategy",
    description: "We identify high-value, relevant search terms so your content meets user intent. By targeting these keywords, SEO “brings you customers who are already looking for what you offer ensuring your brand is found by people ready to engage."
  },
  {
    id: "02",
    title: "Content Creation",
    description: "We produce engaging, keyword-rich content that resonates with your audience. From blog posts to infographics, this on-brand content attracts links and shares, helping you rank higher and build organic reach."
  },
  {
    id: "03",
    title: "On-Page & Technical SEO",
    description: "We optimize your website’s meta tags, headings, site structure, and page speed. A technically sound, mobile-friendly site improves rankings and provides a better user experience, leading to higher search positions and more organic traffic."
  },
  {
    id: "04",
    title: "Analytics & Refinement",
    description: "Using SEO tools, like Semrush, Moz, we monitor rankings and user behavior. Ongoing analysis allows us to adjust strategy for algorithm changes and market trends, so your SEO efforts continually drive traffic and growth."
  }
];
 const performanceMarketingData = {
  hero: {
    title: "SEO",
    subtitle: "Driving organic growth with clarity, structure, and search intent.",
    description1: (
      <>
        Your audience is already searching — we make sure they find you. At Brand Hubble, we use technical expertise, strategic content, and on-page optimization to improve visibility, climb search rankings, and attract high-value traffic. It's not just about being found—it's about being chosen.
      </>
    ),
    description2: "Through keyword targeting, content refinement, and technical precision, we align your website with Google's best practices and user expectations. From metadata to mobile speed, every detail is crafted to boost authority, relevance, and conversions."
  },
  grid: {
    title: "SEO services that we offer",
    subtitle: "Discover the wide range of feature packed services",
    services: [
      {
        icon: <ChartIcon />,
        title: "Keyword Research & Strategy",
        description: "We identify the high-intent keywords your audience is actively searching and develop a data-backed strategy to position your site ahead of competitors."
      },
      {
        icon: <CheckIcon />,
        title: "On-Page Optimization",
        description: "From titles and meta descriptions to headers and image alt text, we optimize every element of your pages for better rankings and stronger user experience."
      },
      {
        icon: <ChartIcon />,
        title: "Technical SEO",
        description: "We fix crawl errors, improve site structure, speed up load times, and ensure your website is indexed properly making it search-engine friendly from the inside out."
      },
      {
        icon: <ChartIcon />,
        title: "Content Planning & Optimization",
        description: "We audit and enhance existing content or create new, SEO-rich content that educates, engages, and ranks, all while staying true to your brand voice."
      },
      {
        icon: <CheckIcon />,
        title: "Link Building & Authority Growth",
        description: "We build ethical, high-quality backlinks that increase your domain authority and help Google trust your content, driving stronger rankings over time."
      },
      {
        icon: <ChartIcon />,
        title: "AI Search Optimization",
        description: "We optimize your content for AI-powered search engines and LLMs like ChatGPT, Perplexity, and Google's AI Overviews. Using structured data, concise summaries, and context-rich copy, we help your brand surface in conversational and generative AI results, so you're discoverable where the future is searching."
      }
    ]
  }
};


  const faqs = [
  {
    id: '01',
    question: "How long does it take to rank on Page 1?",
    answer: "SEO takes time—usually 3–6 months depending on competition. But the traffic you gain is free and long-term."
  },
  {
    id: '02',
    question: "Do you guarantee #1 ranking?",
    answer: "No one can. We focus on best practices, strong content, and high-value keywords to give you the best chance of top rankings."
  },
  {
    id: '03',
    question: "On-Page vs Off-Page SEO?",
    answer: "On-Page: Website speed, content, keywords, meta tags.\nOff-Page: Backlinks and authority building.\nWe use a balanced strategy of both."
  }
];
export default function Page(){
    return(
        <div className="mt-12">
            <ProjectsHeader2 title="Service" subtitle2="Advanced SEO Services Powered by AI SEO, AEO & GEO" description="Grow Visibility Across Google and AI Search Platforms" />
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
              

Our SEO services focus on sustainable, long-term growth. We start with comprehensive keyword research to find the search terms your customers actually use. Then we create high-quality, SEO-optimized content (blog articles, landing pages, meta descriptions) and optimize your site’s structure and performance. By targeting brand-relevant keywords and improving user experience, we increase your organic traffic and online authority. SEO “brings you customers who are already looking for what you offer turning existing demand into your advantage. Over time, this boosts your brand’s credibility and drives a steady stream of qualified visitors to your site.            </p>
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