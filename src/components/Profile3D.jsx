import React from 'react';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Profile3D() {
  return (
    <Sphere args={[1.5, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="red"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.7}
      />
    </Sphere>
  );
}
