
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ShutterIntro from "@/components/ShutterIntro";
import { motion, AnimatePresence } from "framer-motion";

// Fade-in variants (fixed transition 'type'!)
const fadeVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, type: "spring" as const, stiffness: 46 },
  },
};

/**
 * Main portfolio page for Noyal Nakarmi with trigger-on-scroll shutter intro + smooth section fade
 */
const Index = () => {
  const [introDone, setIntroDone] = useState(false);
  // Only trigger shutter on FIRST scroll ever; ignore repeated scrolls
  const triggeredRef = useRef(false);

  useEffect(() => {
    if (introDone) return;
    // Only attach scroll listener if intro is NOT done
    const handleScroll = () => {
      if (!triggeredRef.current && window.scrollY > 0) {
        triggeredRef.current = true;
        setIntroDone(false); // Show intro
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [introDone]);

  // On first scroll, show shutter overlay, block scrolling during animation
  useEffect(() => {
    if (!triggeredRef.current || introDone) return;
    const scrollY = window.scrollY;
    // Prevent scroll during shutter
    document.body.style.overflow = "hidden";
    // Remove scroll lock after animation
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
      setIntroDone(true);
    }, 2400);
    // Snap scroll to top
    window.scrollTo({ top: 0, behavior: "auto" });
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [introDone]);

  // We show <ShutterIntro> if first scroll hasn't finished animation yet
  const showShutter = triggeredRef.current && !introDone;

  return (
    <div className="relative bg-gradient-to-br from-[#23243e] via-[#181927] to-[#161627] min-h-screen w-full font-sans">
      {/* Shutter Intro Animation - overlays everything, only appears on first scroll */}
      <AnimatePresence>
        {showShutter && (
          <ShutterIntro
            onFinish={() => setIntroDone(true)}
          />
        )}
      </AnimatePresence>
      {/* Main content (always visible, but fade section containers) */}
      <div
        className={
          showShutter
            ? "opacity-100 pointer-events-none select-none"
            : "opacity-100"
        }
      >
        <Navbar />
        <main>
          <Landing />
          <section id="about">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeVariants}
            >
              <About />
            </motion.div>
          </section>
          <section id="projects">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeVariants}
            >
              <Projects />
            </motion.div>
          </section>
          <section id="experience">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeVariants}
            >
              <Experience />
            </motion.div>
          </section>
          <section id="skills">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeVariants}
            >
              <Skills />
            </motion.div>
          </section>
          <section id="contact">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeVariants}
            >
              <Contact />
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Index;

