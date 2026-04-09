import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaRegPaperPlane } from "react-icons/fa";
import allProjects from '../../assets/DB/Project/project';
import { motion, AnimatePresence } from "framer-motion";

const ProjectSection = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  const filterButtons = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Apps" },
    { key: "mobile", label: "Mobile Apps" },
  ];

  return (
    <section className="w-full min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Intro Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-modern text-gray-800 dark:text-gray-100 mb-8 px-5 sm:px-8 py-6 sm:py-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 tracking-tight">
          🚀 <span className="text-accent dark:text-accent-light">Projects</span>
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <p className="text-xl sm:text-2xl font-semibold">Welcome to my online project portfolio.</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Here are some of the projects I've worked on — ranging from
            responsive web apps to dynamic full-stack applications. Each one
            reflects my skills, creativity, and dedication to building
            meaningful digital experiences.
          </p>
          <p className="text-sm sm:text-base font-medium">
            ➡️ If you like my work, please don't forget to give a ⭐ to my{" "}
            <a href="https://github.com/itanmay728" className="text-accent dark:text-accent-light hover:underline font-semibold">
              GitHub repositories
            </a>
            . Your support means a lot — it helps me stay motivated, keep learning, and continue building even better projects!
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-1">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200">
              Want some help building your software?
            </p>
            <a
              href="mailto:ktanmay1130@gmail.com"
              className="flex items-center gap-2 w-fit text-white text-sm font-medium bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <FaRegPaperPlane className="h-3.5 w-3.5" />
              <span>Hire me</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Filter + Cards Section */}
      <div className="card-modern p-4 sm:p-6">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === btn.key
                  ? "bg-accent text-white shadow-glow"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-accent-soft dark:hover:bg-accent/10 hover:text-accent dark:hover:text-accent-light"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, idx) => (
              <motion.div
                key={proj.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <ProjectCard
                  index={idx}
                  title={proj.title}
                  description={proj.description}
                  image={proj.image}
                  githubLink={proj.githubLink}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
