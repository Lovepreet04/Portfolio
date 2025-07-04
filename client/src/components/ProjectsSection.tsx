import { motion } from "framer-motion";
import { ExternalLink, Github, Plus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import texteditor from '/text-editor.png';
import ems from '/EMS.png';
import fms from '/fms.png';
import cwl from '/codewithlovepreet.jpeg';
import beauticam from '/beauticam.png';




export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  const projects = [
    {
      id: 1,
      title: "Farm Management System",
      description: "Automated FMS using OpenCV and YOLOv8 for real-time object detection and plant disease identification",
      image: fms,
      tags: ["Python", "OpenCV", "YOLOv8", "Tkinter"],
      category: "AI/ML",
      color: "from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]",
      github: "https://github.com/Lovepreet04/Farm-Management-System-By-object-Detection",
      // demo: ""
    },
    {
      id: 2,
      title: "BeautiCam",
      description: "Dynamic web application for image and video manipulation with real-time filters and live previews",
      image: beauticam,
      tags: ["React.js", "Django", "OpenCV", "Python"],
      category: "Web App",
      color: "from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]",
      github: "https://github.com/Lovepreet04/Image-Video-Manipulation-Website-BeautiCam",
      // demo: "#"
    },
    {
      id: 3,
      title: "Examination Management System",
      description: "Full-stack web application for automated exam scheduling, grading, and AI-based proctoring",
      image: ems,
      tags: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
      category: "Full Stack",
      color: "from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]",
      github: "https://github.com/Lovepreet04/Examination-Management-System",
      // demo: "#"
    },
    {
      id: 4,
      title: "Text Editor Application",
      description: "Feature-rich text editor with syntax highlighting, search/replace functionality, and file management",
      image: texteditor,
      tags: ["Java", "Swing", "GUI"],
      category: "Desktop App",
      color: "from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]",
      github: "https://github.com/Lovepreet04/Text-Editor",
      // demo: "#"
    },
    {
      id: 5,
      title: "CodeWithLovepreet",
      description: "Fully responsive portfolio website showcasing projects, skills, and professional expertise",
      image: cwl,
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Portfolio",
      color: "from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]",
      github: "https://github.com/Lovepreet04/CodeWithLovepreet",
      // demo: "#"
    }
  ];

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
    <section id="projects" className="relative z-10 py-12 sm:py-16 md:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-base xs:text-lg max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
            Explore my latest work in web development, AI/ML, and software engineering
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card glass-morphism rounded-xl overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-36 xs:h-44 sm:h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r ${project.color} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                  {project.category}
                </div>
              </div>
              
              <div className="p-4 xs:p-6">
                <h3 className="text-lg xs:text-xl font-bold mb-1 xs:mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs xs:text-sm mb-2 xs:mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 xs:gap-2 mb-2 xs:mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-3">
                  <motion.a
                    // href={project.demo}
                    className="flex-1 bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)] text-center py-2 rounded-lg font-medium transition-all duration-300 text-xs xs:text-sm flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Details
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-cyan-400 rounded-lg transition-colors duration-300 flex items-center justify-center text-xs xs:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* More Projects Coming Soon */}
          <motion.div
            className="project-card glass-morphism rounded-xl overflow-hidden flex items-center justify-center min-h-[200px] xs:min-h-[300px] sm:min-h-[400px] border-2 border-dashed border-gray-600"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-4">
                <Plus className="w-6 h-6 xs:w-8 xs:h-8 text-white" />
              </div>
              <h3 className="text-lg xs:text-xl font-bold mb-1 xs:mb-2">More Projects Coming Soon</h3>
              <p className="text-gray-400 text-xs xs:text-sm">
                Stay tuned for more exciting projects in AI, web development, and mobile apps
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
