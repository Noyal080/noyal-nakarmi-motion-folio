
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
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
 * Main portfolio page for Noyal Nakarmi with shutter intro on first load + smooth section fade
 */
const Index = () => {
  const [introDone, setIntroDone] = useState(false);
  const [showShutter, setShowShutter] = useState(true);

  useEffect(() => {
    // Show shutter intro on first load
    const timer = setTimeout(() => {
      setShowShutter(false);
      setIntroDone(true);
    }, 2400);
    
    // Prevent scrolling during intro
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (introDone) {
      document.body.style.overflow = "";
    }
  }, [introDone]);

  return (
    <div className="relative bg-gradient-to-br from-[#23243e] via-[#181927] to-[#161627] min-h-screen w-full font-sans">
      {/* Shutter Intro Animation - shows on first load */}
      <AnimatePresence>
        {showShutter && (
          <ShutterIntro
            onFinish={() => {
              setShowShutter(false);
              setIntroDone(true);
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Main content */}
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
              <div className="relative px-4 py-24 max-w-3xl mx-auto" id="contact">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-10 bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 48 }}
                >
                  Contact Information
                </motion.h2>
                <div className="bg-gradient-to-br from-[#23243ecc] to-[#171727cc] border border-accent-violet/30 rounded-xl shadow-lg p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                      <p className="text-gray-300 mb-6">
                        I'm always open to discussing new opportunities and interesting projects.
                      </p>
                    </div>
                    
                    <div className="grid gap-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-accent-blue font-semibold">Email</span>
                        <a 
                          href="mailto:noyalnakarmi@gmail.com"
                          className="text-gray-300 hover:text-accent-blue transition-colors"
                        >
                          noyalnakarmi@gmail.com
                        </a>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-accent-violet font-semibold">LinkedIn</span>
                        <a 
                          href="https://www.linkedin.com/in/noyalnakarmi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-accent-violet transition-colors"
                        >
                          linkedin.com/in/noyalnakarmi
                        </a>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-accent-blue font-semibold">GitHub</span>
                        <a 
                          href="https://github.com/noyalnakarmi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-accent-blue transition-colors"
                        >
                          github.com/noyalnakarmi
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <a
                        className="px-6 py-3 rounded border border-accent-blue text-accent-blue font-semibold hover:bg-accent-blue hover:text-white transition-colors"
                        href="#"
                        download
                        aria-label="Download CV"
                        title="Download CV"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Index;
