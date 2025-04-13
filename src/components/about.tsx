"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-5xl text-center">
        <h2 className="tracking-[1px] md:tracking-[2px] text-[38px] md:text-[56px] lg:text-[74px] leading-[110%] text-center font-[400]">
          <span className="bg-gradient-to-r from-[#0271C5] via-[#FDBE00] to-[#FDBE00] text-transparent bg-clip-text font-gajraj">
            Who
          </span>{" "}
          <span className="text-white font-montserrat">are We ?</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#D3D3D3] text-lg sm:text-xl font-[500] tracking-wide leading-[160%] max-w-4xl mx-auto font-montserrat"
        >
          <strong className="block mb-6">
            At KarMun, We Empower Businesses To Thrive In The Digital Age.
            Specializing In Digital Transformation, We Help Organizations
            Modernize Their Operations, Optimize Customer Experiences, And
            Unlock New Growth Opportunities Through Innovative Technology.
          </strong>
          <span>
            From Strategy To Execution, Our Team Blends Deep Industry Expertise
            With Cutting-Edge Digital Solutions To Deliver Measurable Impact.
            Whether You’re Streamlining Workflows, Integrating Modern Tools, Or
            Reimagining Customer Journeys — We’re Here To Guide You Every Step
            Of The Way.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default About;
