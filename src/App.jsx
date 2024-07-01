import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Landing from './Components/Landing';
import Speakers from './Components/Speakers';
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
