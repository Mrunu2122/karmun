"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const [scrollDirection, setScrollDirection] = useState("right");

  const prevScrollRef = useRef(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const prevScroll = prevScrollRef.current;

    if (currentScroll > prevScroll) {
      setScrollDirection("right");
    } else {
      setScrollDirection("left");
    }

    prevScrollRef.current = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative hidden md:block overflow-hidden bg-black text-white py-5">
      {/* Single-line scrolling text for mobile */}
      <motion.div
        className="whitespace-nowrap text-center font-genos font-bold text-[24px] leading-[100%] text-[#8B8B8B] md:hidden"
        animate={{
          x: scrollDirection === "right" ? "100%" : "-100%",
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        Reach out to discuss your project or just say hello — we&apos;re always
        up for a good conversation.
      </motion.div>

      {/* Two-line scrolling text for larger screens */}
      <motion.div
        className="hidden md:block whitespace-nowrap text-center font-genos font-bold text-[24px] leading-[100%] text-[#8B8B8B]"
        animate={{
          x: scrollDirection === "right" ? "100%" : "-100%",
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        Reach out to discuss your project or just say hello — we&apos;re always
        up for a good conversation.
      </motion.div>

      <motion.div
        className="hidden md:block whitespace-nowrap text-center font-genos font-bold text-[24px] leading-[100%] text-[#8B8B8B]"
        animate={{
          x: scrollDirection === "left" ? "100%" : "-100%",
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        Reach out to discuss your project or just say hello — we&apos;re always
        up for a good conversation.
      </motion.div>
    </div>
  );
}
