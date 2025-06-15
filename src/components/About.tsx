
import { motion } from "framer-motion";

const About = () => (
  <motion.div
    className="max-w-3xl mx-auto py-24 px-4 flex flex-col items-start"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.7, type: "spring", stiffness: 40 }}
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent">
      About Me
    </h2>
    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-1 font-medium">
      Frontend Developer with 2+ years of experience building dynamic and responsive web/mobile apps. Skilled in <span className="text-accent-blue font-bold">React</span>, <span className="text-accent-violet font-bold">Redux</span>, <span className="text-accent-violet font-bold">Zustand</span>, and creating developer-friendly custom packages.<br/><br/>
      Passionate about <span className="text-accent-blue font-bold">clean UI/UX</span> and <span className="text-accent-blue font-bold">performance optimization</span>.
    </p>
  </motion.div>
);

export default About;
