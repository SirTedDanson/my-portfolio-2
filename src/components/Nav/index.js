import React from "react";

function Nav() {
  return (
    <header>
      <h1>
        <a href="https://sirteddanson.github.io/portfolio/">M.Dwyer</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="./assets/pdf/Resume.pdf">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav
