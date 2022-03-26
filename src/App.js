import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import "./App.css";

function App() {
  const [projects] = useState([
    {
      name: "Overseer",
      link: "https://hidden-sea-60654.herokuapp.com/",
    },
    {
      name: "Meal Express",
      link: "https://hguleed.github.io/mealPrepExpress/",
    },
    {
      name: "Weather Dashboard",
      link: "https://sirteddanson.github.io/weather-dashboard/",
    },
  ]);

  // const [projectSelected, setProjectSelected] = useState(false);
  // const [aboutSelected, setAboutSelected] = useState(false);
  // const [contactSelected, setContactSelected] = useState(false);
  // const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <>
      <Nav></Nav>
      <section className="body-margin">
        <About></About>
        <Project projects={projects}></Project>
        <ContactForm></ContactForm>
      </section>
    </>
  );
}

export default App;
