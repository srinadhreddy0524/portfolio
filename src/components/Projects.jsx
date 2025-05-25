// src/components/Projects.jsx
import React from "react";

const projectsList = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Three.js.",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Bug Bounty DApp",
    description: "Decentralized bug bounty platform using Solidity and React.",
    link: "https://github.com/yourusername/bug-bounty-dapp",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div
      style={{
    height: "100vh",
        backgroundColor: "#181818",
        color: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 10vw",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Projects</h2>
      {projectsList.map((project, i) => (
        <div
          key={i}
          style={{
            marginBottom: "1.2rem",
            padding: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "8px",
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#61dafb" }}
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
