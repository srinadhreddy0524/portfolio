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
        padding: "0 2rem",
        zIndex: 1000,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Navigation Buttons */}
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
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      {/* Contact Buttons */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="mailto:yourname@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#f0f0f0",
            textDecoration: "none",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
        >
          Gmail
        </a>

        <a
          href="www.linkedin.com/in/srinadh-reddy-kasireddy-b6ab62328"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#f0f0f0",
            textDecoration: "none",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f0")}
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default HeaderMenu;
