"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MarqueeText() {
  // Applying the exact CSS properties provided from the Framer project
  const framerTextStyle = {
   
    fontSize: '302px',
    fontWeight: '700',
    letterSpacing: '-0.04em',
    lineHeight: '100%',
    color: 'rgb(242, 248, 252)',
  };

  return (
    <div className="relative w-full overflow-hidden flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        // Animating from 0 to -50% ensures the second half perfectly replaces the first half
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40, // Increase for slower movement, decrease for faster
        }}
      >
        {/* Duplicating the text four times. 
          The padding-right (pr-16) ensures consistent spacing between each word.
        */}
        <h1 style={framerTextStyle} className="pr-20 font-[family-name:var(--font-wormbox)]">BRAND HUBBLE</h1>
        <h1 style={framerTextStyle} className="pr-20 font-[family-name:var(--font-wormbox)]">BRAND HUBBLE</h1>
        <h1 style={framerTextStyle} className="pr-20 font-[family-name:var(--font-wormbox)]">BRAND HUBBLE</h1>
        <h1 style={framerTextStyle} className="pr-20 font-[family-name:var(--font-wormbox)]">BRAND HUBBLE</h1>
      </motion.div>
    </div>
  );
}