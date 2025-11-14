// src/components/Blog.jsx
import React from "react";

const samplePosts = [
  {
    id: 1,
    title: "Hardening a React App: Practical Steps",
    date: "2025-06-10",
    excerpt:
      "Practical checklist to reduce attack surface in single-page apps: CSP, secure cookies, dependency scanning, and runtime monitoring.",
    link: "https://yourblog.com/hardening-react-app",
  },
  {
    id: 2,
    title: "Intro to Smart Contract Audits",
    date: "2025-04-02",
    excerpt:
      "A walk-through of attack patterns, test strategies, and real examples from audits I performed on small contracts.",
    link: "https://yourblog.com/smart-contract-audits",
  },
  {
    id: 3,
    title: "3D on the Web — Practical Performance Tips",
    date: "2025-02-18",
    excerpt:
      "Keep your Three.js scenes smooth: texture atlas, LOD, instancing, and render-budget patterns for portfolio projects.",
    link: "https://yourblog.com/3d-web-performance",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        minHeight: "80vh",
        background: "#0f0f10",
        color: "#f0f0f0",
        padding: "4rem 5vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ marginBottom: "1.5rem", color: "red" }}>blogs</h2>

        <p style={{ color: "#cfcfcf", marginBottom: "1.5rem", maxWidth: 900 }}>
          Short thoughts, tutorials and post-mortems about security engineering,
          web performance and 3D interfaces. Click any post to read the full
          article on the blog.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {samplePosts.map((post) => (
            <article
              key={post.id}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: 10,
                padding: "1rem",
                transition: "transform 0.28s ease, box-shadow 0.28s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 140,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                <div style={{ color: "#aaa", fontSize: 13, marginBottom: 6 }}>
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <h3 style={{ margin: "0 0 8px 0" }}>{post.title}</h3>
                <p style={{ margin: 0, color: "#d0d0d0", lineHeight: 1.5 }}>
                  {post.excerpt}
                </p>
              </div>

              <div style={{ marginTop: 12, textAlign: "right" }}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#61dafb",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* optional: a link to full blog / RSS */}
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <a
            href="https://yourblog.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#f0f0f0",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            View full blog
          </a>
        </div>
      </div>
    </section>
  );
}
