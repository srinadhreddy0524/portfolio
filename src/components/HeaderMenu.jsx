import React from "react";

function HeaderMenu() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        backgroundColor: "rgba(18, 18, 18, 0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        zIndex: 1000,
        backdropFilter: "blur(10px)",
        overflowX: "auto", // Prevent breakage
        whiteSpace: "nowrap", // Prevent wrapping
      }}
    >
      {/* Navigation Buttons */}
      <nav style={{ display: "flex", gap: "0.5rem" }}>
        {["profile", "intro", "experience", "projects"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              background: "transparent",
              border: "none",
              padding: "0.4rem 0.6rem",
              color: "#f0f0f0",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.9rem",
              transition: "color 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default HeaderMenu;
