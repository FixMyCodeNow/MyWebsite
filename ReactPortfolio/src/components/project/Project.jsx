import React from "react";
import { projects } from "../../constants";
import "./Project.css";

const Project = () => {
  return (
    <section id="work" className="work-section">
      {/* Section Title */}
      <div className="work-header">
        <h2 className="work-title">PROJECTS</h2>
        <div className="work-underline"></div>
        <p className="work-subtitle">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="work-grid">
        {projects.map((project) => (
          <div key={project.id} className="work-card">
            <div className="work-card-img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="work-card-body">
              <h3 className="work-card-title">{project.title}</h3>
              <p className="work-card-desc">{project.description}</p>
              <div className="work-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="work-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="work-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-code"
                  >
                    Lihat 
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
