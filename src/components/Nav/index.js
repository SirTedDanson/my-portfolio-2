import React from "react";

function Nav(props) {
  const { projectSelected, setProjectSelected } = props;

  function selection() {
    setProjectSelected((prevState) => !prevState);
  }

  return (
    <header>
      <h1>
        <a href="https://sirteddanson.github.io/portfolio/">M.Dwyer</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me" onClick={selection} >About Me</a>
          </li>
          <li>
            <a href="#work" onClick={selection}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
