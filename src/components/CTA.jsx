// src/components/CTA.jsx
import React from "react";


export default function CTA({ resumeUrl = "public/resume.pdf" }) {
  const forceDownload = async (url, filename = "Srinadh_Reddy_Resume.pdf") => {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch resume");
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // fallback: open in new tab
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="cta" style={{ background: "linear-gradient(90deg, rgba(40,40,40,1), rgba(24,24,24,1))", padding: "3rem 5vw", color: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 480px" }}>
          <h3 style={{ margin: 0 }}>Like what you see? Let’s build secure, beautiful products together.</h3>
          <p style={{ color: "#d0d0d0", marginTop: 8 }}>Open to freelance or full-time roles — available for interviews.</p>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {/* Preferred: direct download via same-origin href + download attribute */}
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: "0.7rem 1rem",
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: 8,
    fontWeight: 700,
    textDecoration: "none",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "red")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
>
Resume
</a>

         

          <a href="mailto:srinadhreddy0524@gmail.com" style={{
            padding: "0.6rem 0.9rem",
            borderRadius: 8,
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.12)",
            textDecoration: "none",
            fontWeight: 700
          }}>
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
