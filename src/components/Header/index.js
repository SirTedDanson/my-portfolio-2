import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { setCurrentNavItem, currentNavItem, navItems } = props;
  return (
    <header class="hero">
      <div class="hero-body p-0">
        <div class="container has-text-right">
          <p class="subtitle hero-quote">
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
