import React from "react";
import { motion } from "framer-motion";
import PortfolioExperiences from "../assets/DB/Portfolio/Portfolio.js";
import { FaRegPaperPlane } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto min-h-screen overflow-x-hidden">
      <motion.h2
        className="text-2xl sm:text-3xl text-center font-bold mb-10 text-gray-800 dark:text-gray-100 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio{" "}
        <span className="text-accent dark:text-accent-light">Experiences</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative md:border-l-2 md:border-accent/30 dark:md:border-accent-light/20 md:pl-8 space-y-8">
        {/* First card - "Looking for opportunity" */}
        <motion.div
          className="relative md:pl-2"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Timeline Dot */}
          <div className="hidden md:flex md:absolute -left-[2.55rem] top-3 w-3 h-3 bg-accent dark:bg-accent-light rounded-full animate-pulse-dot ring-4 ring-accent-soft dark:ring-accent/20"></div>

          {/* Date */}
          <div className="text-xs font-medium text-accent dark:text-accent-light uppercase tracking-wider mb-2">
            Now
          </div>

          {/* Content */}
          <div className="card-modern p-5 sm:p-6 flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 leading-snug">
                Currently looking for an opportunity as a Software Development
                Engineer
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <a
                  className="text-accent dark:text-accent-light hover:underline cursor-pointer font-medium"
                  href="mailto:ktanmay1130@gmail.com"
                >
                  CONTACT ME
                </a>{" "}
                — I will answer you within ~24 hours.
              </p>
              <div className="flex flex-col mt-3 text-sm text-gray-600 dark:text-gray-300 gap-1">
                <span>✉️ ktanmay1130@gmail.com</span>
                <span>📞 +91 9217479333</span>
              </div>
            </div>

            <a
              href="mailto:ktanmay1130@gmail.com"
              className="flex items-center gap-2 whitespace-nowrap text-white text-sm font-medium bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <FaRegPaperPlane className="h-3.5 w-3.5" />
              <span>Hire me</span>
            </a>
          </div>
        </motion.div>

        {/* Experience Cards */}
        {PortfolioExperiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative md:pl-2"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex md:absolute -left-[2.55rem] top-3 w-3 h-3 bg-accent dark:bg-accent-light rounded-full ring-4 ring-accent-soft dark:ring-accent/20"></div>

            {/* Date */}
            <div className="text-xs font-medium text-accent dark:text-accent-light uppercase tracking-wider mb-2">
              {exp.date}
            </div>

            {/* Content Card */}
            <div className="card-modern p-5 sm:p-6 flex flex-col lg:flex-row justify-between gap-6 items-start max-lg:items-center">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="group">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-200">
                    {exp.company}
                  </h3>
                  <p className="text-base font-medium text-emerald-500 dark:text-emerald-400 mt-0.5">
                    {exp.role}
                  </p>
                </div>

                <ul className="list-none mt-4 space-y-2">
                  {exp.description &&
                    exp.description.map((val, ind) => (
                      <li
                        key={ind}
                        className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:bg-accent/40 dark:before:bg-accent-light/40 before:rounded-full"
                      >
                        {val}
                      </li>
                    ))}
                </ul>

                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 hover:shadow-glow"
                  >
                    More details →
                  </a>
                )}

                <div className="mt-5">
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                    Technology
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technology &&
                      exp.technology.map((val, ind) =>
                        val ? (
                          <span key={ind} className="pill">
                            {val}
                          </span>
                        ) : null
                      )}
                  </div>
                </div>
              </div>

              {/* Logo */}
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-14 w-auto max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 shrink-0"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
