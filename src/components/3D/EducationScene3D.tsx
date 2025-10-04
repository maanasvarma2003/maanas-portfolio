import { Canvas } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Book = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 1.2, 0.2]} />
        <meshPhongMaterial color={color} transparent opacity={0.5} />
      </mesh>
    </Float>
  );
};

const GraduationCap = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3}>
      <group ref={groupRef} position={position}>
        <mesh position={[0, 0.2, 0]}>
          <coneGeometry args={[0.8, 0.3, 4]} />
          <meshPhongMaterial color="#8b5cf6" transparent opacity={0.6} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshPhongMaterial color="#06b6d4" transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

export const EducationScene3D = () => {
  return (
    <div className="absolute inset-0 opacity-15">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#ec4899" />
        
        <Book position={[-2, 1, 0]} color="#3b82f6" />
        <Book position={[2, -1, -1]} color="#10b981" />
        <Book position={[-3, -2, 0]} color="#ec4899" />
        <GraduationCap position={[0, 0, -1]} />
        <Book position={[3, 1.5, -1]} color="#f59e0b" />
      </Canvas>
    </div>
  );
};
