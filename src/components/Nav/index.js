import React, { useState } from "react";

function Nav(props) {

  const { setProjectSelected, setAboutSelected, setContactSelected } = props;

  function aboutMeSel() {
    setAboutSelected(true);
    setProjectSelected(false);
    setContactSelected(false);
  }

  const workSel = function () {
    setAboutSelected(false);
    setProjectSelected(true);
    setContactSelected(false);
  }

  function contactMeSel() {
    setAboutSelected(false);
    setProjectSelected(false);
    setContactSelected(true);
  }

  return (
    <header>
      <h1>
        <a href="https://sirteddanson.github.io/portfolio/">Matthew Dwyer</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me" onClick={aboutMeSel}>
              About Me
            </a>
          </li>
          <li>
            <a href="#work" onClick={workSel}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact-me" onClick={contactMeSel}>
              Contact Me
            </a>
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
