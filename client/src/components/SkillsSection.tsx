import { motion } from "framer-motion";
import { Code, Globe, Brain, Database, Laptop, Server, Bot } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimateSkills(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const skillBarGradient = "bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]";

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-white" />,
      color: skillBarGradient,
      skills: [
        { name: "Python", level: 90, color: skillBarGradient },
        { name: "JavaScript", level: 70, color: skillBarGradient },
        { name: "Java", level: 85, color: skillBarGradient },
        { name: "C", level: 88, color: skillBarGradient }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5 text-white" />,
      color: skillBarGradient,
      skills: [
        { name: "React.js", level: 85, color: skillBarGradient },
        { name: "Django", level: 82, color: skillBarGradient },
        { name: "Node.js", level: 80, color: skillBarGradient },
        { name: "HTML5/CSS3", level: 95, color: skillBarGradient }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-5 h-5 text-white" />,
      color: skillBarGradient,
      skills: [
        { name: "OpenCV", level: 87, color: skillBarGradient },
        { name: "TensorFlow", level: 80, color: skillBarGradient },
        { name: "Pandas/NumPy", level: 90, color: skillBarGradient },
        { name: "YOLOv8", level: 82, color: skillBarGradient }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-5 h-5 text-white" />,
      color: skillBarGradient,
      skills: [
        { name: "SQL", level: 88, color: skillBarGradient },
        { name: "MongoDB", level: 80, color: skillBarGradient },
        { name: "Google Cloud", level: 75, color: skillBarGradient },
        { name: "AWS", level: 70, color: skillBarGradient }
      ]
    }
  ];

  const specializationGradient = "bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,100%,47%)]";

  const specializations = [
    {
      title: "Frontend Development",
      icon: <Laptop className="w-8 h-8 text-white" />,
      color: specializationGradient,
      description: "React, HTML5, CSS3, JavaScript, Responsive Design"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-white" />,
      color: specializationGradient,
      description: "Django, Node.js, Express.js, RESTful APIs"
    },
    {
      title: "AI & Machine Learning",
      icon: <Bot className="w-8 h-8 text-white" />,
      color: specializationGradient,
      description: "OpenCV, YOLOv8, TensorFlow, Computer Vision"
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
    <section id="skills" className="relative z-10 py-12 sm:py-16 md:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-base xs:text-lg max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-8 flex items-center">
                <div className={`w-6 h-6 xs:w-8 xs:h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-2 xs:mr-3`}>
                  {category.icon}
                </div>
                {category.title}
              </h3>
              <div className="space-y-4 xs:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-1 xs:mb-2">
                      <span className="font-medium text-xs xs:text-sm">{skill.name}</span>
                      <span className="text-cyan-400 font-mono text-xs xs:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`skill-bar ${skill.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={animateSkills ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 2, delay: skillIndex * 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              className="glass-morphism rounded-xl p-4 xs:p-6 text-center hover:bg-white/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-10 h-10 xs:w-16 xs:h-16 ${spec.color} rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-4`}>
                {spec.icon}
              </div>
              <h4 className="text-base xs:text-xl font-bold mb-1 xs:mb-2">{spec.title}</h4>
              <p className="text-gray-400 text-xs xs:text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
