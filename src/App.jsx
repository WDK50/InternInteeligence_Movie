import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />        
        <div className="flex-grow  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<Details />} />
          </Routes>
        <Footer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;