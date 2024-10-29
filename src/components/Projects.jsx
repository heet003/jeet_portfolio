/* eslint-disable */
import React from "react";
import { projects } from "../utils/constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col items-center p-10 mt-10 space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        <span className="bg-[#2563EB] px-[0.1rem] m-2"></span>Projects
      </h1>
      <p className="text-center text-gray-600 max-w-xl">
        Here are some of the projects I’ve worked on, showcasing my skills in
        full-stack development, UI design, and backend engineering. Each project
        is a unique representation of my ability to create scalable and
        efficient applications.
      </p>

      <div className="flex flex-col space-y-10 w-full max-w-4xl">
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
    </div>
  );
}

export default Projects;
