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
    title: "Brand Discovery",
    description: "We research and analyze every aspect of your business and market. By aligning your mission, goals and customer insights with competitive analysis, we define a clear brand strategy. This phase explores your story, values and audience, creating a strategy that is unique and grounded in data."
  },
  {
    id: "02",
    title: "Identity Design",
    description: "We transform strategy into a creative vision. We craft your logo and visual system (colors, typography, graphics) and develop a tone of voice and messaging that capture your brand's essenceselahcreativeco.com. Each element is refined until it effectively communicates who you are."
  },
  {
    id: "03",
    title: "Brand System Development",
    description: "We compile all assets into a comprehensive brand system. This includes guidelines for logo usage, color palette and typography as well as communication style, ensuring consistency across every touchpointselahcreativeco.com. A thorough brand system makes sure your brand stays cohesive and recognizable as it evolves."
  },
  {
    id: "04",
    title: "Launch Execution",
    description: "We help you introduce the new brand to the world. From planning the rollout to coordinating marketing and internal launch activities, we ensure every channel conveys your message consistently. A professional launch builds awareness, trust and engagement, creating a strong foundation for market impact and sustained growth"
  }
];
 const performanceMarketingData ={
  hero: {
    title: "Branding",
    subtitle: "Crafting your brand identity with strategy and creativity",
    description1: (
      <>
        Your brand deserves clarity, coherence, and a visual identity that resonates. We blend strategic brand thinking with creative design to craft every aspect of your brand's presence from logo to launch campaign.
      </>
    ),
    description2: "By defining a cohesive visual system and brand story, we ensure every detail supports your identity and drives brand recognition. Our approach is modern, confident, and empathetic, connecting meaningfully with your audience to empower your brand's growth."
  },
  grid: {
    title: "Branding services that we offer",
    subtitle: "Discover the wide range of feature packed services",
    services: [
      {
        icon: <ChartIcon />,
        title: "Logo Design",
        description: "We craft distinct, memorable logos that capture your brand's essence, making your first impression count and boosting recognition across every platform."
      },
      {
        icon: <CheckIcon />,
        title: "Typography",
        description: "We establish a cohesive typographic system as part of your visual identity, choosing typefaces that reflect your brand personality and ensure clarity across all media."
      },
      {
        icon: <ChartIcon />,
        title: "Brand Patterns",
        description: "We create unique graphical patterns and assets that become signature elements of your visual system. These patterns add depth and consistency to your brand and can be applied to packaging, websites, and marketing materials"
      },
      {
        icon: <ChartIcon />,
        title: "Brand Collaterals",
        description: "We design marketing and communication materials—like business cards, brochures, and social media templates—that reinforce your brand and maintain a unified look. Consistent collaterals boost professional credibility and audience trust"
      },
      {
        icon: <CheckIcon />,
        title: "Packaging Design",
        description: "Our packaging designs align with your brand identity and consumer needs, turning products into persuasive brand ambassadors. From labels to box design, we ensure your products stand out on the shelf and online"
      },
      {
        icon: <ChartIcon />,
        title: "Launch Campaign",
        description: "We plan and design integrated launch campaigns combining visuals and messaging to maximize brand awareness and momentum. Our launch strategy ensures your brand introduction connects emotionally with the audience and leaves a lasting impression."
      }
    ]
  }
};

const faqs = [
  {
    id: '01',
    question: "What do I get besides a logo?",
    answer: "A full brand identity—style guide, colors, typography, logo variations, and real-world mockups. Everything you need for consistent visuals everywhere."
  },
  {
    id: '02',
    question: "How long does branding take?",
    answer: "Usually 4–6 weeks, covering discovery, strategy, concepts, and revisions. Quality branding takes time."
  },
  {
    id: '03',
    question: "Can you refresh my existing brand?",
    answer: "Yes. We offer Brand Refreshes—modernizing your look while keeping the core elements your audience already recognizes."
  },
  {
    id: '04',
    question: "Do you provide source files?",
    answer: "Yes. You get all editable files (AI, EPS, PDF) plus PNGs/JPEGs, with full ownership rights."
  }
];
export default function Page(){
    return(
        <div className="mt-12">
            <ProjectsHeader2 title="Service" subtitle2="Branding, Brand Strategy & Identity Design Services" description="Define Your Brand Positioning" />
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
At Brand Hubble we follow a structured four-step branding process to deliver cohesive, impactful outcomes. From deep discovery to strategic launch, each phase blends creativity with research to ensure your brand looks beautiful and resonates with your audience. Our process builds clarity and consistency, turning your vision into an unforgettable brand story.</p>
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