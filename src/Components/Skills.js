import React from "react";
import { skills } from "../portfolio";
import uniqid from "uniqid";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="max-w-[450px] w-[95%] mx-auto my-24">
      <h2 className="text-primary text-3xl font-bold mb-12 text-center w-full relative after:bg-[#2978b5] after:absolute after:h-1.5 after:w-16 after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2">
        SKILLS
      </h2>
      <ul className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <li key={uniqid()} className="p-4">
            <span className="bg-base-100 text-blue-600 px-4 py-4 text-sm shadow-custom-light">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
