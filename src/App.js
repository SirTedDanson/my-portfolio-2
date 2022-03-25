import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <section className="body-margin">
        <About></About>
      </section>
    </>
  );
}

export default App;
