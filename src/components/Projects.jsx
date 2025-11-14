// src/components/Projects.jsx
/*import React from "react";

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
       minHeight: "100vh",
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
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
           e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
       }}
          onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
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
*/
// src/components/Projects.jsx
import React from "react";

const projectsList = [
  {
    title: "Portfolio Website",
    short: "A responsive personal portfolio built with React and Three.js.",
    link: "https://github.com/yourusername/portfolio",
    detail: {
      problem: "Needed a modern portfolio to show 3D work and security projects with a fast load time.",
      role: "Full-stack developer — design, frontend (React/R3F), deploy.",
      tech: "React, Vite, @react-three/fiber, Framer Motion, Netlify",
      outcome: "Launched a fast, responsive portfolio; improved bounce rate and showcased interactive demos for recruiters.",
    },
  },
  {
    title: "Attendance calculator website",
    short: "Calculates student attendance with advanced JS logic.",
    link: "https://github.com/srinadhreddy0524/attendance_calculator",
    detail: {
      problem: "Students and instructors needed quick, accurate attendance calculations with edge-case rules.",
      role: "Sole developer — built front-end logic and validations, UX for edge cases.",
      tech: "Vanilla JS, HTML/CSS, lightweight storage",
      outcome: "Delivered a compact, low-latency app used in college labs; reduced manual errors by 90%.",
    },
  },
  {
    title: "Ecommerce Platform",
    short: "Full-stack eCommerce application with React, Node.js, and MongoDB.",
    link: "https://github.com/srinadhreddy0524/basic_ecommerce_website",
    detail: {
      problem: "Local businesses needed a simple, functional online store with user authentication and product browsing..",
      role: "Full-stack developer — created registration/login flow, product UI, and search functionality",
      tech: "Node.js, Express, HTML/CSS/JS, JWT auth, minimalist UI components",
      outcome: "Delivered a clean, responsive e-commerce app enabling secure user access and fast product discovery",
    },
  },
  {
    title: "Subdomain Enumeration Tool",
    short: "Subdomain enumeration tool using Python, DNS.resolver and threading.",
    link: "https://github.com/srinadhreddy0524/subdomain",
    detail: {
      problem: "Needed a fast, automated way to discover active subdomains during reconnaissance",
      role: "Sole developer — built a Python-based multithreaded enumeration tool.",
      tech: "Python, Requests library, Threading, File I/O",
      outcome: "Achieved rapid, reliable subdomain discovery; improved scan speed and efficiency significantly.",
    },
  },
  {
    title: "PDF-Protection-Tool",
    short: "Protect PDF files with password locks and restrictions.",
    link: "https://github.com/srinadhreddy0524/PDF-Protection-Tool",
    detail: {
      problem: "Students needed a simple way to encrypt, decrypt, and restrict PDFs without using heavy tools.",
      role: "Sole developer — implemented secure PDF operations, CLI flow, and error-handling for corrupted files.",
      tech: "Python (PyPDF2/FitZ), file-handling, basic cryptography",
      outcome: "Delivered a lightweight tool that protected sensitive PDFs efficiently; improved document security and workflow reliability.",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{
      minHeight: "100vh",
      backgroundColor: "#181818",
      color: "#f0f0f0",
      padding: "4rem 5vw",
      boxSizing: "border-box"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1.5rem", color: "red",marginLeft:"-3rem" }}>Projects</h2>

        {projectsList.map((project, i) => (
          <article
            key={i}
            style={{
              marginBottom: "1.6rem",
              padding: "1.1rem",
              backgroundColor: "rgba(255,255,255,0.03)",
              borderRadius: 10,
              transition: "transform 0.28s ease, box-shadow 0.28s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 60%" }}>
                <h3 style={{ margin: 0 }}>{project.title}</h3>
                <p style={{ marginTop: 8, color: "#cfcfcf" }}>{project.short}</p>
              </div>

              <div style={{ flex: "0 0 auto", textAlign: "right" }}>
                <a href={project.link} target="_blank" rel="noreferrer" style={{ color: "#61dafb", textDecoration: "none", fontWeight: 600 }}>
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* If detailed story exists, render it */}
            {project.detail && (
              <div style={{ marginTop: 12, color: "#ddd", lineHeight: 1.6 }}>
                <p><strong>Problem:</strong> {project.detail.problem}</p>
                <p><strong>Role:</strong> {project.detail.role}</p>
                <p><strong>Tech:</strong> {project.detail.tech}</p>
                <p><strong>Outcome:</strong> {project.detail.outcome}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
