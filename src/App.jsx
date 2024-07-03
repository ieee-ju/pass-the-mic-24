import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Loading from './components/Landing';
import Episode from './components/Episode';

function App() {
  return (
    <BrowserRouter>
    <Loading/>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Contact/>
    </BrowserRouter>
  );
}

export default App;

// set font poppins
// set font inter
