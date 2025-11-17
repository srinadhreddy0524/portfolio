// src/components/Certifications.jsx
import React from "react";

export default function Certifications() {
  const certs = [
    { title: "CCNA Network Essentials", issuer: "UDEMY", year: 2025, link: "https://drive.google.com/file/d/1uZ5pWI9gF4pYojuAaCDzBLQCzjzlvuCC/view?usp=share_link" },
    { title: "Ethical Hacking", issuer: "UDEMY", year: 2025, link: "https://drive.google.com/file/d/12CdEcIJ263k7ln0EOLVbnKH9iimoeC6h/view?usp=sharing" },
    { title: "Cyber Security Analyst job ", issuer: "TATA", year: 2025, link: "https://drive.google.com/file/d/1MCg8d1ZTxQg8B_nJ78QvxUHvm-X1sX7e/view?usp=sharing" },
    { title: "Cyber job simulation ", issuer: "DELOITTE", year: 2025, link: "https://drive.google.com/file/d/1rjqFHsnwWDhUrDj576EYREaVjeHXHh__/view?usp=sharing" }
  ];

  return (
    <section id="certifications" style={{ minHeight: "80vh", background: "#111", padding: "3.5rem 5vw", color: "#f0f0f0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem",marginBottom: "5rem",marginRight: "20rem",marginLeft:"-6.4rem" }}>Certifications & Learning</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {certs.map((c, i) => (
  <div key={i} style={{ background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 8 }}>
    <h4 style={{ margin: "0 0 6px 0" }}>{c.title}</h4>
    <div style={{ color: "#ccc", fontSize: 14 }}>
      {c.issuer} • {c.year}
    </div>

    {c.link && (
      <a
        href={c.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 8,
          display: "inline-block",
          color: "#61dafb",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        View Certificate →
      </a>
    )}
  </div>
))}

        </div>
      </div>
    </section>
  );
}
