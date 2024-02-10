import Header from "./Header/Header";
import Nav from "./Nav/Nav"
import "./styles.css";

function App() {
  return (
    <div className="canvas">
      <Nav />
      <div className="outer-wrap">
        <Header />
      </div>
    </div>
  )
}

export default App
