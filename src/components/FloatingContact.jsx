import React, { useState, useEffect, useRef } from "react";

function FloatingContact() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

useEffect(() => {
  const introEl = document.getElementById("intro");
  const expEl = document.getElementById("experience");
  const projectsEl = document.getElementById("projects");

  const observer = new IntersectionObserver(
    (entries) => {
      let show = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show = true;
        }
      });
      setVisible(show);
    },
    { threshold: 0.1 }
  );

  if (introEl) observer.observe(introEl);
  if (expEl) observer.observe(expEl);
  if (projectsEl) observer.observe(projectsEl);

  return () => {
    if (introEl) observer.unobserve(introEl);
    if (expEl) observer.unobserve(expEl);
    if (projectsEl) observer.unobserve(projectsEl);
  };
}, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
        pointerEvents: visible ? "auto" : "none",// avoid clicking while fading out
      }}
    >
      {/* Folding section with animation */}
      <div
        style={{
          maxHeight: expanded ? "100px" : "0px",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.5s ease",
          background: "rgba(30, 30, 30, 0.95)",
          borderRadius: "10px",
          padding: expanded ? "1rem" : "0 1rem",
          marginBottom: expanded ? "0.5rem" : "0px",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          boxShadow: expanded ? "0 0 10px rgba(0,0,0,0.4)" : "none",
          margin:"0.5rem" ,
          alignItems: "left",
        }}
      >
        
        <a
          href="mailto:srinadhreddy0524@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
           color: "#f0f0f0",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.9rem",
    fontFamily: "monospace",        // ensures equal character width
    textAlign: "left",              // left-align text
    width: "100%",                  // make the item take full width
    paddingLeft: "4px",             // consistent left padding
    transition: "color 0.3s ease",          margin:"0.3rem" ,

            
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
        >
          Gmail
        </a>
        <a
          href="https://www.linkedin.com/in/srinadh-reddy-kasireddy-b6ab62328/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#f0f0f0",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.9rem",
    fontFamily: "monospace",        // ensures equal character width
    textAlign: "left",              // left-align text
    width: "100%",                  // make the item take full width
    paddingLeft: "4px",             // consistent left padding
    transition: "color 0.3s ease",          margin:"0.3rem" ,

            
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
        >
          LinkedIn
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: expanded ? "red" : "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
          fontWeight: "bold",
          boxShadow: "0 0 10px rgba(0,0,0,0.4)",
          transition: "all 0.3s ease",
        }}
        title="Contact"
      >
        {expanded ? "×" : "@"}
      </button>
      
    </div>
  );
}

export default FloatingContact;
