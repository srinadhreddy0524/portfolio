import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingSpheres() {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;

    // Normalize mouse position to [-1, 1]
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    // Smooth follow using lerp
    meshRef.current.position.lerp(new THREE.Vector3(x, y, 0), 0.05);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial color="#00ffff" distort={0.3} speed={2} />
    </mesh>
  );
}
