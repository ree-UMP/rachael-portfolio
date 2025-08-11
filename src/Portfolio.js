// Portfolio.js
import React from "react";

const projects = [
  {
    id: 1,
    title: "Personal Website",
    description: "A sleek, responsive portfolio built with React.",
    link: "https://github.com/ree-UMP/personal-website",
  },
  {
    id: 2,
    title: "PRoVault Software",
    description: "an app that verifies certifications in schooland creates and updates one's proffessionalism and matches them with respective jobs and vacancies.",
    link: "https://github.com/ree-UMP/\PRoVault-app",
  },
  {
    id: 3,
    title: "WiFly Software",
    description: "App that allows remote Wifi connection.",
    link: "https://github.com/ree-UMP/WiFly-app",
  },
];

export default function Portfolio() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "4rem auto",
        padding: "0 1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "3rem",
          fontWeight: "800",
          color: "#5c4dff",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textShadow: "2px 2px 8px rgba(92,77,255,0.5)",
        }}
      >
        💼 My Projects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {projects.map(({ id, title, description, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(145deg, #f0f0ff, #dcdcff)",
              borderRadius: "18px",
              padding: "2rem",
              boxShadow: "8px 8px 15px #b8b8d1, -8px -8px 15px #ffffff",
              color: "#333",
              textDecoration: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "12px 12px 20px #a0a0c0, -12px -12px 20px #ffffff";
              e.currentTarget.style.color = "#5c4dff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "8px 8px 15px #b8b8d1, -8px -8px 15px #ffffff";
              e.currentTarget.style.color = "#333";
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.5",
                fontWeight: "500",
              }}
            >
              {description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
