import Link from 'next/link';

export default function TermsOfServices() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] p-8 md:p-16 lg:p-24 font-sans selection:bg-orange-100">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-20">
        
        {/* Left Sidebar Column */}
        <aside className="w-full md:w-1/4 flex flex-col gap-16 md:sticky md:top-24 h-fit">
          {/* Logo / Badge */}
          <div className="flex items-center gap-3 text-2xl font-bold tracking-widest uppercase">
            <span className="w-3 h-3 bg-[#ff5722] block"></span>
            TERMS OF SERVICES
          </div>
          
          <div className="space-y-8">
            {/* Last Updated */}
            <div className="text-2xl text-gray-500 font-medium">
              Last Updated: <span className="text-black font-bold">November 2025</span>
            </div>
            
            {/* Back Button */}
            <Link 
              href="/" 
              className="flex items-center gap-2 text-3xl font-medium hover:text-[#ff5722] transition-colors w-fit"
            >
              <span className="text-[#ff5722] text-xl leading-none">↗</span> Back to home
            </Link>
          </div>
        </aside>

        {/* Right Content Column */}
        <main className="w-full md:w-3/4 max-w-7xl">
          {/* Header */}
          <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight text-slate-700 leading-[1.1]">
            Terms of <br />
            <span className="font-black text-black">Services</span>
          </h1>
          <p className="text-sm md:text-xl font-medium mb-16 leading-relaxed max-w-4xl">
            Welcome to Brand Hubble. We are dedicated to building brands that echo. By hiring us, you agree to the following terms, which ensure a smooth, transparent, and creative partnership.
          </p>

          {/* Terms Sections */}
          <div className="space-y-12 text-sm md:text-xl leading-relaxed text-gray-800">
            
            {/* Our Services */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-3">Our Services</h2>
              <p className="mb-4">
                We provide a comprehensive range of creative and strategic services designed to elevate your brand. The exact scope, deliverables, timeline, and specific goals of each project will be clearly outlined in a formal <strong>Project Proposal</strong> or <strong>Agreement</strong> before any work begins.
              </p>
              <p className="mb-2 font-bold text-black">Our core services include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Branding & Identity:</strong> Logo design, visual systems, and brand strategy.</li>
                <li><strong>Performance Marketing:</strong> Paid ad campaigns (Meta/Google) and analytics.</li>
                <li><strong>Web Design & Development:</strong> UI/UX design, Framer/Webflow development, and maintenance.</li>
                <li><strong>Social Media Marketing:</strong> Content creation, management, and strategy.</li>
                <li><strong>SEO & Content:</strong> Search engine optimization and copywriting.</li>
                <li><strong>Print & Packaging:</strong> Physical asset design and print-ready files.</li>
              </ul>
            </section>

            {/* Payments and Invoicing */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Payments and Invoicing</h2>
              <p className="mb-4">
                We operate with transparency and fairness. To schedule your project and reserve our time, we require a financial commitment.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Advance Payment:</strong> Most projects require a <strong>non-refundable advance payment of 50%</strong> before we begin research or design.</li>
                <li><strong>Final Balance:</strong> The remaining 50% is due upon final approval of assets or before the release of high-resolution/source files.</li>
                <li><strong>Long-Term Projects:</strong> For retainers or large-scale developments, milestone-based payment schedules will be outlined in your proposal.</li>
                <li><strong>Methods:</strong> We accept payments via UPI, Bank Transfer (NEFT/IMPS), or other agreed-upon methods.</li>
              </ul>
              <p>
                <strong>Late Fees:</strong> Late payments may result in a pause on work or delayed deliverables. We appreciate prompt communication if you anticipate any billing issues.
              </p>
            </section>

            {/* Cancellation and Termination */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Cancellation and Termination</h2>
              <p className="mb-4">
                We understand that business needs change. You may cancel a project at any time, but the following terms apply to protect the time and resources we have already invested:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>The Deposit:</strong> The initial 50% deposit is <strong>non-refundable</strong> as it covers our booking time and initial research.</li>
                <li><strong>Work Completed:</strong> If cancellation occurs after work has progressed beyond the initial stage, you will be invoiced for all work completed up to the date of cancellation (calculated based on our hourly rate or project percentage).</li>
                <li><strong>Ownership:</strong> You will <strong>not</strong> hold rights to use any unfinished, rejected, or unpaid creative materials.</li>
                <li><strong>Agency Termination:</strong> In rare cases, Brand Hubble reserves the right to terminate a project due to non-responsiveness (ghosting), abusive behavior, or failure to meet payment terms.</li>
              </ul>
            </section>

            {/* Intellectual Property & Files */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Intellectual Property & Files</h2>
              <p className="mb-4">
                <strong>Drafts vs. Finals:</strong> You own the rights to the <strong>final, approved designs</strong> once full payment is made. Brand Hubble retains ownership of all rejected concepts, drafts, and unused explorations.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Portfolio Rights:</strong> We love showing off your success. Unless a strict NDA is signed, Brand Hubble reserves the right to display the finished work in our portfolio, website, and social media channels for self-promotion.</li>
              </ul>
            </section>

            {/* Confidentiality */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Confidentiality</h2>
              <p className="mb-4">
                Your secrets are safe with us. We understand that during a project, you may share private business data, trade secrets, or strategic plans.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We treat all such information as <strong>strictly confidential</strong> and will never disclose it to third parties without your consent.</li>
                <li>Likewise, we expect you to respect our internal creative processes and methodologies.</li>
                <li>We are happy to sign a mutual <strong>Non-Disclosure Agreement (NDA)</strong> upon request.</li>
              </ul>
            </section>

            {/* Let's Stay Connected */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Let's Stay Connected</h2>
              <p className="mb-3">
                We believe in open communication and mutual respect. If you have any questions, concerns, or need further clarification about these terms, please don't hesitate to reach out.
              </p>
              <div className="space-y-1">
                <p>
                  <strong className="text-black">Email:</strong>{' '}
                  <a href="mailto:contact@brandhubble.com" className="text-blue-500 hover:underline">
                    contact@brandhubble.com
                  </a>
                  {' '}
                  <strong className="text-black ml-2">Website:</strong>{' '}
                  <a href="https://www.brandhubble.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    www.brandhubble.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}