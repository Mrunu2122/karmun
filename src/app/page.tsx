"use client";

import React from "react";
import dynamic from "next/dynamic";
import Home from "@/components/home";
import Service from "@/components/service";
import About from "@/components/about";


// Disable SSR for Contact to prevent hydration mismatch
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });

const Page = () => {
  return (
    <div>
      <Home />
      <Service />
      <About />
      <Contact />
    </div>
  );
};

export default Page;