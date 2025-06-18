// src/components/Projects.jsx
import React from "react";

const projectsList = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Three.js.",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Attendance calculator website ",
    description: "Used Advanced JavaScript to create a web application that calculates student attendance.",
    link: "https://github.com/srinadhreddy0524/attendance_calculator",
  },
   {
    title: "Ecommerce Platform",
    description: "Full-stack eCommerce application with React, Node.js, and MongoDB.",
    link: "https://github.com/srinadhreddy0524/basic_ecommerce_website",
  },
    {
    title: "Subdomain Enumeration Tool",
    description: "Developed a tool for subdomain enumeration using Python using DNS.resolver ,Requests and threading libraries .",
    link: "https://github.com/srinadhreddy0524/subdomain",
  },
  {
    title: "PDF-Protection-Tool",
    description: "Developed a tool  to protect PDF files using Python, allowing users to set passwords and restrict access.",
    link: "https://github.com/srinadhreddy0524/PDF-Protection-Tool",
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
      <h2 style={{ marginBottom: "1.5rem",color:'red' }}>Projects</h2>
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
