import React from "react";
import { motion } from "framer-motion";
import TanmayImg from "../../assets/images/imgTanmay.jpg";
import { resumeLink } from '../../assets/DB/Links.js';

// icons
import {
  FileText,
  CircleArrowRight,
  SquareDashedMousePointer,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="card-modern flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-6 sm:p-8 lg:p-10"
    >
      {/* Left Content */}
      <div className="w-full lg:w-2/3 flex flex-col gap-5 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tanmay Kumar
          </span>{" "}
          👋
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a passionate full-stack developer who enjoys building clean, fast,
          and user-friendly web apps. Whether it's front-end finesse or back-end
          logic, I love writing code that makes a difference.
        </p>

        <div className="border-l-4 border-accent dark:border-accent-light pl-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
            What I do
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          I have more than 2 years' of experience working as a software developer. Below is a quick overview of my
          main technical skill sets and technologies I use.
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-gray-400 dark:text-gray-500 text-sm text-center lg:text-start">
            Check out my portfolio, projects, and resume.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-white px-4 py-2.5 text-sm font-medium bg-accent hover:bg-accent-hover rounded-xl transition-all duration-200 hover:shadow-glow"
            >
              <CircleArrowRight className="w-4 h-4" />
              View Portfolio
            </Link>
            <Link
              to="/project"
              className="flex items-center gap-2 text-white px-4 py-2.5 text-sm font-medium bg-accent hover:bg-accent-hover rounded-xl transition-all duration-200 hover:shadow-glow"
            >
              <SquareDashedMousePointer className="w-4 h-4" />
              View Projects
            </Link>
            <a
              href={resumeLink}
              target="_blank"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 px-4 py-2.5 text-sm font-medium bg-gray-100 dark:bg-slate-700 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Animated Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
        className="relative shrink-0"
      >
        <div className="absolute -inset-2 bg-gradient-to-br from-accent via-purple-500 to-pink-500 rounded-full opacity-40 blur-lg"></div>
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-xl">
          <img
            src={TanmayImg}
            alt="Tanmay Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
