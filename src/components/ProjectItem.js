import React from "react";
import user from "../data/user";

function ProjectItem({ name, about,technologies }) {
  // const technologies=projects.technologies
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((tech, index)=> (
          <span key={index}>{tech}</span>
        ))}
              </div>
    </div>
  );
}

export default ProjectItem;