// import Navbar from "./components/navbar";
import NavbarBotstrap from "./components/navbarBoss";
import Presentation from "./components/Presentation";
import AboutMe from "./components/aboutMe";
import Proyects from "./components/proyects";

function App() {
  return (
    <div>
      <div className="App">
        {/* <Navbar /> */}
        <NavbarBotstrap />
        <Presentation />
        <AboutMe />
        <Proyects />
      </div>
    </div>
  );
}

export default App;
