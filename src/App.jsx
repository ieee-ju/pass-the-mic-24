import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Loading from './components/Landing';
import Speakers from './components/Speakers';
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
    <Loading/>
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
