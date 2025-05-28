"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Users,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-slate-800/50"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50">
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
              Academic Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            {t("Education")}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
            {t("Academic background and achievements")}
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-slate-900/50 border-0 shadow-2xl shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
            <CardContent className="relative p-6 md:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <motion.div
                  className="relative group flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500">
                    <GraduationCap className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xs">🎓</span>
                  </div>
                </motion.div>

                <div className="flex-1 space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                      {t("Bachelor's Degree in Software Engineering")}
                    </h3>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      2022 – Present
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t("University of Economics Ho Chi Minh City (UEH)")}
                  </h4>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Program Details */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        {t("Program Details")}
                      </h5>
                      <ul className="space-y-2 text-sm sm:text-base">
                        {[t("Major: Software Engineering"), t("Focus: Fullstack Software Development"), t("Status: Undergraduate")].map((item, idx) => (
                          <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Academic Performance */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                        {t("Academic Performance")}
                      </h5>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200/50 dark:border-yellow-700/50">
                        <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                          {t("GPA: 3.62 / 4.0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications & Awards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Certifications */}
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"></div>
            <CardContent className="relative p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Award className="h-8 w-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t("Certifications")}
                </h3>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">
                    TOEIC English Certificate
                  </span>
                  <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
                    845/990
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards */}
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
            <CardContent className="relative p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Users className="h-8 w-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t("Awards")}</h3>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="space-y-2">
                  <div className="font-semibold text-white">
                    UEH Academic Encouragement Scholarship
                  </div>
                  <div className="text-sm text-slate-300">August 2023</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
