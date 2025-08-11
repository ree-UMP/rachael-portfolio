// Home.js
import React, { useState, useEffect } from "react";

const titles = [
  "Aspiring Software Developer",
  "Creative Coder",
  "React Enthusiast",
  "Lifelong Learner"
];

const fullMessage = "happy to share my overflowing cup of tech innovation and invention!";

export default function PortfolioIntro() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (visibleCount < titles.length) {
      const timer = setTimeout(() => setVisibleCount(visibleCount + 1), 4000);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  useEffect(() => {
    let index = 0;
    setTypedText("");
    const interval = setInterval(() => {
      setTypedText(fullMessage.slice(0, index + 1));
      index++;
      if (index === fullMessage.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .blinking-cursor {
          border-right: 2px solid #6CE7B4;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>

      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          padding: "30px",
          backgroundColor: "#fff"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "28px",
            fontWeight: "600",
            minHeight: "140px",
            color: "#000",
            textAlign: "center",
            userSelect: "none"
          }}
        >
          {titles.map((title, i) => (
            <span
              key={i}
              style={{
                opacity: i < visibleCount ? 1 : 0.3,
                transition: "opacity 1s ease-in-out",
              }}
            >
              {title}
            </span>
          ))}
        </div>

        <p
          className="blinking-cursor"
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            marginTop: "40px",
            color: "#6CE7B4",
            fontFamily: "'Courier New', Courier, monospace",
            whiteSpace: "pre-wrap",
            minHeight: "35px",
            userSelect: "none"
          }}
        >
          {typedText}
        </p>
      </div>
    </>
  );
}

