
import { motion } from "framer-motion";

const experience = [
  {
    company: "Corpola Tech",
    period: "04/2023 – 10/2024",
    desc: "Frontend engineer building scalable dashboard modules and design systems."
  },
  {
    company: "Freelancer",
    period: "07/2024 – 10/2024",
    desc: "Delivered UI-rich web and mobile apps for multiple clients, with clean code and strong client feedback."
  },
  {
    company: "Zeta Labs",
    period: "09/2024 – Present",
    desc: "Leading UI/UX for next-gen app platform. Advocating for accessibility & blazing fast UX."
  },
];

const Experience = () => (
  <div className="relative px-4 py-24 max-w-4xl mx-auto" id="experience">
    <motion.h2
      className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 48 }}
    >
      Experience
    </motion.h2>
    <ol className="relative border-s border-accent-violet/40">
      {experience.map((job, i) => (
        <motion.li
          key={job.company + job.period}
          className="mb-12 ms-6 last:mb-0"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.11 * i, duration: 0.55, type: "spring", stiffness: 32 }}
        >
          {/* Dot */}
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-gradient-to-tr from-accent-violet to-accent-blue rounded-full ring-4 ring-background shadow"></span>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
            <span className="font-bold text-white text-lg">{job.company}</span>
            <span className="text-xs text-gray-400 font-mono">{job.period}</span>
          </div>
          <div className="text-gray-300 text-sm mt-1">{job.desc}</div>
        </motion.li>
      ))}
    </ol>
  </div>
);

export default Experience;
