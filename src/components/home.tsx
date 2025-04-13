"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import LighthouseScore from "./lightHouseScore";
import Marquee from "./Marquee";

const fullText =
  "Scalable. Performant. Custom-built solutions for startups and enterprise teams";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const indexRef = useRef(0); // Use ref instead of local variable

  useEffect(() => {
    const interval = setInterval(() => {
      const nextChar = fullText[indexRef.current];
      if (nextChar !== undefined) {
        setTypedText((prev) => prev + nextChar);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center h-screen px-4 bg-black"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-white font-aclonica font-normal text-[74px] leading-[100%] font-montserrat">
        Your Partner in Digital
      </h2>

      <h2 className="font-gajraj tracking-[2px] text-[74px] leading-[100%] mt-5">
        <span className="bg-gradient-to-r from-[#0271C5] to-[#FDBE00] text-transparent bg-clip-text">
          Transformation
        </span>
      </h2>

      <div className="mt-10">
        <p className="font-[700] text-[24px] leading-[100%] text-[#8B8B8B] font-genos">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
      <LighthouseScore />
      <Marquee />
    </motion.section>
  );
}
