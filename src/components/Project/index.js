import React from "react";

function Project(props) {
  const { projects = [] } = props;

  return (
    <section id="work" className="section-row">
      <div className="section-title">
        <h2> Work </h2>
      </div>
      <section className="work-content">
        {projects.map((project, i) => (
          <div className={`application-${i}`} key={project.name}>
            <a href={project.link}>
              <div className="hover-effect"></div>
              <h3 className="app-title">{project.name}</h3>
            </a>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Project;
