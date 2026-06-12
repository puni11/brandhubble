import BlogSection from "@/component/BlogSection";
import ContactSection from "@/component/ContactSection";
import FeaturedBlog from "@/component/FeaturedBlog";
import ProjectsHeader2 from "@/component/ProjectHead2";
import TestimonialSection from "@/component/Testimonial";

export default function Page(){
    return(
        <div className="mt-12">
        <ProjectsHeader2 title="Blogs" subtitle1="Latest Orbital" subtitle2="Insights" description="A group of thinkers, builders, and makers shaping what Brand Hubble stands for." />
        <BlogSection/>
        <FeaturedBlog />
        <TestimonialSection isWidth={true}/>
        <ContactSection/>
        </div>
    )
}