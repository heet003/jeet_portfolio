/* eslint-disable */
import React from "react";
import { projects } from "../utils/constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeInSlowly } from "../utils/motion";

function Projects() {
  return (
    <motion.div
      className="flex flex-col items-center p-6 md:p-10 mt-8 space-y-8"
      initial="hidden"
      animate="show"
      variants={fadeInSlowly(0, 1.5)}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
        <span className="bg-[#2563EB] px-[0.1rem] m-2"></span>Projects
      </h1>
      <p className="text-center text-gray-600 max-w-md md:max-w-xl">
        Here are some of the projects I’ve worked on, showcasing my skills in
        full-stack development, UI design, and backend engineering. Each project
        is a unique representation of my ability to create scalable and
        efficient applications.
      </p>

      <div className="grid gap-8 w-full max-w-4xl grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            role={project.role}
            description={project.description}
            img={project.img}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
