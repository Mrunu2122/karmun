"use client";
import Image from "next/image";
import { useTransform, motion, useScroll} from "framer-motion"; 
import { JSX, useRef } from "react";

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
    <main className="bg-black" ref={container}>
      <section className="text-white w-full ">
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
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 15}px)`,
        }}
        className="flex flex-col  items-center justify-center h-[400px] w-[1008px] rounded-[50px] p-10  bg-black border-[1px]  "
      >
        <div className="flex h-full mt-5 gap-10">
          <div className=" w-[50%] h-full rounded-lg overflow-hidden">
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
            <h2 className="text-[30px] text-center font-semibold">{title}</h2>
            <p className="text-[24px] mt-10">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
