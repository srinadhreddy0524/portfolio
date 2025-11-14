import React from "react";

export default function HeaderMenu() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const items = ["profile", "intro", "experience", "projects", "certifications","blog"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: "rgba(18,18,18,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        zIndex: 1200,
        backdropFilter: "blur(10px)",
        whiteSpace: "nowrap",
        overflowX: "auto",
      }}
    >
      <nav style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
        {items.map((s) => (
          <button
            key={s}
            onClick={() => scrollToSection(s)}
            style={{
              background: "transparent",
              border: "none",
              color: "#f0f0f0",
              padding: "0.4rem 0.6rem",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 14,
              transition: "color .22s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </nav>

      <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#f0f0f0",
            textDecoration: "none",
            fontWeight: 700,
            padding: "0.35rem 0.6rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
        >
          Resume
        </a>
      </div>
    </header>
  );
}
