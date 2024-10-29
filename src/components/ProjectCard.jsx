/*eslint-disable */
import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col justify-start w-full md:w-3/5 p-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-blue-600 mr-4"></div>
          <div>
            <h2 className="text-2xl font-bold text-blue-600">{props.title}</h2>
            <p className="text-md font-semibold text-gray-800">{props.role}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-8">{props.description}</p>
      </div>

      <div className="w-full md:w-2/5 mt-6 md:mt-0">
        <img
          src={props.img}
          alt="Project Visual"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
