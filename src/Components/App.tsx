import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Nav from "./Nav/Nav"
import Projects from "./Projects/Projects";
import "./styles.css";

function App() {
  return (
    <div className="canvas">
      <Nav />
      <div className="outer-wrap">
        <Header />
        <Projects />
      </div>
      <Contact />
    </div>
  )
}

export default App
