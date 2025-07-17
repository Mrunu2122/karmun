"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Text to animate
const fullText =
  "Scalable. Performant. Custom-built solutions for startups and enterprise teams";

// Load the GLB model and ensure materials are preserved
function FloatingScreen() {
  const { scene } = useGLTF("/ui-screen.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.side = THREE.DoubleSide;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={1.3}
      position={[0, 0, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

useGLTF.preload("/ui-screen.glb");

// Canvas with lighting and environment
function BackgroundCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} castShadow />

      <Suspense fallback={<Html>Loading model...</Html>}>
        <Environment preset="city" background />
        <FloatingScreen />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
}

// Main Hero Section
export default function Home() {
  const [typedText, setTypedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextChar = fullText[indexRef.current];
      if (nextChar !== undefined) {
        setTypedText((prev) => prev + nextChar);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <BackgroundCanvas />
      </div>

      <motion.section
        className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-[#5A1A1A] font-bold text-[34px] md:text-[60px] leading-tight font-playfair drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
    Your Partner in Digital
  </h2>

  {/* Subheading - Brighter Gradient, Clearer Text */}
  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B2DB] to-[#FFD700] text-[34px] md:text-[60px] font-playfair mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
    Transformation
  </h2>

  {/* Typing Subtitle - Better Contrast + Shadow */}
  <p className="mt-6 text-white text-[16px] md:text-[22px] max-w-2xl font-medium font-genos drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
    {typedText}
    <span className="animate-pulse">|</span>
  </p>

  {/* Button - Strong BG and glow on hover */}
  <motion.button
    className="mt-8 px-6 py-3 rounded-xl bg-black text-white text-lg font-semibold hover:bg-gray-800 hover:shadow-xl transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Let’s Build Something
  </motion.button>
      </motion.section>
    </div>
  );
}
