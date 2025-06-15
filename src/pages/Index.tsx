
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

/**
 * Main portfolio page for Noyal Nakarmi
 */
const Index = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#23243e] via-[#181927] to-[#161627] min-h-screen w-full font-sans">
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
  );
};
export default Index;
