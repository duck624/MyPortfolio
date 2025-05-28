"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Zap } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Skills() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Calculate scroll width dynamically for animation
  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2; // Half because of duplication
      setScrollWidth(totalWidth);
    }
  }, []);

  const skillCategories = [
    {
      title: t("Frontend"),
      icon: <Code className="h-5 sm:h-6 w-5 sm:w-6" />,
      skills: "ReactJS, TailwindCSS, UI/UX",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      title: t("Backend"),
      icon: <Server className="h-5 sm:h-6 w-5 sm:w-6" />,
      skills: "Laravel, REST API, C#",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      title: t("Database"),
      icon: <Database className="h-5 sm:h-6 w-5 sm:w-6" />,
      skills: "SQL Server, MySQL, PostgreSQL",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
  ];

  const techStack = [
    { name: "HTML", icon: "🌐", color: "#E34F26" },
    { name: "CSS", icon: "🎨", color: "#1572B6" },
    { name: "JavaScript", icon: "📜", color: "#F7DF1E" },
    { name: "TypeScript", icon: "📘", color: "#3178C6" },
    { name: "ReactJS", icon: "⚛️", color: "#61DAFB" },
    { name: "TailwindCSS", icon: "💨", color: "#06B6D4" },
    { name: "PHP", icon: "🐘", color: "#777BB4" },
    { name: "Laravel", icon: "🔥", color: "#FF2D20" },
    { name: "C#", icon: "🔷", color: "#239120" },
    { name: "SQL", icon: "🗄️", color: "#4479A1" },
    { name: "Git", icon: "🔀", color: "#F05032" },
    { name: "NodeJS", icon: "🟢", color: "#339933" },
    { name: "Figma", icon: "🖌️", color: "#F24E1E" },
  ];

  // Duplicate the tech stack for seamless looping
  const duplicatedTechStack = [...techStack, ...techStack];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 font-semibold">
              {t("What I Know")}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            {t("Skills & Expertise")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Skill Categories */}
          <div className="space-y-4 sm:space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10 rounded-lg`}
                  ></div>
                  <CardContent className="relative p-4 sm:p-6 bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center text-white shadow-md`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {category.skills}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Tech Stack Animation */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-600 dark:text-slate-300 ">
                Tech Stack
              </h3>
            </div>

            <div className="relative overflow-hidden" ref={containerRef}>
              <motion.div
                className="flex space-x-4 sm:space-x-6 py-6"
                animate={{
                  x: [0, -scrollWidth],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTechStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center border border-white/90"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <span className="text-xl sm:text-2xl mb-1 sm:mb-2">
                        {tech.icon}
                      </span>
                      <span className="text-xs sm:text-sm text-white font-medium text-center px-1">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
