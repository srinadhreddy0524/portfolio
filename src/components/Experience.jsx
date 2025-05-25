import React from "react";
import { Canvas } from "@react-three/fiber";

function Experience() {
  return (
    <section
      id="experience"
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#181818",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 10vw",
        overflow: "hidden",
      }}
    >
      
      {/* DOM Content Layer */}
      <div style={{ zIndex: 1, position: "relative" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Experience</h2>

        <div style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ margin: 0 }}>Cybersecurity Intern @  INLIGHN TECH </h3>
            <p style={{ margin: "0.3rem 0", fontSize: "0.9rem", color: "#aaa" }}>
              May 2025 – Present
            </p>
            <p>Worked on penetration testing, threat modeling, and secure code audits.</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Experience;
