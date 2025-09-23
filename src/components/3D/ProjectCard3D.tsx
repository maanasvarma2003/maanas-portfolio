import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  title: string;
  tech: string[];
  color: string;
}

const FloatingTechIcon = ({ position, color, index }: { position: [number, number, number], color: string, index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.6 + index) * 0.3;
    }
  });

  // Different shapes based on index
  const getGeometry = () => {
    switch (index % 3) {
      case 0: return <boxGeometry args={[0.3, 0.3, 0.3]} />;
      case 1: return <sphereGeometry args={[0.2, 16, 16]} />;
      case 2: return <octahedronGeometry args={[0.2]} />;
      default: return <boxGeometry args={[0.3, 0.3, 0.3]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshPhongMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

export const ProjectCard3D = ({ title, tech, color }: ProjectCard3DProps) => {
  return (
    <div className="h-32 w-full relative">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 1]} intensity={0.6} />
        <pointLight position={[-2, -2, 1]} intensity={0.3} color={color} />
        
        {/* Floating tech icons */}
        {tech.slice(0, 3).map((techItem, index) => (
          <FloatingTechIcon
            key={techItem}
            position={[
              (index - 1) * 0.8,
              Math.sin(index) * 0.3,
              0
            ]}
            color={color}
            index={index}
          />
        ))}
        
        {/* Background geometric shapes */}
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh position={[0, 0, -1]}>
            <torusGeometry args={[1, 0.1, 16, 100]} />
            <meshPhongMaterial color={color} transparent opacity={0.1} />
          </mesh>
        </Float>
        
        {/* Additional floating particles */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={[1.5, 0.5, -0.5]}>
            <dodecahedronGeometry args={[0.15]} />
            <meshPhongMaterial color={color} transparent opacity={0.6} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
};