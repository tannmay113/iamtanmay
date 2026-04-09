import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science Engineering",
      institution: "Maharshi Dayanand University",
      year: "2019 - 2023",
    },
    {
      degree: "Intermediate (XI-XII)",
      branch: "Science Stream",
      institution: "Nav Jeewan Academy Sr. Sec. School",
      year: "2017 - 2019",
    },
  ];

  return (
    <section className="card-modern w-full px-4 py-8 sm:px-8 sm:py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100 tracking-tight">
        🎓 Education
      </h2>

      <div className="flex flex-col gap-5 max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-gray-50 dark:bg-slate-800/60 border-l-4 border-accent dark:border-accent-light rounded-xl hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-center justify-center w-11 h-11 bg-accent-soft dark:bg-accent/10 text-accent dark:text-accent-light rounded-xl shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>

            <div className="flex flex-col gap-0.5 min-w-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{edu.branch}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
              <span className="text-xs text-accent dark:text-accent-light font-medium mt-1">{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
