
import { motion, Variants } from "framer-motion";

const skills = [
  "React", "TypeScript", "Tailwind", "Zustand", "Redux",
  "Semantic UI", "Chakra UI", "React Query", "Webpack",
  "Jest", "CSS", "HTML", "Node.js", "Next.js", "Vite"
];

// Define correct variants for custom delays with Framer Motion
const gridMotion: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, type: "spring", stiffness: 54 }
  },
};

const Skills = () => (
  <div className="relative px-4 py-24 max-w-4xl mx-auto" id="skills">
    <motion.h2
      className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 48 }}
    >
      Skills
    </motion.h2>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          className="px-4 py-1 rounded-full font-medium bg-gradient-to-r from-accent-violet to-accent-blue text-sm text-white shadow-md hover:scale-110 transition-transform cursor-pointer border border-transparent hover:border-accent-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={gridMotion}
          custom={i}
          transition={{
            delay: i * 0.03,
            duration: 0.4,
            type: "spring",
            stiffness: 54,
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

export default Skills;
