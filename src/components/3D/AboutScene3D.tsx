import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShape = ({ position, geometry, color }: { position: [number, number, number], geometry: string, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {geometry === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
        {geometry === 'box' && <boxGeometry args={[0.7, 0.7, 0.7]} />}
        {geometry === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 100]} />}
        <meshPhongMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

export const AboutScene3D = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
        
        <FloatingShape position={[-2, 1, 0]} geometry="sphere" color="#8b5cf6" />
        <FloatingShape position={[2, -1, -1]} geometry="box" color="#06b6d4" />
        <FloatingShape position={[0, 0, -2]} geometry="torus" color="#3b82f6" />
        <FloatingShape position={[-3, -2, 0]} geometry="sphere" color="#ec4899" />
        <FloatingShape position={[3, 2, -1]} geometry="box" color="#10b981" />
      </Canvas>
    </div>
  );
};
