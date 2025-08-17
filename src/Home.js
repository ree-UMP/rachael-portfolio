// src/Home.js
import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";   // ✅ import Link
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Hi, I’m <span className="highlight">Rachael</span>
        </h1>
        <h2 className="hero-subtitle">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer 💻",
                "Creative Designer 🎨",
                "Tech Enthusiast 🚀",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h2>
        <p className="hero-text">
          I craft modern, creative, and responsive web experiences.
        </p>

        {/* ✅ Changed from <a> to <Link> */}
        <Link to="/contact" className="cta-button">
          Let's Work Together
        </Link>
      </div>
    </div>
  );
}

export default Home;
