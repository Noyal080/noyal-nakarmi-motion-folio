import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShutterIntroProps {
  onFinish: () => void;
}

const shutterPanels = [
  "from-[#181927] to-[#23243e]",
  "from-[#23243e] to-[#7F53AC]",
  "from-[#647DEE] to-[#23243e]"
];

export default function ShutterIntro({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Duration is synced to the animation below, 2s + 0.4s = 2.4s
    const timeout = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 2400);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#181927] to-[#23243e]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          {/* Shutter panels from top to bottom */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {shutterPanels.map((gradient, idx) => (
              <motion.div
                key={idx}
                className={`absolute left-0 w-full`}
                style={{
                  top: `${idx * 33.33}%`,
                  height: "33.34%",
                  zIndex: 1 + shutterPanels.length - idx,
                }}
                initial={{ y: 0 }}
                animate={{
                  y: "-120%",
                  transition: {
                    delay: 0.6 + idx * 0.2,
                    duration: 1.2,
                    ease: [0.86, 0, 0.07, 1],
                  },
                }}
                exit={{ y: "-120%" }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${gradient}`}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="relative z-20 flex flex-col items-center"
            initial={{ opacity: 0, scale: 1.12, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.4, duration: 0.6, type: "spring", stiffness: 50 } }}
            exit={{ opacity: 0, scale: 0.97, y: -24, transition: { duration: 0.4 } }}
          >
            <h1 className="text-white text-[2.1rem] md:text-5xl font-black tracking-tight mb-2 text-center">
              Hello<br />
              <span className="block bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent">
                Am I a developer now
              </span>
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
