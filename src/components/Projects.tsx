
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LMS (Learning Management System)",
    tech: "React JS, Semantic UI, Context API",
    desc: "A scalable learning platform with role-based access, responsive UI, and realtime progress tracking.",
    url: "#"
  },
  {
    title: "Ecommerce Site + Admin Dashboard",
    tech: "React, Redux, Tailwind",
    desc: "Storefront and admin dashboard: inventory, orders, authentication, dashboard analytics.",
    url: "#"
  },
  {
    title: "Reusable Layout NPM Package",
    tech: "TypeScript, React",
    desc: "Published package for instantly setting up ergonomic layouts across projects.",
    url: "#"
  },
  {
    title: "Mobile App",
    tech: "React Native, Intuitive UI/UX",
    desc: "A beautifully designed cross-platform mobile app with optimal navigation and onboarding.",
    url: "#"
  }
];

const Projects = () => (
  <div className="relative px-4 py-24 max-w-5xl mx-auto" id="projects">
    <motion.h2
      className="text-2xl md:text-3xl font-bold mb-10 bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 48 }}
    >
      Projects
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
      {projects.map((proj, i) => (
        <ProjectCard key={proj.title} {...proj} delay={i * 0.12}/>
      ))}
    </div>
  </div>
);

export default Projects;
