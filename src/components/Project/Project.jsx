import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaRegPaperPlane } from "react-icons/fa";
import allProjects from '../../assets/DB/Project/project'

const ProjectSection = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  return (
    <section className="w-full min-h-screen py-12 px-4 sm:px-8">
      <div className=" text-black dark:text-white mb-8 px-5 py-4 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-inner border border-green-500 ">
        <h2 className="text-3xl font-bold text-center mb-10">🚀 Projects</h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <p className="text-2xl font-semibold">Welcome to my online project portfolio.</p>
          <p className="dark:text-gray-400">
            Here are some of the projects I've worked on — ranging from
            responsive web apps to dynamic full-stack applications. Each one
            reflects my skills, creativity, and dedication to building
            meaningful digital experiences.
          </p>
          <p className="text-base font-bold ">
            ➡️ If you like my work, please don't forget to give a ⭐ to my{" "}
            <a href="https://github.com/itanmay728" className="text-green-500 italic hover:underline">GitHub repositories</a>. Your support means a lot — it
            helps me stay motivated, keep learning, and continue building even
            better projects!
          </p>
          <div className="flex max-md:flex-col gap-2">
            <p className="text-xl dark:text-zinc-200">
              Want some help building your software?
            </p>
            <a
              href="mailto:ktanmay1130@gmail.com"
              className=" flex items-center gap-2 w-fit text-white text-sm bg-green-600 hover:bg-green-700 px-4 py-1 rounded-md transition-all duration-300 "
            >
              <FaRegPaperPlane />
              <span>Hire me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-inner p-4 border-2 border-green-500">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["all", "web", "mobile"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-md text-white capitalize ${
                filter === btn ? "bg-green-600" : "bg-zinc-600"
              }`}
            >
              {btn === "all" ? "All Projects" : btn + " Apps"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {filtered.map((proj, idx) => (
            <ProjectCard
              key={idx}
              index={idx}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              githubLink ={proj.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
