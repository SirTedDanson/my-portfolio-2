import React from "react";

function Nav(props) {
  const navItems = [
    {
      title: "About Me",
    },
    {
      title: "Work",
    },
    {
      title: "Contact Me",
    },
    {
      title: "Resume",
    },
  ];

  return (
    <header>
      <h1>
        <a href="https://sirteddanson.github.io/portfolio/">M.Dwyer</a>
      </h1>
      <nav>
        <ul>
          <li>About Me</li>
          <li>Work</li>
          <li>Contact Me</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
