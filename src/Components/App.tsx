import ContactButton from "./Contact/ContactButton";
import Header from "./Header/Header";
import Nav from "./Nav/Nav"
import "./styles.css";
function App() {
  return (
    <div className="canvas">
      <ContactButton />
      <div className="high"></div>
      <Nav />
      <Header />
    </div>
  )
}

export default App
