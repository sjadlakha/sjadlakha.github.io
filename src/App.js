import ParticlesBg from "particles-bg";
import "./App.css";
import Education from "./components/Education";
import First from "./components/First";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Exc from "./components/Exc";
import SocialFollow from "./components/SocialFollow";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} color="#efefef" />
      <First />
      <Education />
      <Projects />
      <Experiences />
      <Exc />
      <SocialFollow />
      <Footer />
    </>
  );
}

export default App;
