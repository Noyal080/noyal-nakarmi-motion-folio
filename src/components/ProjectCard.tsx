
import { motion } from "framer-motion";

interface Props {
  title: string;
  tech: string;
  desc: string;
  url?: string;
  delay?: number;
}

const ProjectCard = ({ title, tech, desc, url, delay = 0 }: Props) => {
  return (
    <motion.div
      className="rounded-xl bg-gradient-to-br from-[#262860]/90 to-[#191b32e6]/90 border border-accent-violet/40 shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col p-6 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 40 }}
      whileHover={{ y: -4, scale: 1.04 }}
    >
      <div className="flex items-center gap-2 mb-1">
        {/* Animated colored dot */}
        <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-accent-blue to-accent-violet animate-pulse inline-block" />
        <span className="font-semibold text-lg text-white">{title}</span>
      </div>
      <div className="text-accent-blue text-xs font-mono mb-1">
        {tech}
      </div>
      <div className="text-gray-300 font-medium text-sm mb-3">{desc}</div>
      {url && (
        <a
          href={url}
          className="self-end mt-auto underline text-accent-violet text-xs font-semibold hover:text-accent-blue transition-colors"
          target="_blank" rel="noopener noreferrer"
        >View details</a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
