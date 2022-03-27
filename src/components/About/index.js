import React from "react";

function About() {
  return (
    // <section id="about-me" className="section-row">
    //   <div className="section-title">
    //     <h2> About Me </h2>
    //   </div>
    //   <article className="about-me">
    //     <div class="card-image">
    //       <figure class="image is-4by3 mb-4">
    //         <img
    //           src={require(`../../assets/profile-pic/profile-pic.jpg`)}
    //           alt="Matthew Dwyer Profile Picture"
    //         />
    //       </figure>
    //     </div>
    //     <p>
    //       I am an aspiring developer and content creator. I enjoy science,
    //       computers, and philosophy. I have a passion for understanding the
    //       world, pursuing new perspectives and finding solutions to problems.
    //       Working with computers has been a passion of mine for a very long
    //       time, I began building computers at age 10. I am currently new to web
    //       development, professionally I have experience in quality assurance,
    //       process auditing, and hospitality. In my leisure I play video games
    //       and enjoy traveling.
    //     </p>
    //   </article>
    // </section>
    <section className="section-row">
      <div className="section-title">
        <h2> About Me </h2>
      </div>
      <div class="card-content about-me">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128 mb-4">
              <img
                src={require(`../../assets/profile-pic/profile-pic.jpg`)}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <h1>
                Matthew Dwyer
            </h1>
          </div>
        </div>

        <div class="content">
          I am an aspiring developer and content creator. I enjoy science,
          computers, and philosophy. I have a passion for understanding the
          world, pursuing new perspectives and finding solutions to problems.
          Working with computers has been a passion of mine for a very long
          time, I began building computers at age 10. I am currently new to web
          development, professionally I have experience in quality assurance,
          process auditing, and hospitality. In my leisure I play video games
          and enjoy traveling.
        </div>
      </div>
    </section>
  );
}

export default About;
