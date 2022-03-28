import React from "react";

function Footer() {
  return (
    <section id="footer" className="section-row">
      <nav className="footer">
        <ul>
          <li>
            <a href="https://www.twitch.tv/sirteddanson"><span><i className="fa fa-twitch"></i></span></a>
          </li>
          <li>
            <a href="https://github.com/SirTedDanson"><span><i className="fa fa-github"></i></span></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matthew-edward-dwyer/">
            <span><i className="fa fa-linkedin"></i></span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;