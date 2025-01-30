import React from "react";
import { skills } from "../portfolio";
import uniqid from "uniqid";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="max-w-[450px] mx-auto my-24">
      <h2 className="text-primary text-3xl font-bold mb-12 text-center w-full relative after:bg-[#2978b5] after:absolute after:h-1.5 after:w-16 after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2">
        SKILLS
      </h2>
      {/* Skills List */}
      <ul className="flex flex-wrap justify-center gap-1">
        {skills.map((skill) => (
          <li key={uniqid()} className="p-2">
            <span
              className="bg-white px-6 py-3 text-md font-medium 
                             shadow-custom-light flex items-center 
                             justify-center transition-transform duration-300 ease-in-out 
                             hover:shadow-lg hover:-translate-y-1"
            >
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
