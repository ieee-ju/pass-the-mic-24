import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./_Components/About.jsx";
import Contact from "./_Components/Contact.jsx";
import Landing from './_Components/Landing.jsx';
import Speakers from './_Components/Speakers.jsx';
import Footer from "./_Components/Footer.jsx";
import Episode from './_Components/Episode.jsx'

function App() {
  return (
    <BrowserRouter>
      <Landing/>
      <About />
{/*       <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Episode/>
      <Speakers />
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// set font poppins
// set font inter
