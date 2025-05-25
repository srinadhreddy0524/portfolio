import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Profile3D from "./components/Profile3D";
import Intro from "./components/Intro";
import Experience from "./components/Experience"; 
import HeaderMenu from "./components/HeaderMenu";
import Projects from "./components/Projects";// ✅ NEW


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
          padding: "0 5vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          <div style={{ flex: 1, paddingRight: "4vw" }}>
            <h1 style={{ fontSize: "3rem", margin: 0 }}>YOUR  <span style={{ color: 'GOLD' }}>GOLDEN</span> SCOOP</h1>
            <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
              Creative  Cybersecurity  <span style={{ color: 'red' }}>TECHIE.</span>
            </p>
          </div>

         <div style={{ flex: 1, height: '60vh' }}>
          <Canvas style={{ height: '100%', width: '100%' }}>
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

      {/* Experience Section */}
      
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
          
    </div>
  );
}

export default App;
