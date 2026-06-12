import ArticleLayout from "@/component/ArticleLayout";
import ContactSection from "@/component/ContactSection";
import MoreArticles from "@/component/MoreArticles";
import ProjectsHeader2 from "@/component/ProjectHead2";
const articleData = {
    metadata: {
      date: "May 27, 2025",
      readTime: "20 minute read",
    },
    title: "Minimalism continues to be a defining force in digital design, but in 2025 it's more strategic and nuanced than ever. Brands are leveraging simplicity not just for aesthetics, but to drive clarity, usability, and emotional impact.",
    contentBlocks: [
      {
        type: "paragraph",
        content: "We're thrilled to pull back the curtain on our recent <a href='https://www.brandhubble.com/services/branding-and-launch-campaign'>branding project</a> for <strong>iii Studio</strong>, a design firm dedicated to crafting bespoke experiences."
      },
      {
        type: "paragraph",
        content: "Our goal was to create an identity that was as thoughtful, elegant, and functional as the spaces they design."
      },
      {
        type: "heading",
        content: "The Foundation: A Philosophy of Purpose"
      },
      {
        type: "paragraph",
        content: "Before a single pixel was placed, our process began with understanding the core philosophy of iii Studio. They don't just design spaces; they craft experiences by blending function with visual finesse."
      },
      {
        type: "paragraph",
        content: "Their brand is built on understanding client stories to create environments that spark connection and productivity. This ethos of balancing powerful visuals with practical functionality became our guiding principle."
      },
      {
        type: "paragraph",
        content: "The mission was clear: develop a <a href='https://www.brandhubble.com/services/branding-and-launch-campaign'>brand identity</a> that felt <strong>Tailored, Elegant, Warm, and Complete</strong>—a true reflection of their refined, personal vision from concept to completion."
      },
      {
        type: "heading",
        content: "The Visuals: Sophistication in Form and Color"
      },
      {
        type: "heading",
        content: "The Logo: A Stroke of Perspective"
      },
      {
        type: "paragraph",
        content: "The cornerstone of the identity is the logo. At first glance, you see three vertical lines forming 'iii'. But look closer, and you'll see our core concept: the lines are arranged to create the three-dimensional perspective of a cylinder."
      },
      {
        type: "paragraph",
        content: "This mark is a direct nod to form, space, and dimension—the very elements an interior designer manipulates. It's a simple, clever representation of their craft, paired with a clean, modern wordmark that anchors the brand."
      },
      {
        type: "heading",
        content: "The Color Palette: A Mood of Modern Warmth"
      },
      {
        type: "paragraph",
        content: "To bring the brand's philosophy to life, we curated a color palette that feels both sophisticated and inviting. Each color was chosen to evoke a specific mood, mirroring the materials and tones found in a well-designed space."
      },
      {
        type: "list",
        items: [
          "<strong>Burgundy:</strong> Rich and confident.",
          "<strong>Deep Black:</strong> Grounding and classic.",
          "<strong>Mocha & Beige Cream:</strong> Warm, soft, and versatile.",
          "<strong>Pure White:</strong> Clean, bright, and essential for balance."
        ]
      },
      {
        type: "heading",
        content: "The Application: A Cohesive Brand World"
      },
      {
        type: "paragraph",
        content: "A brand truly comes alive when it's applied consistently. For iii Studio, we ensured the identity translated seamlessly across all touchpoints, especially on digital platforms where first impressions are made."
      },
      {
        type: "paragraph",
        content: "The <a href='https://www.brandhubble.com/services/social-media'>social media marketing</a> presence utilizes clean layouts, impactful typography, and beautiful imagery to tell stories like 'BRINGING THE OUTDOORS IN' and 'NATURE IN YOUR HOME'."
      },
      {
        type: "paragraph",
        content: "The minimalist aesthetic allows the photography of their work to shine, reinforcing the brand's core values of elegance and refinement. From their <a href='https://www.brandhubble.com/services/website-design'>website design</a> to their handles, every element works in harmony to build a strong, recognizable brand."
      },
      {
        type: "heading",
        content: "A Complete System"
      },
      {
        type: "paragraph",
        content: "We are incredibly proud of the final result—a brand identity that is not just a logo, but a complete system that truly embodies the soul of iii Studio. It's refined, personal, and created with care."
      },
      {
        type: "paragraph",
        content: "Looking to build a brand that tells your unique story? <a href='https://www.brandhubble.com/contact'>Contact Brand Hubble</a> and let's start crafting your visual identity today."
      }
    ]
  };
export default function Page(){
    return(
        <div>
             <section className=" bg-[##fcfcfc] relative w-full py-0 md:py-16 font-sans">
      <div className=" px-6 md:px-24 relative flex items-center justify-center mt-18 sm:mt-8">
        
        {/* Top Left Label Area */}
        {/* Positioned absolutely to the top-left of the max-w container */}
        <div className="absolute top-10 left-6 md:left-20 flex items-center gap-2.5">
          <div className="w-3.5 h-3.5 bg-[#fc5000]"></div>
          <span className="text-[11px] md:text-lg font-medium tracking-tight text-zinc-900 uppercase">
            Article
          </span>
        </div>

        {/* Main Typography Area */}
        {/* The block itself is centered, but the text inside remains left-aligned */}
        <div className="mt-18 mb-20 md:mt-8 flex flex-col items-start w-full max-w-7xl md:pl-20">
          <h2 className="flex flex-col text-4xl sm:text-6xl md:text-6xl font-semibold tracking-tight sm:tracking-tighter leading-[1.0] sm:leading-[0.95]">
            
            <span className="text-zinc-950 font-semibold">Behind the Brand: Crafting the Visual Identity for iii Studio</span>
          </h2>
        </div>
        
      </div>
    </section>
    <div className="px-2 sm:px-12">
    <img src="https://framerusercontent.com/images/afKzo7Ldi0rhj01vS7hJydFr1YE.png?scale-down-to=2048&width=2652&height=1492" alt="case-study-iii-studio-visual-identity" />
    </div>
    <ArticleLayout data={articleData} />
    <MoreArticles />
    <ContactSection />
        </div>
    )
}