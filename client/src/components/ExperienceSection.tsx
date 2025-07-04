import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Cloud, Award, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const resume = "/Resume.pdf";



export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  const timelineItems = [
    {
      id: 1,
      type: "education",
      title: "B.Tech Computer Science",
      organization: "Dev Bhoomi Uttarakhand University",
      period: "2022 - 2026",
      description: "CGPA: 9.2/10",
      details: "Focus on algorithms, data structures, web development, and AI/ML applications.",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-cyan-600",
      side: "left"
    },
    {
      id: 2,
      type: "internship",
      title: "Frontend Developer Intern",
      organization: "TechOctaNet Services PVT LTD",
      period: "Jun - Aug 2024",
      description: "Remote",
      details: [
        "Developed responsive web pages using HTML5, CSS3, and JavaScript",
        "Automated daily test result delivery, improving team efficiency by 10%",
        "Ensured cross-browser compatibility and optimal performance"
      ],
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "from-green-500 to-teal-600",
      side: "right"
    },
    {
      id: 3,
      type: "internship",
      title: "Software Developer Intern",
      organization: "Prodigy InfoTech",
      period: "May - Jun 2024",
      description: "Remote",
      details: [
        "Built Python-based algorithms, optimizing performance by 15%",
        "Collaborated using Git, enhancing code quality for 100+ beta testers",
        "Developed user-friendly interfaces and data analysis tools"
      ],
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-600",
      side: "left"
    },
    {
      id: 4,
      type: "certification",
      title: "Google Cloud Computing",
      organization: "Google Cloud Skills Boost",
      period: "Feb - May 2024",
      description: "Cloud Architecture & Management",
      details: "Developed expertise in cloud architecture, VMs, load balancing, and application management.",
      icon: <Cloud className="w-6 h-6 text-white" />,
      color: "from-yellow-500 to-orange-600",
      side: "right"
    },
    {
      id: 5,
      type: "education",
      title: "12th PCM + Computer Science",
      organization: "Universal Convent Senior Secondary School",
      period: "June 2021",
      description: "CBSE: 91%",
      details: "Haldwani, Uttarakhand",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-purple-600",
      side: "left"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const timelineItemVariants = {
    hidden: (side: string) => ({
      opacity: 0,
      x: side === "left" ? -100 : 100,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume from API
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Lovepreet_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="relative z-10 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience & Resume</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            My journey through education, internships, and professional development
          </p>
          <motion.button
            onClick={handleDownloadResume}
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] h-full"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />

          {/* Timeline Items */}
          <motion.div
            className="space-y-8 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={
                  `relative flex items-center ` +
                  `sm:${item.side === "left" ? "justify-start pr-1/2" : "justify-end pl-1/2"}`
                }
                variants={timelineItemVariants}
                custom={item.side}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-10 hidden sm:block">
                  <motion.div
                    className={`w-4 h-4 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-full border-4 border-background shadow-lg z-10`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      delay: index * 0.2 + 0.3,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                {/* Content - Alternating sides on desktop, full width on mobile */}
                <div className={
                  `w-full flex ` +
                  `sm:${item.side === "left" ? "justify-start pr-1/2" : "justify-end pl-1/2"}`
                }>
                  <div className={
                    `w-full sm:w-5/12 ` +
                    `${item.side === "left" ? "sm:pr-8" : "sm:pl-8"}`
                  }>
                    <motion.div
                      className="glass-morphism rounded-xl p-4 xs:p-6 relative timeline-card"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Arrow pointing to timeline (hide on mobile) */}
                      <div className={`hidden sm:block absolute top-6 ${
                        item.side === "left" 
                          ? "right-0 transform translate-x-1/2" 
                          : "left-0 transform -translate-x-1/2"
                      } w-0 h-0 border-8 ${
                        item.side === "left"
                          ? "border-l-white/10 border-r-transparent border-t-transparent border-b-transparent"
                          : "border-r-white/10 border-l-transparent border-t-transparent border-b-transparent"
                      }`} />

                      <div className="flex items-center mb-3 xs:mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] rounded-lg flex items-center justify-center mr-4`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-base xs:text-lg font-bold">{item.title}</h3>
                          <p className="text-cyan-400 text-xs xs:text-sm font-medium">{item.organization}</p>
                        </div>
                      </div>
                      
                      <div className="mb-2 xs:mb-3">
                        <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-2 xs:px-3 py-1 rounded-full text-xs font-medium">
                          {item.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-2 xs:mb-3 text-xs xs:text-sm">{item.description}</p>
                      
                      {Array.isArray(item.details) ? (
                        <ul className="text-xs xs:text-sm space-y-1 text-gray-300">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-cyan-400 mr-2">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs xs:text-sm text-gray-300">{item.details}</p>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
