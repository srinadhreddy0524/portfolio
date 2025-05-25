import React, { useRef, useEffect } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

import vertexShader from '../../shaders/magnetVertex.glsl';
import fragmentShader from '../../shaders/magnetFragment.glsl';

const MagnetMaterial = shaderMaterial(
  { uTime: 0, uMouse: new THREE.Vector3(0, 0, 0) },
  vertexShader,
  fragmentShader
);

extend({ MagnetMaterial });

export default function MagnetSphere() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  useEffect(() => {
    function onMouseMove(e) {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      ref.current.uniforms.uMouse.value.set(x, y, 0);
    }
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

 return (
  <mesh>
    <sphereGeometry args={[1, 64, 64]} />
    <magnetMaterial ref={ref} />
  </mesh>
);

}
