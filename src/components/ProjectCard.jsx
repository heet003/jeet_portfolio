/* eslint-disable */
import React from "react";

const ProjectCard = ({ title, role, description, img }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full border-[1px] border-gray-900">
      <div className="w-full md:w-3/5 p-6 flex flex-col justify-start">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-blue-600 mr-4"></div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-600">
              {title}
            </h2>
            <p className="text-sm md:text-md font-semibold text-gray-800">
              {role}
            </p>
          </div>
        </div>
        <p className="text-gray-700 mt-4 md:mt-8">{description}</p>
      </div>

      <div className="w-full md:w-2/5 mt-4 md:mt-0">
        <img
          src={img}
          alt="Project Visual"
          className="object-cover h-40 md:h-full w-full rounded-b-lg md:rounded-b-none md:rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
