// components/Intro.jsx
import React from "react";

function Intro() {
  return (
    <section
      id="about"
      style={{
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 10vw",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h2>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>
        Hello! I'm [Your Name], a passionate developer with a strong interest in cybersecurity, 3D web design, and blockchain technologies. I love building immersive digital experiences that solve real-world problems.
      </p>
    </section>
  );
}

export default Intro;
