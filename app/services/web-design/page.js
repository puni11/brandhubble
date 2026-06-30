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
    title: "Strategy & Planning",
    description: "We start with goals: audience, funnels, KPIs and content needs. That brief becomes the roadmap for information architecture, conversion paths, and tech choices (CMS, integrations, analytics)."
  },
  {
    id: "02",
    title: "UX / UI Design",
    description: "Wireframes → visual design → prototypes. We design clear flows and UI systems that reflect your brand while optimizing for conversion and accessibility."
  },
  {
    id: "03",
    title: "Development & Build",
    description: "Front-end performance and reliable back-end systems. We code responsive layouts, integrate CMS platforms (WordPress, Webflow, Shopify, or custom), and set up tracking so the site is fast, secure, and scalable."
  },
  {
    id: "04",
    title: "QA, Launch & Growth",
    description: "Thorough testing (cross-device, SEO checks, speed audits) followed by a coordinated launch. Post-launch we monitor performance and iterate—improving conversions, speed, and search visibility over time."
  }
];
 const performanceMarketingData ={
  hero: {
    title: "Website Development",
    subtitle: "Building digital experiences that perform beautifully and convert powerfully.",
    description1: (
      <>
        Your website is more than a presence, it's your digital foundation. At Brand Hubble, we blend strategic thinking, performance-first development, and design precision to build responsive, conversion-focused websites that elevate your brand and drive measurable growth.
      </>
    ),
    description2: "By combining scalable architecture with UX-led interfaces, we ensure your website loads fast, looks stunning across devices, and supports your long-term goals. Every build is optimized for SEO, usability, and future flexibility — empowering your business to scale with confidence."
  },
  grid: {
    title: "Branding services that we offer", 
    subtitle: "Discover the wide range of feature packed services",
    services: [
      {
        icon: <ChartIcon />,
        title: "Custom Website Design",
        description: "Tailored designs that match your brand and business goals — unique layouts, clear CTAs, and user flows built to convert."
      },
      {
        icon: <CheckIcon />,
        title: "UX / UI Optimization",
        description: "Data-informed improvements to reduce friction and increase engagement: better navigation, clearer messaging, and conversion-focused microcopy."
      },
      {
        icon: <ChartIcon />,
        title: "Responsive Development",
        description: "Pixel-accurate builds that work flawlessly on mobile, tablet, and desktop — fast load times and adaptive layouts for every screen."
      },
      {
        icon: <ChartIcon />,
        title: "CMS Integration & Headless Options",
        description: "Flexible content systems (WordPress, Webflow, headless CMS) that make updates simple while supporting complex integrations and scalable content strategies."
      },
      {
        icon: <CheckIcon />,
        title: "E-commerce Solutions",
        description: "High-converting storefronts (Shopify, WooCommerce, headless) with fast checkout, secure payments and marketing integrations — plus CRO and analytics to grow revenue."
      },
      {
        icon: <ChartIcon />,
        title: "Web Application Development",
        description: "Smart, scalable apps that work. Custom front-end + back-end builds (React/Node, APIs) with secure, scalable infrastructure, CI/CD and ongoing support so your product can grow without friction."
      }
    ]
  }
};
const faqs = [
  {
    id: '01',
    question: "Which platforms do you use?",
    answer: "Framer & Webflow for fast, design-led sites, and Shopify for e-commerce. We pick the platform that fits your goals."
  },
  {
    id: '02',
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. We design mobile-first to ensure a flawless experience on phones."
  },
  {
    id: '03',
    question: "Do you write the website copy?",
    answer: "Yes—copywriting is available as an add-on. We create clear, SEO-friendly, conversion-focused content."
  },
  {
    id: '04',
    question: "Can I update the site myself later?",
    answer: "Yes. You'll get an easy-to-edit site plus a recorded walkthrough so you can manage updates yourself."
  }
];
export default function Page(){
    return(
        <div className="mt-12">
            <ProjectsHeader2 title="Service" subtitle2="Website Design, UI/UX & Development Services" description="High-Performance Websites Built for Growth" />
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-24 max-w-[1800px] mx-auto">
          
          {/* Label */}
          <div className="lg:w-1/4 shrink-0 flex items-start gap-3 pt-2">
            <span className="w-3.5 h-3.5 bg-[#ea580c] block mt-0.5"></span>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black">
              How We Work
            </h3>
          </div>
          
          {/* Main Paragraph */}
          <div className="lg:w-3/4">
            <p className="text-xl font-normal text-gray-800 leading-snug tracking-tight">

Your website should be your best salesperson, fast, clear, and easy to use. At Brand Hubble we combine conversion-driven UX, pixel-perfect design, and scalable technical architecture so your site looks great and moves the business needle. From responsive layouts and SEO-friendly build to fast load times and CMS flexibility, we deliver websites that attract attention, keep visitors engaged, and convert.
</p>          </div>
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