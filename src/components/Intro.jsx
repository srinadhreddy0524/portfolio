import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import MagnetSphere from './3D/MagnetSphere';

export default function Intro() {
  
  return (
    <section
      id="intro"
      style={{
        height: '100vh',
        display: 'flex',
        padding: '4rem 2rem',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
      }}
    >
      <div style={{   width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'left', }}>
         <h2 style={{ fontSize: '2.5rem' }}>
     <span style={{ color: 'red', }}>KASIREDDY</span> SRINADH REDDY</h2>
        <p style={{ fontSize: '0.9rem',
      marginTop: '1rem',
      lineHeight: '1.6',
      maxWidth: '800px', }}>
           A cybersecurity learner with a keen interest in ethical hacking, secure application development, and blockchain security. With a background in cloud security and penetration testing, I’m currently leading a team to develop a Decentralized Bug Bounty Program. I specialize in building secure smart contracts, ensuring robust encryption, and implementing cutting-edge technologies like zk-SNARKs and Chainlink. My goal is to create secure, transparent, and decentralized systems that empower users while addressing the ever-evolving landscape of cyber threats.
        </p>
      </div>

      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Suspense fallback={null}>
            <MagnetSphere />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
