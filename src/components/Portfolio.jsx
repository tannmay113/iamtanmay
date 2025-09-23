import React from "react";
import { motion } from "framer-motion";
import PortfolioExperiences from "../assets/DB/Portfolio/Portfolio.js";
import { FaRegPaperPlane } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto min-h-screen overflow-x-hidden">
      <h2 className="md:text-3xl text-center dark:text-slate-50 font-bold mb-8 text-gray-600 ">
        PORTFOLIO - EXPERIENCES
      </h2>

      {/* Line left */}
      <div className="relative md:border-l-2 md:border-red-400 dark:border-white md:pl-6 space-y-10">
        {/* First card */}
        <motion.div
          className="relative md:pl-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Date Dot */}
          <div className="hidden md:flex md:absolute -left-[1.8rem] top-2 w-2 h-2 bg-red-500 rounded-full"></div>

          {/* Date */}
          <div className="text-gray-500 dark:text-white italic text-sm">
            Now
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800 dark:to-slate-700  p-5 rounded-md shadow-md flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-xl font-medium dark:text-white">
                Currently looking for an opportunity as a Software Development
                Engineer
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 whitespace-pre-line">
                <span className="text-red-500 italic ">
                  <a
                    className="hover:underline cursor-pointer"
                    href="mailto:ktanmay1130@gmail.com"
                  >
                    CONTECT ME .
                  </a>
                </span>{" "}
                I will answer you within ~24 hours.
              </p>
              <p className="flex flex-col mt-3 dark:text-white italic font-medium">
                <span>✉️ ktanmay1130@gmail.com</span>
                <span>📞 +91 6202907277</span>
              </p>
            </div>

            <a
              href="mailto:ktanmay1130@gmail.com"
              className=" flex items-center gap-2 w-fit text-white text-sm bg-green-600 hover:bg-green-700 px-4 py-1 rounded-md transition-all duration-300 "
            >
              <FaRegPaperPlane />
              <span>Hire me</span>
            </a>
          </div>
        </motion.div>
        {/* First card End*/}

        {PortfolioExperiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative md:pl-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.2 }}
            viewport={{ once: false }}
          >
            {/* Date Dot */}
            <div className="hidden md:flex md:absolute -left-[1.8rem] top-2 w-2 h-2 bg-red-500 rounded-full"></div>

            {/* Date */}
            <div className="text-gray-500 dark:text-white italic text-sm">
              {exp.date}
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800 dark:to-slate-600 p-5 rounded-md shadow-md flex flex-col lg:flex-row justify-between gap-6 items-start max-lg:items-center">
              {/* Text */}
              <div className="flex-1">
                <div className="group hover:text-red-500">
                  <h3 className="text-2xl font-medium dark:text-gray-50 group-hover:text-red-600">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-medium text-[#4CAF50] group-hover:text-red-600">
                    {exp.role}
                  </p>
                </div>

                <ul className="list-disc ml-4">
                  {exp.description &&
                    exp.description.map((val, ind) => (
                      <li
                        key={ind}
                        className="text-sm font-medium text-gray-600 dark:text-gray-100 mt-2 mb-3 whitespace-pre-line"
                      >
                        {val}
                      </li>
                    ))}
                </ul>

                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 hover:underline"
                  >
                    More details
                  </a>
                )}

                <h1 className="mt-5 dark:text-white">TECHNOLOGY</h1>
                <div className="flex flex-wrap gap-2">
                  {exp.technology &&
                    exp.technology.map((val, ind) => (
                      <div
                        key={ind}
                        className="mt-3 px-4 py-1 font-poppins font-thin text-sm bg-green-500 text-white rounded-sm hover:bg-red-700 hover:underline"
                      >
                        {val}
                      </div>
                    ))}
                </div>
              </div>

              {/* Logo */}
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-16 w-80 object-contain"
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
