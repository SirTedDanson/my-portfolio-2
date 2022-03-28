import React from "react";

function Project(props) {
  const { projects = [] } = props;

  return (
    <>
      <div className="section-row">
        <div className="project-title">
          <h2> Projects </h2>
        </div>
      </div>
      <section className="columns is-multiline is-justify-content-center work-content is-fullwidth">
        {projects.map((project, i) => (
          <div className="column is-one-third image m-5" key={project.name}>
            <img
              className="image-image is-mobile"
              src={require(`../../assets/project-images/${project.name}.PNG`)}
              alt={`${project}`}
            />
            <div className="image-overlay">
              <a href={project.link}>
                <div className={`image-title app-${i}`}>{project.name}</div>
              </a>
              <a href={project.repo}>
                <p className="image-git">
                  <span>
                    <i className="fa fa-github github-icon"></i>
                  </span>
                  Repo
                </p>
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Project;
