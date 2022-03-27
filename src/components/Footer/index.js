import React from "react";

function Footer() {
  return (
    <section id="contact-me" className="section-row">
      <nav className="contact-me">
        <ul>
          <li>
            <a href="mailto:KnowledgeMED@gmail.com"><span><i class="fa fa-github"></i></span></a>
          </li>
          <li>
            <a href="https://github.com/SirTedDanson"><span><i class="fa fa-envelope"></i></span></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matthew-edward-dwyer/">
            <span><i class="fa fa-linkedin"></i></span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;