"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full h-[69px] flex items-center justify-center px-30 py-0 bg-black">
        {/* Left: Logo */}
        <div className="flex items-center justify-start">
          <Image
            src="/logo.png"
            alt="Karmun Logo"
            width={50}
            height={50}
            className="w-[50px] h-[50px] object-contain"
          />
          <div className="ml-2 flex space-x-2 text-[24px] font-bold font-sans">
            <motion.span
              className="bg-gradient-to-r from-[#82F369] via-[#91CFFF] to-[#FFAACC] text-transparent bg-clip-text"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0 }}
            >
              KarMun
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-[#FFAACC] via-[#91CFFF] to-[#82F369] text-transparent bg-clip-text"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 5, delay: 2.5 }}
            >
              Inc.
            </motion.span>
          </div>
        </div>

        {/* Center: Navigation Buttons */}
        <div className="flex gap-4 justify-center flex-grow">
          {["Services", "About", "blogs"].map((label, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-[20px] p-[2px]"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                type="button"
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,#82F369,#91CFFF,#FFAACC,#82F369)] group-hover:animate-[spin_2s_linear_infinite]" />
                <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white capitalize ">
                  {label}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Right: Contact Button */}
        <motion.div>
          <button
            type="button"
            className="group relative inline-flex h-12 border-2 overflow-hidden rounded-full p-[2px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,#82F369,#91CFFF,#FFAACC,#82F369)] group-hover:animate-[spin_2s_linear_infinite]" />
            <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white capitalize ">
              Contact
            </span>
          </button>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
