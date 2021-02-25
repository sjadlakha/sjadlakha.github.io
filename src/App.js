import AchAndCourses from "./components/AchAndCourses";
import Background from "./components/Background";
import Education from "./components/Education";
import Exc from "./components/Exc";
import Footer from "./components/Footer";
import General from "./components/General";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App container">
      <Background />
      <Header />
      <Navbar />
      <General />
      <Education />
      <Projects />
      <AchAndCourses />
      <Exc />
      <Footer />
    </div>
  );
}

export default App;
