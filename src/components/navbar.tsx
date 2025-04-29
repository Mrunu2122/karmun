"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = ["Services", "About", "Blogs"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fullscreen Typewriter Intro */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#2EFF00] via-[#2EA4FF] to-[#FF0066] text-transparent bg-clip-text"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typewriter
                words={["KarMun Inc."]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className="w-full h-[69px] flex items-center justify-between px-6 md:px-10 bg-white relative z-40">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Karmun Logo"
            width={50}
            height={50}
            className="w-[100px] h-[100px] object-contain"
          />
          <div className="ml-2 flex space-x-2 text-[24px] font-bold font-sans">
            <motion.span
              className="bg-gradient-to-r from-[#2EFF00] via-[#2EA4FF] to-[#FF0066] text-transparent bg-clip-text"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              KarMun
            </motion.span>
            <motion.span
              className="bg-gradient-to-r to-[#2EFF00] via-[#2EA4FF] from-[#FF0066] text-transparent bg-clip-text"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 5, delay: 2.5 }}
            >
              Inc.
            </motion.span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 justify-center flex-grow">
          {navItems.map((label, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-[20px] p-[2px]"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
                <span className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,#82F369,#91CFFF,#FFAACC,#82F369)] group-hover:animate-[spin_2s_linear_infinite]" />
                <span className="relative inline-flex h-full w-full items-center justify-center rounded-full text-black px-8 py-1 text-sm font-medium bg-white capitalize">
                  {label}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <motion.button
            type="button"
            className="relative rounded-[20px] p-[2px]"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="group relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
              <span className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,#82F369,#91CFFF,#FFAACC,#82F369)] group-hover:animate-[spin_2s_linear_infinite]" />
              <span className="relative inline-flex h-full w-full items-center justify-center rounded-full text-black px-8 py-1 text-sm font-medium bg-white capitalize">
                Contact
              </span>
            </p>
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[69px] left-0 w-full bg-white flex flex-col items-center gap-6 py-8 z-30 md:hidden"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                className="text-black text-lg font-semibold"
              >
                {item}
              </motion.button>
            ))}
            <button className="mt-4 text-black font-semibold border px-6 py-2 rounded-full">
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
