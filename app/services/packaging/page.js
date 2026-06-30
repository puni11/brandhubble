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
    title: "Product Discovery",
    description: "We research your product, category standards, and target audience to define packaging goals that are both strategic and competitive."
  },
  {
    id: "02",
    title: "Identity & Visual Development",
    description: "We craft packaging designs that reflect your brand essence through thoughtful use of color, typography, layout, and tactile elements."
  },
  {
    id: "03",
    title: "System Build & Guidelines",
    description: "We build a consistent packaging system that works across SKUs and product lines — ensuring alignment, scalability, and visual harmony."
  },
  {
    id: "04",
    title: "Production-Ready Delivery",
    description: "We provide print-ready files, vendor coordination support, and mockups to ensure flawless results — from prototype to production."
  }
];
 const performanceMarketingData ={
  hero: {
    title: "Packaging",
    subtitle: "Crafting unforgettable packaging with precision and purpose",
    description1: (
      <>
        Your packaging should do more than just protect—it should speak for your brand. At Brand Hubble, we merge functional design with bold storytelling to create packaging that stands out on the shelf, strengthens your identity, and connects with your audience emotionally.
      </>
    ),
    description2: "By blending structural expertise with creative direction, we craft scalable packaging systems that reflect your vision and values. From sustainable solutions to luxury finishes, we ensure every detail aligns with your product promise and market goals."
  },
  grid: {
    title: "Packaging services that we offer",
    subtitle: "Discover the wide range of feature packed services",
    services: [
      {
        icon: <ChartIcon />,
        title: "Structural Packaging Design",
        description: "We engineer custom dielines and packaging formats that balance form, function, and shelf impact—ensuring your product is protected and looks great in any setting."
      },
      {
        icon: <CheckIcon />,
        title: "Label & Box Design",
        description: "From premium unboxing experiences to compliance-driven labeling, we design print-ready artwork that reinforces your brand identity and grabs attention."
      },
      {
        icon: <ChartIcon />,
        title: "Sustainable Packaging Solutions",
        description: "Eco-conscious design options that reduce waste and support your brand's sustainability goals—without compromising visual appeal or quality."
      },
      {
        icon: <ChartIcon />,
        title: "Print Production Support",
        description: "We work closely with printers and vendors to deliver accurate, high-quality packaging—from color matching to material sourcing and file preparation."
      },
      {
        icon: <CheckIcon />,
        title: "Packaging System & Guidelines",
        description: "We create scalable packaging systems with guidelines to maintain consistency across SKUs, product lines, and international variants."
      },
      {
        icon: <ChartIcon />,
        title: "Retail & DTC Packaging Strategy",
        description: "Tailored solutions for retail shelves and direct-to-consumer delivery—ensuring your packaging resonates across multiple customer touchpoints."
      }
    ]
  }
};
const faqs = [
  {
    id: '01',
    question: "Do you handle printing?",
    answer: "We don't print, but we manage the print process—coordinating with your printer, sharing correct files, colors, and dielines so the final output matches the design."
  },
  {
    id: '02',
    question: "What do you need to start?",
    answer: "Your dieline, logo files, legal/nutritional text, and basic brand/target audience info. If you don't have a dieline, we can help with standard box sizes."
  },
  {
    id: '03',
    question: "Can you make 3D mockups?",
    answer: "Yes. We create realistic 3D renders so you can see the packaging before printing."
  }
];
export default function Page(){
    return(
        <div className="mt-12">
            <ProjectsHeader2 title="Service" subtitle2="Custom Product & Packaging Design Services" description="Packaging That Captures Attention" />
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
At Brand Hubble, our four-step packaging process blends brand storytelling with production precision. From insight-driven discovery to hands-on launch coordination, every phase ensures that your packaging reflects your values, captures your audience’s attention, and brings your vision to life with clarity and purpose.
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