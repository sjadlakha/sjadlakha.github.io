import { Router, Switch } from "react-router-dom";
import Background from "./components/Background";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <Router>
    <div className="App container">
      <Background />
      <Header />
      <Navbar />
      {/* <Switch></Switch> */}
    </div>
    // </Router>
  );
}

export default App;
