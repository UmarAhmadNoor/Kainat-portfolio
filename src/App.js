import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Choose from "./Components/Choose/Choose";
import Contact from "./Components/Contact/Contact";
import Experties from "./Components/Experties/Experties";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/About" element={<About />} />
      </Routes> */}
      <Navbar />
      <Home />
      <About />
      <Experties />
      <Services />
      <Work />
      <Choose />
      <Contact />
    </>
  );
}

export default App;
