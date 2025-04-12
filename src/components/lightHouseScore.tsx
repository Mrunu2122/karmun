"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ScoreItem = {
  label: string;
  score: number;
};

function getColor(percent: number) {
  if (percent < 50) return "#DC2626"; // Tailwind red-600
  if (percent < 80) return "#FBBF24"; // Tailwind yellow-400
  return "#1E6701"; 
}


const scores: ScoreItem[] = [
  { label: "Performance", score: 100 },
  { label: "Accessibility", score: 100 },
  { label: "Best Practices", score: 100 },
  { label: "SEO", score: 100 },
];

export default function LighthouseScore() {
  return (
    <div className="flex justify-center gap-10 pt-10 px-6 rounded-xl">
      {scores.map((item, idx) => (
        <AnimatedCircle key={idx} label={item.label} score={item.score} />
      ))}
    </div>
  );
}

function AnimatedCircle({ label, score }: { label: string; score: number }) {
  const [counter, setCounter] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current <= score) {
        setCounter(current);
        setPercent(current); // same value drives the circle
        current++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [score]);

  return (
    <div className="text-white text-center leading-2">
      {/* Outer circle with conic gradient animation */}
      <div
        className="w-[80px] h-[80px] rounded-full p-[6px] mx-auto "
        style={{
          background: `conic-gradient(${getColor(
            percent
          )} ${percent}%, #1F2937 ${percent}%)`,
          transition: "background 0.2s linear",
        }}
      >
        <div className="bg-black w-full h-full rounded-full flex items-center justify-center">
          <motion.span
            className="font-roboto text-[24px] font-bold"
            style={{ color: getColor(percent) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {counter}
          </motion.span>
        </div>
      </div>

      {/* Label */}
      <p className="mt-3 text-white font-openSans font-bold text-[14px] leading-tight">
        {label.split(" ").map((word, i) => (
          <span key={i} className="block">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
