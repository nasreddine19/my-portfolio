import React from "react";

const Projects = () => {
  return (
    <div className="projects-container">
      <h3 className="projects-header">Projects</h3>
      <div className="projects">

        
      <div className="project-item">
          <h3 className="project-name">Quiz App</h3>
          <p className="project-desc">
            "Quiz App" is a quiz where the questions must be answered by
            choosing category, difficulty and number of questions.
          </p>
          <input className="project-btn" type="submit" value="View Project" />
          <input className="project-btn" type="submit" value="Github Code" />
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
