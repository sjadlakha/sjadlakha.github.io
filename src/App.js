import ParticlesBg from "particles-bg";
import "./App.css";
import Education from "./components/Education";
import First from "./components/First";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
function App() {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} color="#efefef" />
      <First />
      <Education />
      <Projects />
      <Experiences />
    </>
  );
}

export default App;
