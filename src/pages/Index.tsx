
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ShutterIntro from "@/components/ShutterIntro";

/**
 * Main portfolio page for Noyal Nakarmi with shutter intro
 */
const Index = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-[#23243e] via-[#181927] to-[#161627] min-h-screen w-full font-sans">
      {/* Shutter Intro Animation - overlays everything */}
      {!introDone && <ShutterIntro onFinish={() => setIntroDone(true)} />}
      {/* Main content (hidden/disabled during intro) */}
      <div className={introDone ? "opacity-100" : "opacity-0 pointer-events-none select-none transition-all duration-700"}>
        <Navbar />
        <main>
          <Landing />
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </div>
  );
};
export default Index;
