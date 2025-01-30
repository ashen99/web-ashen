import React from "react";
import { projects } from "../portfolio";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <div className="mt-24 bg-base-100 flex flex-col items-center lg:items-start">
      <h2 className="text-primary text-3xl font-bold mb-8 text-center w-full relative after:bg-[#2978b5] after:absolute after:h-1.5 after:w-16 after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2">
        PROJECTS
      </h2>
      {projects.map((project) => (
        <div className="grid grid-cols-1 gap-6 w-full mt-6">
          <div className="bg-white p-6 rounded-xl shadow-custom-dark flex flex-col lg:flex-row max-w-sm lg:max-w-full mx-auto">
            {/*  Image */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
              <img
                className="w-full h-48 lg:w-full lg:h-full object-cover"
                src={project.image}
                alt="projectImage"
              />
            </div>
            {/* Card Body */}
            <div className="w-full lg:w-1/2 p-4">
              <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                <h2 className="text-xl font-bold text-black">{project.name}</h2>
              </div>
              <p className="mt-2 text-gray-500">{project.description}</p>
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                {project?.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
