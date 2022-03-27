import React from "react";

function Nav(props) {
  // const navItems = [
  //   {
  //     title: "About Me",
  //   },
  //   {
  //     title: "Work",
  //   },
  //   {
  //     title: "Contact Me",
  //   },
  //   {
  //     title: "Resume",
  //   },
  // ];

  return (
    <header>
      <h1>
        <a href="https://sirteddanson.github.io/portfolio/">Matthew Dwyer</a>
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

export default Nav;
