import "./App.css";
import Hero from "./components/hero/Hero";
import Who from "./components/who/Who";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <div className="Container">
        <Hero />
        <Who />
        <Works />
        <Contact />
      </div>
    </>
  );
}

export default App;
