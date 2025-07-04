import { motion } from "framer-motion";
import { GraduationCap, Heart, Trophy, Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import profilePic from '/profile.jpg';



export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative z-10 py-12 sm:py-16 md:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Profile Card */}
          <motion.div variants={itemVariants}>
            <div className="glass-morphism rounded-2xl p-10 text-center">
              <div className="relative mx-auto w-40 h-40 mb-10">
                <motion.img
                  src={profilePic}
                  alt="Lovepreet Singh Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-transparent bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  // className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] opacity-20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Lovepreet Singh</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dynamic B.Tech CSE student with a 9.2 CGPA, passionate about transforming innovative ideas into impactful software solutions. 
                I specialize in full-stack development and AI/ML applications, constantly exploring new technologies to solve real-world problems.
              </p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="https://linkedin.com/in/Lovepreet04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-blue-500 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/Lovepreet04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:Eng.Lovepreet@gmail.com"
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#mail-gradient)" strokeWidth="2">
                    <defs>
                      <linearGradient id="mail-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="hsl(217,91%,60%)" />
                        <stop offset="1" stopColor="hsl(188,100%,47%)" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="url(#mail-gradient)" strokeWidth="2" />
                    <path d="M3 7l9 6 9-6" stroke="url(#mail-gradient)" strokeWidth="2" />
                  </svg>
                </motion.a>
                <motion.a
                  href="http://www.youtube.com/@SinghCodeCraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-red-600 hover:text-red-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.2 0 12 0 12s0 3.8.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.621 20.5 12 20.5 12 20.5s7.379 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.8 24 12 24 12s0-3.8-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Education & Interests */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {/* Education Card */}
            <motion.div
              className="glass-morphism rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-cyan-400">B.Tech Computer Science & Engineering</h5>
                  <p className="text-gray-400 text-sm">Dev Bhoomi Uttarakhand University</p>
                  <p className="text-gray-400 text-sm">CGPA: 9.2/10 | 2022-2026</p>
                </div>
              </div>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              className="glass-morphism rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Interests</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm">AI/ML</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm">Web Dev</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm">Cloud Computing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm">Mobile Apps</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              className="glass-morphism rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Achievements</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-full" />
                  <span>Qualified GATE 2025</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-full" />
                  <span>Won Technical Treasure Hunt</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-full" />
                  <span>Organized 3-day Tech Event</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
