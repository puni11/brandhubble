import Image from "next/image";
import Link from "next/link";
import MarqueeText from "./Marquee";

export default function HeroSection() {
  const services = [
    "Advanced SEO",
    "Performance Marketing",
    "Brand Strategy & Identity",
    "Web Development (UX/UI)"
  ];

  return (
    <main className="relative h-screen w-full bg-zinc-900 mt-4 text-gray-100 overflow-hidden font-[family-name:var(--font-apfel)]">
      {/* BACKGROUND IMAGE SETTING */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/TAsA4ALxMk3XIfWV2vDX8TclN5w.png?width=2912&height=1632" 
          alt="Futuristic VR Model"
          fill
          className="object-cover object-center opacity-75 mix-blend-luminosity mt-10"
          priority
        />
        {/* Subtle gradient overlay to ensure text pops */}
        <div className="tv-noise"></div>
      </div>

      {/* CONTENT LAYER */}
      {/* Using pt-8 (padding-top) instead of py-8 ensures the bottom edge has no padding, allowing the Marquee to sit flush */}
      <div className="relative z-10 mt-8 flex flex-col justify-between h-full w-full pt-8 md:pt-28">
        
        {/* Top Left Logo/Icon */}
        <header className="px-4 md:px-8">
            {/* Your Logo goes here */}
        </header>

        {/* Bottom Content Area */}
        <div className="w-full flex flex-col">
          
          {/* Middle Row: Stats and Services */}
          {/* Added mb-8 md:mb-12 to create breathing room between this row and the Marquee */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end max-w-350 w-full mx-auto gap-8 px-4 md:px-8 mb-8 md:mb-12">
            
            {/* Left Column: Rating and Tagline */}
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#ff9d80] tracking-widest text-sm font-bold">+++++</span>
                <span className="text-[#fcfcfc] text-sm font-semibold tracking-wide"><span className="text-[#ff9d80]">4.9</span>/5</span>
              </div>
              <h2 className="text-[28px] sm:text-[30px] leading-snug text-[#F2F8FC] font-[family-name:var(--font-apfel)] ">
                We Build <br /> Category-Leading Brands
              </h2>
            </div>

            {/* Right Column: Services List */}
            <div className="hidden md:block lg:block">

           
            <div className="text-left md:text-right flex flex-col items-start md:items-end gap-2 text-xl text-[#F2F8FC]">
  {services.map((service, index) => (
    <Link 
      key={index}
      // Generates an anchor link like href="#advanced-seo"
      href={`#${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
      // Base transitions and pseudo-element setup for the animated underline
      className="relative w-fit transition-all duration-300 ease-in-out hover:text-[#fc5000] hover:translate-x-2 md:hover:-translate-x-2
                 after:content-[''] after:absolute after:-bottom-1 after:left-0 
                 after:h-[2px] after:w-0 after:bg-[#fc5000] 
                 after:transition-all after:duration-300 hover:after:w-full"
    >
      {service}
    </Link>
  ))}
</div>
 </div>
          </div>

          {/* Huge Bottom Typography */}
          <div className="w-full">
            <MarqueeText />
          </div>
        </div>
      </div>
    </main>
  );
}