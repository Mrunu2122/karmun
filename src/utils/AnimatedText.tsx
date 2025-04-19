"use client";
import { motion } from "framer-motion";

interface AnimatedLettersProps {
  text: string;
  delay?: number;
}

export default function AnimatedLetters({
  text,
  delay = 0,
}: AnimatedLettersProps) {
  return (
    <span className="inline-block">
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block text-black text-lg sm:text-xl font-[500] tracking-wide leading-[160%] font-montserrat transition-all duration-100 ease-out"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + index * 0.03, duration: 0.2 }}
          whileHover={{
            scale: 1.2,
            color: "#015BBB",
            transition: { duration: 0.08 },
          }}
          whileTap={{ scale: 1.1 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
