import React, { useState } from "react";

function Nav(props) {
  const { currentNavItem, setCurrentNavItem, navItems = [] } = props;

  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            {navItems.map((navItem) => (
              <li
                className={`navItem ${
                  currentNavItem.name === navItem.name && `navActive`
                }`}
                key={navItem.name}
              >
                <a
                  onClick={() => {
                    setCurrentNavItem(navItem);
                  }}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
