"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // or use Heroicons

const navItems = ["Services", "About", "Blogs"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[69px] flex items-center justify-between px-6 md:px-10 bg-black relative z-50">
        {/* Left: Logo */}
        <div className="flex items-center">
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
              transition={{ repeat: Infinity, duration: 5 }}
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

        {/* Desktop Navigation */}
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
                <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white capitalize">
                  {label}
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <motion.button
            type="button"
            className="group relative inline-flex h-12 border-2 overflow-hidden rounded-full p-[2px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,#82F369,#91CFFF,#FFAACC,#82F369)] group-hover:animate-[spin_2s_linear_infinite]" />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white capitalize">
              Contact
            </span>
          </motion.button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[69px] left-0 w-full bg-black flex flex-col items-center gap-6 py-8 z-40 md:hidden"
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
                className="text-white text-lg font-semibold"
              >
                {item}
              </motion.button>
            ))}
            <button className="mt-4 text-white font-semibold border px-6 py-2 rounded-full">
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
