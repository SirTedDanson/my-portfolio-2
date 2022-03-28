import React from "react";
import Pdf from "../../assets/resume/resume.pdf";

function Resume() {
  return (
    <section className="section-row">
      <div className="section-title">
        <h2> Skills </h2>
      </div>
      <article className="resume">
        <h3 className="has-text-weight-semibold is-underlined ml-5 mb-4">
          Front End Proficiencies
        </h3>
        <ul className="ml-5">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>Responsive Designs</li>
        </ul>
        <h3 className="has-text-weight-semibold is-underlined pt-5 ml-5 mb-4">
          Back End Proficiencies
        </h3>
        <ul className="ml-5">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        <div className="control pt-5">
          <a href={Pdf} target="_blank">
            <button className="button is-link" value="Open File">
              Download Resume
            </button>
          </a>
        </div>
      </article>
    </section>
  );
}

export default Resume;
