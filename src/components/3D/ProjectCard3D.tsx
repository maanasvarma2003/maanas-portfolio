import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  title: string;
  tech: string[];
  color: string;
}

const FloatingTechIcon = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.3, 0.3, 0.1]} />
        <meshPhongMaterial color={color} transparent opacity={0.7} />
      </mesh>
      <Center position={[position[0], position[1] - 0.4, position[2]]}>
        <Text3D
          font="/fonts/inter_regular.json"
          size={0.1}
          height={0.02}
          curveSegments={12}
        >
          {text}
          <meshPhongMaterial color={color} />
        </Text3D>
      </Center>
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
            text={techItem.slice(0, 3)}
            color={color}
          />
        ))}
        
        {/* Background geometric shapes */}
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh position={[0, 0, -1]}>
            <torusGeometry args={[1, 0.1, 16, 100]} />
            <meshPhongMaterial color={color} transparent opacity={0.1} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
};