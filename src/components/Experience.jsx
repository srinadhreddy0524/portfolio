// components/Experience.jsx
import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      style={{
        height: "100vh",
        backgroundColor: "#181818",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 10vw",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Experience</h2>

      <div style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ margin: 0 }}>Cybersecurity Intern @ XYZ Labs</h3>
          <p style={{ margin: "0.3rem 0", fontSize: "0.9rem", color: "#aaa" }}>
            June 2024 – August 2024
          </p>
          <p>Worked on penetration testing, threat modeling, and secure code audits.</p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ margin: 0 }}>Blockchain Developer @ BugChain DAO</h3>
          <p style={{ margin: "0.3rem 0", fontSize: "0.9rem", color: "#aaa" }}>
            Jan 2025 – Present
          </p>
          <p>Built smart contracts, integrated Chainlink, and developed a DApp for decentralized bug bounty submissions.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
