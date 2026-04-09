import React from "react";
import { FaCode, FaSmile, FaMugHot, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const funFacts = [
  {
    icon: <FaCode className="text-accent dark:text-accent-light text-2xl sm:text-3xl" />,
    title: "10,000+ Lines",
    description: "Of code written and counting!",
  },
  {
    icon: <FaLaptopCode className="text-accent dark:text-accent-light text-2xl sm:text-3xl" />,
    title: "50+ Projects",
    description: "Frontend, backend, and full-stack.",
  },
  {
    icon: <FaSmile className="text-amber-400 text-2xl sm:text-3xl" />,
    title: "100+ DSA Solved",
    description: "❤️ Love to code",
  },
  {
    icon: <FaMugHot className="text-orange-400 text-2xl sm:text-3xl" />,
    title: "500+ Coffees",
    description: "Fuel behind every great feature ☕",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FunFactsSection() {
  return (
    <section className="card-modern py-10 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 tracking-tight">
        🎉 Fun Facts
      </h2>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {funFacts.map((fact, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-gray-50 dark:bg-slate-800/60 rounded-xl p-5 flex flex-col items-center justify-center text-center border border-gray-100 dark:border-slate-700/50 hover:shadow-card-hover hover:border-accent/30 dark:hover:border-accent-light/30 transition-all duration-300 cursor-default"
          >
            <div className="mb-3 p-3 rounded-xl bg-accent-soft dark:bg-accent/10">
              {fact.icon}
            </div>
            <h3 className="text-gray-800 dark:text-gray-100 text-sm sm:text-base font-semibold mb-1">
              {fact.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              {fact.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
