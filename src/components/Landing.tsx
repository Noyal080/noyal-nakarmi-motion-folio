
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MAX_SCROLL = 320; // px, how much scroll before full pan out

const Landing = () => {
  // Watch scroll position for pan-out
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // pan out: scale from 1 -> 0.78 as scroll goes 0 -> MAX_SCROLL,
  // translateY from 0 -> -120px (desk) / -60px (mob),
  // fade from 1->0.64
  const scale = scrollY < MAX_SCROLL
    ? 1 - 0.22 * (scrollY / MAX_SCROLL)
    : 0.78;
  const y =
    scrollY < MAX_SCROLL
      ? -(window.innerWidth < 768 ? 60 : 120) * (scrollY / MAX_SCROLL)
      : window.innerWidth < 768 ? -60 : -120;
  const opacity = scrollY < MAX_SCROLL ? 1 - 0.36 * (scrollY / MAX_SCROLL) : 0.64;

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen w-full relative overflow-x-clip bg-gradient-to-br from-accent-blue/60 via-accent-violet/40 to-transparent pb-24"
      style={{ zIndex: 1 }}
    >
      <motion.h1
        style={{
          scale,
          y,
          opacity,
        }}
        initial={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 22, mass: 1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight text-center drop-shadow-md select-none"
      >
        Hi, I'm <span className="bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent">Noyal</span>
        <br />
        <span className="block text-2xl md:text-4xl font-bold mt-4">
          – a Frontend Developer.
        </span>
      </motion.h1>

      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 animate-fade-in"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <span className="text-white text-sm mb-1">Scroll down</span>
        <svg width={22} height={28} fill="none" stroke="white" strokeWidth={2} className="animate-bounce" viewBox="0 0 24 28">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6"/>
        </svg>
      </motion.div>
    </div>
  );
};
export default Landing;
