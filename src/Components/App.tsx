import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Nav from "./Nav/Nav"
import "./styles.css";

function App() {
  return (
    <div className="canvas">
      <Nav />
      <div className="outer-wrap">
        <Header />
        <Contact />
      </div>
    </div>
  )
}

export default App
