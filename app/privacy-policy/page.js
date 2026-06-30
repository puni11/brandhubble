import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] p-8 md:p-16 lg:p-24 font-sans selection:bg-orange-100">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-20">
        
        {/* Left Sidebar Column */}
        <aside className="w-full md:w-1/4 flex flex-col gap-16 md:sticky md:top-24 h-fit">
          {/* Logo / Badge */}
          <div className="flex items-center gap-3 text-xl font-bold tracking-widest uppercase">
            <span className="w-3 h-3 bg-[#ff5722] block"></span>
            Privacy Policy
          </div>
          
          {/* Last Updated */}
          <div className="text-xl text-gray-500 font-medium">
            Last Updated: <span className="text-black font-bold">November 2025</span>
          </div>
          
          {/* Back Button */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-3xl font-medium hover:text-[#ff5722] transition-colors w-fit"
          >
            <span className="text-[#ff5722] text-xl leading-none">↗</span> Back to home
          </Link>
        </aside>

        {/* Right Content Column */}
        <main className="w-full md:w-3/4 max-w-7xl">
          {/* Header */}
          <h1 className="text-5xl md:text-8xl font-normal mb-6 tracking-tight text-slate-600">
            Privacy <span className="font-bold text-black">Policy</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-16 leading-relaxed max-w-4xl">
            At Brand Hubble, we value your trust as much as your business. We are committed to protecting your privacy and ensuring that your personal information is handled with transparency and respect.
          </p>

          {/* Policy Sections */}
          <div className="space-y-12 text-sm md:text-xl leading-relaxed text-gray-800">
            
            {/* Information we collect */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-3">Information we collect</h2>
              <p className="mb-3">
                We believe in data minimalism. We collect only the information necessary to provide you with the best service experience. This includes details you share with us voluntarily, as well as limited technical data for analytics.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Contact Information:</strong> Name, email address, and phone number when you reach out via forms or email.</li>
                <li><strong>Project Details:</strong> Information regarding your business, goals, and requirements shared during collaboration.</li>
                <li><strong>Usage Data:</strong> Technical details like your IP address, browser type, and browsing behavior collected via cookies to help us improve our website performance.</li>
              </ul>
              <p>
                We use your information to deliver our services, communicate with you, process payments, and improve your experience on our site.
              </p>
            </section>

            {/* How we use your information */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-3">How we use your information</h2>
              <p className="mb-3">
                The information we collect is used strictly to improve your experience with our agency. We do <strong>not</strong> sell, trade, or rent your personal information to outside parties.
              </p>
              <p className="mb-2 font-bold text-black">We use your data to:</p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>Respond to inquiries and follow up on project discussions.</li>
                <li>Share proposals, contracts, and invoices.</li>
                <li>Deliver agreed-upon services effectively.</li>
                <li>Analyze anonymized user behavior to enhance our website's usability.</li>
              </ul>
              <p className="italic text-gray-600 mb-4">
                Note: You will not receive marketing emails from us unless you explicitly opt-in.
              </p>
              <p>
                We may use trusted third-party tools to process payments or analyze website traffic. These services only access the data they need to perform their role and are bound by confidentiality agreements.
              </p>
            </section>

            {/* Data Cookies & Technologies */}
            <section>
              <h2 className="text-3xl font-bold text-black mb-3">Data Cookies & Technologies</h2>
              <p className="mb-3">
                Cookies are small files stored on your device that help us understand how you interact with our website. We use them to measure traffic and tailor your browsing experience.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>What they track:</strong> Metrics like time spent on pages, click-through paths, and device type.</li>
                <li><strong>Your Control:</strong> While cookies are helpful for us, we understand your right to privacy. You can choose to disable or manage them through your browser settings. Disabling cookies may limit some site functionality, but it won't prevent access to most of our content.</li>
              </ul>
            </section>

            {/* Third-party Services */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Third-party Services</h2>
              <p className="mb-3">
                To operate efficiently, we occasionally use trusted third-party tools. These platforms may process limited personal data on our behalf to facilitate specific functions. We ensure that any third party we work with is reputable, secure, and compliant with privacy regulations.
              </p>
              <p className="mb-2 font-bold text-black">Key third-party categories include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Google Analytics:</strong> For understanding website traffic and insights.</li>
                <li><strong>Payment Processors:</strong> Secure gateways (like Razorpay/Stripe) for invoicing.</li>
                <li><strong>Cloud Platforms:</strong> Tools for project management and file sharing.</li>
                <li><strong>Email Providers:</strong> To manage our communications with you.</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Your Rights</h2>
              <p className="mb-3">Your data belongs to you, and you have full control over it.</p>
              <ul className="list-disc pl-5 mb-3 space-y-2">
                <li><strong>Access & Correction:</strong> You have the right to review the personal information we have on file and request corrections to outdated or inaccurate details.</li>
                <li><strong>Deletion:</strong> You may request the deletion of your personal data from our records at any time.</li>
                <li><strong>Opt-Out:</strong> You have the right to withdraw consent or opt out of communications.</li>
              </ul>
              <p>We respect your choice and will respond to any requests as quickly and transparently as possible.</p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-lg font-bold text-black mb-3">Contact Us</h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please drop us an email. We are here to help.
              </p>
              <div className="space-y-1">
                <p>
                  <strong className="text-black">Email:</strong>{' '}
                  <a href="mailto:contact@brandhubble.com" className="text-blue-500 hover:underline">
                    contact@brandhubble.com
                  </a>
                </p>
                <p>
                  <strong className="text-black">Website:</strong>{' '}
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