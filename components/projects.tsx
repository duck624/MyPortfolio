"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Rocket } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "ProductManagement",
      image: "/images/blog.png",
      github: "https://github.com/duck624/ProductManagement",
      demo: "https://toilamerp.com/blogs",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "UserManagement",
      image: "/images/team-tasker.png",
      github: "https://github.com/duck624/UserManagement",
      demo: "https://team-tasker-frontend.vercel.app",
      gradient: "from-blue-500 to-cyan-500",
    },
    // {
    //   title: "LMS (Learning Management System)",
    //   image: "/images/lms.png",
    //   github: "https://github.com/dlgkiet/SOA_Final",
    //   demo: "https://soa-final.onrender.com",
    //   gradient: "from-purple-500 to-pink-500",
    // },
    // {
    //   title: "Fcomputer",
    //   image: "/images/fcomputer.png",
    //   github: "https://github.com/lpta2302/final_project_web",
    //   demo: "",
    //   gradient: "from-green-500 to-emerald-500",
    // },
  ];

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

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-slate-800/50"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50">
            <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 text-sm sm:text-base font-medium">
              {t("My Work")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            {t("Featured Projects")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t("A showcase of my recent work and contributions")}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group w-full sm:w-[400px] max-w-sm"
            >
              <Card className="relative overflow-hidden h-full border border-slate-300 dark:border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-700 dark:to-slate-800/40 hover:-translate-y-4 hover:-translate-x-2 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-slate-800/50 dark:to-transparent"></div>
                <CardContent className="relative p-6 sm:p-8 h-full flex flex-col">
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/600x340/64748b/ffffff?text=${encodeURIComponent(
                          project.title
                        )}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center">
                      {project.title}
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex-1"
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full text-sm sm:text-base font-medium h-11 sm:h-12 border-2 hover:border-slate-400 dark:hover:border-slate-500"
                        >
                          <Github className="h-5 w-5 mr-3" />
                          {t("Code")}
                        </Button>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex-1"
                      >
                        <Button
                          disabled={project.demo === ""}
                          size="lg"
                          className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-medium h-11 sm:h-12`}
                        >
                          <ExternalLink className="h-5 w-5 mr-3" />
                          {t("Demo")}
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}