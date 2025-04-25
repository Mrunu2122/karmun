"use client";

import React from "react";
import Home from "@/components/home";
import Service from "@/components/service";
import About from "@/components/about";
import Contact from "@/components/contact";


const page = () => {
  return (
    <div>
      <Home />
      <Service/>
      <About />
      <Contact />
    </div>
  );
};

export default page;
