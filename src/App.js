import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import pages
import Home from "./Home";
import About from "./About"; // This will have animation inside About.js
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        <Link to="/portfolio" style={{ margin: "10px" }}>Portfolio</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* This will animate */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
