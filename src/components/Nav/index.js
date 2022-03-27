import React, { useState } from "react";

function Nav(props) {
  const {
    currentNavItem,
    setCurrentNavItem,
    navItems = [],
  } = props;

  return (
    <header>
      <h1>
        <a href="https://sirteddanson.github.io/portfolio/">Matthew Dwyer</a>
      </h1>
      <nav>
        <ul>
          {navItems.map((navItem) => (
            <li
              className={`navItem ${
                currentNavItem.name === navItem.name && `navActive`
              }`}
              key={navItem.name}
            >
              <span
                onClick={() => {
                  setCurrentNavItem(navItem);
                }}
              >
                {navItem.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
