"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import LighthouseScore from "./lightHouseScore";
import Marquee from "./Marquee";

const fullText =
  "Scalable. Performant. Custom-built solutions for startups and enterprise teams";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const indexRef = useRef(0);

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
      className="flex flex-col items-center justify-center text-center min-h-screen px-4 bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-black font-aclonica font-normal text-[38px] md:text-[56px] lg:text-[74px] leading-[110%] font-playfair">
        Your Partner in Digital
      </h2>

      <h2 className="font-gajraj tracking-[1px] md:tracking-[2px] text-[38px] md:text-[56px] lg:text-[74px] leading-[110%] mt-4 md:mt-5">
        <span className="bg-gradient-to-r from-[#0271C5] to-[#FDBE00] text-transparent bg-clip-text">
          Transformation
        </span>
      </h2>

      <div className="mt-6 md:mt-10 px-2 md:px-0 max-w-[90%]">
        <p className="font-[700] text-[16px] md:text-[20px] lg:text-[24px] leading-[120%] text-[#8B8B8B] font-genos">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      <div className="mt-6 md:mt-10 w-full max-w-[800px] px-4">
        <LighthouseScore />
      </div>

      <div className="w-full mt-6 md:mt-10">
        <Marquee />
      </div>
    </motion.section>
  );
}
