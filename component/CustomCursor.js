// components/CustomCursor.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Optional: Make the cursor grow slightly when hovering over clickable items
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center"
      // mix-blend-difference is the magic that inverts the color based on the background
      style={{ mixBlendMode: "difference" }}
      animate={{
        x: mousePosition.x - 16, // Offset by half width to center the cursor
        y: mousePosition.y - 16, // Offset by half height to center the cursor
        scale: isHovering ? 1.5 : 1, // Grows when hovering over links/buttons
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
        mass: 0.1,
      }}
    >
      {/* The requested Asterisk Circle SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        // Must be white for mix-blend-mode: difference to work properly
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12" />
        <path d="M17.196 9 6.804 15" />
        <path d="m6.804 9 10.392 6" />
      </svg>
    </motion.div>
  );
}