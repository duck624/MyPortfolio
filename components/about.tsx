"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Target, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Code className="h-7 w-7" />,
      title: t("Back-end Development"),
      description: t(
        "Worked on backend development in projects using modern technologies such as Java core, Spring boot, HQL and JPA."
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: t("Problem Solving"),
      description: t(
        "Strong analytical skills with a focus on delivering high-quality software solutions and efficient problem-solving approaches."
      ),
      gradient: "from-purple-500 to-pink-500",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: t("Team Collaboration"),
      description: t(
        "Excellent teamwork and communication skills, with experience working in collaborative environments and agile methodologies."
      ),
      gradient: "from-green-500 to-emerald-500",
      bgGradient:
        "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-48 h-48 bg-yellow-300/5 rounded-full blur-2xl rotate-45"></div>
        <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/4 w-40 h-40 bg-red-300/5 rounded-full blur-2xl rotate-90"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 h-32 bg-green-300/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 shadow-md">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
              Who I Am
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            {t("About Me")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Passionate information technology student with hands-on skills in web development, eager to contribute to innovative projects and grow in the tech industry."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 h-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex"
            >
              <Card
                className={`group relative overflow-hidden border-0 shadow-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br ${feature.bgGradient} w-full h-full flex flex-col`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-slate-800/50 dark:to-transparent z-0"></div>
                <CardContent className="relative p-10 text-center flex flex-col justify-between h-full min-h-[400px]">
                  <div className="space-y-8 flex-grow flex flex-col justify-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto text-white shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 flex-shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-grow flex items-center justify-center text-center">
                      {feature.description}
                    </p>
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