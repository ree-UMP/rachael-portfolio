// About.js
import React from "react";

export default function About() {
  return (
    <div
      className="about-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "85vh",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        fontSize: "1.5rem",
        textAlign: "center",
      }}
    >
      {/* Profile circle on the left inside container */}
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #4f46e5",
          marginBottom: "1rem",
          alignSelf: "center",
          animation: "popIn 1s ease forwards",
        }}
      >
        <img
          src="https://via.placeholder.com/180"
          alt="Rachael"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        👩‍💻 About Me — Rachael
      </h1>

      <h2 style={{ fontSize: "2.2rem", color: "#4f46e5", marginBottom: "1rem" }}>
        Software Developer
      </h2>

      <p style={{ maxWidth: "700px", lineHeight: "1.8" }}>
        Hi there! I’m <strong>Rachael</strong>, a passionate software developer{" "}
        <span className="emoji">💻</span> who loves turning ideas into{" "}
        <span className="emoji">⚙️</span> functional and beautiful applications.
      </p>

      {/* Skills Section */}
      <div style={{ marginTop: "2rem", color: "#e07b39" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Skills & Tools 🔧</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.3rem" }}>
          <li>⚡ JavaScript / React</li>
          <li>🎨 UI/UX Design</li>
          <li>🛠 Backend Development</li>
          <li>🚀 Deployment & DevOps</li>
        </ul>
      </div>

      {/* Contact Links */}
      <div style={{ marginTop: "2rem" }}>
        <a
          href="mailto:your-email@example.com"
          style={{
            textDecoration: "none",
            color: "#fff",
            background: "#4f46e5",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          📩 Contact Me
        </a>
      </div>

      {/* Animations */}
      <style>
        {`
          .emoji {
            display: inline-block;
            animation: bounce 1.5s infinite;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @keyframes popIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
