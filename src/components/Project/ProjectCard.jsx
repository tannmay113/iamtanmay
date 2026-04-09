import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="group flex flex-col h-full">
      {/* Card */}
      <div className="relative bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-gray-100 dark:border-slate-700/50 hover:shadow-card-hover transition-all duration-300 flex-1 flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={image}
            alt={title}
          />
          {/* Hover Overlay - gradient from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4 sm:p-5">
            <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">
              {title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-200 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4 flex items-center justify-between mt-auto">
          <div className="min-w-0 flex-1 mr-3">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
              {title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {description}
            </p>
          </div>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-9 w-9 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-accent-soft dark:hover:bg-accent/10 transition-all duration-200 shrink-0 group/btn"
            >
              <FaGithub className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover/btn:text-accent dark:group-hover/btn:text-accent-light transition-colors" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
