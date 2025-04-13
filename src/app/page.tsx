"use client";

import React from "react";
import Home from "@/components/home";
import Service from "@/components/service";
import About from "@/components/about";


const page = () => {
  return (
    <div className="bg-black">
      <Home />
      <Service/>
      <About />
    </div>
  );
};

export default page;
