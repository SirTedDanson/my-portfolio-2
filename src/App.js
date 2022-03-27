import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    {
      name: "Note Taker",
      link: "https://thawing-spire-11710.herokuapp.com/",
    },
    {
      name: "Code Quiz",
      link: "https://sirteddanson.github.io/code-quiz/",
    },
    {
      name: "Password Generator",
      link: "https://sirteddanson.github.io/password-generator/",
    },
  ]);

  const [projectSelected, setProjectSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  // const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <>
      <Header></Header>
      <Nav
        setProjectSelected={setProjectSelected}
        setAboutSelected={setAboutSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <section className="body-margin">
        {!projectSelected && !contactSelected && <About></About>}
        {!aboutSelected && !contactSelected && (
          <Project projects={projects}></Project>
        )}
        {!aboutSelected && !projectSelected && <ContactForm></ContactForm>}
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
