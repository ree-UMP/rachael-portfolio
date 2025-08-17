import React, { useEffect, useRef } from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "WiFly App",
    description: "A software that allows secure remote Wi-Fi connections from anywhere in the world.",
    image: "https://picsum.photos/500/300?random=4",
    link: "#"
  },
  {
    title: "ProVault",
    description: "An app that updates your certifications with the help of your school, building a professional image and connecting you to jobs that match your CV.",
    image: "https://picsum.photos/500/300?random=5",
    link: "#"
  },
  {
    title: "My Portfolio Project",
    description: "A personal portfolio website showcasing my skills, projects, and professional journey.",
    image: "https://picsum.photos/500/300?random=6",
    link: "#"
  }
];

export default function Portfolio() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-wrapper">
      <header className="portfolio-hero">
        <h1>Rachael Ngemu</h1>
        <p className="typewriter">
          Software Developer | Designer | Web Developer
        </p>
      </header>

      <section className="portfolio-section">
        <h2>My Work</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              className="portfolio-card fade-in"
              key={index}
              ref={(el) => (refs.current[index] = el)}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
