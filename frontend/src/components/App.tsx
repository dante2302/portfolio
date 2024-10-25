import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Nav from "./Nav/Nav"
import Projects from "./Projects/Projects";
import "./styles.css";
import "./Nav/Nav.css"
import { useEffect, useState } from "react";

function App() {
  const [scrollTop, setScrollTop] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollTop(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="canvas">
      <Nav scrollTop={scrollTop}/>
      <div className="outer-wrap">
        <Header />
        <About />
        <Projects />
      </div>
      <Contact />
    </div>
  )
}

export default App
