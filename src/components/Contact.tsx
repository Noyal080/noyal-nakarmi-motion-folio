
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/noyalnakarmi"
  },
  {
    label: "GitHub",
    icon: Github,
    url: "https://github.com/noyalnakarmi"
  },
  {
    label: "Email",
    icon: Mail,
    url: "mailto:noyalnakarmi@gmail.com"
  }
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="relative px-4 py-24 max-w-3xl mx-auto" id="contact">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-10 bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 48 }}
      >
        Contact Me
      </motion.h2>
      <div className="bg-gradient-to-br from-[#23243ecc] to-[#171727cc] border border-accent-violet/30 rounded-xl shadow-lg p-8 flex flex-col gap-6">
        {!submitted ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 font-semibold text-sm" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="bg-[#171727] border border-gray-700 rounded px-3 py-2 text-white text-base focus:outline-none focus:border-accent-violet bg-opacity-80"
                required
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 font-semibold text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="bg-[#171727] border border-gray-700 rounded px-3 py-2 text-white text-base focus:outline-none focus:border-accent-blue bg-opacity-80"
                required
                placeholder="your@email.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-300 font-semibold text-sm" htmlFor="msg">
                Message
              </label>
              <textarea
                id="msg"
                className="bg-[#171727] border border-gray-700 rounded px-3 py-2 text-white text-base focus:outline-none focus:border-accent-violet resize-none bg-opacity-80 h-24"
                required
                placeholder="Hello Noyal, let's connect..."
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-1">
              <button
                type="submit"
                className="bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-2 rounded font-semibold text-white shadow hover:scale-105 transition-transform"
              >
                Send
              </button>
              <a
                className="px-6 py-2 rounded border border-accent-blue text-accent-blue font-semibold hover:bg-accent-blue hover:text-white transition-colors text-center"
                href="#"
                download
                aria-label="Download CV"
                title="Download CV"
              >
                Download CV
              </a>
            </div>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-accent-blue font-bold text-lg">Thank you! Your message has been submitted.</span>
          </motion.div>
        )}
        <div className="flex gap-6 mt-4 justify-center">
          {socials.map(({ label, icon: Icon, url }) => (
            <motion.a
              whileHover={{ scale: 1.16, color: "#647DEE" }}
              href={url}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-gray-300 hover:text-accent-blue transition-colors text-lg"
            >
              <Icon size={26} />
              <span className="hidden sm:inline">{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
