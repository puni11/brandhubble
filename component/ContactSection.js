"use client";

import React, { useState } from "react";

const services = [
  "Performance Marketing",
  "Advanced SEO",
  "Social Media Marketing",
  "Brand Strategy & Identity",
  "Packaging Design",
  "Website Design & Development",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    service: "Performance Marketing",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          countryCode: "+91",
          phone: "",
          email: "",
          service: "Performance Marketing",
          location: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full relative flex flex-col bg-white font-sans">
      
      {/* ── Top Banner: Let's Connect ── */}
      <div className="relative w-full h-[180px] md:h-[260px] overflow-hidden flex items-end justify-center pointer-events-none">
        {/* Subtle icon/logo top left (from image) */}
     
        
        {/* Giant faded text, partially cut off at bottom by the next section */}
        <h1 className=" text-[60px] md:text-[210px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#e5e5e5] to-white tracking-tighter leading-[0.7] select-none -mb-[10px] md:-mb-[20px]">
          Let's Connect
        </h1>
      </div>

      {/* ── Main Contact Section ── */}
      <section className="w-full bg-[#0a0a0a] pt-[80px] pb-[100px] z-10 rounded-t-[32px] md:rounded-t-[48px] border-t border-[#1a1a1a]">
        <div className="w-full mx-auto px-[24px] md:px-[40px] grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-start">
          
          {/* ── Left ── */}
          <div className="flex flex-col gap-[24px] w-full sm:w-180">
            <div>
              <h2 className=" text-[clamp(36px,4vw,52px)] font-bold text-white m-0 leading-[110%] tracking-[-0.02em] mb-[8px]">
                Got a project in mind?
              </h2>
              <p className=" text-[16px] font-normal text-[#888888] m-0">
                Let's make something happen together
              </p>
            </div>

            {/* Google Map embed */}
            <div className="w-full h-[320px] md:h-[500px] rounded-[12px] overflow-hidden border border-[#2e2e2e] mt-[16px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.02611756531!2d75.72758178125471!3d26.885346618170884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1718222955513!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 mix-blend-lighten"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Right — Form ── */}
          <div className="flex flex-col gap-[20px] max-w-[580px] ml-0 sm:ml-100">
            
            {/* Name */}
            <div className="flex flex-col">
              <label className=" text-[13px] font-normal text-[#888888] mb-[8px] tracking-wide">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-[16px] py-[8px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] text-white  text-[15px] outline-none transition-colors duration-200 focus:border-[#555555] placeholder-[#555555]"
                type="text"
              />
            </div>

            {/* Country Code + Phone */}
            <div className="flex flex-col">
              <div className="flex gap-[12px] items-end">
                <div className="flex-none w-[100px] md:w-[120px]">
                  <label className=" text-[13px] font-normal text-[#888888] mb-[8px] block tracking-wide">
                    Country Code
                  </label>
                  <input
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="w-full px-[16px] py-[8px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] text-white  text-[15px] outline-none transition-colors duration-200 focus:border-[#555555]"
                    type="text"
                  />
                </div>
                <div className="flex-1">
                  <label className=" text-[13px] font-normal text-[#888888] mb-[8px] block tracking-wide">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-[16px] py-[8px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] text-white  text-[15px] outline-none transition-colors duration-200 focus:border-[#555555] placeholder-[#555555]"
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className=" text-[13px] font-normal text-[#888888] mb-[8px] tracking-wide">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-[16px] py-[8px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] text-white  text-[15px] outline-none transition-colors duration-200 focus:border-[#555555] placeholder-[#555555]"
                type="email"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className=" text-[13px] font-normal text-[#888888] mb-[8px] tracking-wide">
                Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-[16px] py-[8px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] text-white  text-[15px] outline-none transition-colors duration-200 focus:border-[#555555] appearance-none"
              >
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#1a1a1a] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className=" text-[13px] font-normal text-[#888888] mb-[8px] tracking-wide">
                Location
              </label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-[16px] py-[8px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] text-white  text-[15px] outline-none transition-colors duration-200 focus:border-[#555555] placeholder-[#555555]"
                type="text"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className=" text-[13px] font-normal text-[#888888] mb-[8px] tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-[16px] py-[8px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] text-white  text-[15px] outline-none transition-colors duration-200 focus:border-[#555555] placeholder-[#555555] resize-none"
                placeholder="Your Message"
                rows="3"
              />
            </div>

            {/* Submit */}
            <button 
              className="w-full p-[14px] mt-[12px] bg-white text-[#111111]  text-[16px] font-medium border-none rounded-[8px] cursor-pointer transition-all duration-200 ease-out hover:bg-[#e8e8e8] hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={handleSubmit} 
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-[#4caf50] text-center font-sans mt-[8px]">
                Thanks for reaching out! We'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-[#f44336] text-center font-sans mt-[8px]">
                Something went wrong, please try again.
              </p>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}