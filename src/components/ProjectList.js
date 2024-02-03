import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" >
        {projects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <ProjectItem
              name={project.name}
              about={project.about}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;