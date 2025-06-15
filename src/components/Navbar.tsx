
import { useState } from "react";
const NAV_LINKS = [
  { label: "About", to: "#about" },
  { label: "Projects", to: "#projects" },
  { label: "Experience", to: "#experience" },
  { label: "Skills", to: "#skills" },
  { label: "Contact", to: "#contact" },
];

const scrollToSection = (selector: string) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [active, setActive] = useState("");
  // default sticky, glassy dark bar
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#2e2f47dd] to-[#23243edd] backdrop-blur-lg border-b border-gray-800 px-8 py-2 flex items-center justify-between">
      <span className="text-lg font-bold tracking-tight text-white select-none">
        Noyal Nakarmi
      </span>
      <ul className="hidden md:flex gap-6">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <button
              className={`transition-colors text-base px-3 py-1 rounded-lg font-medium ${
                active === link.to
                  ? "bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => {
                setActive(link.to);
                scrollToSection(link.to);
              }}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      {/* mobile: hamburger */}
      <div className="flex md:hidden items-center">
        <MobileNav />
      </div>
    </nav>
  );
};

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open navigation menu"
      >
        <span className="block h-0.5 w-6 bg-white mb-1"></span>
        <span className="block h-0.5 w-6 bg-white mb-1"></span>
        <span className="block h-0.5 w-6 bg-white"></span>
      </button>
      {open && (
        <ul className="absolute right-6 top-14 bg-[#23243e] rounded-lg w-40 py-2 drop-shadow-lg flex flex-col gap-2 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-white text-gray-200 rounded"
                onClick={() => {
                  setOpen(false);
                  scrollToSection(link.to);
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Navbar;
