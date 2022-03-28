import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { setCurrentNavItem, currentNavItem, navItems } = props;
  return (
    <header className="hero">
      <div className="hero-body p-0">
        <div className="container has-text-right">
          <p className="subtitle hero-quote">
            “We are what we repeatedly do. Excellence, then, is not an act, but
            a habit” -Aristotle
          </p>
        </div>
      </div>
      <Nav
        currentNavItem={currentNavItem}
        setCurrentNavItem={setCurrentNavItem}
        navItems={navItems}
      ></Nav>
    </header>
  );
}

export default Header;
