import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Project from "./components/Project";
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

  // const [currentProject, setCurrentProject] = useState(projects[0]);
  const [projectSelected, setProjectSelected] = useState(false);

  return (
    <>
      <Nav
        projects={projects}
        setProjectSelected={setProjectSelected}
        projectSelected={projectSelected}
      ></Nav>
      <section className="body-margin">
        {!projectSelected && <About></About>}
        {projectSelected && <Project projects={projects}></Project>}
      </section>
    </>
  );
}

export default App;
