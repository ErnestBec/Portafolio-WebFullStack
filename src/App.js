import "./App.css";
import Navbar from "./components/navbar";
import Presentation from "./components/Presentation";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <AboutMe />
    </div>
  );
}

export default App;
