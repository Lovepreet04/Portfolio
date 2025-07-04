import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { StarBackground } from "./StarBackground";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <StarBackground />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white">Hi, I'm</span>
            <span className="block text-gradient">
              Lovepreet Singh
            </span>
          </motion.h1>

          <motion.p
            className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>

          <motion.p
            className="text-sm xs:text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            B.Tech CSE student passionate about turning ideas into impactful software. 
            Skilled in Python, React, Django, and Machine Learning.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto text-sm xs:text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto text-sm xs:text-base border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <ChevronDown className="w-6 h-6 text-gray-400 mt-2 mx-auto" />
      </motion.div>
    </section>
  );
}
