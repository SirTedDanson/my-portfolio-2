import React, { useState } from "react";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [projects] = useState([
    {
      name: "Overseer",
      link: "https://hidden-sea-60654.herokuapp.com/",
      repo: "https://github.com/Tasevski87/project-management-app",
    },
    {
      name: "Meal Express",
      link: "https://hguleed.github.io/mealPrepExpress/",
      repo: "https://github.com/HGuleed/mealPrepExpress",
    },
    {
      name: "Weather Dashboard",
      link: "https://sirteddanson.github.io/weather-dashboard/",
      repo: "https://github.com/SirTedDanson/weather-dashboard",
    },
    {
      name: "Note Taker",
      link: "https://thawing-spire-11710.herokuapp.com/",
      repo: "https://github.com/SirTedDanson/note-taker-express",
    },
    {
      name: "Code Quiz",
      link: "https://sirteddanson.github.io/code-quiz/",
      repo: "https://github.com/SirTedDanson/code-quiz",
    },
    {
      name: "Password Generator",
      link: "https://sirteddanson.github.io/password-generator/",
      repo: "https://github.com/SirTedDanson/password-generator",
    },
  ]);

  const [navItems] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact Me",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  return (
    <>
      <Header
        currentNavItem={currentNavItem}
        setCurrentNavItem={setCurrentNavItem}
        navItems={navItems}
      ></Header>
      <main className="body-margin">
        {currentNavItem.name === "About" && <About></About>}
        {currentNavItem.name === "Portfolio" && (
          <Project projects={projects}></Project>
        )}
        {currentNavItem.name === "Contact Me" && <ContactForm></ContactForm>}
        {currentNavItem.name === "Resume" && <Resume></Resume>}
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
