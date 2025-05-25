import React from "react";

function HeaderMenu() {
  // Smooth scroll function
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
        backgroundColor: "rgba(18, 18, 18, 0.85)", // translucent dark background
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        zIndex: 1000,
        backdropFilter: "blur(10px)",
      }}
    >
      <nav style={{ display: "flex", gap: "2rem" }}>
        {["profile", "intro", "experience", "projects"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              background: "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "0.5rem 1rem",
              color: "#f0f0f0",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")
            }
           onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")
            }
          >
           {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default HeaderMenu;
