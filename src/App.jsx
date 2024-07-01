import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Landing from './Components/Landing.jsx';
import Speakers from './Components/Speakers.jsx';
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Landing/>
      <About />
{/*       <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Speakers />
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// set font poppins
// set font inter
