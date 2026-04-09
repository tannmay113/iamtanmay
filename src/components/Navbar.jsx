import React, { useState, useEffect } from "react";
import logo from "/logo.svg";
import tanmay_photo from "../assets/images/Tanmay_photo.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { resumeLink, gitHubLink, linkedInLink, leetCodeLink } from "../assets/DB/Links";
import { motion, AnimatePresence } from "framer-motion";

// lucide-icons
import {
  House,
  NotebookText,
  FolderGit2,
  FileSearch,
  Menu,
  X,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

const Navbar = () => {
  let [menu, setMenu] = useState("portfolio");

  // ! ================= Theme handled =================

  const savedTheme = localStorage.getItem('theme') || 'light';
  let [themeMode, setThemeMode] = useState(savedTheme);
  let handleThemeChange = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);

    // Save the theme to localStorage
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  //   Mobile isOpen
  let [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  //   css variables
  let li =
    "flex items-center gap-4 px-4 py-3 rounded-xl w-full text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200";

  let navLinkFn = ({ isActive }) => {
    return `flex items-center w-full rounded-xl transition-all duration-200 ${isActive
        ? `bg-accent-soft dark:bg-accent/10`
        : ""
      }`;
  };

  let iconCSS =
    "h-5 w-5 text-gray-400 cursor-pointer hover:text-accent dark:hover:text-accent-light transition-colors duration-200";

  let typing = (
    <TypeAnimation
      sequence={[
        "Back-End Developer",
        1000,
        "Front-End Developer",
        1000,
        "Full-Stack Developer",
        1000,
        "Software Engineer",
        1000,
        "",
        500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );

  return (
    <div className="p-5 flex flex-col justify-between xl:fixed bg-white/80 dark:bg-slate-900/95 backdrop-blur-xl border-r border-gray-100 dark:border-slate-800 h-full max-xl:min-w-full xl:w-96 xl:min-h-screen dark:text-white transition-colors duration-300">
      {/* Header: Logo + Theme Toggle */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Tanmay Kumar Logo" className="h-10 w-10" />
        </div>

        {/* Theme toggle - sun/moon button */}
        <button
          onClick={handleThemeChange}
          className="relative h-9 w-9 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-300 group"
          aria-label="Toggle dark mode"
        >
          {themeMode === "dark" ? (
            <Sun className="h-[18px] w-[18px] text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
          ) : (
            <Moon className="h-[18px] w-[18px] text-slate-500 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Profile Section */}
      <div className="mt-6 xl:mt-0">
        <div className="relative w-36 h-36 mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-br from-accent via-purple-500 to-pink-500 rounded-full opacity-60 blur-sm animate-pulse-dot"></div>
          <div className="relative overflow-hidden rounded-full w-36 h-36 ring-2 ring-white dark:ring-slate-800">
            <img
              className="object-cover w-full h-full"
              src={tanmay_photo}
              alt="Tanmay Kumar"
            />
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tanmay Kumar
          </h1>
          <p className="text-base text-center mt-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
            {typing}
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden xl:flex flex-col flex-1 mt-6">
        <nav className="flex flex-col mt-2">
          <ul className="flex flex-col gap-1 text-[15px] font-medium">
            {/* PORTFOLIO */}
            <NavLink
              onClick={() => setMenu("portfolio")}
              className={navLinkFn}
              to="/"
            >
              <li className={li}>
                <House className="h-[18px] w-[18px]" />
                <span>Portfolio</span>
              </li>
            </NavLink>

            {/* ABOUT */}
            <NavLink
              onClick={() => setMenu("about")}
              className={navLinkFn}
              to="/about"
            >
              <li className={li}>
                <NotebookText className="h-[18px] w-[18px]" />
                <span>About</span>
              </li>
            </NavLink>

            {/* PROJECT */}
            <NavLink
              onClick={() => setMenu("project")}
              className={navLinkFn}
              to="/project"
            >
              <li className={li}>
                <FolderGit2 className="h-[18px] w-[18px]" />
                <span>Projects</span>
              </li>
            </NavLink>

            {/* RESUME */}
            <a
              href={resumeLink}
              target="_blank"
              className="w-full"
            >
              <li className={`${li} text-accent dark:text-accent-light`}>
                <FileSearch className="h-[18px] w-[18px]" />
                <span>Resume</span>
              </li>
            </a>
          </ul>
        </nav>

        {/* Get in Touch */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-grow h-px bg-gray-200 dark:bg-slate-700"></div>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">
              Get in Touch
            </span>
            <div className="flex-grow h-px bg-gray-200 dark:bg-slate-700"></div>
          </div>

          <div className="mb-4">
            <ul className="flex justify-center items-center gap-3">
              {/* LinkedIn */}
              <li>
                <a
                  href={linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200 group"
                >
                  <FaLinkedinIn className="h-4 w-4 text-gray-500 group-hover:text-accent dark:text-gray-400 dark:group-hover:text-accent-light transition-colors" />
                </a>
              </li>

              {/* GitHub */}
              <li>
                <a
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200 group"
                >
                  <FaGithub className="h-4 w-4 text-gray-500 group-hover:text-accent dark:text-gray-400 dark:group-hover:text-accent-light transition-colors" />
                </a>
              </li>

              {/* LeetCode */}
              <li>
                <a
                  href={leetCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200 group"
                >
                  <SiLeetcode className="h-4 w-4 text-gray-500 group-hover:text-accent dark:text-gray-400 dark:group-hover:text-accent-light transition-colors" />
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:ktanmay1130@gmail.com"
                  className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200 group"
                >
                  <Mail className="h-4 w-4 text-gray-500 group-hover:text-accent dark:text-gray-400 dark:group-hover:text-accent-light transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          <div className="h-px bg-gray-200 dark:bg-slate-700 mb-4"></div>

          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            © 2026 Tanmay Kumar. All rights reserved.
          </p>
        </div>
      </div>

      {/* ------- Mobile ------- */}
      <div className="hidden max-xl:flex justify-between items-center mt-4 mb-2">
        {/* get in touch icons */}
        <div>
          <ul className="flex items-center gap-2">
            <li>
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200"
              >
                <FaLinkedinIn className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200"
              >
                <FaGithub className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href={leetCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200"
              >
                <SiLeetcode className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </a>
            </li>
            <li>
              <a
                href="mailto:ktanmay1130@gmail.com"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200"
              >
                <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger / X toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center h-10 w-10 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden xl:hidden"
          >
            <div className="h-px bg-gray-200 dark:bg-slate-700 mb-3"></div>
            <nav className="pb-2">
              <ul className="flex flex-col gap-1 text-[15px] font-medium">
                <NavLink
                  onClick={() => (setMenu("portfolio"), setIsOpen(false))}
                  className={navLinkFn}
                  to="/"
                >
                  <li className={`${li} justify-end`}>
                    <span>Portfolio</span>
                    <House className="h-[18px] w-[18px]" />
                  </li>
                </NavLink>

                <NavLink
                  onClick={() => (setMenu("about"), setIsOpen(false))}
                  className={navLinkFn}
                  to="/about"
                >
                  <li className={`${li} justify-end`}>
                    <span>About</span>
                    <NotebookText className="h-[18px] w-[18px]" />
                  </li>
                </NavLink>

                <NavLink
                  onClick={() => (setMenu("project"), setIsOpen(false))}
                  className={navLinkFn}
                  to="/project"
                >
                  <li className={`${li} justify-end`}>
                    <span>Projects</span>
                    <FolderGit2 className="h-[18px] w-[18px]" />
                  </li>
                </NavLink>

                <a href={resumeLink} target="_blank" className="w-full">
                  <li className={`${li} justify-end text-accent dark:text-accent-light`}>
                    <span>Resume</span>
                    <FileSearch className="h-[18px] w-[18px]" />
                  </li>
                </a>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
