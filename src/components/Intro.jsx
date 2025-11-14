// src/components/Intro.jsx
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import MagnetSphere from "./3D/MagnetSphere";

export default function Intro() {
  const [isMobile, setIsMobile] = useState(false);
  const [openPanel, setOpenPanel] = useState(null); // "skills" | "more" | null

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const toggle = (panel) => {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  };
  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <section
      id="intro"
      style={{
        minHeight: "100vh",
        display: "flex",
        padding: "3rem 2rem",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* LEFT: Text + buttons */}
        <div
          style={{
            flex: "1 1 420px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",marginLeft:"-0.1rem" 
          }}
        >
          <h2 style={{ fontSize: "2.25rem", margin: 0, lineHeight: 1.05 }}>
            <span style={{ color: "red",}}>KASIREDDY</span> SRINADH REDDY
          </h2>

          <p
            style={{
              fontSize: "0.98rem",
              marginTop: "0.5rem",
              color: "#dcdcdc",
              lineHeight: 1.6,
              maxWidth: 760,
            }}
          >
            I’m a cybersecurity-focused full-stack developer and final-year
            B.Tech CSE student. I build secure web apps and small security
            tooling — from threat modelling to secure implementation and
            measurable outcomes.
          </p>

          {/* action buttons */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
            <button
              onClick={() => toggle("skills")}
              aria-expanded={openPanel === "skills"}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#f0f0f0",
                padding: "0.5rem 0.9rem",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 700,
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
            >
              Skills
            </button>

            <button
              onClick={() => toggle("more")}
              aria-expanded={openPanel === "more"}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#f0f0f0",
                padding: "0.5rem 0.9rem",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 700,
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
            >
              Know more about me
            </button>

            <button
  onClick={() => scrollToSection("blog")}
  style={{
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#f0f0f0",
    padding: "0.5rem 0.9rem",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 700,
    transition: "all 0.22s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
>
  Read my blogs
</button>

            
          </div>

          {/* expandable panels */}
          <div style={{ marginTop: "0.8rem", width: "100%", maxWidth: 760 }}>
            {/* SKILLS PANEL */}
            <div
              aria-hidden={openPanel !== "skills"}
              style={{
                maxHeight: openPanel === "skills" ? 300 : 0,
                opacity: openPanel === "skills" ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease, opacity 0.28s ease",
              }}
            >
              <div
                style={{
                  marginTop: 8,
                  padding: "0.8rem",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 8,
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {[
                    "React",
                    "Node.js",
                    "Three.js / R3F",
                    "Pen-testing",
                    "Solidity",
                    "Python",
                    "Docker",
                  ].map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: "0.35rem 0.6rem",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 6,
                        fontWeight: 600,
                        fontSize: 13,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
                  
            {/* KNOW MORE PANEL */}
            <div
              aria-hidden={openPanel !== "more"}
              style={{
                maxHeight: openPanel === "more" ? 420 : 0,
                opacity: openPanel === "more" ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.44s cubic-bezier(.2,.9,.2,1), opacity 0.28s ease",
              }}
            >
              <div
                style={{
                  marginTop: 8,
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 8,
                  color: "#eaeaea",
                  lineHeight: 1.6,
                }}
              >
                <p style={{ margin: 0 }}>
                  I focus on building secure, user-friendly products — combining
                  hands-on penetration testing with production engineering. I’ve
                  delivered tooling and web apps used in coursework and labs, and
                  I enjoy turning security research into practical, deployable
                  solutions.
                </p>

                <p style={{ marginTop: 8, color: "#cfcfcf", fontSize: 14 }}>
                  Education: B.Tech CSE (final year). Open to internships and
                  early-career roles focused on security engineering and
                  Web3/front-end development.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        

        {/* RIGHT: 3D Canvas preview */}
        <div
          style={{
            flex: "1 1 360px",
            minWidth: isMobile ? "240px" : "320px",
            height: isMobile ? 260 : 360,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.45} />
            <directionalLight position={[3, 2, 1]} />
            <Suspense fallback={null}>
              <MagnetSphere />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
