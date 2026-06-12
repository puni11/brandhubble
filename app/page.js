
import ContactSection from "@/component/ContactSection";
import FAQSection from "@/component/FAQsSection";
import FeaturedProject from "@/component/FeaturedProject";
import GrowthServices from "@/component/GrowthServices";
import HeroSection from "@/component/Hero";
import BlogSection from "@/component/HomeBlog";
import PricingSection from "@/component/PricingSection";
import ProcessAccordion from "@/component/ProcessAccordion";
import ProjectsHeader2 from "@/component/ProjectHead2";
import ProjectsSection from "@/component/ProjectSection";
import ProjectsHeader from "@/component/ProjectsHeader";
import ServicesSection from "@/component/ServicesSection";
import TeamSection from "@/component/TeamSection";
import TestimonialSection from "@/component/Testimonial";
import WhyChooseUs from "@/component/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-[family-name:var(--font-apfel)] dark:bg-black">
      <HeroSection />
      <GrowthServices />
      <ProjectsHeader />
      <ProjectsSection/>
      <FeaturedProject/>
      <ServicesSection />
      <ProjectsHeader2 title="Why Choose Us" subtitle1="Resutls That " subtitle2="Add Up" description="Sustainability can be a confusing space. We help you cut through the noise and focus on your business."/>
      <WhyChooseUs/>
      <ProcessAccordion />
      <ProjectsHeader2 title="Testimonials" subtitle1="Real Results" subtitle2="Real Impact" />
      <TestimonialSection />
      <ProjectsHeader2 title="Blogs" subtitle1="Latest Orbital" subtitle2="Insights" description="A group of thinkers, builders, and makers shaping what Brand Hubble stands for." />
      <BlogSection />
      <ProjectsHeader2 title="FAQ" subtitle1="Your Questions" subtitle2="Answered" />
      <FAQSection />
      <ProjectsHeader2 title="Team" subtitle1="The People Behind" subtitle2="Brand Hubble" description="A team of thinkers and builders defining what BrandHubble stands for." />
      <TeamSection />
      <ProjectsHeader2 title="Pricing" subtitle1="Creative Plans" subtitle2="Your Way" />
      <PricingSection />
      <ContactSection/>
    </div>
  );
}
