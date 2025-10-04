import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SkillOrb = ({ position, color, size }: { position: [number, number, number], color: string, size: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshPhongMaterial color={color} transparent opacity={0.5} wireframe />
      </mesh>
    </Float>
  );
};

export const SkillsScene3D = () => {
  return (
    <div className="absolute inset-0 opacity-15">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#8b5cf6" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#ec4899" />
        
        <SkillOrb position={[-3, 1, 0]} color="#8b5cf6" size={0.6} />
        <SkillOrb position={[3, -1, -1]} color="#06b6d4" size={0.5} />
        <SkillOrb position={[0, 2, -2]} color="#3b82f6" size={0.7} />
        <SkillOrb position={[-2, -2, 0]} color="#10b981" size={0.55} />
        <SkillOrb position={[2, 1, -1]} color="#ec4899" size={0.65} />
        <SkillOrb position={[0, -1, 1]} color="#f59e0b" size={0.5} />
      </Canvas>
    </div>
  );
};
