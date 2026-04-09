import React from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiSpring,
  SiOracle 
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
  { name: "MySQL", icon: <GrMysql className="text-cyan-600" /> },
  { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="text-zinc-800 dark:text-zinc-300" /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section className="card-modern w-full py-10 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100 tracking-tight">
        🛠 Skills
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700/50 p-4 rounded-xl flex flex-col items-center justify-center gap-2 cursor-default hover:shadow-card-hover hover:border-accent/30 dark:hover:border-accent-light/30 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
