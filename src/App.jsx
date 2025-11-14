import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Profile3D from "./components/Profile3D";
import Intro from "./components/Intro";
import Experience from "./components/Experience"; 
import HeaderMenu from "./components/HeaderMenu";
import Projects from "./components/Projects";
import FloatingContact from './components/FloatingContact';// ✅ NEW
import CTA from "src/components/CTA.jsx";
import Certifications from "src/components/Certifications.jsx";
import Blog from "src/components/Blog.jsx";

// and add <Certifications/> and <CTA resumeUrl="/resume.pdf" /> where you want them.



function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        color: "#f0f0f0",
        paddingTop: "60px"
      }}
    >
          {/* Header Menu */}
      <HeaderMenu /> 

      {/* Profile Section */}
      <div  id="profile"
        style={{
          minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    boxSizing: "border-box",
        }}
      >
        <div
          style={{
             display: "flex",
      flexDirection: window.innerWidth < 768 ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "1200px",
      gap: "2rem",
          }}
        >
           <div style={{ flex: 1, textAlign: "left" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        YOUR <span style={{ color: "#FEBA17" }}>GOLDEN</span> SCOOP
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Creative Cybersecurity <span style={{ color: "red" }}>TECHIE.</span>
      </p>
    </div>

    {/* 3D Canvas Block */}
    <div style={{ flex: 1, width: "100%", maxWidth: "600px", height: "60vh" }}>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Profile3D />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="intro" >
        <Intro />
      </section>
      <Certifications/>

      {/* Experience Section */}
      
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
       <section id="blog">
        <Blog />
      </section>  
        <section id="Resume"> <CTA resumeUrl="/resume.pdf" /></section>

      </section>
       <div>
      
      {/* Sections */}
      <div id="profile"></div>
      <div id="intro"></div>
      <div id="experience"></div>
      <div id="projects"></div>
      <div id="Resume"></div>
      <div id="blog"></div>


      {/* Floating Contact Menu */}
      <FloatingContact />
    </div>
          
    </div>
  );
}

export default App;
