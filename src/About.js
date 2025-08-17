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
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "1.5rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #f3e8ff, #fce7f3)",
        color: "#2d1b69",
      }}
    >
      {/* Profile Picture */}
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #8b5cf6",
          marginBottom: "1rem",
          boxShadow: "0 6px 15px rgba(139, 92, 246, 0.4)",
          animation: "popIn 1s ease forwards",
        }}
      >
        <img
          src="/profile.jpg" // <- Replace with your real photo path
          alt="Rachael"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        👩‍💻 About Me — Rachael
      </h1>

      <h2 style={{ fontSize: "2rem", color: "#db2777", marginBottom: "1rem" }}>
        Software Developer
      </h2>

      <p style={{ maxWidth: "700px", lineHeight: "1.8" }}>
        Hi there! I’m <strong>Rachael</strong>, a passionate software developer{" "}
        <span className="emoji">💻</span> who loves turning ideas into{" "}
        <span className="emoji">⚙️</span> functional and beautiful applications.
        I believe in clean code, great design, and solutions that empower people.
      </p>

      {/* Skills Section */}
      <div style={{ marginTop: "2rem", color: "#7c3aed" }}>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Skills & Tools 🔧</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
          <li>⚡ JavaScript / React</li>
          <li>🎨 UI/UX Design</li>
          <li>🛠 Backend Development</li>
          <li>🚀 Deployment & DevOps</li>
        </ul>
      </div>

      {/* Contact Button */}
      <div style={{ marginTop: "2rem" }}>
        <a
          href="mailto:your-email@example.com"
          style={{
            textDecoration: "none",
            color: "#fff",
            background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            transition: "0.3s",
            boxShadow: "0 4px 12px rgba(236, 72, 153, 0.4)",
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
