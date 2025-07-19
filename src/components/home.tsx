"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const KarMunLogo = "/karmun-logo.png";
const AboutImage = "/about-image.jpg";

export default function Home() {
  const controls = useAnimation();
  const [flipped, setFlipped] = useState(false);
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (aboutInView) setFlipped(true);
    else setFlipped(false);
  }, [aboutInView]);

  return (
    <main className="relative min-h-[200vh] bg-[#F3F3F3] overflow-hidden">
      {/* Animated Card */}
      <motion.div
        initial={{ top: "25%", y: "-50%" }}
        animate={{
          top: aboutInView ? "75%" : "25%",
          rotateY: flipped ? 180 : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full absolute left-1/2 -translate-x-1/2 z-50 perspective"
      >
        <div
  className="w-[280px] h-[380px] md:w-[340px] md:h-[440px] relative [transform-style:preserve-3d] [transition:transform_1s]"
  style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
>
  {/* Front */}
  <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center bg-white rounded-xl shadow-xl">
    <Image src={KarMunLogo} alt="KarMun Logo" width={300} height={300} className="object-contain" />
  </div>

  {/* Back */}
  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center bg-white rounded-xl shadow-xl">
    <Image src={AboutImage} alt="About Image" width={300} height={300} className="object-contain" />
  </div>
</div>

      </motion.div>

      {/* Hero Content */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl font-bold text-[#121212] mb-6">
            We Design Exceptional Experiences
          </h1>
          <p className="text-xl text-[#3A3A3A] max-w-xl mx-auto">
            Creating meaningful interactions that elevate brands and delight users. Our approach blends creativity, strategy, and technology.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="h-screen flex items-center justify-center text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-700">About Section</h2>
      </section>
    </main>
  );
}
