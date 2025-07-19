"use client";

import React from "react";
import AnimatedLetters from "@/utils/AnimatedText";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="w-full min-h-screen bg-white relative px-4 py-16 flex items-center justify-center"
      id="about"
    >
      {/* Text Content */}
      <div className="max-w-6xl text-center">
        <h2 className="tracking-[1px] md:tracking-[2px] text-[38px] md:text-[56px] lg:text-[74px] text-center font-[400] lg:mb-20">
          <span className="bg-gradient-to-r from-[#0271C5] via-[#FDBE00] to-[#FDBE00] text-transparent bg-clip-text font-gajraj">
            Who
          </span>{" "}
          <span className="text-black font-montserrat">are We ?</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <AnimatedLetters
            text="At KarMun, We Empower Businesses To Thrive In The Digital Age. Specializing In Digital Transformation, We Help Organizations Modernize Their Operations, Optimize Customer Experiences, And Unlock New Growth Opportunities Through Innovative Technology. From Strategy To Execution, Our Team Blends Deep Industry Expertise With Cutting-Edge Digital Solutions To Deliver Measurable Impact. Whether You’re Streamlining Workflows, Integrating Modern Tools, Or Reimagining Customer Journeys — We’re Here To Guide You Every Step Of The Way."
          />
        </motion.p>
      </div>

      {/* Flip Card in bottom-right */}
      <div className="absolute bottom-8 right-8 w-[280px] h-[380px] md:w-[340px] md:h-[440px]">
        <div className="[transform-style:preserve-3d] [transition:transform_1s] rotate-y-180">
          {/* Back side of the card, now visible */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden flex items-center justify-center bg-white rounded-xl shadow-xl">
            <Image src="/about-image.png" alt="About" width={300} height={300} className="object-contain" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
