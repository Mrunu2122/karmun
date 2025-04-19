"use client";

import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

// Images
import AI from "../../public/Devices/Ai.png";
import WebDev from "../../public/Devices/WebsiteDev.png";
import MobileDev from "../../public/Devices/MobileApp.png";
import SoftwareDev from "../../public/Devices/CustomSoftware.png";
import Seo from "../../public/Devices/SEO.png";
import UIUX from "../../public/Devices/UiUx.png";
import More from "../../public/Devices/More.png";

// Card data
const card = [
  {
    id: 1,
    src: AI,
    title: "Artificial Intelligence & Automation",
    Desc: "We integrate AI and automation to create smarter, data-driven websites that adapt, learn, and optimize performance",
  },
  {
    id: 2,
    src: WebDev,
    title: "Website Development",
    Desc: "Crafting fast, responsive, and visually stunning websites tailored to your brand.",
  },
  {
    id: 3,
    src: MobileDev,
    title: "Mobile App Development",
    Desc: "Building sleek, high-performance mobile apps for iOS and Android.",
  },
  {
    id: 4,
    src: SoftwareDev,
    title: "Custom Software Development",
    Desc: "Developing scalable, tailor-made software to solve your unique business challenges.",
  },
  {
    id: 5,
    src: UIUX,
    title: "UI/UX Design",
    Desc: "Designing intuitive and engaging digital experiences your users will love.",
  },
  {
    id: 6,
    src: Seo,
    title: "SEO & Digital Marketing",
    Desc: "Driving traffic, leads, and growth through smart SEO and digital campaigns.",
  },
  {
    id: 7,
    src: More,
    title: "And many more.....",
    Desc: "Logo & Branding Design, Digital Transformation, Cloud & Hosting Solutions, Social Media Marketing, Artificial Intelligence & Automation",
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container}>
      <h2 className="tracking-[1px] md:tracking-[2px] text-[38px] md:text-[56px] lg:text-[74px] leading-[110%] text-center font-[400]">
        <span className="bg-gradient-to-r from-[#0271C5] via-[#FDBE00] to-[#FDBE00] text-transparent bg-clip-text font-gajraj">
          Service
        </span>{" "}
        <span className="text-black font-montserrat">we Provide</span>
      </h2>
      {/* Desktop: Vertical Scroll Stack */}
      <section className="hidden md:block text-white w-full">
        {card.map((card, i) => {
          const targetScale = 1 - (card.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              src={card.src}
              title={card.title}
              description={card.Desc}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

      {/* Mobile: Horizontal Scroll */}
      <section className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 py-10">
        {card.map((card, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[85%] snap-center bg-white border border-black rounded-3xl p-5 text-white"
          >
            <div className="w-full h-[200px] mb-4 overflow-hidden rounded-lg">
              <Image
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {card.title}
            </h3>
            <p className="text-base">{card.Desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

export const Card = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex flex-col items-center justify-center sticky top-0"
    >
      
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 15}px)`,
        }}
        className="flex flex-col items-center justify-center h-[400px] w-[1008px] rounded-[50px] p-10 bg-[#f0f0f0] border border-black/20"
      >
        <div className="flex h-full gap-10">
          <div className="w-[50%] h-full rounded-lg overflow-hidden">
            <motion.div style={{ scale: imageScale }}>
              <Image
                src={src}
                alt="image"
                layout="intrinsic"
                width={567.87}
                height={327}
                className="rounded-lg"
              />
            </motion.div>
          </div>
          <div className="w-[50%]">
            <h2 className="text-[30px] text-center font-semibold text-black">
              {title}
            </h2>
            <p className="text-[24px] mt-10 text-black">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
