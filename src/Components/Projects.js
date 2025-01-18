import React from "react";
import projects from "../portfolio";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <div className="">
      <h2 className="m-20">PROJECTS</h2>

      <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>09</div>
      </div>

      <h2 className="m-20">PROJECTS</h2>

      <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>09</div>
      </div>
      <h2 className="m-20">PROJECTS</h2>

      <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>09</div>
      </div>
    </div>
  );
};

export default Projects;
